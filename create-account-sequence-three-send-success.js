// CYBERCROWD
//
// FILE:
// create-account-sequence-three-send-success.js
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
// Convert one mapped successful SEND result
// into the clean verification-email
// success signal.
//
// FUNCTION:
// installSequenceThreeSendSuccess()
//
// INPUT:
// cybercrowd:sequence-three-send-mapped
//
// PASS CONDITION:
// mappedResult.status === "sent"
//
// OUTPUT:
// cybercrowd:email-sent
//
// PAYLOAD:
// status
// message
//
// DOES NOT OWN:
// SEND result mapping.
// Failure handling.
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

export function installSequenceThreeSendSuccess() {
  window.addEventListener(
    "cybercrowd:sequence-three-send-mapped",
    (event) => {
      const mappedResult =
        event.detail?.mappedResult;

      if (
        mappedResult?.status !== "sent"
      ) {
        return;
      }

      window.dispatchEvent(
        new CustomEvent(
          "cybercrowd:email-sent",
          {
            detail: {
              status: "sent",
              message: "EMAIL SENT"
            }
          }
        )
      );
    },
    { once: true }
  );

  return true;
}
