import type { DeepPartial } from "./deepPartial";

describe("types/DeepPartial", () => {
	test("passes primitives through", () => {
		expectTypeOf<DeepPartial<string>>().toEqualTypeOf<string>();
		expectTypeOf<DeepPartial<number>>().toEqualTypeOf<number>();
		expectTypeOf<DeepPartial<boolean>>().toEqualTypeOf<boolean>();
		expectTypeOf<DeepPartial<null>>().toEqualTypeOf<null>();
		expectTypeOf<DeepPartial<undefined>>().toEqualTypeOf<undefined>();
		expectTypeOf<DeepPartial<"a" | 1>>().toEqualTypeOf<"a" | 1>();
	});

	test("passes functions through", () => {
		type Fn = (a: number, b: string) => boolean;

		expectTypeOf<DeepPartial<Fn>>().toEqualTypeOf<Fn>();
		expectTypeOf<DeepPartial<{ fn: Fn }>>().toEqualTypeOf<{ fn?: Fn }>();
	});

	test("makes nested properties optional", () => {
		interface Model {
			a: number;
			nested: { b: string; deeper: { c: boolean } };
		}

		expectTypeOf<DeepPartial<Model>>().toEqualTypeOf<{
			a?: number;
			nested?: { b?: string; deeper?: { c?: boolean } };
		}>();
	});

	test("recurses into optional and nullable properties", () => {
		interface Model {
			maybe?: { a: number };
			nullable: { b: string } | null;
		}

		expectTypeOf<DeepPartial<Model>>().toEqualTypeOf<{
			maybe?: { a?: number };
			nullable?: { b?: string } | null;
		}>();
	});

	test("maps arrays to arrays of DeepPartial elements", () => {
		expectTypeOf<DeepPartial<{ a: number }[]>>().toEqualTypeOf<
			{ a?: number }[]
		>();
		expectTypeOf<DeepPartial<number[]>>().toEqualTypeOf<number[]>();
		expectTypeOf<DeepPartial<{ list: { a: number }[] }>>().toEqualTypeOf<{
			list?: { a?: number }[];
		}>();
		expectTypeOf<DeepPartial<{ a: number }[][]>>().toEqualTypeOf<
			{ a?: number }[][]
		>();
	});

	test("preserves readonly arrays", () => {
		expectTypeOf<DeepPartial<readonly { a: number }[]>>().toEqualTypeOf<
			readonly { a?: number }[]
		>();
	});

	test("does not expose array methods as optional properties", () => {
		expectTypeOf<DeepPartial<string[]>>().toHaveProperty("map");
		expectTypeOf<DeepPartial<string[]>["length"]>().toEqualTypeOf<number>();
	});

	test("accepts partial values at runtime", () => {
		interface Model {
			a: number;
			nested: { b: string; c: number };
		}

		const partial: DeepPartial<Model> = { nested: { b: "x" } };

		expect(partial).toEqual({ nested: { b: "x" } });
	});
});
