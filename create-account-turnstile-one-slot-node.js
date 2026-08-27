// CYBERCROWD
//
// FILE:
// create-account-turnstile-one-slot-node.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// TWIN:
// Reference:
// turnstile-one-ui.js
//
// Deterministic twin:
// This organ owns only the
// #turnstile-one slot node.
//
// SEQUENCE:
// #2
//
// JOB:
// Create the Turnstile #1 slot
// inside the existing Sequence #2 plaque.
//
// FUNCTION:
// installTurnstileOneSlotNode()
//
// INPUT:
// cybercrowd:turnstile-one-open-requested
//
// ACTION:
// Ensure exactly one
// #turnstile-one
// exists directly inside
// .glass-plaque-two.
//
// OUTPUT:
// cybercrowd:turnstile-one-slot-ready
//
// DOES NOT OWN:
// Sequence #1.
// Swipe.
// Movement.
// Plaque creation.
// Plaque activation.
// Plaque presentation.
// Turnstile rendering.
// Turnstile site key.
// Turnstile token.
// Human verification.
// Human-pass authority.
// Audio.
// Email.
// SEND.
// Authentication.
// Session.
// Routing.
// Backend authority.

export function installTurnstileOneSlotNode() {
  window.addEventListener(
    "cybercrowd:turnstile-one-open-requested",
    () => {
      const plaque =
        document.querySelector(
          ".glass-plaque-two"
        );

      if (!plaque) {
        return;
      }

      let slot =
        plaque.querySelector(
          ":scope > #turnstile-one"
        );

      if (!slot) {
        slot =
          document.createElement(
            "div"
          );

        slot.id =
          "turnstile-one";

        plaque.appendChild(
          slot
        );
      }

      window.dispatchEvent(
        new CustomEvent(
          "cybercrowd:turnstile-one-slot-ready"
        )
      );
    },
    { once: true }
  );

  return true;
}
