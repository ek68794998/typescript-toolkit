export const positiveModulo = (base: number, div: number): number =>
	((base % div) + div) % div;
