import { possibleNumberToNumber } from "./possibleNumberToNumber";

describe("possibleNumberToNumber()", () => {
	test.each<[string | number | null | undefined, number | undefined]>([
		["-123", -123],
		["-123.45", -123],
		["123", 123],
		["123.45", 123],
		[null, undefined],
		[undefined, undefined],
		["", undefined],
		["abc", undefined],
	])(
		"correctly handles the value %p with min=%p, max=%p (%#)",
		(inputValue, expected) => {
			expect(possibleNumberToNumber(inputValue)).toBe(expected);
		},
	);
});
