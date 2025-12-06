export const getDaysInMonth = (
	month: number,
	options: { isLeapYear: boolean },
): number => new Date(options.isLeapYear ? 2000 : 2001, month, 0).getDate();
