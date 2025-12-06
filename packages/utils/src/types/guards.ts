import { z } from "zod";

export const isArray = (obj: unknown): obj is unknown[] => Array.isArray(obj);

export const isBoolean = (obj: unknown): obj is boolean =>
	obj === true || obj === false;

// biome-ignore lint/complexity/noBannedTypes: Generic function-checking type guard.
export const isFunction = (obj: unknown): obj is Function =>
	typeof obj === "function";

export const isNull = (obj: unknown): obj is null => obj === null;

export const isNullOrUndefined = (obj: unknown): obj is null | undefined =>
	isNull(obj) || isUndefined(obj);

export const isNumber = (obj: unknown): obj is number =>
	typeof obj === "number";

export const isString = (obj: unknown): obj is string =>
	typeof obj === "string";

export const isUndefined = (obj: unknown): obj is undefined =>
	typeof obj === "undefined";

export const isUnknown = (obj: unknown): obj is unknown =>
	z.unknown().safeParse(obj).success;
