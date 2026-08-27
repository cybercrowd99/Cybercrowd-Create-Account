// CYBERCROWD
//
// FILE:
// create-account-sequence-three-send-request.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Convert one SEND-ready state
// into one verification-email request result.
//
// FUNCTION:
// installSequenceThreeSendRequest()
//
// INPUT:
// cybercrowd:sequence-three-send-ready
//
// ACTION:
// sendVerificationRequest()
//
// OUTPUT:
// cybercrowd:sequence-three-send-result
//
// PAYLOAD:
// sendResult
//
// DOES NOT OWN:
// SEND readiness.
// Email validation.
// Turnstile.
// Human verification.
// Backend authority.
// Result mapping.
// Success emission.
// WHOOSH.
// Authentication.
// Session.
// Routing.

import {
  sendVerificationRequest
} from "./request-entry-client.js";

export function installSequenceThreeSendRequest() {
  window.addEventListener(
    "cybercrowd:sequence-three-send-ready",
    async (event) => {
      const readyState =
        event?.detail?.readyState;

      const sendResult =
        await sendVerificationRequest(
          readyState
        );

      window.dispatchEvent(
        new CustomEvent(
          "cybercrowd:sequence-three-send-result",
          {
            detail: {
              sendResult
            }
          }
        )
      );
    },
    { once: true }
  );

  return true;
}
