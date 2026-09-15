/*
CYBERCROWD

REPO:
cybercrowd99/cybercrowd-net

LANE:
PUBLIC NET

FILE:
functions/api/auth/setup-token-store.js

BUILD LAW:
1 FILE
1 JOB
1 FUNCTION

JOB:
Store, read, and delete setup:<token> records.

FUNCTION:
Setup-token KV storage only.

OWNS:
Writing setup-token records.
Reading setup-token records.
Deleting setup-token records.
Expiration handling.

DOES NOT OWN:
Token creation.
Email sending.
Verification.
Password hashing.
Session.
Cookie.
Authentication.
Routing.
Backend authority.
*/

// CyberCrowd Setup Token Store – KV Helper

export async function storeSetupToken(env, key, record) {
  await env.IDENTITY.put(key, JSON.stringify(record), {
    expiration: Math.floor(record.expiresAt / 1000)
  });
}

export async function readSetupToken(env, key) {
  const raw = await env.IDENTITY.get(key);
  return raw ? JSON.parse(raw) : null;
}

export async function deleteSetupToken(env, key) {
  await env.IDENTITY.delete(key);
}
