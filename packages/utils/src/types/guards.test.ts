import {
	isArray,
	isBoolean,
	isFunction,
	isNull,
	isNullOrUndefined,
	isNumber,
	isString,
	isUndefined,
	isUnknown,
} from "./guards";

describe("types/guards", () => {
	describe("isArray", () => {
		test.each<[unknown, boolean]>([
			[undefined, false],
			[null, false],
			[[], true],
			[[""], true],
			[["true"], true],
			[true, false],
			[false, false],
			[0, false],
			[1, false],
			[0.5, false],
			[-6.5, false],
			[100, false],
			["", false],
			["false", false],
			[{ a: "true" }, false],
		])("should produce the correct result for %s", (input, expected) => {
			expect(isArray(input)).toBe(expected);
		});
	});

	describe("isBoolean", () => {
		test.each<[unknown, boolean]>([
			[true, true],
			[false, true],
			[undefined, false],
			[null, false],
			[0, false],
			[1, false],
			[0.5, false],
			[-6.5, false],
			[100, false],
			["", false],
			["false", false],
			[["true"], false],
			[{ a: "true" }, false],
		])("should produce the correct result for %s", (input, expected) => {
			expect(isBoolean(input)).toBe(expected);
		});
	});

	describe("isFunction", () => {
		// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
		function mockFn1() {
			// Mock function
		}

		const mockFn2 = () => {
			// Mock function
		};

		test.each<[unknown, boolean]>([
			[undefined, false],
			[null, false],
			[0, false],
			[1, false],
			[0.5, false],
			[-6.5, false],
			[100, false],
			["", false],
			["false", false],
			["2022-05-05T05:05:05Z", false],
			[["true"], false],
			[{ a: "true" }, false],
			[mockFn1, true],
			[mockFn2, true],
			[isFunction, true],
			[
				() => {
					// Mock function
				},
				true,
			],
		])("should produce the correct result for %s", (input, expected) => {
			expect(isFunction(input)).toBe(expected);
		});
	});

	describe("isNull", () => {
		test.each<[unknown, boolean]>([
			[true, false],
			[false, false],
			[0, false],
			[-1, false],
			[1, false],
			[Number.NaN, false],
			["", false],
			["string", false],
			[[], false],
			[{}, false],
			[null, true],
			[undefined, false],
		])("should produce the correct result for %s", (input, expected) => {
			expect(isNull(input)).toBe(expected);
		});
	});

	describe("isNullOrUndefined", () => {
		test.each<[unknown, boolean]>([
			[true, false],
			[false, false],
			[0, false],
			[-1, false],
			[1, false],
			[Number.NaN, false],
			["", false],
			["string", false],
			[[], false],
			[{}, false],
			[null, true],
			[undefined, true],
		])("should produce the correct result for %s", (input, expected) => {
			expect(isNullOrUndefined(input)).toBe(expected);
		});
	});

	describe("isNumber", () => {
		test.each<[unknown, boolean]>([
			[undefined, false],
			[null, false],
			[0, true],
			[0.5, true],
			[-6.5, true],
			[100, true],
			[true, false],
			[false, false],
			["", false],
			["3", false],
			[["3"], false],
			[{ a: "3" }, false],
		])("should produce the correct result for %s", (input, expected) => {
			expect(isNumber(input)).toBe(expected);
		});
	});

	describe("isString", () => {
		test.each<[unknown, boolean]>([
			["", true],
			["a", true],
			["aaaaaaa", true],
			["bbbBBFBSRGt#T #wT", true],
			["日本語", true],
			["0", true],
			[true, false],
			[false, false],
			[null, false],
			[undefined, false],
			[0, false],
			[0.5, false],
			[-6.5, false],
			[100, false],
			[["a"], false],
			[{ a: "b" }, false],
		])("should produce the correct result for %s", (input, expected) => {
			expect(isString(input)).toBe(expected);
		});
	});

	describe("isUndefined", () => {
		test.each<[unknown, boolean]>([
			[true, false],
			[false, false],
			[0, false],
			[-1, false],
			[1, false],
			[Number.NaN, false],
			["", false],
			["string", false],
			[[], false],
			[{}, false],
			[null, false],
			[undefined, true],
		])("should produce the correct result for %s", (input, expected) => {
			expect(isUndefined(input)).toBe(expected);
		});
	});

	describe("isUnknown", () => {
		test.each<[unknown, boolean]>([
			[true, true],
			[false, true],
			[0, true],
			[-1, true],
			[1, true],
			[Number.NaN, true],
			["", true],
			["string", true],
			[[], true],
			[{}, true],
			[null, true],
			[undefined, true],
		])("should produce the correct result for %s", (input, expected) => {
			expect(isUnknown(input)).toBe(expected);
		});
	});
});
