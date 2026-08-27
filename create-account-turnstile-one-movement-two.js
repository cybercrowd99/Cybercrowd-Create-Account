// CYBERCROWD
//
// FILE:
// create-account-turnstile-one-movement-two.js
//
// BUILD LAW:
// 1 FILE
// 1 JOB
// 1 FUNCTION
//
// SEQUENCE:
// #2
//
// JOB:
// Perform Movement #2
// after Turnstile #1 human verification passes.
//
// FUNCTION:
// installTurnstileOneMovementTwo()
//
// INPUT:
// cybercrowd:turnstile-one-human-verified
//
// MOVEMENT:
// 90 degrees -> 180 degrees
//
// OUTPUT:
// cybercrowd:face-two-arrived
//
// DOES NOT OWN:
// Turnstile rendering.
// Token production.
// Human verification.
// Network request.
// Audio.
// Sequence Two release.
// Sequence Three creation.
// Email.
// SEND.
// Authentication.
// Session.
// Routing.
// Backend authority.

export function installTurnstileOneMovementTwo() {
  const TURN_DURATION = 90;

  const MOVEMENT_TWO_START =
    Math.PI / 2;

  const MOVEMENT_TWO_DESTINATION =
    Math.PI;

  window.addEventListener(
    "cybercrowd:turnstile-one-human-verified",
    () => {
      document.documentElement.style.setProperty(
        "--cylinder-angle",
        `${MOVEMENT_TWO_DESTINATION}rad`
      );

      window.setTimeout(
        () => {
          window.dispatchEvent(
            new CustomEvent(
              "cybercrowd:face-two-arrived",
              {
                detail: {
                  movement: 2,
                  from: MOVEMENT_TWO_START,
                  to: MOVEMENT_TWO_DESTINATION,
                  degreesMoved: 90,
                  destinationDegrees: 180,
                  duration: TURN_DURATION
                }
              }
            )
          );
        },
        TURN_DURATION
      );
    },
    { once: true }
  );

  return true;
}
