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

	describe("HttpMethod", () => {
		test("lists every method constant", () => {
			expect(httpMethods.HttpMethod.values).toEqual([
				httpMethods.Connect,
				httpMethods.Delete,
				httpMethods.Get,
				httpMethods.Head,
				httpMethods.Options,
				httpMethods.Patch,
				httpMethods.Post,
				httpMethods.Put,
				httpMethods.Trace,
			]);
		});
	});

	describe("asHttpMethod", () => {
		test.each(["GET", "POST", "TRACE"])("returns %s", (method) => {
			expect(httpMethods.asHttpMethod(method)).toBe(method);
		});

		test.each<unknown>(["get", "FETCH", "", null, undefined, 1])(
			"throws for %p",
			(value) => {
				expect(() => httpMethods.asHttpMethod(value)).toThrow(
					/known constant of type HttpMethod/,
				);
			},
		);
	});
});
