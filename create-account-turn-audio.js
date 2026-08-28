// CYBERCROWD
//
// FILE:
// create-account-turn-audio.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Play the existing Sequence #1
// Surface Closing audio.
//
// FUNCTION:
// playTurnAudio()
//
// INPUT:
// turnAudio
//
// DOES NOT OWN:
// Audio construction.
// Audio source definition.
// Audio configuration.
// Oscillator.
// Synthesis.
// Timer.
// Movement.

import {
  turnAudio
} from "./create-account-turn-audio-source.js";

export async function playTurnAudio() {
  try {
    turnAudio.muted =
      false;

    turnAudio.volume =
      1;

    turnAudio.currentTime =
      0;

    await turnAudio.play();

    return true;
  } catch (error) {
    console.error(
      "CyberCrowd Sequence #1 audio failed:",
      error
    );

    return false;
  }
}
