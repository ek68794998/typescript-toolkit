export const getMaxBy = <T>(
	items: T[],
	getValue: (item: T) => number,
): T | undefined => {
	let maxValue = Number.MIN_VALUE;
	let maxItem: T | undefined;

	for (const item of items) {
		const value = getValue(item);

		if (value > maxValue) {
			maxValue = value;
			maxItem = item;
		}
	}

	return maxItem;
};
