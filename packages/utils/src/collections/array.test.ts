import { getMaxBy, MovePosition, moveItem, toArray } from "./array";

describe("array/getMaxBy", () => {
	test.each<[number[], number | undefined]>([
		[[], undefined],
		[[1], 1],
		[[1, 3, 2], 3],
		[[0], 0],
		[[0, 0], 0],
		[[-3, -1, -2], -1],
		[[-1], -1],
		[[Number.NEGATIVE_INFINITY], Number.NEGATIVE_INFINITY],
		[[-0.5, 0.25, -10], 0.25],
		[[Number.MIN_VALUE / 2, 0], Number.MIN_VALUE / 2],
	])("returns the max of %p", (input, expected) => {
		expect(getMaxBy(input, (v) => v)).toBe(expected);
	});

	test("returns the first item on ties", () => {
		const a = { v: 1 };
		const b = { v: 1 };

		expect(getMaxBy([a, b], (item) => item.v)).toBe(a);
	});

	test("returns undefined items when they are the max", () => {
		expect(getMaxBy([undefined, 5], (item) => (item ? -item : 0))).toBe(
			undefined,
		);
		expect(getMaxBy([5, undefined], (item) => (item ? -item : 0))).toBe(
			undefined,
		);
	});
});

describe("array/toArray", () => {
	test.each<[unknown, unknown[]]>([
		[1, [1]],
		["a", ["a"]],
		[null, [null]],
		[undefined, [undefined]],
		[{ a: 1 }, [{ a: 1 }]],
		[[], []],
		[
			[1, 2],
			[1, 2],
		],
		[
			[[1], [2]],
			[[1], [2]],
		],
	])("converts %p", (input, expected) => {
		expect(toArray(input)).toEqual(expected);
	});

	test("returns a new array when given an array", () => {
		const input = [1, 2, 3];
		const result = toArray(input);

		expect(result).toEqual(input);
		expect(result).not.toBe(input);

		result.push(4);
		expect(input).toEqual([1, 2, 3]);
	});

	test("accepts readonly arrays", () => {
		const input: readonly string[] = Object.freeze(["a", "b"]);
		const result: string[] = toArray(input);

		expect(result).toEqual(["a", "b"]);
		expect(Object.isFrozen(result)).toBe(false);
	});

	test("does not copy the elements themselves", () => {
		const item = { a: 1 };

		expect(toArray([item])[0]).toBe(item);
		expect(toArray(item)[0]).toBe(item);
	});
});

describe("array/MovePosition", () => {
	test("lists the positions", () => {
		expect(MovePosition.name).toBe("MovePosition");
		expect(MovePosition.values).toEqual(["up", "down", "top", "bottom"]);
	});

	test.each(MovePosition.values)("accepts %p", (position) => {
		expect(MovePosition.isConstant(position)).toBe(true);
		expect(MovePosition.asConstant(position)).toBe(position);
	});

	test.each<unknown>(["left", "UP", "", 0, null, undefined])(
		"rejects %p",
		(value) => {
			expect(MovePosition.isConstant(value)).toBe(false);
			expect(() => MovePosition.asConstant(value)).toThrow(
				/known constant of type MovePosition/,
			);
		},
	);
});

describe("array/moveItem", () => {
	const abc = ["a", "b", "c"] as const;
	const abcd = ["a", "b", "c", "d"] as const;

	test.each<[readonly string[], number, MovePosition, string[]]>([
		// up
		[abc, 1, "up", ["b", "a", "c"]],
		[abc, 2, "up", ["a", "c", "b"]],
		[abc, 0, "up", ["a", "b", "c"]],
		// down
		[abc, 1, "down", ["a", "c", "b"]],
		[abc, 0, "down", ["b", "a", "c"]],
		[abc, 2, "down", ["a", "b", "c"]],
		// top
		[abc, 1, "top", ["b", "a", "c"]],
		[abcd, 3, "top", ["d", "a", "b", "c"]],
		[abc, 0, "top", ["a", "b", "c"]],
		// bottom
		[abc, 1, "bottom", ["a", "c", "b"]],
		[abcd, 0, "bottom", ["b", "c", "d", "a"]],
		[abc, 2, "bottom", ["a", "b", "c"]],
		// small arrays
		[["a"], 0, "down", ["a"]],
		[["a"], 0, "up", ["a"]],
		[["a", "b"], 0, "down", ["b", "a"]],
		[["a", "b"], 1, "up", ["b", "a"]],
	])("moves %p[%p] %p", (items, fromIndex, position, expected) => {
		const result = moveItem(items, fromIndex, position);

		expect(result).toEqual(expected);
		expect(result).not.toBe(items);
	});

	test.each<[readonly string[], number]>([
		[abc, -1],
		[abc, 3],
		[abc, 999],
		[abc, 1.5],
		[abc, Number.NaN],
		[abc, Number.POSITIVE_INFINITY],
		[[], 0],
	])("returns an unchanged copy of %p for index %p", (items, fromIndex) => {
		for (const position of MovePosition.values) {
			const result = moveItem(items, fromIndex, position);

			expect(result).toEqual(items);
			expect(result).not.toBe(items);
		}
	});

	test("does not mutate the input", () => {
		const items = ["a", "b", "c"];

		for (const position of MovePosition.values) {
			moveItem(items, 1, position);
		}

		expect(items).toEqual(["a", "b", "c"]);
	});

	test("works on frozen arrays", () => {
		const items = Object.freeze(["a", "b", "c"]);

		expect(moveItem(items, 2, "top")).toEqual(["c", "a", "b"]);
	});

	test("keeps item identity (shallow copy)", () => {
		const item1 = { id: 1 };
		const item2 = { id: 2 };
		const item3 = { id: 3 };

		const result = moveItem([item1, item2, item3], 1, "up");

		expect(result[0]).toBe(item2);
		expect(result[1]).toBe(item1);
		expect(result[2]).toBe(item3);
	});

	test.each<[unknown[], number, MovePosition, unknown[]]>([
		[[1, undefined, 3], 1, "up", [undefined, 1, 3]],
		[[null, 0, false], 0, "bottom", [0, false, null]],
		[["", "x"], 1, "top", ["x", ""]],
	])(
		"moves nullish and falsy items in %p",
		(items, fromIndex, position, expected) => {
			expect(moveItem(items, fromIndex, position)).toEqual(expected);
		},
	);

	test("keeps sparse-array holes as undefined", () => {
		// biome-ignore lint/suspicious/noSparseArray: Testing sparse arrays.
		const items = [1, , 3];

		expect(moveItem(items, 1, "top")).toEqual([undefined, 1, 3]);
	});
});
