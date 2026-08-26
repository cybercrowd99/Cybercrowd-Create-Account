// CYBERCROWD
//
// FILE:
// create-account-sequence-three-email-focus.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Detect the first human focus
// on the Sequence #3 email input.
//
// FUNCTION:
// installSequenceThreeEmailFocus()
//
// INPUT:
// cybercrowd:sequence-three-email-input-ready
//
// OUTPUT:
// cybercrowd:email-opened
//
// DOES NOT OWN:
// Email-input creation.
// Email styling.
// Email open-state styling.
// Email validation.
// SEND.
// Turnstile #2.
// Verification.
// Movement.
// Audio.
// WHOOSH.
// Authentication.
// Session.
// Routing.
// Backend authority.

export function installSequenceThreeEmailFocus() {
  window.addEventListener(
    "cybercrowd:sequence-three-email-input-ready",
    () => {
      const emailInput =
        document.getElementById("email");

      if (!emailInput) {
        return;
      }

      emailInput.addEventListener(
        "focus",
        () => {
          window.dispatchEvent(
            new CustomEvent(
              "cybercrowd:email-opened"
            )
          );
        },
        { once: true }
      );
    },
    { once: true }
  );

  return true;
}
