// CYBERCROWD
//
// FILE:
// create-account-turnstile-one-sequence-three-arm.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Arm Sequence #3 glass
// when Turnstile #1 opens.
//
// FUNCTION:
// installTurnstileOneSequenceThreeArm()
//
// INPUT:
// cybercrowd:turnstile-one-open-requested
//
// ACTION:
// installGlassPlaqueThreeNode()
//
// DOES NOT OWN:
// Turnstile rendering.
// Turnstile token creation.
// Human verification.
// Movement #2.
// Sequence #3 glass creation.
// Email.
// SEND.
// Turnstile #2.
// Authentication.
// Session.
// Routing.
// Backend authority.

import {
  installGlassPlaqueThreeNode
} from "./create-account-glass-plaque-three-node.js";

export function installTurnstileOneSequenceThreeArm() {
  window.addEventListener(
    "cybercrowd:turnstile-one-open-requested",
    () => {
      installGlassPlaqueThreeNode();
    },
    { once: true }
  );

  return true;
}
