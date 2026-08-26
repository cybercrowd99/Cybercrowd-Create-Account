// CYBERCROWD
//
// FILE:
// create-account-sequence-three-entry-form.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Create the Sequence #3
// live-control container.
//
// FUNCTION:
// installSequenceThreeEntryForm()
//
// INPUT:
// cybercrowd:sequence-three-ready
//
// OUTPUT:
// .entry-form
//
// DOES NOT OWN:
// Instructions.
// Email input.
// Email focus.
// Email validation.
// SEND.
// Turnstile #2.
// Verification.
// Movement.
// Audio.
// WHOOSH.
// Authentication.
// Session.
// Routing.
// Backend authority.

export function installSequenceThreeEntryForm() {
  window.addEventListener(
    "cybercrowd:sequence-three-ready",
    () => {
      const plaque =
        document.querySelector(
          ".glass-plaque-three"
        );

      if (!plaque) {
        return;
      }

      if (
        plaque.querySelector(
          ":scope > .entry-form"
        )
      ) {
        return;
      }

      const entryForm =
        document.createElement(
          "div"
        );

      entryForm.className =
        "entry-form";

      plaque.appendChild(
        entryForm
      );
    },
    { once: true }
  );

  return true;
}
