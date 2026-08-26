// CYBERCROWD
//
// FILE:
// create-account-turnstile-one-sequence-three-send-action-arm.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Arm the Sequence #3 SEND-action boundary
// when Turnstile #1 opens.
//
// FUNCTION:
// installTurnstileOneSequenceThreeSendActionArm()
//
// INPUT:
// cybercrowd:turnstile-one-open-requested
//
// ACTION:
// installSequenceThreeSendAction()
//
// DOES NOT OWN:
// Email-input creation.
// Email focus.
// Email validity detection.
// SEND-button creation.
// SEND-button state.
// SEND click execution.
// Turnstile #2 rendering.
// Turnstile #2 token creation.
// Verification.
// Movement.
// Audio.
// WHOOSH.
// Authentication.
// Session.
// Routing.
// Backend authority.

import {
  installSequenceThreeSendAction
} from "./create-account-sequence-three-send-action.js";

export function installTurnstileOneSequenceThreeSendActionArm() {
  window.addEventListener(
    "cybercrowd:turnstile-one-open-requested",
    () => {
      installSequenceThreeSendAction();
    },
    { once: true }
  );

  return true;
}
