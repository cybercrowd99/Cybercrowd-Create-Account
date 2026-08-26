// CYBERCROWD
//
// FILE:
// create-account-turnstile-one-sequence-three-send-button-arm.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Arm the Sequence #3 SEND-button presenter
// when Turnstile #1 opens.
//
// FUNCTION:
// installTurnstileOneSequenceThreeSendButtonArm()
//
// INPUT:
// cybercrowd:turnstile-one-open-requested
//
// ACTION:
// installSequenceThreeSendButton()
//
// DOES NOT OWN:
// Email-input creation.
// Email-input ready signal.
// SEND-button creation.
// Email focus.
// Email validation.
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
  installSequenceThreeSendButton
} from "./create-account-sequence-three-send-button.js";

export function installTurnstileOneSequenceThreeSendButtonArm() {
  window.addEventListener(
    "cybercrowd:turnstile-one-open-requested",
    () => {
      installSequenceThreeSendButton();
    },
    { once: true }
  );

  return true;
}
