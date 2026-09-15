/*
CYBERCROWD

REPO:
cybercrowd99/Cybercrowd-Create-Account

FILE:
worker.js

BUILD LAW:
1 FILE
1 JOB
1 FUNCTION

JOB:
Create Account Worker entry.

FUNCTION:
fetch()

OWNS:
Create Account Worker entry boundary.

CROSSING:
CORE_SERVICE -> cybercrowd-core

DOES NOT OWN:
Authentication.
Verification.
Passwords.
Sessions.
Identity authority.
NET authority.
AUTH authority.
Storage.
Routing authority.
*/

export default {
  async fetch(request, env) {
    return env.CORE_SERVICE.fetch(request);
  }
};
