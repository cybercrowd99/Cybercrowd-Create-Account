// CYBERCROWD
//
// FILE:
// create-account-sequence-three-email-validity.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Detect Sequence #3 email validity
// after the email has opened.
//
// FUNCTION:
// installSequenceThreeEmailValidity()
//
// INPUT:
// cybercrowd:email-opened
//
// OUTPUT:
// cybercrowd:email-validity-changed
//
// DOES NOT OWN:
// Email-input creation.
// Email focus.
// Email open-state presentation.
// SEND-button creation.
// SEND-button state.
// SEND click behavior.
// Turnstile #2.
// Verification.
// Movement.
// Audio.
// WHOOSH.
// Authentication.
// Session.
// Routing.
// Backend authority.

export function installSequenceThreeEmailValidity() {
  window.addEventListener(
    "cybercrowd:email-opened",
    () => {
      const emailInput =
        document.getElementById("email");

      if (!emailInput) {
        return;
      }

      const publishValidity =
        () => {
          const valid =
            emailInput.value.trim().length > 0 &&
            emailInput.checkValidity();

          window.dispatchEvent(
            new CustomEvent(
              "cybercrowd:email-validity-changed",
              {
                detail: {
                  valid
                }
              }
            )
          );
        };

      emailInput.addEventListener(
        "input",
        publishValidity
      );

      publishValidity();
    },
    { once: true }
  );

  return true;
}
