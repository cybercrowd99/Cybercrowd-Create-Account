// CYBERCROWD
//
// FILE:
// create-account-turnstile-one-open-listener.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Hear the Sequence #2 Turnstile #1 open request
// and open Turnstile #1.
//
// FUNCTION:
// installTurnstileOneOpenListener()
//
// INPUT:
// cybercrowd:turnstile-one-open-requested
//
// ACTION:
// openTurnstileOne()
//
// DOES NOT OWN:
// Sequence #1.
// Swipe.
// Movement.
// Turnstile rendering.
// Turnstile token creation.
// Human verification.
// Audio.
// Email.
// SEND.
// Routing authority.
// Backend authority.

import {
  openTurnstileOne
} from "./turnstile-one-ui.js";

export function installTurnstileOneOpenListener() {
  window.addEventListener(
    "cybercrowd:turnstile-one-open-requested",
    () => {
      openTurnstileOne();
    },
    { once: true }
  );

  return true;
}
