// CYBERCROWD
//
// FILE:
// create-account-turnstile-one-sequence-three-handoff-arm.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Arm the Sequence #3 handoff
// when Turnstile #1 opens.
//
// FUNCTION:
// installTurnstileOneSequenceThreeHandoffArm()
//
// INPUT:
// cybercrowd:turnstile-one-open-requested
//
// ACTION:
// installSequenceThreeHandoff()
//
// DOES NOT OWN:
// Sequence #3 glass creation.
// Sequence #3 ready signal creation.
// Email.
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
  installSequenceThreeHandoff
} from "./create-account-sequence-three-handoff.js";

export function installTurnstileOneSequenceThreeHandoffArm() {
  window.addEventListener(
    "cybercrowd:turnstile-one-open-requested",
    () => {
      installSequenceThreeHandoff();
    },
    { once: true }
  );

  return true;
}
