// CYBERCROWD
//
// FILE:
// create-account-turnstile-one-sequence-three-instructions-arm.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Arm the Sequence #3 instructions presenter
// when Turnstile #1 opens.
//
// FUNCTION:
// installTurnstileOneSequenceThreeInstructionsArm()
//
// INPUT:
// cybercrowd:turnstile-one-open-requested
//
// ACTION:
// installSequenceThreeInstructions()
//
// DOES NOT OWN:
// Sequence #3 glass creation.
// Sequence #3 ready signal.
// Instruction creation.
// Entry-form creation.
// Email input.
// Email focus.
// Email validation.
// SEND.
// Turnstile #2.
// Verification.
// Movement.
// Audio.
// Authentication.
// Session.
// Routing.
// Backend authority.

import {
  installSequenceThreeInstructions
} from "./create-account-sequence-three-instructions.js";

export function installTurnstileOneSequenceThreeInstructionsArm() {
  window.addEventListener(
    "cybercrowd:turnstile-one-open-requested",
    () => {
      installSequenceThreeInstructions();
    },
    { once: true }
  );

  return true;
}
