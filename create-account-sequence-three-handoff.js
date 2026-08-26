// CYBERCROWD
//
// FILE:
// create-account-sequence-three-handoff.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Detect Sequence #3 glass arrival
// and publish one Sequence #3 ready signal.
//
// FUNCTION:
// installSequenceThreeHandoff()
//
// INPUT:
// .glass-plaque-three arrives
//
// OUTPUT:
// cybercrowd:sequence-three-ready
//
// DOES NOT OWN:
// Sequence #2.
// Movement.
// Email input.
// Email focus.
// SEND.
// Turnstile #2.
// Verification.
// Audio.
// Authentication.
// Session.
// Routing.
// Backend authority.

export function installSequenceThreeHandoff() {
  const existingPlaque =
    document.querySelector(
      ".glass-plaque-three"
    );

  if (existingPlaque) {
    window.dispatchEvent(
      new CustomEvent(
        "cybercrowd:sequence-three-ready"
      )
    );

    return true;
  }

  const observer =
    new MutationObserver(() => {
      const plaque =
        document.querySelector(
          ".glass-plaque-three"
        );

      if (!plaque) {
        return;
      }

      observer.disconnect();

      window.dispatchEvent(
        new CustomEvent(
          "cybercrowd:sequence-three-ready"
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
