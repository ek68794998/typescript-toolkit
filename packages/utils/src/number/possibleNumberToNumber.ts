export const possibleNumberToNumber = (
	parameter: string | number | null | undefined,
): number | undefined => {
	const parsedNumber = Number.parseInt(`${parameter}`, 10);
	return isNaN(parsedNumber) ? undefined : parsedNumber;
};
