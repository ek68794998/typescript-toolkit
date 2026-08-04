import * as httpMethods from "./httpMethods";

describe("http/httpMethods", () => {
	describe("isHttpMethod", () => {
		test.each<[httpMethods.HttpMethod | string, boolean]>([
			[httpMethods.Connect, true],
			[httpMethods.Delete, true],
			[httpMethods.Get, true],
			[httpMethods.Head, true],
			[httpMethods.Options, true],
			[httpMethods.Patch, true],
			[httpMethods.Post, true],
			[httpMethods.Put, true],
			[httpMethods.Trace, true],
			["", false],
			["get", false],
			["FETCH", false],
			["INVALID", false],
		])("should handle %s correctly", (input, expected) => {
			expect(httpMethods.isHttpMethod(input)).toBe(expected);
		});
	});
});
