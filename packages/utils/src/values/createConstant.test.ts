import { type ConstantValue, createConstant } from "./createConstant";

describe("values/createConstant", () => {
	const Color = createConstant("Color", ["red", "green", "blue"]);
	type Color = ConstantValue<typeof Color>;

	const Mixed = createConstant("Mixed", ["a", 1, true, Number.NaN]);

	test("exposes the name and values", () => {
		expect(Color.name).toBe("Color");
		expect(Color.values).toEqual(["red", "green", "blue"]);
	});

	test.each<[unknown, boolean]>([
		["red", true],
		["green", true],
		["blue", true],
		["RED", false],
		["", false],
		["purple", false],
		[0, false],
		[null, false],
		[undefined, false],
		[{}, false],
		[["red"], false],
		[new String("red"), false],
	])("isConstant(%p) is %p", (input, expected) => {
		expect(Color.isConstant(input)).toBe(expected);
	});

	test.each<[unknown, boolean]>([
		["a", true],
		[1, true],
		[true, true],
		[Number.NaN, true],
		["1", false],
		["true", false],
		[false, false],
		[0, false],
	])("supports mixed primitives: isConstant(%p) is %p", (input, expected) => {
		expect(Mixed.isConstant(input)).toBe(expected);
	});

	test("asConstant returns known values", () => {
		for (const value of Color.values) {
			expect(Color.asConstant(value)).toBe(value);
		}
	});

	test.each<[string, unknown, string]>([
		["a string", "purple", "purple"],
		["a number", 42, "42"],
		["null", null, "null"],
		["undefined", undefined, "undefined"],
		["a symbol", Symbol("s"), "Symbol(s)"],
		["a null-prototype object", Object.create(null), "object"],
	])(
		"asConstant throws a descriptive error for %s",
		(_label, input, described) => {
			expect(() => Color.asConstant(input)).toThrow(
				`Unable to convert value '${described}' to a known constant of type Color.`,
			);
		},
	);

	test("does not share state with the input array", () => {
		const input: ("x" | "y")[] = ["x", "y"];
		const XY = createConstant("XY", input as ["x" | "y"]);

		input[0] = "y";

		expect(XY.values).toEqual(["x", "y"]);
		expect(XY.isConstant("x")).toBe(true);
	});

	test("is frozen", () => {
		expect(Object.isFrozen(Color)).toBe(true);
		expect(Object.isFrozen(Color.values)).toBe(true);
	});

	test("infers literal types without `as const`", () => {
		expectTypeOf<Color>().toEqualTypeOf<"red" | "green" | "blue">();
		expectTypeOf<ConstantValue<typeof Mixed>>().toEqualTypeOf<
			"a" | 1 | true | number
		>();
		expectTypeOf(Color.values).toEqualTypeOf<
			readonly [Color, ...Color[]]
		>();
		expectTypeOf(Color.asConstant).returns.toEqualTypeOf<Color>();
	});

	test("isConstant narrows unknown input", () => {
		const input: unknown = "red";

		if (Color.isConstant(input)) {
			expectTypeOf(input).toEqualTypeOf<Color>();
		}
	});

	test("rejects empty and non-primitive values at the type level", () => {
		// @ts-expect-error At least one value is required.
		expect(() => createConstant("Empty", [])).not.toThrow();

		// @ts-expect-error Only primitives are supported.
		createConstant("Objects", [{ a: 1 }]);
	});
});
