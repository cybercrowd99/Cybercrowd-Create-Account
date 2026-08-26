# CyberCrowd Create Account Rail
Front-end Organ Rule Book

The CyberCrowd Create Account rail is a front-end presentation system built from isolated organs. Each organ follows one file, one job, one function. The rail runs the human through the Create Account stage using movement, glass plaques, human-touch boundaries, and Turnstile request events. No storage. No backend authority. No routing. No authentication. No transmission. Only lawful presentation surfaces.

Purpose of the Rail

The Create Account rail presents the full human entry sequence. It owns the presentation surfaces, the movement listeners, the glass plaques, the email surface, the send trigger, and the Turnstile request events. It does not own verification or transmission. It emits events only.

The rail is responsible for:
- Sequence one human-touch ownership
- Sequence two movement and release
- Sequence three email entry and send
- Turnstile request events that leave the boundary

Every organ is isolated. Every boundary is respected.

Rail Flow

Sequence one:
Human swipe enters the rail.
Cylinder turns.
The first slam fires Movement one.
Movement one lands.
Sequence one closes.

Sequence two:
The second glass plaque is created.
The first Turnstile widget attaches.
Human passes.
Private verification occurs.
Verified boundary triggers audio and automatic movement.
Cylinder rotates toward one-hundred-eighty degrees.
Sequence two releases human-touch ownership.

Sequence three:
The third glass plaque appears.
Email surface opens.
Human touches the real input.
Display image disappears.
Type-in ledger appears.
Human presses Send.
Turnstile request event leaves the boundary.
The second Turnstile widget attaches.

This rail owns presentation only. It never owns verification, transmission, routing, or backend authority.

Organ Responsibilities

Glass Plaque Organism:
Creates the physical surfaces for Sequence one, Sequence two, and Sequence three. Owns geometry, depth, blur, reflection, and transform boundaries. Does not own human logic.

Swipe Cue:
Signals the human to begin Sequence one. Presentation only.

Turn Audio Listener:
Listens for movement and plays the approved audio. Does not own movement or rotation.

Sequence One Release:
Closes human-touch ownership after Movement one lands. Hands control to later sequences.

Sequence Two:
Runs the mid-rail movement. Owns the arrival of Face two. Does not own verification.

Sequence Two Release:
Releases human-touch ownership from the second glass plaque. Hands control to Sequence three.

Email Surface:
Presents the email input and send button. Separates display-only PNG decals from real human interaction. Focus opens the type-in ledger. Send uses native enable and disable behavior.

Send Action:
Owns the human press of the Send button. Emits the Turnstile request event. One event leaves. Nothing else.

Turnstile One Opener:
Opens the first Turnstile widget after Movement one lands.

Turnstile Two Opener:
Opens the second Turnstile widget after the human presses Send.

Boundaries and Non-Ownership

The Create Account rail does not own:
Email validation
Email transmission
Verification
Turnstile token creation
Movement logic
Rotation logic
Audio authority
WHOOSH
Authentication
Session
Routing
Backend authority
Storage of any kind

The rail emits events only. It never crosses into backend logic.

Build Law

Every organ follows:
One file
One job
One function
One boundary
One responsibility
One exit event when required

No organ may cross into another organ’s authority.

Event Law

Events are the only outbound signals:
cybercrowd:cylinder-turned
cybercrowd:movement-one-landed
cybercrowd:human-passed
cybercrowd:turnstile-one-verified
cybercrowd:email-opened
cybercrowd:turnstile-two-requested

Events leave the boundary. Organs do not.

Human-Touch Law

Human-touch ownership moves forward through the rail:
Sequence one owns touch until Movement one lands.
Sequence two owns touch until Face two arrives.
Sequence three owns touch until Send is pressed.
Turnstile owns touch after the request event leaves.

Touch never moves backward.

Purpose of This Repo

This repo contains the entire front-end Create Account rail for CyberCrowd. It is a lawful, deterministic, isolated presentation system. It is designed for clarity, auditability, and mechanical correctness.
