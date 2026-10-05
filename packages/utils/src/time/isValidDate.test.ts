import { isValidDate } from "./isValidDate";

describe("time/isValidDate", () => {
	test.each<[string, Date | string | number, boolean]>([
		["valid date string", "2024-01-15", true],
		["valid date-time string", "2024-01-15T09:30:00.000Z", true],
		["invalid string", "not-a-date", false],
		["empty string", "", false],
		["random text", "hello world", false],
		["valid Date object", new Date("2024-01-15"), true],
		["Invalid Date object", new Date("not-a-date"), false],
		["epoch zero", 0, true],
		["positive epoch ms", 1_705_312_200_000, true],
		["negative epoch ms", -86_400_000, true],
		["max representable epoch ms", 8.64e15, true],
		["beyond max epoch ms", 8.64e15 + 1, false],
		["NaN", Number.NaN, false],
		["Infinity", Number.POSITIVE_INFINITY, false],
	])("%s", (_label, input, expected) => {
		expect(isValidDate(input)).toBe(expected);
	});
});
