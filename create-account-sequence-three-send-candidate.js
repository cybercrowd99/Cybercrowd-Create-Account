// CYBERCROWD
//
// FILE:
// create-account-sequence-three-send-candidate.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Convert one Turnstile #2 PASS
// into one Sequence #3 SEND candidate.
//
// FUNCTION:
// installSequenceThreeSendCandidate()
//
// INPUT:
// cybercrowd:turnstile-two-passed
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
// Human verification.
// SEND readiness.
// Network.
// Result mapping.
// Success emission.
// Turnstile #1.
// Turnstile #2 rendering.
// Token creation.
// WHOOSH.
// Movement.
// Audio.
// Authentication.
// Session.
// Routing.
// Backend authority.

export function installSequenceThreeSendCandidate() {
  window.addEventListener(
    "cybercrowd:turnstile-two-passed",
    (event) => {
      const token =
        event?.detail?.token;

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
