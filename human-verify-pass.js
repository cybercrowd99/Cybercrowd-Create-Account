// CYBERCROWD
//
// FILE:
// human-verify-pass.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Carry one existing browser token
// through the private human verifier
// and release the verified signal.
//
// FUNCTION:
// handleHumanVerifyPass()
//
// INPUT:
// cybercrowd:human-passed
//
// OUTPUT:
// cybercrowd:turnstile-one-verified
//
// DOES NOT OWN:
// Turnstile rendering.
// Token creation.
// Network implementation.
// Server verification decision.
// Human-pass creation.
// Email.
// Authentication.
// Session.
// KV.
// UI.

import {
  verifyHumanToken
} from "./human-verify-client.js";

export async function handleHumanVerifyPass(
  event
) {
  const token =
    event?.detail?.token;

  const result =
    await verifyHumanToken(token);

  if (
    result.success !== true ||
    result.human !== true
  ) {
    return;
  }

  window.dispatchEvent(
    new CustomEvent(
      "cybercrowd:turnstile-one-verified"
    )
  );
}
