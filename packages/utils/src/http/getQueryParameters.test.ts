import { getQueryParameters } from "./getQueryParameters";

describe("http/getQueryParameters", () => {
	test("properly handles a URL with no parameters", () => {
		const queryParameters = getQueryParameters("https://example.com");

		const keys = Array.from(queryParameters.keys());
		expect(keys.length).toBe(0);
	});

	test("properly extracts query parameters from a complex URL", () => {
		const queryParameters = getQueryParameters(
			"https://example.com?foo=bar&baz=6&true=1.2&4=true&@@=$$&%2CA=%2FA&4=false",
		);

		const keys = Array.from(queryParameters.keys());
		expect(keys).toEqual(["foo", "baz", "true", "4", "@@", ",A", "4"]);

		expect(queryParameters.get("foo")).toBe("bar");
		expect(queryParameters.get("baz")).toBe("6");
		expect(queryParameters.get("true")).toBe("1.2");
		expect(queryParameters.get("4")).toBe("true");
		expect(queryParameters.getAll("4")).toEqual(["true", "false"]);
		expect(queryParameters.get("@@")).toBe("$$");
		expect(queryParameters.get(",A")).toBe("/A");
	});
});
