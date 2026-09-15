/**
 * FILE: cybercrowd-core/src/index.ts
 * REPO: cybercrowd99/cybercrowd-core
 * WORKER: cybercrowd-core
 *
 * CyberCrowd CORE — Private Worker Entry
 *
 * CROSSING:
 * CORE → Metadata Center
 */

import CyberCrowdCoreFunction from "../core/cybercrowd-core-function.js";

export interface Env {
  CORE_COMPTROLLER: Fetcher;
  MDC_SERVICE: Fetcher;
}

const CORE_REF = "CC-CORE-SYS-0001";

export default {
  async fetch(
    request: Request,
    env: Env,
  ): Promise<Response> {

    const url = new URL(request.url);

    if (request.method !== "POST") {
      return Response.json({
        organ: "CORE",
        lane: "core",
        ref: CORE_REF,
        status: "CORE_PRIVATE_SERVICE_READY",
        public: false,
      });
    }

    if (url.pathname !== "/") {
      return Response.json(
        {
          organ: "CORE",
          lane: "core",
          ref: CORE_REF,
          status: "CORE_PRIVATE_PATH_NOT_FOUND",
        },
        { status: 404 },
      );
    }

    let body = {};

    try {
      body = await request.json();
    } catch {
      body = {};
    }

    const result =
      CyberCrowdCoreFunction.found(body);

    const mdcRequest = new Request(
      "https://cybercrowd-metadata-center/record",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          organ: "CORE",
          lane: "core",
          ref: CORE_REF,
          request: body,
          result,
          recordedAt: new Date().toISOString(),
        }),
      },
    );

    const mdcResponse =
      await env.MDC_SERVICE.fetch(mdcRequest);

    if (!mdcResponse.ok) {
      return Response.json(
        {
          organ: "CORE",
          lane: "core",
          ref: CORE_REF,
          status: "MDC_RECORD_FAILED",
          mdcStatus: mdcResponse.status,
        },
        { status: 502 },
      );
    }

    return Response.json({
      organ: "CORE",
      lane: "core",
      ref: CORE_REF,
      result,
      metadata: {
        recorded: true,
        destination: "cybercrowd-metadata-center",
      },
    });
  },
};
