// CYBERCROWD
//
// FILE:
// turnstile-two-passed.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// TURNSTILE:
// #2
//
// JOB:
// Release the successful Turnstile #2
// browser token onto its named signal.
//
// FUNCTION:
// emitTurnstileTwoPassed()
//
// INPUT:
// real browser token
//
// OUTPUT:
// cybercrowd:turnstile-two-passed
//
// BOUNDARY:
//
// real browser token
// ↓
// cybercrowd:turnstile-two-passed
//
// DOES NOT OWN:
// Turnstile rendering.
// DOM construction.
// Turnstile #1.
// Human verification decision.
// Email.
// SEND.
// Verification email.
// Authentication.
// Session.
// Cookie.
// KV.
// Backend authority.

export function emitTurnstileTwoPassed(
  token
) {
  window.dispatchEvent(
    new CustomEvent(
      "cybercrowd:turnstile-two-passed",
      {
        detail: {
          token
        }
      }
    )
  );
}
