// CYBERCROWD
//
// FILE:
// create-account-sequence-three-whoosh-request.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// SEQUENCE:
// #3
//
// JOB:
// Convert one successful verification-email
// send into one WHOOSH presentation request.
//
// FUNCTION:
// installSequenceThreeWhooshRequest()
//
// INPUT:
// cybercrowd:email-sent
//
// OUTPUT:
// cybercrowd:whoosh-requested
//
// DOES NOT OWN:
// WHOOSH presentation.
// WHOOSH animation.
// WHOOSH audio.
// Navigation.
// Routing.
// SEND result mapping.
// SEND failure.
// Network.
// Backend authority.
// Email validation.
// Turnstile.
// Authentication.
// Session.

export function installSequenceThreeWhooshRequest() {
  window.addEventListener(
    "cybercrowd:email-sent",
    () => {
      window.dispatchEvent(
        new CustomEvent(
          "cybercrowd:whoosh-requested"
        )
      );
    },
    { once: true }
  );

  return true;
}
