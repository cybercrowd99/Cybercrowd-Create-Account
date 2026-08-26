// CYBERCROWD
//
// FILE:
// create-account-turnstile-one-sequence-three-email-input-handoff-arm.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Arm the Sequence #3 email-input handoff
// when Turnstile #1 opens.
//
// FUNCTION:
// installTurnstileOneSequenceThreeEmailInputHandoffArm()
//
// INPUT:
// cybercrowd:turnstile-one-open-requested
//
// ACTION:
// installSequenceThreeEmailInputHandoff()
//
// DOES NOT OWN:
// Sequence #3 glass.
// Sequence #3 ready signal.
// Entry-form creation.
// Entry-form ready signal.
// Email-input creation.
// Email-input ready signal creation.
// Email focus.
// Email validation.
// Email styling.
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
  installSequenceThreeEmailInputHandoff
} from "./create-account-sequence-three-email-input-handoff.js";

export function installTurnstileOneSequenceThreeEmailInputHandoffArm() {
  window.addEventListener(
    "cybercrowd:turnstile-one-open-requested",
    () => {
      installSequenceThreeEmailInputHandoff();
    },
    { once: true }
  );

  return true;
}
