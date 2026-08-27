// CYBERCROWD
//
// FILE:
// create-account-sequence-three-whoosh-route.js
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
// Carry one WHOOSH presentation request
// to the standalone WHOOSH return stage.
//
// FUNCTION:
// installSequenceThreeWhooshRoute()
//
// INPUT:
// cybercrowd:whoosh-requested
//
// ROUTE:
// /whoosh.html
//
// DOES NOT OWN:
// WHOOSH request creation.
// WHOOSH presentation.
// WHOOSH animation.
// WHOOSH audio.
// SEND success.
// SEND failure.
// Email transmission.
// Turnstile.
// Verification.
// Authentication.
// Session.
// Backend authority.

export function installSequenceThreeWhooshRoute() {
  window.addEventListener(
    "cybercrowd:whoosh-requested",
    () => {
      window.location.assign(
        "/whoosh.html"
      );
    },
    { once: true }
  );

  return true;
}
