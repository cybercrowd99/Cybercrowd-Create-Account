// CYBERCROWD
//
// FILE:
// create-account-sequence-three-ready-state.js
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
// Convert one validated email state
// plus one Turnstile #2 token
// into one deterministic SEND-ready state.
//
// FUNCTION:
// installSequenceThreeReadyState()
//
// INPUT:
// cybercrowd:sequence-three-email-validated
//
// OUTPUT:
// cybercrowd:sequence-three-send-ready
//
// PAYLOAD:
// readyState
//
// DOES NOT OWN:
// Email validation.
// Turnstile #2 rendering.
// Token creation.
// SEND click behavior.
// Network.
// Verification email.
// Result mapping.
// Success emission.
// Movement.
// Audio.
// WHOOSH.
// Authentication.
// Session.
// Routing.
// Backend authority.

export function installSequenceThreeReadyState() {
  window.addEventListener(
    "cybercrowd:sequence-three-email-validated",
    (event) => {
      const emailState =
        event.detail?.emailState;

      const token =
        event.detail?.token;

      const emailIsValid =
        emailState &&
        emailState.valid === true &&
        typeof emailState.email ===
          "string" &&
        emailState.email.length > 0;

      const tokenIsValid =
        typeof token === "string" &&
        token.length > 0;

      const readyState =
        emailIsValid && tokenIsValid
          ? {
              ready: true,
              reason: "ready-to-send",
              email: emailState.email,
              token
            }
          : {
              ready: false,
              reason:
                "missing-email-or-human-token",
              email:
                emailState?.email || null,
              token:
                token || null
            };

      window.dispatchEvent(
        new CustomEvent(
          "cybercrowd:sequence-three-send-ready",
          {
            detail: {
              readyState
            }
          }
        )
      );
    },
    { once: true }
  );

  return true;
}
