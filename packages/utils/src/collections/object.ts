export const keysOf = <T extends object>(obj: T): (keyof T)[] =>
	Array.from(Object.keys(obj)) as (keyof T)[]; // eslint-disable-line @typescript-eslint/consistent-type-assertions
