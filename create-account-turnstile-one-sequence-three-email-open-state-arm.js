// CYBERCROWD
//
// FILE:
// create-account-turnstile-one-sequence-three-email-open-state-arm.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Arm the Sequence #3 email-open-state presenter
// when Turnstile #1 opens.
//
// FUNCTION:
// installTurnstileOneSequenceThreeEmailOpenStateArm()
//
// INPUT:
// cybercrowd:turnstile-one-open-requested
//
// ACTION:
// installSequenceThreeEmailOpenState()
//
// DOES NOT OWN:
// Email-input creation.
// Email-input ready signal.
// Email-focus detection.
// Email-open-state presentation.
// Email validation.
// Email styling definitions.
// SEND.
// Turnstile #2.
// Verification.
// Movement.
// Audio.
// WHOOSH.
// Authentication.
// Session.
// Routing.
// Backend authority.

import {
  installSequenceThreeEmailOpenState
} from "./create-account-sequence-three-email-open-state.js";

export function installTurnstileOneSequenceThreeEmailOpenStateArm() {
  window.addEventListener(
    "cybercrowd:turnstile-one-open-requested",
    () => {
      installSequenceThreeEmailOpenState();
    },
    { once: true }
  );

  return true;
}
