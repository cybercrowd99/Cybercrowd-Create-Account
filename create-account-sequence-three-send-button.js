// CYBERCROWD
//
// FILE:
// create-account-sequence-three-send-button.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Create the Sequence #3 SEND button.
//
// FUNCTION:
// installSequenceThreeSendButton()
//
// INPUT:
// cybercrowd:sequence-three-email-input-ready
//
// OUTPUT:
// #sendButton
//
// DOES NOT OWN:
// Email-input creation.
// Email focus.
// Email validation.
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

export function installSequenceThreeSendButton() {
  window.addEventListener(
    "cybercrowd:sequence-three-email-input-ready",
    () => {
      const entryForm =
        document.querySelector(
          ".glass-plaque-three > .entry-form"
        );

      if (!entryForm) {
        return;
      }

      if (
        entryForm.querySelector(
          "#sendButton"
        )
      ) {
        return;
      }

      const sendButton =
        document.createElement(
          "button"
        );

      sendButton.id =
        "sendButton";

      sendButton.type =
        "button";

      sendButton.disabled =
        true;

      sendButton.setAttribute(
        "aria-disabled",
        "true"
      );

      sendButton.setAttribute(
        "aria-label",
        "Send"
      );

      entryForm.appendChild(
        sendButton
      );
    },
    { once: true }
  );

  return true;
}
