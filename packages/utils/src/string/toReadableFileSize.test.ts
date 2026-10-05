import { toReadableFileSize } from "./toReadableFileSize";

describe("string/toReadableFileSize", () => {
	test.each<[number, string]>([
		[0, "0 B"],
		[1023, "1023 B"],
		[-1023, "-1023 B"],
		[1024, "1.0 KiB"],
		[1536, "1.5 KiB"],
		[-1536, "-1.5 KiB"],
		[1024 ** 2, "1.0 MiB"],
		[1024 ** 2 - 1, "1.0 MiB"],
		[1024 ** 3, "1.0 GiB"],
		[1024 ** 8, "1.0 YiB"],
		[1024 ** 9, "1024.0 YiB"],
	])("converts %d bytes (binary) to '%s'", (input, expected) => {
		expect(toReadableFileSize(input)).toBe(expected);
	});

	test.each<[number, string]>([
		[999, "999 B"],
		[1000, "1.0 kB"],
		[1500, "1.5 kB"],
		[1000 ** 2, "1.0 MB"],
		[1000 ** 8, "1.0 YB"],
	])("converts %d bytes (SI) to '%s'", (input, expected) => {
		expect(toReadableFileSize(input, true)).toBe(expected);
	});

	test.each<[number, number, string]>([
		[1536, 0, "2 KiB"],
		[1536, 2, "1.50 KiB"],
		[1234567, 3, "1.177 MiB"],
	])(
		"converts %d bytes with %d decimal places to '%s'",
		(input, places, expected) => {
			expect(toReadableFileSize(input, false, places)).toBe(expected);
		},
	);
});
