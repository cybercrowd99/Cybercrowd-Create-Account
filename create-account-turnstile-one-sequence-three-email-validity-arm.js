// CYBERCROWD
//
// FILE:
// create-account-turnstile-one-sequence-three-email-validity-arm.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Arm the Sequence #3 email-validity detector
// when Turnstile #1 opens.
//
// FUNCTION:
// installTurnstileOneSequenceThreeEmailValidityArm()
//
// INPUT:
// cybercrowd:turnstile-one-open-requested
//
// ACTION:
// installSequenceThreeEmailValidity()
//
// DOES NOT OWN:
// Email-input creation.
// Email focus.
// Email open-state presentation.
// Email validity detection.
// SEND-button creation.
// SEND-button state.
// SEND click behavior.
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
  installSequenceThreeEmailValidity
} from "./create-account-sequence-three-email-validity.js";

export function installTurnstileOneSequenceThreeEmailValidityArm() {
  window.addEventListener(
    "cybercrowd:turnstile-one-open-requested",
    () => {
      installSequenceThreeEmailValidity();
    },
    { once: true }
  );

  return true;
}
