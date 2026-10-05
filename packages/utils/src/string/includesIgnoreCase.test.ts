import { includesIgnoreCase } from "./includesIgnoreCase";

describe("string/includesIgnoreCase", () => {
	test.each<[string, string, boolean]>([
		// Empty search
		["anything", "", true],
		["", "", true],

		// Exact matches
		["hello", "hello", true],
		["hello", "HELLO", true],
		["HELLO", "hello", true],

		// Partial matches
		["hello", "ell", true],
		["hello", "lo", true],
		["hello", "h", true],

		// Non-matches
		["hello", "world", false],
		["hello", "x", false],
		["hello", "hello!", false],
		["", "a", false],

		// Case insensitive
		["hello world", "HeLLo", true],
		["hello world", "WORLD", true],

		// Whitespace
		["hello world", "hello world", true],
		["hello world", "lo wo", true],
		["hello world", " ", true],
		["helloworld", " ", false],

		// Non-ASCII
		["Ärger", "är", true],
		["CAFÉ", "café", true],
	])(
		'includesIgnoreCase("%s", "%s") returns %s',
		(value, search, expected) => {
			expect(includesIgnoreCase(value, search)).toBe(expected);
		},
	);

	test("argument order matches String.prototype.includes", () => {
		expect(includesIgnoreCase("Hello World", "world")).toBe(true);
		expect(includesIgnoreCase("world", "Hello World")).toBe(false);
	});
});
