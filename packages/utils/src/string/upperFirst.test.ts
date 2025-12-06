import { upperFirst } from "./upperFirst";

describe("string/upperFirst", () => {
	test.each<[string, string]>([
		["", ""],
		["a", "A"],
		["A", "A"],
		["ab", "Ab"],
		["Ab", "Ab"],
		["AB", "AB"],
		["aB", "AB"],
		["abbbbbCddddd effffff", "AbbbbbCddddd effffff"],
		["AbbbbbCddddd Effffff", "AbbbbbCddddd Effffff"],
	])("converts '%s' to '%s'", (input, expected) => {
		expect(upperFirst(input)).toBe(expected);
	});
});
