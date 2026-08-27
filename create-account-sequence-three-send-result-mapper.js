// CYBERCROWD
//
// FILE:
// create-account-sequence-three-send-result-mapper.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// SEQUENCE:
// #3
//
// JOB:
// Convert one verification-email
// request result into one deterministic
// SEND presentation state.
//
// FUNCTION:
// installSequenceThreeSendResultMapper()
//
// INPUT:
// cybercrowd:sequence-three-send-result
//
// OUTPUT:
// cybercrowd:sequence-three-send-mapped
//
// PAYLOAD:
// mappedResult
//
// DOES NOT OWN:
// Network.
// Backend authority.
// SEND readiness.
// Email validation.
// Turnstile.
// Token creation.
// Success emission.
// WHOOSH.
// UI mutation.
// Movement.
// Audio.
// Authentication.
// Session.
// Routing.

export function installSequenceThreeSendResultMapper() {
  window.addEventListener(
    "cybercrowd:sequence-three-send-result",
    (event) => {
      const sendResult =
        event.detail?.sendResult;

      const mappedResult =
        !sendResult ||
        sendResult.success !== true
          ? {
              status: "failed",
              message: "EMAIL FAILED",
              reason:
                sendResult?.reason ||
                "unknown"
            }
          : {
              status: "sent",
              message: "EMAIL SENT",
              reason: "email-sent"
            };

      window.dispatchEvent(
        new CustomEvent(
          "cybercrowd:sequence-three-send-mapped",
          {
            detail: {
              mappedResult
            }
          }
        )
      );
    },
    { once: true }
  );

  return true;
}
