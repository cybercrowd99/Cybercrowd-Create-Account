// CYBERCROWD
//
// FILE:
// create-account-turnstile-one-sequence-three-turnstile-two-open-arm.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Arm the Sequence #3 Turnstile #2
// open listener when Turnstile #1 opens.
//
// FUNCTION:
// installTurnstileOneSequenceThreeTurnstileTwoOpenArm()
//
// INPUT:
// cybercrowd:turnstile-one-open-requested
//
// ACTION:
// installTurnstileTwoOpenListener()
//
// DOES NOT OWN:
// SEND click behavior.
// Email.
// Email validity.
// Turnstile #2 request creation.
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
  installTurnstileTwoOpenListener
} from "./create-account-turnstile-two-open-listener.js";

export function installTurnstileOneSequenceThreeTurnstileTwoOpenArm() {
  window.addEventListener(
    "cybercrowd:turnstile-one-open-requested",
    () => {
      installTurnstileTwoOpenListener();
    },
    { once: true }
  );

  return true;
}
