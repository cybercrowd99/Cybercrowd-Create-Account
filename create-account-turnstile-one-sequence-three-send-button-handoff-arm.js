// CYBERCROWD
//
// FILE:
// create-account-turnstile-one-sequence-three-send-button-handoff-arm.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Arm the Sequence #3 SEND-button handoff
// when Turnstile #1 opens.
//
// FUNCTION:
// installTurnstileOneSequenceThreeSendButtonHandoffArm()
//
// INPUT:
// cybercrowd:turnstile-one-open-requested
//
// ACTION:
// installSequenceThreeSendButtonHandoff()
//
// DOES NOT OWN:
// Email-input creation.
// Email-input ready signal.
// SEND-button creation.
// SEND-button ready signal creation.
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
  installSequenceThreeSendButtonHandoff
} from "./create-account-sequence-three-send-button-handoff.js";

export function installTurnstileOneSequenceThreeSendButtonHandoffArm() {
  window.addEventListener(
    "cybercrowd:turnstile-one-open-requested",
    () => {
      installSequenceThreeSendButtonHandoff();
    },
    { once: true }
  );

  return true;
}
