// CYBERCROWD
//
// FILE:
// create-account-sequence-three-verification-email-request.js
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
// Carry one SEND-ready email + token
// to the private verification-email boundary.
//
// FUNCTION:
// installSequenceThreeVerificationEmailRequest()
//
// INPUT:
// cybercrowd:sequence-three-send-ready
//
// NETWORK:
// POST /api/auth/send-verification
//
// OUTPUT:
// cybercrowd:sequence-three-send-result
//
// PAYLOAD:
// sendResult
//
// DOES NOT OWN:
// SEND readiness.
// Email validation.
// Turnstile rendering.
// Token creation.
// SEND click behavior.
// Backend authority.
// Result mapping.
// Success emission.
// WHOOSH.
// Movement.
// Audio.
// Authentication.
// Session.
// Routing.

export function installSequenceThreeVerificationEmailRequest() {
  window.addEventListener(
    "cybercrowd:sequence-three-send-ready",
    async (event) => {
      const readyState =
        event.detail?.readyState;

      if (
        !readyState ||
        readyState.ready !== true
      ) {
        window.dispatchEvent(
          new CustomEvent(
            "cybercrowd:sequence-three-send-result",
            {
              detail: {
                sendResult: {
                  success: false,
                  reason: "not-ready",
                  status: "blocked"
                }
              }
            }
          )
        );

        return;
      }

      const payload = {
        email:
          readyState.email,

        "cf-turnstile-response":
          readyState.token
      };

      let sendResult;

      try {
        const response =
          await fetch(
            "/api/auth/send-verification",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json"
              },

              body:
                JSON.stringify(
                  payload
                )
            }
          );

        const result =
          await response
            .json()
            .catch(() => ({
              success: false,
              reason: "invalid-json"
            }));

        sendResult =
          result &&
          result.success === true
            ? {
                success: true,
                reason: "email-sent",
                backend: result
              }
            : {
                success: false,
                reason: "backend-failure",
                backend: result
              };

      } catch (error) {
        sendResult = {
          success: false,
          reason: "network-error",
          error:
            error?.message ||
            "unknown"
        };
      }

      window.dispatchEvent(
        new CustomEvent(
          "cybercrowd:sequence-three-send-result",
          {
            detail: {
              sendResult
            }
          }
        )
      );
    },
    { once: true }
  );

  return true;
}
