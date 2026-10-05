/**
 * Case-insensitive `String.prototype.includes`. An empty `search` always
 * matches.
 */
export const includesIgnoreCase = (value: string, search: string): boolean =>
	value.toLowerCase().includes(search.toLowerCase());
