/**
 * CYBERCROWD
 *
 * REPO:
 * cybercrowd99/Cybercrowd-Create-Account
 *
 * FILE:
 * organ-result.ts
 *
 * BUILD LAW:
 * 1 FILE
 * 1 JOB
 * 1 CONTRACT
 *
 * JOB:
 * Define the canonical result envelope returned
 * after one organ processes one request.
 *
 * THIS FILE DOES NOT:
 * - create identity
 * - copy IdentityContext
 * - create sessions
 * - authenticate subjects
 * - grant authority
 * - validate authority
 * - apply policy
 * - perform routing
 * - persist state
 * - issue receipts
 * - replace the original request
 */

export type OrganResultStatus =
  | "SUCCESS"
  | "REJECTED"
  | "FAILED";

export interface OrganResult<
  TData = unknown,
> {
  readonly schemaVersion: "1";

  readonly requestId: string;

  readonly organId: string;

  readonly action: string;

  readonly status: OrganResultStatus;

  readonly data?: TData;

  readonly errorCode?: string;

  readonly completedAt: string;
}
