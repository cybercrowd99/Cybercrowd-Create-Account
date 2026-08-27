// CYBERCROWD
// 
// FILE:
// create-account-sequence-three-send-result-map.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Convert one verification-email request result
// into one mapped SEND result.
//
// FUNCTION:
// installSequenceThreeSendResultMap()
//
// INPUT:
// cybercrowd:sequence-three-send-result
//
// ACTION:
// mapSendResult()
//
// OUTPUT:
// cybercrowd:sequence-three-send-mapped
//
// PAYLOAD:
// mappedResult
//
// DOES NOT OWN:
// Network.
// SEND readiness.
// Email validation.
// Human verification.
// Backend authority.
// Success emission.
// WHOOSH.
// Turnstile.
// Authentication.
// Session.
// Routing.

import {
  mapSendResult
} from "./entry-send-result.js";

export function installSequenceThreeSendResultMap() {
  window.addEventListener(
    "cybercrowd:sequence-three-send-result",
    (event) => {
      const sendResult =
        event?.detail?.sendResult;

      const mappedResult =
        mapSendResult(
          sendResult
        );

      window.dispatchEvent(
        new CustomEvent(
          "cybercrowd:sequence-three-send-mapped",
          {
            detail: {
              mappedResult
            }
          }
        )
      );
    },
    { once: true }
  );

  return true;
}
