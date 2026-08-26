// CYBERCROWD
//
// FILE:
// create-account-sequence-three-instructions.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Present Sequence #3 email instructions.
//
// FUNCTION:
// installSequenceThreeInstructions()
//
// INPUT:
// cybercrowd:sequence-three-ready
//
// OUTPUT:
// .email-send-instructions
//
// DOES NOT OWN:
// Glass creation.
// Gold rain.
// Email input.
// Email focus.
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

export function installSequenceThreeInstructions() {
  window.addEventListener(
    "cybercrowd:sequence-three-ready",
    () => {
      const plaque =
        document.querySelector(
          ".glass-plaque-three"
        );

      if (!plaque) {
        return;
      }

      if (
        plaque.querySelector(
          ".email-send-instructions"
        )
      ) {
        return;
      }

      const instructions =
        document.createElement(
          "div"
        );

      instructions.className =
        "email-send-instructions";

      instructions.innerHTML =
        "Enter your email.<br>" +
        "Press SEND.<br>" +
        "Check your email right away.<br>" +
        "You must verify within five minutes.<br>" +
        "If you wait too long, it will <strong>EXPIRE</strong>.";

      plaque.appendChild(
        instructions
      );
    },
    { once: true }
  );

  return true;
}
