import { clamp, clampIndex } from "./clamp";

describe("clamp", () => {
	describe("clamp()", () => {
		test.each<[number, number | undefined, number | undefined, number]>([
			[1, 0, 5, 1],
			[1, 1, 5, 1],
			[1, 2, 5, 2],
			[2, 2, 5, 2],
			[3, 2, 5, 3],
			[4, 2, 5, 4],
			[5, 2, 5, 5],
			[6, 2, 5, 5],
			[1, 2.5, 5.5, 2.5],
			[7, 2.5, 5.5, 5.5],
			[1, undefined, 5, 1],
			[1, undefined, 5, 1],
			[2, undefined, 5, 2],
			[3, undefined, 5, 3],
			[4, undefined, 5, 4],
			[5, undefined, 5, 5],
			[6, undefined, 5, 5],
			[1, undefined, 5.5, 1],
			[7, undefined, 5.5, 5.5],
			[1, 0, undefined, 1],
			[1, 1, undefined, 1],
			[1, 2, undefined, 2],
			[2, 2, undefined, 2],
			[3, 2, undefined, 3],
			[4, 2, undefined, 4],
			[5, 2, undefined, 5],
			[6, 2, undefined, 6],
			[1, 2.5, undefined, 2.5],
			[7, 2.5, undefined, 7],
			[1, undefined, undefined, 1],
			[1, undefined, undefined, 1],
			[1, undefined, undefined, 1],
			[2, undefined, undefined, 2],
			[3, undefined, undefined, 3],
			[4, undefined, undefined, 4],
			[5, undefined, undefined, 5],
			[6, undefined, undefined, 6],
			[1, undefined, undefined, 1],
			[7, undefined, undefined, 7],
		])(
			"correctly handles the value %p with min=%p, max=%p (%#)",
			(inputValue, inputMin, inputMax, expected) => {
				expect(clamp(inputValue, inputMin, inputMax)).toBe(expected);
			},
		);
	});

	describe("clampIndex()", () => {
		test.each<[number, unknown[], number]>([
			[1, [], 0],
			[1, [0], 0],
			[1, [0, 0], 1],
			[3, [0], 0],
			[3, [0, 0], 1],
		])(
			"correctly handles the value %p with array=%p (%#)",
			(inputValue, inputArray, expected) => {
				expect(clampIndex(inputValue, inputArray)).toBe(expected);
			},
		);
	});
});
