// CYBERCROWD
//
// FILE:
// create-account-sequence-three-send-button-state.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Present the Sequence #3 SEND-button
// enabled or disabled state.
//
// FUNCTION:
// installSequenceThreeSendButtonState()
//
// INPUT:
// cybercrowd:email-validity-changed
//
// ACTION:
// Set #sendButton disabled state.
//
// DOES NOT OWN:
// Email-input creation.
// Email focus.
// Email validity detection.
// SEND-button creation.
// SEND click behavior.
// Turnstile #2.
// Verification.
// Movement.
// Audio.
// WHOOSH.
// Authentication.
// Session.
// Routing.
// Backend authority.

export function installSequenceThreeSendButtonState() {
  window.addEventListener(
    "cybercrowd:email-validity-changed",
    (event) => {
      const sendButton =
        document.getElementById(
          "sendButton"
        );

      if (!sendButton) {
        return;
      }

      const valid =
        event.detail?.valid === true;

      sendButton.disabled =
        !valid;

      sendButton.setAttribute(
        "aria-disabled",
        valid ? "false" : "true"
      );
    }
  );

  return true;
}
