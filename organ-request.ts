/**
 * CYBERCROWD
 *
 * REPO:
 * cybercrowd99/Cybercrowd-Create-Account
 *
 * FILE:
 * organ-request.ts
 *
 * BUILD LAW:
 * 1 FILE
 * 1 JOB
 * 1 CONTRACT
 *
 * JOB:
 * Define the canonical request envelope used to carry
 * IdentityContext v1 and one declared action payload
 * across an organ boundary.
 *
 * IDENTITY LAW:
 * IdentityContext remains the canonical identity contract.
 * This request envelope does not copy, rename, or replace it.
 *
 * THIS FILE DOES NOT:
 * - create identity
 * - create rootUidl
 * - create sessions
 * - authenticate subjects
 * - grant authority
 * - validate authority
 * - apply policy
 * - execute actions
 * - perform routing
 * - persist state
 * - issue receipts
 */

import type {
  IdentityContext,
} from "./identity-context";

export interface OrganRequest<
  TPayload = unknown,
> {
  readonly schemaVersion: "1";

  readonly identityContext: IdentityContext;

  readonly action: string;

  readonly payload: TPayload;
}
