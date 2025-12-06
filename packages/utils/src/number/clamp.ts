import { isUndefined } from "../types";

export const clamp = (
	value: number,
	min: number | undefined,
	max: number | undefined,
): number => {
	if (!isUndefined(max) && value > max) {
		return max;
	}

	if (!isUndefined(min) && value < min) {
		return min;
	}

	return value;
};

export const clampIndex = (index: number, array: unknown[]): number => {
	let value = index;

	if (value > array.length - 1) {
		value = array.length - 1;
	}

	if (value < 0) {
		value = 0;
	}

	return value;
};
