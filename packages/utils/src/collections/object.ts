export const keysOf = <T extends object>(obj: T): (keyof T)[] =>
	Array.from(Object.keys(obj)) as (keyof T)[]; // eslint-disable-line @typescript-eslint/consistent-type-assertions

export const entriesOf = <T extends object>(obj: T): [keyof T, T[keyof T]][] =>
	Array.from(Object.entries(obj)) as [keyof T, T[keyof T]][]; // eslint-disable-line @typescript-eslint/consistent-type-assertions

export const fromEntriesOf = <K extends PropertyKey, V>(
	entries: readonly (readonly [K, V])[],
): Record<K, V> => Object.fromEntries(entries) as Record<K, V>; // eslint-disable-line @typescript-eslint/consistent-type-assertions

/**
 * Returns a shallow copy of `obj` without the given keys. The input object is
 * never mutated.
 */
export const omitKeys = <T extends object, K extends keyof T>(
	obj: T,
	...keys: K[]
): Omit<T, K> => {
	const copy = { ...obj };

	for (const key of keys) {
		delete copy[key];
	}

	return copy;
};
