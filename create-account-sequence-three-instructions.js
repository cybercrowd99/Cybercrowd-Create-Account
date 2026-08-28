// CYBERCROWD
//
// FILE:
// create-account-sequence-three-instructions.js
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
// Sequence Three instructions
//
// ENTRANCE:
// cybercrowd:sequence-three-ready
//
// MOVEMENT:
// Present Sequence Three instructions.
//
// ACTUAL END:
// Instructions inserted.
// Gate closes.

window.addEventListener(
  "cybercrowd:sequence-three-ready",
  () => {
    document
      .querySelector(
        ".glass-plaque-three"
      )
      ?.insertAdjacentHTML(
        "beforeend",
        '<div class="email-send-instructions">Enter your email.<br>Press SEND.<br>Check your email right away.<br>You must verify within five minutes.<br>If you wait too long, it will <strong>EXPIRE</strong>.</div>'
      );
  },
  { once: true }
);
