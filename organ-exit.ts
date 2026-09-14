/**
 * CYBERCROWD
 *
 * REPO:
 * cybercrowd99/Cybercrowd-Create-Account
 *
 * FILE:
 * organ-exit.ts
 *
 * BUILD LAW:
 * 1 FILE
 * 1 JOB
 * 1 CONTRACT
 *
 * JOB:
 * Define the canonical outbound exit reference
 * for one organ after processing completes.
 *
 * STRUCTURAL LAW:
 * The exit identifies where completed organ output leaves.
 * It does not perform routing or movement.
 *
 * THIS FILE DOES NOT:
 * - create identity
 * - copy IdentityContext
 * - authenticate subjects
 * - create sessions
 * - grant authority
 * - grant capabilities
 * - apply policy
 * - execute requests
 * - create OrganResult
 * - create OrganReceipt
 * - perform routing
 * - move payloads
 * - persist state
 */

export interface OrganExit {
  readonly schemaVersion: "1";

  readonly exitId: string;

  readonly organId: string;

  readonly boundaryId: string;
}
