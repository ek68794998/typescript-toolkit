import { mapAsync } from "./map";

describe("collection/mapAsync", () => {
	test.each<[number[], string[]]>([
		[[], []],
		[
			[1, 2],
			["1.1", "2.2"],
		],
	])("produces correct outputs for %s", async (input, expected) => {
		expect(
			await mapAsync(input, (v) => Promise.resolve(`${v}.${v}`)),
		).toMatchObject(expected);
	});
});
