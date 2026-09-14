/**
 * CYBERCROWD
 *
 * REPO:
 * cybercrowd99/Cybercrowd-Create-Account
 *
 * FILE:
 * organ-boundary.ts
 *
 * BUILD LAW:
 * 1 FILE
 * 1 JOB
 * 1 CONTRACT
 *
 * JOB:
 * Define the canonical structural boundary declaration
 * between one source organ and one destination organ.
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
 * - move payloads
 * - perform routing
 * - issue results
 * - issue receipts
 */

export interface OrganBoundary {
  readonly schemaVersion: "1";

  readonly boundaryId: string;

  readonly sourceOrganId: string;

  readonly destinationOrganId: string;

  readonly action: string;

  readonly expectedAudience: string;

  readonly trustedIssuers: readonly string[];
}
