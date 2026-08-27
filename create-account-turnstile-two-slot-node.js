// CYBERCROWD
//
// FILE:
// create-account-turnstile-two-slot-node.js
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
// Create the Turnstile #2 slot
// inside the existing Sequence #3 plaque.
//
// FUNCTION:
// installTurnstileTwoSlotNode()
//
// INPUT:
// cybercrowd:turnstile-two-requested
//
// ACTION:
// Ensure exactly one
// #turnstile-two
// exists directly inside
// .glass-plaque-three.
//
// OUTPUT:
// cybercrowd:turnstile-two-slot-ready
//
// DOES NOT OWN:
// Sequence #1.
// Sequence #2.
// Sequence #3 creation.
// Email.
// SEND click.
// Plaque creation.
// Plaque activation.
// Turnstile rendering.
// Turnstile site key.
// Turnstile token.
// Verification.
// Movement.
// Audio.
// WHOOSH.
// Authentication.
// Session.
// Routing.
// Backend authority.

export function installTurnstileTwoSlotNode() {
  window.addEventListener(
    "cybercrowd:turnstile-two-requested",
    () => {
      const plaque =
        document.querySelector(
          ".glass-plaque-three"
        );

      if (!plaque) {
        return;
      }

      let slot =
        plaque.querySelector(
          ":scope > #turnstile-two"
        );

      if (!slot) {
        slot =
          document.createElement(
            "div"
          );

        slot.id =
          "turnstile-two";

        plaque.appendChild(
          slot
        );
      }

      window.dispatchEvent(
        new CustomEvent(
          "cybercrowd:turnstile-two-slot-ready"
        )
      );
    },
    { once: true }
  );

  return true;
}
