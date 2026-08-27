// CYBERCROWD
//
// FILE:
// create-account-sequence-three-send-failure.js
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
// Convert one mapped failed SEND result
// into the clean verification-email
// failure signal.
//
// FUNCTION:
// installSequenceThreeSendFailure()
//
// INPUT:
// cybercrowd:sequence-three-send-mapped
//
// PASS CONDITION:
// mappedResult.status === "failed"
//
// OUTPUT:
// cybercrowd:email-failed
//
// PAYLOAD:
// status
// message
// reason
//
// DOES NOT OWN:
// SEND result mapping.
// Success handling.
// Network.
// Backend authority.
// Email validation.
// SEND readiness.
// Turnstile.
// Token creation.
// WHOOSH playback.
// UI mutation.
// Movement.
// Audio.
// Authentication.
// Session.
// Routing.

export function installSequenceThreeSendFailure() {
  window.addEventListener(
    "cybercrowd:sequence-three-send-mapped",
    (event) => {
      const mappedResult =
        event.detail?.mappedResult;

      if (
        mappedResult?.status !== "failed"
      ) {
        return;
      }

      window.dispatchEvent(
        new CustomEvent(
          "cybercrowd:email-failed",
          {
            detail: {
              status: "failed",
              message: "EMAIL FAILED",
              reason:
                mappedResult.reason ||
                "unknown"
            }
          }
        )
      );
    },
    { once: true }
  );

  return true;
}
