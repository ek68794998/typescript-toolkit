import { getDaysInMonth } from "./getDaysInMonth";

describe("getDaysInMonth", () => {
	test.each<[number, number, number]>([
		[1988, 1, 31],
		[1990, 1, 31],
		[1988, 2, 29],
		[1990, 2, 28],
		[1988, 3, 31],
		[1990, 3, 31],
		[1988, 4, 30],
		[1990, 4, 30],
		[1988, 5, 31],
		[1990, 5, 31],
		[1988, 6, 30],
		[1990, 6, 30],
		[1988, 7, 31],
		[1990, 7, 31],
		[1988, 8, 31],
		[1990, 8, 31],
		[1988, 9, 30],
		[1990, 9, 30],
		[1988, 10, 31],
		[1990, 10, 31],
		[1988, 11, 30],
		[1990, 11, 30],
		[1988, 12, 31],
		[1990, 12, 31],
	])(
		"gets the proper value for year %p and month %p",
		(inputYear, inputMonth, expected) => {
			expect(
				getDaysInMonth(inputMonth, {
					isLeapYear: inputYear % 4 === 0,
				}),
			).toBe(expected);
		},
	);
});
