import { isString } from "../types/guards";
import { isError } from "./isError";

export const toError = (error: unknown): Error => {
	if (isError(error)) {
		return error;
	}

	if (isString(error) || error) {
		return new Error(`${error}`);
	}

	return new Error("Unknown error.");
};
