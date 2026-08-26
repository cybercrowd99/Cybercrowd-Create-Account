// CYBERCROWD
//
// FILE:
// create-account-sequence-three-send-button-handoff.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Detect Sequence #3 SEND-button arrival
// and publish one SEND-button ready signal.
//
// FUNCTION:
// installSequenceThreeSendButtonHandoff()
//
// INPUT:
// #sendButton arrives
//
// OUTPUT:
// cybercrowd:sequence-three-send-button-ready
//
// DOES NOT OWN:
// Email-input creation.
// Email-input ready signal.
// SEND-button creation.
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

export function installSequenceThreeSendButtonHandoff() {
  const existingSendButton =
    document.getElementById(
      "sendButton"
    );

  if (existingSendButton) {
    window.dispatchEvent(
      new CustomEvent(
        "cybercrowd:sequence-three-send-button-ready"
      )
    );

    return true;
  }

  const observer =
    new MutationObserver(() => {
      const sendButton =
        document.getElementById(
          "sendButton"
        );

      if (!sendButton) {
        return;
      }

      observer.disconnect();

      window.dispatchEvent(
        new CustomEvent(
          "cybercrowd:sequence-three-send-button-ready"
        )
      );
    });

  observer.observe(
    document.documentElement,
    {
      childList: true,
      subtree: true
    }
  );

  return true;
}
