import { entriesOf, fromEntriesOf, keysOf, omitKeys } from "./object";

describe("object/keysOf", () => {
	const crazyKeyFormat = "a-crazy@@&!& key";

	test.each<[Record<string, unknown>, unknown[]]>([
		[{}, []],
		[{ [crazyKeyFormat]: 1 }, [crazyKeyFormat]],
		[{ a: 1, b: 2 }, ["a", "b"]],
		[{ a: 1, b: { c: 4 } }, ["a", "b"]],
	])("produces correct keys for %s", (input, expected) => {
		expect(keysOf(input)).toMatchObject(expected);
	});
});

describe("object/entriesOf", () => {
	const crazyKeyFormat = "a-crazy@@&!& key";

	test.each<[Record<string, unknown>, unknown[]]>([
		[{}, []],
		[{ [crazyKeyFormat]: 1 }, [[crazyKeyFormat, 1]]],
		[
			{ a: 1, b: 2 },
			[
				["a", 1],
				["b", 2],
			],
		],
		[
			{ a: 1, b: { c: 4 } },
			[
				["a", 1],
				["b", { c: 4 }],
			],
		],
	])("produces correct entries for %s", (input, expected) => {
		expect(entriesOf(input)).toMatchObject(expected);
	});
});

describe("object/fromEntriesOf", () => {
	const crazyKeyFormat = "a-crazy@@&!& key";

	test.each<[[string, unknown][], Record<string, unknown>]>([
		[[], {}],
		[[[crazyKeyFormat, 1]], { [crazyKeyFormat]: 1 }],
		[
			[
				["a", 1],
				["b", 2],
			],
			{ a: 1, b: 2 },
		],
		[
			[
				["a", 1],
				["b", { c: 4 }],
			],
			{ a: 1, b: { c: 4 } },
		],
	])("produces correct object for %s", (input, expected) => {
		expect(fromEntriesOf(input)).toMatchObject(expected);
	});

	test("round-trips with entriesOf", () => {
		const original = { a: 1, b: 2, c: 3 };

		expect(fromEntriesOf(entriesOf(original))).toMatchObject(original);
	});
});

describe("object/omitKeys", () => {
	test.each<[Record<string, unknown>, string[], Record<string, unknown>]>([
		[
			{ id: 42, name: "test", value: 100 },
			["id"],
			{ name: "test", value: 100 },
		],
		[{ id: 1 }, ["id"], {}],
		[{ a: 1, b: 2, c: 3 }, ["a", "c"], { b: 2 }],
		[{ a: 1, b: 2 }, [], { a: 1, b: 2 }],
		[{ a: 1, b: 2 }, ["a", "a"], { b: 2 }],
		[{ a: undefined, b: 2 }, ["a"], { b: 2 }],
	])("omits from %p the keys %p", (input, keys, expected) => {
		const result = omitKeys(input, ...keys);

		expect(result).toStrictEqual(expected);
	});

	test("returns a shallow copy and does not mutate the input", () => {
		const nested = { deep: true };
		const input = { id: 1, nested };

		const result = omitKeys(input, "id");

		expect(result).not.toBe(input);
		expect(result.nested).toBe(nested);
		expect(input).toStrictEqual({ id: 1, nested });
	});

	test("returns a new object even when no keys are omitted", () => {
		const input = { a: 1 };

		expect(omitKeys(input)).not.toBe(input);
	});

	test("handles symbol and numeric keys", () => {
		const sym = Symbol("s");
		const input = { 1: "one", [sym]: "sym", keep: true };

		const result = omitKeys<typeof input, typeof sym | 1>(input, sym, 1);

		expect(result).toStrictEqual({ keep: true });
		expect(input[sym]).toBe("sym");
	});

	test("narrows the result type", () => {
		const result = omitKeys({ a: 1, b: "x", c: true }, "a", "c");

		expectTypeOf(result).toEqualTypeOf<{ b: string }>();
	});
});
