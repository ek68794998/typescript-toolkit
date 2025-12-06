export const toReadableFileSize = (
	bytes: number,
	useSi: boolean = false,
	decimalPlaces: number = 1,
): string => {
	const threshold = useSi ? 1000 : 1024;

	if (Math.abs(bytes) < threshold) {
		return `${bytes} B`;
	}

	const units = useSi
		? ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
		: ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];

	let u = -1;
	const r = 10 ** decimalPlaces;

	do {
		bytes /= threshold;
		++u;
	} while (
		Math.round(Math.abs(bytes) * r) / r >= threshold &&
		u < units.length - 1
	);

	return `${bytes.toFixed(decimalPlaces)} ${units[u]}`;
};
