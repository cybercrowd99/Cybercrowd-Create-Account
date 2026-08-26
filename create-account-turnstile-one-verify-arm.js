// CYBERCROWD
//
// FILE:
// create-account-turnstile-one-verify-arm.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Arm the existing human-verification crossing
// when Turnstile #1 is opened.
//
// FUNCTION:
// installTurnstileOneVerifyArm()
//
// INPUT:
// cybercrowd:turnstile-one-open-requested
//
// ACTION:
// openHumanVerifyCrossing()
//
// DOES NOT OWN:
// Turnstile rendering.
// Turnstile token creation.
// Human verification decision.
// Network request implementation.
// Movement.
// Audio.
// Email.
// SEND.
// Authentication.
// Session.
// Routing.
// Backend authority.

import {
  openHumanVerifyCrossing
} from "./human-verify-crossing.js";

export function installTurnstileOneVerifyArm() {
  window.addEventListener(
    "cybercrowd:turnstile-one-open-requested",
    () => {
      openHumanVerifyCrossing();
    },
    { once: true }
  );

  return true;
}
