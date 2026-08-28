// CYBERCROWD
//
// FILE:
// human-verify-crossing.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Open the human-verification crossing.
//
// FUNCTION:
// openHumanVerifyCrossing()
//
// INPUT:
// cybercrowd:human-passed
//
// OUTPUT:
// handleHumanVerifyPass
//
// DOES NOT OWN:
// Token creation.
// Network verification.
// Verification decision.
// Verified signal creation.
// Email.
// Authentication.
// Session.
// KV.
// UI.

import {
  handleHumanVerifyPass
} from "./human-verify-pass.js";

export function openHumanVerifyCrossing() {
  window.addEventListener(
    "cybercrowd:human-passed",
    handleHumanVerifyPass
  );
}
