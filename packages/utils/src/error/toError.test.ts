import { toError } from "./toError";

describe("error/toError", () => {
	test.each([null, undefined])("handles falsy values", (value) => {
		const asError = toError(value);

		expect(asError).toBeTruthy();
		expect(asError).toBeInstanceOf(Error);
		expect(asError.message).toBe("Unknown error.");
	});

	test("handles Error values", () => {
		const asError = toError(new Error("Test message"));

		expect(asError).toBeTruthy();
		expect(asError).toBeInstanceOf(Error);
		expect(asError.message).toBe("Test message");
	});

	test.each<[unknown, string]>([
		[0, "Unknown error."],
		[2, "2"],
		[2764636, "2764636"],
		[27.2222, "27.2222"],
		[false, "Unknown error."],
		[true, "true"],
		[{}, {}.toString()],
		[[1, 2, 3], [1, 2, 3].toString()],
		["[1, 2, 3]", "[1, 2, 3]"],
		["           ", "           "],
		["", ""],
	])("handles %s as a miscellaneous value", (value, expectedMessage) => {
		const asError = toError(value);

		expect(asError).toBeTruthy();
		expect(asError).toBeInstanceOf(Error);
		expect(asError.message).toBe(expectedMessage);
	});
});
