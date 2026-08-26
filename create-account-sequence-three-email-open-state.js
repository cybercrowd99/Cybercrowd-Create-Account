// CYBERCROWD
//
// FILE:
// create-account-sequence-three-email-open-state.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Open the Sequence #3 email
// presentation state.
//
// FUNCTION:
// installSequenceThreeEmailOpenState()
//
// INPUT:
// cybercrowd:email-opened
//
// ACTION:
// Add .is-open to #email.
//
// DOES NOT OWN:
// Email-input creation.
// Email-focus detection.
// Email validation.
// Email styling definitions.
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

export function installSequenceThreeEmailOpenState() {
  window.addEventListener(
    "cybercrowd:email-opened",
    () => {
      const emailInput =
        document.getElementById("email");

      if (!emailInput) {
        return;
      }

      emailInput.classList.add(
        "is-open"
      );
    },
    { once: true }
  );

  return true;
}
