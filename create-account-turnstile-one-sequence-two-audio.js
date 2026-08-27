// CYBERCROWD
//
// FILE:
// create-account-turnstile-one-sequence-two-audio.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// SEQUENCE:
// #2
//
// JOB:
// Trigger the existing Sequence #2
// slam audio after Turnstile #1
// human verification passes.
//
// FUNCTION:
// installTurnstileOneSequenceTwoAudio()
//
// INPUT:
// cybercrowd:turnstile-one-human-verified
//
// ACTION:
// playSequenceTwoAudio()
//
// OUTPUT:
// cybercrowd:sequence-two-audio-played
//
// DOES NOT OWN:
// Audio asset.
// Audio playback implementation.
// Turnstile rendering.
// Token production.
// Human verification.
// Network request.
// Movement.
// Sequence Two release.
// Sequence Three.
// Email.
// SEND.
// Authentication.
// Session.
// Routing.
// Backend authority.

import {
  playSequenceTwoAudio
} from "./create-account-sequence-two-audio.js";

export function installTurnstileOneSequenceTwoAudio() {
  window.addEventListener(
    "cybercrowd:turnstile-one-human-verified",
    async () => {
      const played =
        await playSequenceTwoAudio();

      if (!played) {
        return;
      }

      window.dispatchEvent(
        new CustomEvent(
          "cybercrowd:sequence-two-audio-played"
        )
      );
    },
    { once: true }
  );

  return true;
}
