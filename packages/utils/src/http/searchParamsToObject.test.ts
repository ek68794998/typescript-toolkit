import { searchParamsToObject } from "./searchParamsToObject";

describe("http/searchParamsToObject", () => {
	test.each<[string, Record<string, string | string[]>]>([
		["", {}],
		["name=John&age=30", { age: "30", name: "John" }],
		["tag=red&tag=blue&tag=green", { tag: ["red", "blue", "green"] }],
		[
			"name=John&tag=red&tag=blue&age=30",
			{ age: "30", name: "John", tag: ["red", "blue"] },
		],
		[
			"name=&email=test@example.com",
			{ email: "test@example.com", name: "" },
		],
		["name=&name=", { name: ["", ""] }],
		["flag", { flag: "" }],
		[
			"message=Hello%20World&name=John+Doe",
			{ message: "Hello World", name: "John Doe" },
		],
		["id=1&id=2", { id: ["1", "2"] }],
		["id=1&id=2&id=3", { id: ["1", "2", "3"] }],
		["id=1&id=2&id=3&id=4", { id: ["1", "2", "3", "4"] }],
		[
			"priority=low&priority=medium&priority=high",
			{ priority: ["low", "medium", "high"] },
		],
		[
			"search=test&filter=active&filter=pending&sort=date&page=1",
			{
				filter: ["active", "pending"],
				page: "1",
				search: "test",
				sort: "date",
			},
		],
		[
			"id=123&price=45.99&count=0",
			{ count: "0", id: "123", price: "45.99" },
		],
		[
			"user%5Bname%5D=John&user%5Bemail%5D=john%40example.com",
			{ "user[email]": "john@example.com", "user[name]": "John" },
		],
	])("converts %p", (query, expected) => {
		expect(searchParamsToObject(new URLSearchParams(query))).toEqual(
			expected,
		);
	});

	test("handles parameters constructed programmatically", () => {
		const params = new URLSearchParams();
		params.append("email", "test+user@example.com");
		params.append("path", "/api/v1/users");
		params.append("tag", "typescript");
		params.append("tag", "testing");

		expect(searchParamsToObject(params)).toEqual({
			email: "test+user@example.com",
			path: "/api/v1/users",
			tag: ["typescript", "testing"],
		});
	});

	test.each(["toString", "constructor", "hasOwnProperty", "__proto__"])(
		"treats the Object.prototype key %p as a normal own key",
		(key) => {
			const single = searchParamsToObject(
				new URLSearchParams([[key, "a"]]),
			);
			const repeated = searchParamsToObject(
				new URLSearchParams([
					[key, "a"],
					[key, "b"],
				]),
			);

			expect(Object.getOwnPropertyDescriptor(single, key)?.value).toBe(
				"a",
			);
			expect(
				Object.getOwnPropertyDescriptor(repeated, key)?.value,
			).toEqual(["a", "b"]);
			expect(Object.getPrototypeOf(single)).toBe(Object.prototype);
		},
	);

	test("returns a fresh array for each repeated key", () => {
		const params = new URLSearchParams("a=1&a=2&b=3&b=4");
		const result = searchParamsToObject(params);

		expect(result.a).not.toBe(result.b);
	});

	test("does not modify the input", () => {
		const params = new URLSearchParams("a=1&a=2");
		searchParamsToObject(params);

		expect(params.toString()).toBe("a=1&a=2");
	});
});
