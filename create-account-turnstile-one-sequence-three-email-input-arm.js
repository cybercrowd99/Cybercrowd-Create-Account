// CYBERCROWD
//
// FILE:
// create-account-turnstile-one-sequence-three-email-input-arm.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Arm the Sequence #3 email-input presenter
// when Turnstile #1 opens.
//
// FUNCTION:
// installTurnstileOneSequenceThreeEmailInputArm()
//
// INPUT:
// cybercrowd:turnstile-one-open-requested
//
// ACTION:
// installSequenceThreeEmailInput()
//
// DOES NOT OWN:
// Sequence #3 glass.
// Sequence #3 ready signal.
// Entry-form creation.
// Entry-form ready signal.
// Email-input creation.
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
  installSequenceThreeEmailInput
} from "./create-account-sequence-three-email-input.js";

export function installTurnstileOneSequenceThreeEmailInputArm() {
  window.addEventListener(
    "cybercrowd:turnstile-one-open-requested",
    () => {
      installSequenceThreeEmailInput();
    },
    { once: true }
  );

  return true;
}
