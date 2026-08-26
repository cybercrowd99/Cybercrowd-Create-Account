// CYBERCROWD
//
// FILE:
// create-account-turnstile-two-open-listener.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Open Turnstile #2
// when Sequence #3 requests it.
//
// FUNCTION:
// installTurnstileTwoOpenListener()
//
// INPUT:
// cybercrowd:turnstile-two-requested
//
// ACTION:
// openTurnstileTwo()
//
// DOES NOT OWN:
// SEND click behavior.
// Email.
// Email validity.
// Turnstile #2 rendering.
// Turnstile #2 token creation.
// Turnstile #2 pass signal.
// Verification.
// Verification email.
// Movement.
// Audio.
// WHOOSH.
// Authentication.
// Session.
// Routing.
// Backend authority.

import {
  openTurnstileTwo
} from "./turnstile-two-ui.js";

export function installTurnstileTwoOpenListener() {
  window.addEventListener(
    "cybercrowd:turnstile-two-requested",
    () => {
      openTurnstileTwo();
    },
    { once: true }
  );

  return true;
}
