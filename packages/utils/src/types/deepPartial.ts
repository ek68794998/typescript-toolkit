/**
 * Recursively makes every property of `T` optional. Functions and primitives
 * pass through unchanged, and arrays (including tuples) become arrays of
 * `DeepPartial` elements, preserving `readonly`.
 */
export type DeepPartial<T> = T extends (...args: never[]) => unknown
	? T
	: T extends (infer U)[]
		? DeepPartial<U>[]
		: T extends readonly (infer U)[]
			? readonly DeepPartial<U>[]
			: T extends object
				? { [P in keyof T]?: DeepPartial<T[P]> }
				: T;
