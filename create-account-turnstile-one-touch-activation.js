// CYBERCROWD
//
// FILE:
// create-account-turnstile-one-touch-activation.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// SEQUENCE:
// #2
//
// JOB:
// Activate Sequence #2 human touch
// after the Turnstile #1 slot is ready.
//
// FUNCTION:
// installTurnstileOneTouchActivation()
//
// INPUT:
// cybercrowd:turnstile-one-slot-ready
//
// ACTION:
// Add .is-active
// to .glass-plaque-two.
//
// OUTPUT:
// cybercrowd:turnstile-one-touch-active
//
// DOES NOT OWN:
// Plaque creation.
// Slot creation.
// Turnstile rendering.
// Turnstile site key.
// Turnstile token.
// Human verification.
// Movement.
// Audio.
// Email.
// SEND.
// Authentication.
// Session.
// Routing.
// Backend authority.

export function installTurnstileOneTouchActivation() {
  window.addEventListener(
    "cybercrowd:turnstile-one-slot-ready",
    () => {
      const plaque =
        document.querySelector(
          ".glass-plaque-two"
        );

      if (!plaque) {
        return;
      }

      plaque.classList.add(
        "is-active"
      );

      window.dispatchEvent(
        new CustomEvent(
          "cybercrowd:turnstile-one-touch-active"
        )
      );
    },
    { once: true }
  );

  return true;
}
