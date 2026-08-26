// CYBERCROWD
//
// FILE:
// request-entry-client.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// POST one ready email + human token
// to the private verification-email endpoint.
//
// FUNCTION:
// sendVerificationRequest()
//
// INPUT:
// readyState
//
// NETWORK:
// POST /api/auth/send-verification
//
// OUTPUT:
// send request result
//
// DOES NOT OWN:
// Email validation.
// Human verification.
// SEND readiness decision.
// Turnstile #1.
// Turnstile #2.
// Token creation.
// SEND click behavior.
// Result presentation.
// Verification success event.
// WHOOSH.
// UI mutation.
// Movement.
// Audio.
// Authentication.
// Session.
// Routing.
// Backend authority.

export async function sendVerificationRequest(
  readyState
) {
  if (
    !readyState ||
    readyState.ready !== true
  ) {
    return {
      success: false,
      reason: "not-ready",
      status: "blocked"
    };
  }

  const payload = {
    email:
      readyState.email,

    "cf-turnstile-response":
      readyState.token
  };

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

    if (
      result &&
      result.success === true
    ) {
      return {
        success: true,
        reason: "email-sent",
        backend: result
      };
    }

    return {
      success: false,
      reason: "backend-failure",
      backend: result
    };
  } catch (err) {
    return {
      success: false,
      reason: "network-error",
      error:
        err?.message ||
        "unknown"
    };
  }
}
