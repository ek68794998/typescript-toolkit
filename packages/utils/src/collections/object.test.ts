import { entriesOf, fromEntriesOf, keysOf } from "./object";

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
		[{ a: 1, b: 2 }, [["a", 1], ["b", 2]]],
		[{ a: 1, b: { c: 4 } }, [["a", 1], ["b", { c: 4 }]]],
	])("produces correct entries for %s", (input, expected) => {
		expect(entriesOf(input)).toMatchObject(expected);
	});
});

describe("object/fromEntriesOf", () => {
	const crazyKeyFormat = "a-crazy@@&!& key";

	test.each<[[string, unknown][], Record<string, unknown>]>([
		[[], {}],
		[[[crazyKeyFormat, 1]], { [crazyKeyFormat]: 1 }],
		[[["a", 1], ["b", 2]], { a: 1, b: 2 }],
		[[["a", 1], ["b", { c: 4 }]], { a: 1, b: { c: 4 } }],
	])("produces correct object for %s", (input, expected) => {
		expect(fromEntriesOf(input)).toMatchObject(expected);
	});

	test("round-trips with entriesOf", () => {
		const original = { a: 1, b: 2, c: 3 };

		expect(fromEntriesOf(entriesOf(original))).toMatchObject(original);
	});
});
