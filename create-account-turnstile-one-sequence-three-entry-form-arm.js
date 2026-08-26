// CYBERCROWD
//
// FILE:
// create-account-turnstile-one-sequence-three-entry-form-arm.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Arm the Sequence #3 entry-form presenter
// when Turnstile #1 opens.
//
// FUNCTION:
// installTurnstileOneSequenceThreeEntryFormArm()
//
// INPUT:
// cybercrowd:turnstile-one-open-requested
//
// ACTION:
// installSequenceThreeEntryForm()
//
// DOES NOT OWN:
// Sequence #3 glass creation.
// Sequence #3 ready signal.
// Entry-form creation.
// Instructions.
// Email input.
// Email focus.
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
  installSequenceThreeEntryForm
} from "./create-account-sequence-three-entry-form.js";

export function installTurnstileOneSequenceThreeEntryFormArm() {
  window.addEventListener(
    "cybercrowd:turnstile-one-open-requested",
    () => {
      installSequenceThreeEntryForm();
    },
    { once: true }
  );

  return true;
}
