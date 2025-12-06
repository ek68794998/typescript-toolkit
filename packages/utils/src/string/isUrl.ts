import { isString } from "../types";

export const isUrl = (obj: unknown): boolean => {
	if (!isString(obj)) {
		return false;
	}

	try {
		new URL(obj);
	} catch {
		return false;
	}

	return true;
};
