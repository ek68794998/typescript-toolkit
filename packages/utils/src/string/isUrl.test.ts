import { isUrl } from "./isUrl";

describe("string/isUrl", () => {
	test.each<unknown>([
		"https://example.com",
		"http://example.com/foo?bar=baz#qux",
		"ftp://example.com",
		"mailto:user@example.com",
	])("returns true for %o", (input) => {
		expect(isUrl(input)).toBe(true);
	});

	test.each<unknown>([
		undefined,
		null,
		0,
		{},
		new URL("https://example.com"),
		"",
		"example.com",
		"/foo/bar",
		"not a url",
	])("returns false for %o", (input) => {
		expect(isUrl(input)).toBe(false);
	});
});
