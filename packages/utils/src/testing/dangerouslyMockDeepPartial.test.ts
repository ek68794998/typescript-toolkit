import type { DeepPartial } from "../types";

import { dangerouslyMockDeepPartial } from "./dangerouslyMockDeepPartial";

describe("testing/dangerouslyMockDeepPartial", () => {
	interface Model {
		id: number;
		nested: { name: string; tags: { label: string }[] };
	}

	test.each<DeepPartial<Model>>([
		{},
		{ id: 1 },
		{ nested: {} },
		{ nested: { name: "a" } },
		{ nested: { tags: [{}] } },
		{ id: 1, nested: { name: "a", tags: [{ label: "x" }] } },
	])("returns %p unchanged", (input) => {
		expect(dangerouslyMockDeepPartial<Model>(input)).toBe(input);
	});

	test("is typed as the complete type", () => {
		expectTypeOf(
			dangerouslyMockDeepPartial<Model>({ nested: { name: "a" } }),
		).toEqualTypeOf<Model>();
	});

	test("rejects properties that are not in the type", () => {
		// @ts-expect-error `extra` is not a property of `Model.nested`.
		dangerouslyMockDeepPartial<Model>({ nested: { extra: true } });

		// @ts-expect-error `id` must be a number.
		dangerouslyMockDeepPartial<Model>({ id: "1" });
	});
});
