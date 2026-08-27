// CYBERCROWD
//
// FILE:
// create-account-turnstile-one-render.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// SEQUENCE:
// TWO
//
// JOB:
// Render Turnstile One
// after its plaque is touch-active.
//
// FUNCTION:
// installTurnstileOneRender()
//
// INPUT:
// cybercrowd:turnstile-one-touch-active
//
// TARGET:
// turnstile-one
//
// OUTPUT:
// cybercrowd:turnstile-one-token-produced
//
// DOES NOT OWN:
// Plaque creation.
// Slot creation.
// Touch activation.
// Human verification decision.
// Movement.
// Audio.
// Email.
// SEND.
// Authentication.
// Session.
// Routing.
// Backend authority.

export function installTurnstileOneRender() {
  window.addEventListener(
    "cybercrowd:turnstile-one-touch-active",
    () => {
      const slot =
        document.getElementById(
          "turnstile-one"
        );

      if (!slot) {
        return;
      }

      const render =
        () => {
          if (!window.turnstile) {
            window.requestAnimationFrame(
              render
            );

            return;
          }

          window.turnstile.render(
            slot,
            {
              sitekey:
                "0x4AAAAAACvkecVo2F3hpb1r",

              callback(token) {
                window.dispatchEvent(
                  new CustomEvent(
                    "cybercrowd:turnstile-one-token-produced",
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
        };

      render();
    },
    { once: true }
  );

  return true;
}
