import { ZodError } from "zod";
import {
	ApplicationJson,
	asMimeTypeName,
	ImagePng,
	isMimeTypeName,
	MimeTypeName,
	mimeTypeNameSchema,
} from "./mimeTypeNames";

describe("io/mimeTypeNames", () => {
	test("the schema and constant share the same values", () => {
		expect(mimeTypeNameSchema.options).toEqual([...MimeTypeName.values]);
		expect(MimeTypeName.name).toBe("MimeTypeName");
	});

	test.each([ApplicationJson, ImagePng])("accepts %s", (mimeType) => {
		expect(isMimeTypeName(mimeType)).toBe(true);
		expect(MimeTypeName.isConstant(mimeType)).toBe(true);
		expect(asMimeTypeName(mimeType)).toBe(mimeType);
	});

	test.each<unknown>(["APPLICATION/JSON", "image/webp", "", null, 1])(
		"rejects %p",
		(value) => {
			expect(isMimeTypeName(value)).toBe(false);
			expect(MimeTypeName.isConstant(value)).toBe(false);
			expect(() => asMimeTypeName(value)).toThrow(ZodError);
		},
	);
});
