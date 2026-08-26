// CYBERCROWD
//
// FILE:
// email-service-gate.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// LOCATION:
// cybercrowd-auth
//
// JOB:
// Decide whether Create Account
// verification email sending is enabled.
//
// FUNCTION:
// emailServiceEnabled()
//
// INPUT:
// env.CREATE_ACCOUNT_EMAIL_ENABLED
//
// ACCEPTED ON VALUE:
// ON
//
// DEFAULT:
// OFF
//
// OUTPUT:
// true  = email service enabled
// false = email service disabled
//
// DOES NOT OWN:
// Postmark.
// Email transmission.
// Email validation.
// Turnstile.
// Rate limiting.
// Account recovery.
// Session.
// Authentication.
// UI.
// Routing.

export function emailServiceEnabled(env) {
  return (
    env?.CREATE_ACCOUNT_EMAIL_ENABLED ===
    "ON"
  );
}
