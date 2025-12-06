import {
	isHexColor,
	isHtmlColor,
	isHtmlColorName,
	isRgbaColor,
	isRgbColor,
} from "./css";

type ColorTestCase = [
	value: unknown /* 0 */,
	isHtmlColorName: boolean /* 1 */,
	isHexColor: boolean /* 2 */,
	isRgbaColor: boolean /* 3 */,
	isRgbColor: boolean /* 4 */,
	isHtmlColor: boolean /* 5 */,
];

describe("types/css", () => {
	const colorTestCases: ColorTestCase[] = [
		// General values. None are valid for any test case.
		[undefined, false, false, false, false, false],
		[null, false, false, false, false, false],
		[true, false, false, false, false, false],
		[false, false, false, false, false, false],
		[0, false, false, false, false, false],
		[1, false, false, false, false, false],
		[0.5, false, false, false, false, false],
		[-6.5, false, false, false, false, false],
		[100, false, false, false, false, false],
		["", false, false, false, false, false],
		["string", false, false, false, false, false],
		[
			["string", false, false, false, false],
			false,
			false,
			false,
			false,
			false,
		],
		[{ a: "string" }, false, false, false, false, false],

		// Tricky fake color values. None are valid for any test case.
		["#123g", false, false, false, false, false],
		["#abcg", false, false, false, false, false],
		["rgb(0, -1, 0)", false, false, false, false, false],
		["rgb(0, 0, 0, 0)", false, false, false, false, false],
		["rgb(256, 0, 0)", false, false, false, false, false],
		["rgba(0, 0, 0, 0.5.1)", false, false, false, false, false],
		["rgba(0, 0, 0, 2.0)", false, false, false, false, false],
		["rgba(256, 0, 0, 0)", false, false, false, false, false],

		// Color values. Valid depending on method.
		["darkCyan", true, false, false, false, true],
		["floralWhite", true, false, false, false, true],
		["wheat", true, false, false, false, true],
		["#123", false, true, false, false, true],
		["#1234", false, true, false, false, true],
		["#abc", false, true, false, false, true],
		["#abcd", false, true, false, false, true],
		["rgb(0, 0, 0)", false, false, false, true, true],
		["rgb(0,0,0)", false, false, false, true, true],
		["rgb(1, 10, 100)", false, false, false, true, true],
		["rgb(1,10,100)", false, false, false, true, true],
		["rgba(0, 0, 0, 0)", false, false, true, false, true],
		["rgba(0,0,0,0)", false, false, true, false, true],
		["rgba(1, 10, 100, 0.5)", false, false, true, false, true],
		["rgba(1,10,100,0.5)", false, false, true, false, true],
	];

	describe("isHtmlColorName", () => {
		test.each<[unknown, boolean]>(
			colorTestCases.map((testCase) => [testCase[0], testCase[1]]),
		)("should produce the correct result for %p", (input, expected) => {
			expect(isHtmlColorName(input)).toBe(expected);
		});
	});

	describe("isHexColor", () => {
		test.each<[unknown, boolean]>(
			colorTestCases.map((testCase) => [testCase[0], testCase[2]]),
		)("should produce the correct result for %p", (input, expected) => {
			expect(isHexColor(input)).toBe(expected);
		});
	});

	describe("isRgbaColor", () => {
		test.each<[unknown, boolean]>(
			colorTestCases.map((testCase) => [testCase[0], testCase[3]]),
		)("should produce the correct result for %p", (input, expected) => {
			expect(isRgbaColor(input)).toBe(expected);
		});
	});

	describe("isRgbColor", () => {
		test.each<[unknown, boolean]>(
			colorTestCases.map((testCase) => [testCase[0], testCase[4]]),
		)("should produce the correct result for %p", (input, expected) => {
			expect(isRgbColor(input)).toBe(expected);
		});
	});

	describe("isHtmlColor", () => {
		test.each<[unknown, boolean]>(
			colorTestCases.map((testCase) => [testCase[0], testCase[5]]),
		)("should produce the correct result for %p", (input, expected) => {
			expect(isHtmlColor(input)).toBe(expected);
		});
	});
});
