/**
 * Returns whether the value produces a valid `Date`. Numbers are treated as
 * epoch milliseconds, and strings are parsed with the `Date` constructor.
 */
export const isValidDate = (date: Date | string | number): boolean =>
	!Number.isNaN(new Date(date).getTime());
