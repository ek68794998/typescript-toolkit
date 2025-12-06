import { keysOf } from "./object";

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
