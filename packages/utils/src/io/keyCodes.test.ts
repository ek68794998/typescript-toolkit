import { ZodError } from "zod";
import {
	ArrowUp,
	asKeyCode,
	isKeyCode,
	KeyA,
	KeyCode,
	keyCodeSchema,
	Tab,
} from "./keyCodes";

describe("io/keyCodes", () => {
	test("the schema and constant share the same values", () => {
		expect(keyCodeSchema.options).toEqual([...KeyCode.values]);
		expect(KeyCode.name).toBe("KeyCode");
	});

	test.each([ArrowUp, KeyA, Tab])("accepts %s", (code) => {
		expect(isKeyCode(code)).toBe(true);
		expect(KeyCode.isConstant(code)).toBe(true);
		expect(asKeyCode(code)).toBe(code);
	});

	test.each<unknown>(["arrowup", "Key1", "", null, undefined, 13])(
		"rejects %p",
		(value) => {
			expect(isKeyCode(value)).toBe(false);
			expect(KeyCode.isConstant(value)).toBe(false);
			expect(() => asKeyCode(value)).toThrow(ZodError);
		},
	);
});
