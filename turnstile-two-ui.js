// CYBERCROWD
//
// FILE:
// turnstile-two-ui.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// TURNSTILE:
// #2
//
// JOB:
// Open the independent Turnstile #2
// browser checkpoint.
//
// FUNCTION:
// openTurnstileTwo()
//
// DOM POINT:
// #turnstile-two
//
// INPUT:
// emitTurnstileTwoPassed
//
// BOUNDARY:
//
// #turnstile-two
// ↓
// Turnstile #2
// ↓
// real browser token
// ↓
// emitTurnstileTwoPassed
//
// DOES NOT OWN:
// DOM construction.
// Turnstile #1.
// #turnstile-one.
// cybercrowd:human-passed.
// Human verification decision.
// Email.
// SEND.
// Verification email.
// Movement.
// Rotation.
// WHOOSH.
// Authentication.
// Session.
// Cookie.
// KV.
// Backend authority.

import {
  emitTurnstileTwoPassed
} from "./turnstile-two-passed.js";

export function openTurnstileTwo() {
  const slot =
    document.getElementById(
      "turnstile-two"
    );

  if (!slot) {
    return false;
  }

  if (!window.turnstile) {
    console.warn(
      "Turnstile #2 not yet loaded."
    );

    return false;
  }

  window.turnstile.render(
    slot,
    {
      sitekey:
        "0x4AAAAAACvkecVo2F3hpb1r",

      callback:
        emitTurnstileTwoPassed
    }
  );

  return true;
}
