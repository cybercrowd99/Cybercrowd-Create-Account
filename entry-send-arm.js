// CYBERCROWD
//
// FILE:
// entry-send-arm.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Confirm valid email state
// plus valid human token state.
//
// FUNCTION:
// armSend()
//
// INPUT:
// emailState
// humanState
//
// OUTPUT:
// ready-to-send state
//
// DOES NOT OWN:
// Email validation.
// Human verification.
// Turnstile #1.
// Turnstile #2 rendering.
// Token creation.
// SEND click behavior.
// Network.
// Verification email.
// UI mutation.
// Movement.
// Audio.
// WHOOSH.
// Authentication.
// Session.
// Routing.
// Backend authority.

export function armSend(
  emailState,
  humanState
) {
  const emailIsValid =
    emailState &&
    emailState.valid === true &&
    typeof emailState.email ===
      "string" &&
    emailState.email.length > 0;

  const humanIsValid =
    humanState &&
    humanState.human === true &&
    typeof humanState.token ===
      "string" &&
    humanState.token.length > 0;

  if (
    emailIsValid &&
    humanIsValid
  ) {
    return {
      ready: true,
      reason: "ready-to-send",
      email: emailState.email,
      token: humanState.token
    };
  }

  return {
    ready: false,
    reason:
      "missing-email-or-human-token",
    email:
      emailState?.email || null,
    token:
      humanState?.token || null
  };
}
