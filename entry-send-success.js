// CYBERCROWD
//
// FILE:
// entry-send-success.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Emit the clean verification-email
// success event.
//
// FUNCTION:
// emitSendSuccess()
//
// OUTPUT:
// cybercrowd:email-sent
//
// DOES NOT OWN:
// Network.
// Backend.
// Email validation.
// Human verification.
// SEND readiness.
// Result mapping.
// Turnstile #1.
// Turnstile #2.
// Token creation.
// SEND click behavior.
// WHOOSH playback.
// UI mutation.
// Movement.
// Audio.
// Authentication.
// Session.
// Routing.
// Backend authority.

export function emitSendSuccess() {
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

  return true;
}
