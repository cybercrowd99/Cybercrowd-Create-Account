// CYBERCROWD
//
// FILE:
// create-account-sequence-three-send-action.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Own the Sequence #3
// human SEND click boundary.
//
// FUNCTION:
// installSequenceThreeSendAction()
//
// ARM:
// cybercrowd:email-opened
//
// INPUT:
// human click on #sendButton
//
// OUTPUT:
// cybercrowd:turnstile-two-requested
//
// LAW:
// SEND HAS NO CLICK CONNECTION
// UNTIL ENTER EMAIL HAS OPENED.
//
// DOES NOT OWN:
// Email-input creation.
// Email focus.
// Email validity detection.
// SEND-button creation.
// SEND-button state.
// Turnstile #2 rendering.
// Turnstile #2 token creation.
// Verification.
// Movement.
// Audio.
// WHOOSH.
// Authentication.
// Session.
// Routing.
// Backend authority.

export function installSequenceThreeSendAction() {
  let connected =
    false;

  let requested =
    false;

  window.addEventListener(
    "cybercrowd:email-opened",
    () => {
      if (connected) {
        return;
      }

      const sendButton =
        document.getElementById(
          "sendButton"
        );

      if (!sendButton) {
        return;
      }

      connected =
        true;

      sendButton.addEventListener(
        "click",
        () => {
          if (
            sendButton.disabled ||
            requested
          ) {
            return;
          }

          requested =
            true;

          window.dispatchEvent(
            new CustomEvent(
              "cybercrowd:turnstile-two-requested"
            )
          );
        }
      );
    },
    { once: true }
  );

  return true;
}
