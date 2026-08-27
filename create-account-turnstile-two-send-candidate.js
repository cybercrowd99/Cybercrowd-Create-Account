// CYBERCROWD
//
// FILE:
// create-account-turnstile-two-send-candidate.js
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
// Convert one produced Turnstile #2 token
// into one Sequence #3 SEND candidate.
//
// FUNCTION:
// installTurnstileTwoSendCandidate()
//
// INPUT:
// cybercrowd:turnstile-two-token-produced
//
// OUTPUT:
// cybercrowd:sequence-three-send-candidate
//
// PAYLOAD:
// email
// token
//
// DOES NOT OWN:
// Email validation.
// SEND readiness.
// Network request.
// Result mapping.
// Success emission.
// Turnstile #1.
// Turnstile #2 rendering.
// Token creation.
// Movement.
// Audio.
// WHOOSH.
// Authentication.
// Session.
// Routing.
// Backend authority.

export function installTurnstileTwoSendCandidate() {
  window.addEventListener(
    "cybercrowd:turnstile-two-token-produced",
    (event) => {
      const token =
        event.detail?.token;

      if (
        typeof token !== "string" ||
        token.length === 0
      ) {
        return;
      }

      const emailInput =
        document.getElementById(
          "email"
        );

      if (!emailInput) {
        return;
      }

      window.dispatchEvent(
        new CustomEvent(
          "cybercrowd:sequence-three-send-candidate",
          {
            detail: {
              email:
                emailInput.value,
              token
            }
          }
        )
      );
    },
    { once: true }
  );

  return true;
}
