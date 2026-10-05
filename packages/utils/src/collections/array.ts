import {
	type ConstantValue,
	createConstant,
	invariant,
	unreachable,
} from "../values";

export const getMaxBy = <T>(
	items: T[],
	getValue: (item: T) => number,
): T | undefined => {
	let maxValue = Number.NEGATIVE_INFINITY;
	let maxItem: T | undefined;
	let hasMax = false;

	for (const item of items) {
		const value = getValue(item);

		if (!hasMax || value > maxValue) {
			maxValue = value;
			maxItem = item;
			hasMax = true;
		}
	}

	return maxItem;
};

// `Array.isArray` does not narrow `readonly` arrays out of a union.
const isReadonlyArray = <T>(value: T | readonly T[]): value is readonly T[] =>
	Array.isArray(value);

/**
 * Wraps a single value in an array. If the value is already an array, a
 * shallow copy is returned, so the result is always safe to mutate.
 */
export const toArray = <T>(value: T | readonly T[]): T[] =>
	isReadonlyArray(value) ? [...value] : [value];

export const MovePosition = createConstant("MovePosition", [
	"up",
	"down",
	"top",
	"bottom",
]);

export type MovePosition = ConstantValue<typeof MovePosition>;

/**
 * Returns a copy of `items` with the item at `fromIndex` moved one step up or
 * down, or to the top or bottom. Moves past either end are clamped. If
 * `fromIndex` is not a valid index, an unchanged copy is returned. The input
 * array is never mutated.
 */
export const moveItem = <T>(
	items: readonly T[],
	fromIndex: number,
	position: MovePosition,
): T[] => {
	const itemsCount = items.length;
	const itemsCopy = [...items];

	if (
		!Number.isInteger(fromIndex) ||
		fromIndex < 0 ||
		fromIndex >= itemsCount
	) {
		return itemsCopy;
	}

	const removed = itemsCopy.splice(fromIndex, 1);

	invariant(removed.length === 1);

	let targetIndex: number;

	switch (position) {
		case "up":
			targetIndex = Math.max(0, fromIndex - 1);
			break;
		case "down":
			targetIndex = Math.min(itemsCount - 1, fromIndex + 1);
			break;
		case "top":
			targetIndex = 0;
			break;
		case "bottom":
			targetIndex = itemsCount - 1;
			break;
		default:
			return unreachable(position);
	}

	itemsCopy.splice(targetIndex, 0, ...removed);

	return itemsCopy;
};
