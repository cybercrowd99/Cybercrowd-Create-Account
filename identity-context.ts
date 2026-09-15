/**
 * CYBERCROWD
 *
 * REPO:
 * cybercrowd99/uIDL-User-Identification-Digital-Landing
 *
 * FILE:
 * identity-context.ts
 *
 * BUILD LAW:
 * 1 FILE
 * 1 JOB
 * 1 CONTRACT
 *
 * JOB:
 * Define the frozen IdentityContext v1 contract used
 * across CyberCrowd organ boundaries.
 *
 * THIS FILE DOES NOT:
 * - create identity
 * - create a root uIDL
 * - create an attachment
 * - authenticate a subject
 * - create a session
 * - revoke a session
 * - grant capability
 * - apply policy
 * - store passwords
 * - store credentials
 * - persist state
 * - perform routing
 * - perform verification
 * - execute organ behavior
 */

export type AuthenticationLevel =
  | "ANONYMOUS"
  | "ACCOUNT"
  | "VERIFIED"
  | "ROOT_CONFIRMED";

export type IdentitySubjectType =
  | "HUMAN"
  | "SERVICE"
  | "DEVICE"
  | "AGENT"
  | "SYSTEM";

export interface AuthorityContext {
  authorityId: string;

  capabilityIds: string[];

  policyVersion: string;

  issuedAt: string;

  expiresAt: string;
}

export interface IdentityContext {
  schemaVersion: "1";

  requestId: string;

  sessionId: string;

  subjectType: IdentitySubjectType;

  identityId: string;

  rootUidl: string;

  activeAttachmentId?: string;

  authenticationLevel: AuthenticationLevel;

  authority?: AuthorityContext;

  issuer: string;

  audience: string;

  issuedAt: string;

  expiresAt: string;

  sessionRevoked: boolean;
}
