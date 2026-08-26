// CYBERCROWD
//
// FILE:
// entry-email-validator.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Accept one raw email string
// and return one email validity state.
//
// FUNCTION:
// validateEmail()
//
// INPUT:
// raw email string
//
// OUTPUT:
// {
//   valid,
//   reason,
//   email
// }
//
// DOES NOT OWN:
// Email-input creation.
// Email focus.
// SEND-button.
// SEND-button state.
// SEND click.
// Turnstile #1.
// Turnstile #2.
// Verification.
// Network.
// Verification email.
// Movement.
// Audio.
// WHOOSH.
// Authentication.
// Session.
// Routing.
// Backend authority.

export function validateEmail(rawEmail) {
  if (typeof rawEmail !== "string") {
    return {
      valid: false,
      reason: "not-a-string"
    };
  }

  const email =
    rawEmail.trim();

  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isValid =
    emailPattern.test(email);

  return {
    valid: isValid,
    reason:
      isValid
        ? "valid-email"
        : "invalid-email",
    email
  };
}
