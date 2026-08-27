// CYBERCROWD
//
// FILE:
// create-account-turnstile-two-render.js
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
// Render Turnstile #2
// after its slot is structurally ready.
//
// FUNCTION:
// installTurnstileTwoRender()
//
// INPUT:
// cybercrowd:turnstile-two-slot-ready
//
// TARGET:
// #turnstile-two
//
// OUTPUT:
// cybercrowd:turnstile-two-token-produced
//
// DOES NOT OWN:
// Slot creation.
// Email.
// SEND click.
// Turnstile #1.
// Human verification.
// Verification email.
// Movement.
// Audio.
// WHOOSH.
// Authentication.
// Session.
// Routing.
// Backend authority.

export function installTurnstileTwoRender() {
  window.addEventListener(
    "cybercrowd:turnstile-two-slot-ready",
    () => {
      const slot =
        document.getElementById(
          "turnstile-two"
        );

      if (!slot) {
        return;
      }

      if (!window.turnstile) {
        return;
      }

      window.turnstile.render(
        "#turnstile-two",
        {
          sitekey:
            "0x4AAAAAACvkecVo2F3hpb1r",

          callback(token) {
            window.dispatchEvent(
              new CustomEvent(
                "cybercrowd:turnstile-two-token-produced",
                {
                  detail: {
                    token
                  }
                }
              )
            );
          }
        }
      );
    },
    { once: true }
  );

  return true;
}
