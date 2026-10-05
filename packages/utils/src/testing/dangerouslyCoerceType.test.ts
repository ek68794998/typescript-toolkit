import { dangerouslyCoerceType } from "./dangerouslyCoerceType";

describe("testing/dangerouslyCoerceType", () => {
	const obj = { a: 1 };

	test.each<unknown>([undefined, null, 0, "", "text", obj, [1, 2]])(
		"returns %p unchanged",
		(input) => {
			expect(dangerouslyCoerceType<string>(input)).toBe(input);
		},
	);

	test("is typed as the target type", () => {
		expectTypeOf(dangerouslyCoerceType<string>(1)).toEqualTypeOf<string>();
	});
});
