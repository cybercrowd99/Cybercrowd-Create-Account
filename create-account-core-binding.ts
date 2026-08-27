/**
 * CyberCrowd-Core — Create Account → CORE Binding V1
 *
 * BUILD LAW:
 * 1 FILE
 * 1 JOB
 * 1 FUNCTION
 *
 * ONE JOB:
 * Bind the declared Create Account rail to the CORE boundary
 * as an immutable structural reference.
 *
 * Structural binding only.
 *
 * This file does NOT:
 * - execute Create Account behavior
 * - execute CORE behavior
 * - mutate Create Account state
 * - mutate CORE state
 * - create routing authority
 * - create authentication authority
 * - create email authority
 * - create session authority
 * - create storage authority
 * - expose Create Account internals
 * - absorb the Create Account rail
 */

export type CreateAccountCoreBindingStatus =
  | "CREATE_ACCOUNT_CORE_BINDING_CREATED"
  | "CREATE_ACCOUNT_CORE_BINDING_INVALID";

export interface CreateAccountCoreBindingInput {
  readonly railReference: string;
  readonly entryReference: string;
  readonly exitReference: string;
}

export interface CreateAccountCoreBinding {
  readonly status:
    CreateAccountCoreBindingStatus;

  readonly railReference: string;

  readonly entryReference: string;

  readonly exitReference: string;

  readonly bindingReference: string;

  readonly createdAt: number;
}

/**
 * Creates the immutable structural binding
 * between the Create Account rail and CORE.
 */
export const createCreateAccountCoreBinding = (
  input: CreateAccountCoreBindingInput,
): CreateAccountCoreBinding => {
  const valid =
    Boolean(input.railReference) &&
    Boolean(input.entryReference) &&
    Boolean(input.exitReference);

  if (!valid) {
    throw new Error(
      "INVALID_CREATE_ACCOUNT_CORE_BINDING_INPUT",
    );
  }

  return Object.freeze({
    status:
      "CREATE_ACCOUNT_CORE_BINDING_CREATED",

    railReference:
      input.railReference,

    entryReference:
      input.entryReference,

    exitReference:
      input.exitReference,

    bindingReference:
      `create-account-core-binding:${crypto.randomUUID()}`,

    createdAt:
      Date.now(),
  });
};
