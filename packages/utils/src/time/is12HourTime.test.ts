import { is12HourTime } from "./is12HourTime";

describe("time/is12HourTime", () => {
	test.each<[string, boolean]>([
		["en-US", true],
		["en-GB", false],
		["de-DE", false],
	])("returns correct value for locale '%s'", (locale, expected) => {
		expect(is12HourTime(locale)).toBe(expected);
	});

	test.each<[Intl.DateTimeFormat, boolean]>([
		[new Intl.DateTimeFormat("en-US", { hour: "numeric" }), true],
		[new Intl.DateTimeFormat("en-GB", { hour: "numeric" }), false],
		[
			new Intl.DateTimeFormat("en-US", {
				hour: "numeric",
				hour12: false,
			}),
			false,
		],
		[
			new Intl.DateTimeFormat("en-GB", { hour: "numeric", hour12: true }),
			true,
		],
	])("returns correct value for format %#", (fmt, expected) => {
		expect(is12HourTime(fmt)).toBe(expected);
	});
});
