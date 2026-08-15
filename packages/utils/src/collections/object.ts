export const keysOf = <T extends object>(obj: T): (keyof T)[] =>
	Array.from(Object.keys(obj)) as (keyof T)[]; // eslint-disable-line @typescript-eslint/consistent-type-assertions

export const entriesOf = <T extends object>(obj: T): [keyof T, T[keyof T]][] =>
	Array.from(Object.entries(obj)) as [keyof T, T[keyof T]][]; // eslint-disable-line @typescript-eslint/consistent-type-assertions

export const fromEntriesOf = <K extends PropertyKey, V>(
	entries: readonly (readonly [K, V])[],
): Record<K, V> => Object.fromEntries(entries) as Record<K, V>; // eslint-disable-line @typescript-eslint/consistent-type-assertions
