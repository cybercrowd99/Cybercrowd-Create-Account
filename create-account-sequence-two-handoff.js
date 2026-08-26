// CYBERCROWD
//
// FILE:
// create-account-sequence-two-handoff.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// JOB:
// Detect Sequence #2 glass arrival
// and publish one Turnstile #1 route request.
//
// FUNCTION:
// installSequenceTwoHandoff()
//
// INPUT:
// .glass-plaque-two arrives
//
// OUTPUT:
// cybercrowd:turnstile-one-open-requested
//
// DOES NOT OWN:
// Sequence #1.
// Swipe.
// Movement.
// Turnstile rendering.
// Turnstile token.
// Human verification.
// Audio.
// Email.
// SEND.
// Routing authority.
// Backend authority.

export function installSequenceTwoHandoff() {
  const existingPlaque =
    document.querySelector(
      ".glass-plaque-two"
    );

  if (existingPlaque) {
    window.dispatchEvent(
      new CustomEvent(
        "cybercrowd:turnstile-one-open-requested"
      )
    );

    return true;
  }

  const observer =
    new MutationObserver(() => {
      const plaque =
        document.querySelector(
          ".glass-plaque-two"
        );

      if (!plaque) {
        return;
      }

      observer.disconnect();

      window.dispatchEvent(
        new CustomEvent(
          "cybercrowd:turnstile-one-open-requested"
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
