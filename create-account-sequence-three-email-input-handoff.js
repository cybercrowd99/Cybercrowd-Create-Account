// CYBERCROWD
//
// FILE:
// create-account-sequence-three-email-input-handoff.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Detect Sequence #3 email-input arrival
// and publish one email-input ready signal.
//
// FUNCTION:
// installSequenceThreeEmailInputHandoff()
//
// INPUT:
// #email arrives
//
// OUTPUT:
// cybercrowd:sequence-three-email-input-ready
//
// DOES NOT OWN:
// Sequence #3 glass.
// Sequence #3 ready signal.
// Entry-form creation.
// Entry-form ready signal.
// Email-input creation.
// Email focus.
// Email validation.
// Email styling.
// SEND.
// Turnstile #2.
// Verification.
// Authentication.
// Session.
// Routing.
// Backend authority.

export function installSequenceThreeEmailInputHandoff() {
  const existingEmail =
    document.getElementById("email");

  if (existingEmail) {
    window.dispatchEvent(
      new CustomEvent(
        "cybercrowd:sequence-three-email-input-ready"
      )
    );

    return true;
  }

  const observer =
    new MutationObserver(() => {
      const emailInput =
        document.getElementById("email");

      if (!emailInput) {
        return;
      }

      observer.disconnect();

      window.dispatchEvent(
        new CustomEvent(
          "cybercrowd:sequence-three-email-input-ready"
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
