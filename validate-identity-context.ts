/**
 * CYBERCROWD
 *
 * REPO:
 * cybercrowd99/Cybercrowd-Create-Account
 *
 * FILE:
 * validate-identity-context.ts
 *
 * BUILD LAW:
 * 1 FILE
 * 1 JOB
 * 1 FUNCTION
 *
 * JOB:
 * Validate an incoming IdentityContext v1 envelope
 * before the receiving organ accepts it.
 *
 * THIS FILE DOES NOT:
 * - create identity
 * - create rootUidl
 * - create attachments
 * - authenticate subjects
 * - create sessions
 * - revoke sessions
 * - grant capabilities
 * - apply capability policy
 * - resolve attachment ownership
 * - store credentials
 * - persist state
 * - perform routing
 * - replace Auth authority
 * - replace Session authority
 */

import type {
  IdentityContext,
} from "./identity-context";

export function validateIdentityContext(
  input: unknown,
  expectedAudience: string,
  trustedIssuers: readonly string[],
  now: number = Date.now(),
): input is IdentityContext {
  if (
    typeof input !== "object" ||
    input === null
  ) {
    return false;
  }

  const context =
    input as Record<string, unknown>;

  if (context.schemaVersion !== "1") {
    return false;
  }

  const requiredStrings = [
    "requestId",
    "sessionId",
    "identityId",
    "rootUidl",
    "issuer",
    "audience",
    "issuedAt",
    "expiresAt",
  ] as const;

  for (const field of requiredStrings) {
    if (
      typeof context[field] !== "string" ||
      context[field].length === 0
    ) {
      return false;
    }
  }

  const validSubjectTypes = new Set([
    "HUMAN",
    "SERVICE",
    "DEVICE",
    "AGENT",
    "SYSTEM",
  ]);

  if (
    typeof context.subjectType !== "string" ||
    !validSubjectTypes.has(context.subjectType)
  ) {
    return false;
  }

  const validAuthenticationLevels = new Set([
    "ANONYMOUS",
    "ACCOUNT",
    "VERIFIED",
    "ROOT_CONFIRMED",
  ]);

  if (
    typeof context.authenticationLevel !== "string" ||
    !validAuthenticationLevels.has(
      context.authenticationLevel,
    )
  ) {
    return false;
  }

  if (
    context.activeAttachmentId !== undefined &&
    (
      typeof context.activeAttachmentId !== "string" ||
      context.activeAttachmentId.length === 0
    )
  ) {
    return false;
  }

  if (
    typeof context.sessionRevoked !== "boolean"
  ) {
    return false;
  }

  if (context.sessionRevoked) {
    return false;
  }

  if (context.audience !== expectedAudience) {
    return false;
  }

  if (
    typeof context.issuer !== "string" ||
    !trustedIssuers.includes(context.issuer)
  ) {
    return false;
  }

  const issuedAt =
    Date.parse(context.issuedAt as string);

  const expiresAt =
    Date.parse(context.expiresAt as string);

  if (
    !Number.isFinite(issuedAt) ||
    !Number.isFinite(expiresAt)
  ) {
    return false;
  }

  if (issuedAt > now) {
    return false;
  }

  if (expiresAt <= now) {
    return false;
  }

  if (expiresAt <= issuedAt) {
    return false;
  }

  if (context.authority !== undefined) {
    if (
      typeof context.authority !== "object" ||
      context.authority === null
    ) {
      return false;
    }

    const authority =
      context.authority as Record<string, unknown>;

    if (
      typeof authority.authorityId !== "string" ||
      authority.authorityId.length === 0 ||
      typeof authority.policyVersion !== "string" ||
      authority.policyVersion.length === 0 ||
      typeof authority.issuedAt !== "string" ||
      typeof authority.expiresAt !== "string" ||
      !Array.isArray(authority.capabilityIds) ||
      !authority.capabilityIds.every(
        (capabilityId) =>
          typeof capabilityId === "string" &&
          capabilityId.length > 0,
      )
    ) {
      return false;
    }

    const authorityIssuedAt =
      Date.parse(authority.issuedAt);

    const authorityExpiresAt =
      Date.parse(authority.expiresAt);

    if (
      !Number.isFinite(authorityIssuedAt) ||
      !Number.isFinite(authorityExpiresAt) ||
      authorityIssuedAt > now ||
      authorityExpiresAt <= now ||
      authorityExpiresAt <= authorityIssuedAt
    ) {
      return false;
    }
  }

  return true;
}
