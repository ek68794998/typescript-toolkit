export type ConstantPrimitive = string | number | boolean;

export interface Constant<TValue extends ConstantPrimitive> {
	/** Returns `input` as a known value, or throws if it is not one. */
	asConstant: (input: unknown) => TValue;
	/** Returns whether `input` is one of the known values. */
	isConstant: (input: unknown) => input is TValue;
	name: string;
	values: readonly [TValue, ...TValue[]];
}

/** Extracts the value union from a `Constant`. */
export type ConstantValue<TConstant extends Constant<ConstantPrimitive>> =
	TConstant extends Constant<infer TValue> ? TValue : never;

/**
 * Defines a fixed set of primitive values with a runtime type guard and parser.
 * Values are inferred as literals, so no `as const` is needed. Pair it with a
 * same-named type to use one name for both:
 *
 * ```ts
 * export const Direction = createConstant("Direction", ["up", "down"]);
 * export type Direction = ConstantValue<typeof Direction>;
 * ```
 */
export const createConstant = <
	const TValues extends readonly [ConstantPrimitive, ...ConstantPrimitive[]],
>(
	name: string,
	values: TValues,
): Constant<TValues[number]> => {
	type TValue = TValues[number];

	const [first, ...rest] = values;
	const frozenValues: Constant<TValue>["values"] = Object.freeze([
		first,
		...rest,
	]);
	const valueSet = new Set<unknown>(frozenValues);

	const isConstant = (input: unknown): input is TValue => valueSet.has(input);

	const asConstant = (input: unknown): TValue => {
		if (isConstant(input)) {
			return input;
		}

		throw new Error(
			`Unable to convert value '${describeValue(input)}' to a known constant of type ${name}.`,
		);
	};

	return Object.freeze({
		asConstant,
		isConstant,
		name,
		values: frozenValues,
	});
};

// `String()` throws for some inputs, like objects with a `null` prototype.
const describeValue = (input: unknown): string => {
	try {
		return String(input);
	} catch {
		return typeof input;
	}
};
