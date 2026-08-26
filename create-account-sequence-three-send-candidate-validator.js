// CYBERCROWD
//
// FILE:
// create-account-sequence-three-send-candidate-validator.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Convert one Sequence #3 SEND candidate
// into one validated email state.
//
// FUNCTION:
// installSequenceThreeSendCandidateValidator()
//
// INPUT:
// cybercrowd:sequence-three-send-candidate
//
// ACTION:
// validateEmail()
//
// OUTPUT:
// cybercrowd:sequence-three-email-validated
//
// PAYLOAD:
// emailState
// token
//
// DOES NOT OWN:
// SEND readiness.
// Human verification.
// Network.
// Result mapping.
// Success emission.
// Turnstile #1.
// Turnstile #2.
// Token creation.
// WHOOSH.
// Movement.
// Audio.
// Authentication.
// Session.
// Routing.
// Backend authority.

import {
  validateEmail
} from "./entry-email-validator.js";

export function installSequenceThreeSendCandidateValidator() {
  window.addEventListener(
    "cybercrowd:sequence-three-send-candidate",
    (event) => {
      const email =
        event?.detail?.email;

      const token =
        event?.detail?.token;

      const emailState =
        validateEmail(
          email
        );

      window.dispatchEvent(
        new CustomEvent(
          "cybercrowd:sequence-three-email-validated",
          {
            detail: {
              emailState,
              token
            }
          }
        )
      );
    },
    { once: true }
  );

  return true;
}
