import { isString } from "../types";

export const is12HourTime = (
	fmtOrLocale: string | Intl.DateTimeFormat,
): boolean => {
	const fmt = isString(fmtOrLocale)
		? new Intl.DateTimeFormat(fmtOrLocale)
		: fmtOrLocale;
	return fmt.resolvedOptions().hour12 ?? false;
};
