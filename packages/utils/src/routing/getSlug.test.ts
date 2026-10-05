import { getSlug } from "./getSlug";

describe("routing/getSlug", () => {
	test.each<[string, string | undefined]>([
		["", undefined],
		["/", undefined],
		["///", undefined],
		["foo", "foo"],
		["/foo", "foo"],
		["/foo/", "foo"],
		["/foo/bar", "bar"],
		["/foo/bar//", "bar"],
		["https://example.com/foo/bar-baz", "bar-baz"],
	])("gets slug of '%s' as '%s'", (input, expected) => {
		expect(getSlug(input)).toBe(expected);
	});
});
