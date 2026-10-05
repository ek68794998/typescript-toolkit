import { dangerouslyCoerceType } from "../testing";
import { unreachable } from "./unreachable";

describe("values/unreachable", () => {
	test("throws when called", () => {
		expect(() =>
			unreachable(dangerouslyCoerceType<never>("value")),
		).toThrow("Unreachable code was reached at runtime.");
	});
});
