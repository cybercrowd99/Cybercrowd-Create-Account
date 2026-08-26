// CYBERCROWD
//
// FILE:
// create-account-sequence-three-entry-form-handoff.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Detect Sequence #3 entry-form arrival
// and publish one entry-form ready signal.
//
// FUNCTION:
// installSequenceThreeEntryFormHandoff()
//
// INPUT:
// .glass-plaque-three > .entry-form arrives
//
// OUTPUT:
// cybercrowd:sequence-three-entry-form-ready
//
// DOES NOT OWN:
// Sequence #3 glass.
// Sequence #3 ready signal.
// Entry-form creation.
// Instructions.
// Email input.
// Email focus.
// Email validation.
// SEND.
// Turnstile #2.
// Verification.
// Authentication.
// Session.
// Routing.
// Backend authority.

export function installSequenceThreeEntryFormHandoff() {
  const existingEntryForm =
    document.querySelector(
      ".glass-plaque-three > .entry-form"
    );

  if (existingEntryForm) {
    window.dispatchEvent(
      new CustomEvent(
        "cybercrowd:sequence-three-entry-form-ready"
      )
    );

    return true;
  }

  const observer =
    new MutationObserver(() => {
      const entryForm =
        document.querySelector(
          ".glass-plaque-three > .entry-form"
        );

      if (!entryForm) {
        return;
      }

      observer.disconnect();

      window.dispatchEvent(
        new CustomEvent(
          "cybercrowd:sequence-three-entry-form-ready"
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
