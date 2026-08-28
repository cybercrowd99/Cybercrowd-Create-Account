// CYBERCROWD
//
// FILE:
// create-account-sequence-two-audio.js
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
// cybercrowd:turnstile-one-human-verified
//
// MOVEMENT:
// Play Sequence Two audio.
//
// ACTUAL END:
// Audio play resolves.
// Handler ends.
// Gate closes.

window.addEventListener(
  "cybercrowd:turnstile-one-human-verified",
  async () => {
    await new Audio(
      "/api/r2-sound-effect"
    ).play();
  },
  { once: true }
);
