// CYBERCROWD
//
// FILE:
// create-account-sequence-two-release.js
//
// ONE ROCK
// ONE OBJECT
// ONE MOVEMENT
// ONE FUNCTION
// ONE ENTRANCE
// ONE ACTUAL END
// CLOSED
//
// ENTRANCE:
// cybercrowd:face-two-arrived
//
// MOVEMENT:
// Release glass-plaque-two human touch.
//
// ACTUAL END:
// is-active removed.
// Handler ends.
// Gate closes.

window.addEventListener(
  "cybercrowd:face-two-arrived",
  () => {
    document
      .querySelector(
        ".glass-plaque-two"
      )
      ?.classList.remove(
        "is-active"
      );
  },
  { once: true }
);
