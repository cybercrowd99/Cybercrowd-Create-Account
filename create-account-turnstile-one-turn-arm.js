// CYBERCROWD
//
// FILE:
// create-account-turnstile-one-turn-arm.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Arm automatic Movement #2
// when Turnstile #1 opens.
//
// FUNCTION:
// installTurnstileOneTurnArm()
//
// INPUT:
// cybercrowd:turnstile-one-open-requested
//
// ACTION:
// installFaceTurn()
//
// DOES NOT OWN:
// Turnstile rendering.
// Turnstile token creation.
// Human verification.
// Movement #2 execution.
// Audio.
// Email.
// SEND.
// Authentication.
// Session.
// Routing.
// Backend authority.

import {
  installFaceTurn
} from "./create-account-face-turn.js";

export function installTurnstileOneTurnArm() {
  window.addEventListener(
    "cybercrowd:turnstile-one-open-requested",
    () => {
      installFaceTurn();
    },
    { once: true }
  );

  return true;
}
