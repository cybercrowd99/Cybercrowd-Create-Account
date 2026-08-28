// CYBERCROWD
//
// FILE:
// create-account-sequence-three-handoff.js
//
// ONE ROCK
// ONE OBJECT
// ONE MOVEMENT
// ONE FUNCTION
// ONE ENTRANCE
// ONE ACTUAL END
// CLOSED
//
// OBJECT:
// glass-plaque-three arrival
//
// ENTRANCE:
// DOM mutation
//
// MOVEMENT:
// Detect glass-plaque-three arrival.
//
// EXIT:
// cybercrowd:sequence-three-ready
//
// ACTUAL END:
// Observer disconnects.
// Gate closes.

new MutationObserver(
  (records, observer) => {
    if (
      !document.querySelector(
        ".glass-plaque-three"
      )
    ) {
      return;
    }

    observer.disconnect();

    window.dispatchEvent(
      new CustomEvent(
        "cybercrowd:sequence-three-ready"
      )
    );
  }
).observe(
  document.documentElement,
  {
    childList: true,
    subtree: true
  }
);
