// CYBERCROWD
//
// FILE:
// create-account-sequence-three-send-action.js
//
// DOMINO
//
// INPUT:
// Human click on sendButton
//
// OUTPUT:
// cybercrowd:turnstile-two-requested
//
// PAYLOAD:
// none
//
// ACTUAL END:
// Request emitted.
// Listener removed.
// CLOSED.

document.addEventListener(
  "click",
  function send(event) {
    if (event.target?.id !== "sendButton") return;

    document.removeEventListener(
      "click",
      send
    );

    window.dispatchEvent(
      new CustomEvent(
        "cybercrowd:turnstile-two-requested"
      )
    );
  }
);
