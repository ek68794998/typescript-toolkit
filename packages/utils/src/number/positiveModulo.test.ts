import { positiveModulo } from "./positiveModulo";

describe("positiveModulo", () => {
	test.each<[number, number, number]>([
		[10, 2, 0],
		[17, 3, 2],
		[-3, 2, 1],
		[-17, 3, 1],
		[0, 2, 0],
		[1, 0, NaN],
	])(
		"correctly handles the value %p with min=%p, max=%p (%#)",
		(inputBase, inputDiv, expected) => {
			expect(positiveModulo(inputBase, inputDiv)).toBe(expected);
		},
	);
});
