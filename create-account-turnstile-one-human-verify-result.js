// CYBERCROWD
//
// FILE:
// create-account-turnstile-one-human-verify-result.js
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
// Translate the private server
// human-verification result
// into one deterministic rail signal.
//
// FUNCTION:
// installTurnstileOneHumanVerifyResult()
//
// INPUT:
// cybercrowd:turnstile-one-human-verify-result
//
// PASS OUTPUT:
// cybercrowd:turnstile-one-human-verified
//
// REJECT OUTPUT:
// cybercrowd:turnstile-one-human-rejected
//
// DOES NOT OWN:
// Turnstile rendering.
// Token production.
// Network request.
// Human verification authority.
// Human-pass creation.
// Movement.
// Audio.
// Email.
// SEND.
// Authentication.
// Session.
// Routing.
// Backend authority.

export function installTurnstileOneHumanVerifyResult() {
  window.addEventListener(
    "cybercrowd:turnstile-one-human-verify-result",
    (event) => {
      const detail =
        event.detail;

      const passed =
        detail?.ok === true &&
        detail?.result?.success === true &&
        detail?.result?.human === true;

      window.dispatchEvent(
        new CustomEvent(
          passed
            ? "cybercrowd:turnstile-one-human-verified"
            : "cybercrowd:turnstile-one-human-rejected"
        )
      );
    },
    { once: true }
  );

  return true;
}
