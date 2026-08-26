// CYBERCROWD
//
// FILE:
// create-account-turnstile-one-audio-arm.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Arm Sequence #2 audio
// when Turnstile #1 opens.
//
// FUNCTION:
// installTurnstileOneAudioArm()
//
// INPUT:
// cybercrowd:turnstile-one-open-requested
//
// ACTION:
// installSequenceTwo()
//
// DOES NOT OWN:
// Turnstile rendering.
// Turnstile token creation.
// Human verification.
// Audio playback.
// Movement.
// Email.
// SEND.
// Authentication.
// Session.
// Routing.
// Backend authority.

import {
  installSequenceTwo
} from "./create-account-sequence-two.js";

export function installTurnstileOneAudioArm() {
  window.addEventListener(
    "cybercrowd:turnstile-one-open-requested",
    () => {
      installSequenceTwo();
    },
    { once: true }
  );

  return true;
}
