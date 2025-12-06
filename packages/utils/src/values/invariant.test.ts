import { invariant } from "./invariant";

describe("types/invariant", () => {
	test.each<unknown>([
		[],
		[""],
		["false"],
		true,
		0,
		1,
		0.5,
		-6.5,
		100,
		"",
		"false",
		{ a: "true" },
	])("does not throw for %s", (input) => {
		expect(() => invariant(input)).not.toThrow();
	});

	test.each<unknown>([undefined, null, false])("throws for %s", (input) => {
		expect(() => invariant(input)).toThrow();
	});

	test.each<Parameters<typeof invariant>[1]>([
		"My error message",
		() => "My error message",
		new Error("My error message"),
		() => new Error("My error message"),
	])("throws correct error message for %o", (input) => {
		expect(() => invariant(false, input)).toThrow("My error message");
	});

	test("throws a default error message", () => {
		expect(() => invariant(false, "")).toThrow(
			"Assertion failed on value 'false'.",
		);
	});
});
