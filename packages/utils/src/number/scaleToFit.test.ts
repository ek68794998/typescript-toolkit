import {
	type Dimensions,
	type ScaledDimensions,
	scaleToFit,
} from "./scaleToFit";

describe("number/scaleToFit", () => {
	test.each<{
		container: Dimensions;
		expected: ScaledDimensions;
		object: Dimensions;
	}>([
		{
			container: { height: 100, width: 100 },
			expected: { height: 100, scale: 2, width: 100 },
			object: { height: 50, width: 50 },
		},
		{
			container: { height: 100, width: 100 },
			expected: { height: 100, scale: 0.5, width: 100 },
			object: { height: 200, width: 200 },
		},
		{
			container: { height: 50, width: 100 },
			expected: { height: 50, scale: 0.5, width: 50 },
			object: { height: 100, width: 100 },
		},
		{
			container: { height: 100, width: 200 },
			expected: { height: 100, scale: 1, width: 100 },
			object: { height: 100, width: 100 },
		},
		{
			container: { height: 1080, width: 1920 },
			expected: { height: 1080, scale: 1.5, width: 1920 },
			object: { height: 720, width: 1280 },
		},
		{
			container: { height: 600, width: 800 },
			expected: { height: 450, scale: 800 / 1920, width: 800 },
			object: { height: 1080, width: 1920 },
		},
	])(
		"scales $object.width×$object.height to fit $container.width×$container.height",
		({ container, expected, object }) => {
			expect(scaleToFit(container, object)).toEqual(expected);
		},
	);

	test.each<{
		container: Dimensions;
		expected: ScaledDimensions;
		object: Dimensions;
	}>([
		// Zero-sized object: nothing to scale.
		{
			container: { height: 100, width: 100 },
			expected: { height: 0, scale: 0, width: 0 },
			object: { height: 0, width: 0 },
		},
		{
			container: { height: 0, width: 0 },
			expected: { height: 0, scale: 0, width: 0 },
			object: { height: 0, width: 0 },
		},
		// Zero on one axis: only the other axis constrains.
		{
			container: { height: 100, width: 100 },
			expected: { height: 100, scale: 2, width: 0 },
			object: { height: 50, width: 0 },
		},
		{
			container: { height: 0, width: 300 },
			expected: { height: 0, scale: 3, width: 300 },
			object: { height: 0, width: 100 },
		},
		// Zero-sized container: everything scales to zero.
		{
			container: { height: 0, width: 0 },
			expected: { height: 0, scale: 0, width: 0 },
			object: { height: 50, width: 50 },
		},
	])(
		"handles degenerate sizes: $object.width×$object.height in $container.width×$container.height",
		({ container, expected, object }) => {
			const result = scaleToFit(container, object);

			expect(result).toEqual(expected);
			expect(Number.isFinite(result.scale)).toBe(true);
			expect(Number.isNaN(result.width)).toBe(false);
			expect(Number.isNaN(result.height)).toBe(false);
		},
	);

	test("never exceeds the container", () => {
		for (const [cw, ch, ow, oh] of [
			[123, 45, 67, 89],
			[1, 1000, 1000, 1],
			[333, 333, 7, 11],
		]) {
			const result = scaleToFit(
				{ height: ch, width: cw },
				{ height: oh, width: ow },
			);

			expect(result.width).toBeLessThanOrEqual(cw + 1e-9);
			expect(result.height).toBeLessThanOrEqual(ch + 1e-9);
			expect(
				Math.abs(result.width - cw) < 1e-9 ||
					Math.abs(result.height - ch) < 1e-9,
			).toBe(true);
		}
	});
});
