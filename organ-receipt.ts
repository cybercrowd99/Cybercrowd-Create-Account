/**
 * CYBERCROWD
 *
 * REPO:
 * cybercrowd99/Cybercrowd-Create-Account
 *
 * FILE:
 * organ-receipt.ts
 *
 * BUILD LAW:
 * 1 FILE
 * 1 JOB
 * 1 CONTRACT
 *
 * JOB:
 * Define the canonical receipt proving that one organ
 * received and processed one declared request/result pair.
 *
 * THIS FILE DOES NOT:
 * - create identity
 * - copy IdentityContext
 * - create sessions
 * - authenticate subjects
 * - grant authority
 * - apply policy
 * - execute actions
 * - replace OrganResult
 * - persist itself
 * - perform routing
 */

export type OrganReceiptStatus =
  | "ACCEPTED"
  | "REJECTED"
  | "FAILED";

export interface OrganReceipt {
  readonly schemaVersion: "1";

  readonly receiptId: string;

  readonly requestId: string;

  readonly organId: string;

  readonly action: string;

  readonly status: OrganReceiptStatus;

  readonly resultStatus:
    | "SUCCESS"
    | "REJECTED"
    | "FAILED";

  readonly receivedAt: string;

  readonly completedAt: string;

  readonly issuedAt: string;
}
