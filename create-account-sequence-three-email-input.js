// CYBERCROWD
//
// FILE:
// create-account-sequence-three-email-input.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Create the Sequence #3 email input.
//
// FUNCTION:
// installSequenceThreeEmailInput()
//
// INPUT:
// cybercrowd:sequence-three-entry-form-ready
//
// OUTPUT:
// #email
//
// DOES NOT OWN:
// Entry-form creation.
// Email focus.
// Email validation.
// Email styling.
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

export function installSequenceThreeEmailInput() {
  window.addEventListener(
    "cybercrowd:sequence-three-entry-form-ready",
    () => {
      const entryForm =
        document.querySelector(
          ".glass-plaque-three > .entry-form"
        );

      if (!entryForm) {
        return;
      }

      if (
        entryForm.querySelector("#email")
      ) {
        return;
      }

      const emailInput =
        document.createElement("input");

      emailInput.id =
        "email";

      emailInput.className =
        "email-field";

      emailInput.type =
        "email";

      emailInput.name =
        "email";

      emailInput.inputMode =
        "email";

      emailInput.autocomplete =
        "email";

      emailInput.autocapitalize =
        "none";

      emailInput.spellcheck =
        false;

      emailInput.setAttribute(
        "aria-label",
        "Enter your email here"
      );

      entryForm.appendChild(
        emailInput
      );
    },
    { once: true }
  );

  return true;
}
