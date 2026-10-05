import { isBoolean, isNullOrUndefined } from "../types";

export type FormDataInputValue =
	| string
	| number
	| boolean
	| Blob
	| null
	| undefined;

/**
 * Builds a `FormData` from a flat record. `null` and `undefined` entries are
 * skipped, `Blob`s (including `File`s) are appended as-is, booleans become
 * `"true"`/`"false"`, and everything else is stringified.
 */
export const toFormData = (
	data: Record<string, FormDataInputValue>,
): FormData => {
	const formData = new FormData();

	for (const [key, value] of Object.entries(data)) {
		if (isNullOrUndefined(value)) {
			continue;
		}

		if (value instanceof Blob) {
			formData.append(key, value);
		} else if (isBoolean(value)) {
			formData.append(key, value ? "true" : "false");
		} else {
			formData.append(key, String(value));
		}
	}

	return formData;
};
