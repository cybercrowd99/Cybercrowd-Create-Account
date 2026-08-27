// CYBERCROWD
//
// FILE:
// create-account-turnstile-one-human-verify-request.js
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
// Carry the produced Turnstile #1 token
// to the private human-verification boundary.
//
// FUNCTION:
// installTurnstileOneHumanVerifyRequest()
//
// INPUT:
// cybercrowd:turnstile-one-token-produced
//
// NETWORK:
// POST /api/auth/human-verify
//
// OUTPUT:
// cybercrowd:turnstile-one-human-verify-result
//
// DOES NOT OWN:
// Turnstile rendering.
// Token production.
// Human verification decision.
// Human-pass authority.
// Movement.
// Audio.
// Email.
// SEND.
// Authentication.
// Session.
// Routing.
// Backend authority.

export function installTurnstileOneHumanVerifyRequest() {
  window.addEventListener(
    "cybercrowd:turnstile-one-token-produced",
    async (event) => {
      const token =
        event.detail?.token;

      if (
        typeof token !== "string" ||
        token.length === 0
      ) {
        return;
      }

      let result = null;

      try {
        const response =
          await fetch(
            "/api/auth/human-verify",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json"
              },

              credentials:
                "same-origin",

              body:
                JSON.stringify({
                  "cf-turnstile-response":
                    token
                })
            }
          );

        result =
          await response
            .json()
            .catch(() => null);

        window.dispatchEvent(
          new CustomEvent(
            "cybercrowd:turnstile-one-human-verify-result",
            {
              detail: {
                ok: response.ok,
                result
              }
            }
          )
        );
      } catch {
        window.dispatchEvent(
          new CustomEvent(
            "cybercrowd:turnstile-one-human-verify-result",
            {
              detail: {
                ok: false,
                result: null
              }
            }
          )
        );
      }
    },
    { once: true }
  );

  return true;
}
