import { dangerouslyMockPartial } from "./dangerouslyMockPartial";

describe("testing/dangerouslyMockPartial", () => {
	interface Model {
		id: number;
		name: string;
	}

	test.each<Partial<Model>>([{}, { id: 1 }, { id: 1, name: "a" }])(
		"returns %p unchanged",
		(input) => {
			expect(dangerouslyMockPartial<Model>(input)).toBe(input);
		},
	);

	test("is typed as the complete type", () => {
		expectTypeOf(
			dangerouslyMockPartial<Model>({ id: 1 }),
		).toEqualTypeOf<Model>();
	});
});
