import { nbsp } from "./nbsp";

describe("string/nbsp", () => {
	test("returns a non-breaking space", () => {
		expect(nbsp()).toBe(" ");
	});
});
