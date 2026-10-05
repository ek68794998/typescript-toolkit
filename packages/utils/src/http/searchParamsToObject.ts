/**
 * Converts `URLSearchParams` to a plain object. A key that appears once maps
 * to its string value; a repeated key maps to an array of its values, in order.
 */
export const searchParamsToObject = (
	searchParams: URLSearchParams,
): Record<string, string | string[]> => {
	// A `Map` avoids collisions with `Object.prototype` keys like `toString`
	// and `__proto__`; `Object.fromEntries` then defines them as own properties.
	const values = new Map<string, string | string[]>();

	for (const [key, value] of searchParams.entries()) {
		const existing = values.get(key);

		if (existing === undefined) {
			values.set(key, value);
		} else if (Array.isArray(existing)) {
			existing.push(value);
		} else {
			values.set(key, [existing, value]);
		}
	}

	return Object.fromEntries(values);
};
