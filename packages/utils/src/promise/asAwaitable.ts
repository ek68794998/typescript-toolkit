import { isFunction } from "../types/guards";

export const asAwaitable = <T>(
	promise: Promise<T> | (() => Promise<T>),
): Promise<T> => (isFunction(promise) ? promise() : promise);
