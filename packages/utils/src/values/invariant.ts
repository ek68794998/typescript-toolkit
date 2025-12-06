import { isFunction, isNullOrUndefined, isString } from "../types/guards";

type Failure = string | Error;

export type InvariantAssertion = (value: unknown) => asserts value;

export type InvariantAssertionWithMessage = (
	value: unknown,
	failure?: Failure | (() => Failure),
) => asserts value;

export const invariant: InvariantAssertionWithMessage = (
	value,
	failure,
): asserts value => {
	if (value === false || isNullOrUndefined(value)) {
		const failureOutput = isFunction(failure) ? failure() : failure;

		if (isString(failureOutput)) {
			throw new Error(
				failureOutput || `Assertion failed on value '${value}'.`,
			);
		}

		throw failureOutput;
	}
};
