/**
 * CYBERCROWD
 *
 * REPO:
 * cybercrowd99/Cybercrowd-Create-Account
 *
 * FILE:
 * organ-entry.ts
 *
 * BUILD LAW:
 * 1 FILE
 * 1 JOB
 * 1 CONTRACT
 *
 * JOB:
 * Define the canonical receiving entry reference
 * for one organ and one declared OrganBoundary.
 *
 * STRUCTURAL LAW:
 * The entry references the boundary.
 * It does not duplicate boundary rules.
 *
 * THIS FILE DOES NOT:
 * - create identity
 * - copy IdentityContext
 * - authenticate subjects
 * - create sessions
 * - grant authority
 * - grant capabilities
 * - apply policy
 * - perform validation
 * - execute requests
 * - perform routing
 * - move payloads
 * - issue results
 * - issue receipts
 */

export interface OrganEntry {
  readonly schemaVersion: "1";

  readonly entryId: string;

  readonly organId: string;

  readonly boundaryId: string;
}
