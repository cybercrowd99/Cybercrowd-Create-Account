// CYBERCROWD
//
// FILE:
// create-account-turnstile-one-sequence-three-send-button-state-arm.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Arm the Sequence #3 SEND-button state presenter
// when Turnstile #1 opens.
//
// FUNCTION:
// installTurnstileOneSequenceThreeSendButtonStateArm()
//
// INPUT:
// cybercrowd:turnstile-one-open-requested
//
// ACTION:
// installSequenceThreeSendButtonState()
//
// DOES NOT OWN:
// Email-input creation.
// Email focus.
// Email validity detection.
// SEND-button creation.
// SEND-button state presentation.
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
  installSequenceThreeSendButtonState
} from "./create-account-sequence-three-send-button-state.js";

export function installTurnstileOneSequenceThreeSendButtonStateArm() {
  window.addEventListener(
    "cybercrowd:turnstile-one-open-requested",
    () => {
      installSequenceThreeSendButtonState();
    },
    { once: true }
  );

  return true;
}
