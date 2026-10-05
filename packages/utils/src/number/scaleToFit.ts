export interface Dimensions {
	height: number;
	width: number;
}

export interface ScaledDimensions extends Dimensions {
	scale: number;
}

/**
 * Uniformly scales `object` so it fits inside `container` while preserving its
 * aspect ratio. The result may be larger than `object` (scaling up).
 *
 * An axis on which `object` has no positive size cannot constrain the scale, so
 * only the other axis is used. If neither axis has a positive size, there is
 * nothing to scale and the result is `{ height: 0, scale: 0, width: 0 }`.
 */
export const scaleToFit = (
	container: Dimensions,
	object: Dimensions,
): ScaledDimensions => {
	const scaleX =
		object.width > 0
			? container.width / object.width
			: Number.POSITIVE_INFINITY;
	const scaleY =
		object.height > 0
			? container.height / object.height
			: Number.POSITIVE_INFINITY;

	const minScale = Math.min(scaleX, scaleY);
	const scale = Number.isFinite(minScale) ? minScale : 0;

	return {
		height: object.height * scale,
		scale,
		width: object.width * scale,
	};
};
