// CYBERCROWD
//
// FILE:
// create-account-turnstile-one-release-arm.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Arm Sequence #2 release
// when Turnstile #1 opens.
//
// FUNCTION:
// installTurnstileOneReleaseArm()
//
// INPUT:
// cybercrowd:turnstile-one-open-requested
//
// ACTION:
// installSequenceTwoRelease()
//
// DOES NOT OWN:
// Turnstile rendering.
// Turnstile token creation.
// Human verification.
// Movement #2.
// Sequence #2 release execution.
// Audio.
// Email.
// SEND.
// Authentication.
// Session.
// Routing.
// Backend authority.

import {
  installSequenceTwoRelease
} from "./create-account-sequence-two-release.js";

export function installTurnstileOneReleaseArm() {
  window.addEventListener(
    "cybercrowd:turnstile-one-open-requested",
    () => {
      installSequenceTwoRelease();
    },
    { once: true }
  );

  return true;
}
