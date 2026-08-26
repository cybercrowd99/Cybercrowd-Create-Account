// CYBERCROWD
//
// FILE:
// create-account-turnstile-one-sequence-three-entry-form-handoff-arm.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Arm the Sequence #3 entry-form handoff
// when Turnstile #1 opens.
//
// FUNCTION:
// installTurnstileOneSequenceThreeEntryFormHandoffArm()
//
// INPUT:
// cybercrowd:turnstile-one-open-requested
//
// ACTION:
// installSequenceThreeEntryFormHandoff()
//
// DOES NOT OWN:
// Sequence #3 glass.
// Sequence #3 ready signal.
// Entry-form creation.
// Entry-form ready signal creation.
// Instructions.
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
  installSequenceThreeEntryFormHandoff
} from "./create-account-sequence-three-entry-form-handoff.js";

export function installTurnstileOneSequenceThreeEntryFormHandoffArm() {
  window.addEventListener(
    "cybercrowd:turnstile-one-open-requested",
    () => {
      installSequenceThreeEntryFormHandoff();
    },
    { once: true }
  );

  return true;
}
