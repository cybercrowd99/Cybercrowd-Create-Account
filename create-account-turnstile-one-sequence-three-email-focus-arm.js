// CYBERCROWD
//
// FILE:
// create-account-turnstile-one-sequence-three-email-focus-arm.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Arm the Sequence #3 email-focus detector
// when Turnstile #1 opens.
//
// FUNCTION:
// installTurnstileOneSequenceThreeEmailFocusArm()
//
// INPUT:
// cybercrowd:turnstile-one-open-requested
//
// ACTION:
// installSequenceThreeEmailFocus()
//
// DOES NOT OWN:
// Email-input creation.
// Email-input ready signal.
// Email focus detection.
// Email styling.
// Email open-state styling.
// Email validation.
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
  installSequenceThreeEmailFocus
} from "./create-account-sequence-three-email-focus.js";

export function installTurnstileOneSequenceThreeEmailFocusArm() {
  window.addEventListener(
    "cybercrowd:turnstile-one-open-requested",
    () => {
      installSequenceThreeEmailFocus();
    },
    { once: true }
  );

  return true;
}
