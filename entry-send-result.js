// CYBERCROWD
//
// FILE:
// entry-send-result.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Interpret one verification-email
// request result.
//
// FUNCTION:
// mapSendResult()
//
// INPUT:
// sendResult
//
// OUTPUT:
// {
//   status,
//   message,
//   reason
// }
//
// DOES NOT OWN:
// Network.
// Backend.
// Email validation.
// Human verification.
// SEND readiness.
// Turnstile #1.
// Turnstile #2.
// Token creation.
// SEND click behavior.
// Verification success event.
// WHOOSH.
// UI mutation.
// Movement.
// Audio.
// Authentication.
// Session.
// Routing.
// Backend authority.

export function mapSendResult(
  sendResult
) {
  if (
    !sendResult ||
    sendResult.success !== true
  ) {
    return {
      status: "failed",
      message: "EMAIL FAILED",
      reason:
        sendResult?.reason ||
        "unknown"
    };
  }

  return {
    status: "sent",
    message: "EMAIL SENT",
    reason: "email-sent"
  };
}
