export const upperFirst = (value: string): string =>
	value.length > 1
		? `${value.charAt(0).toLocaleUpperCase()}${value.slice(1)}`
		: value.toLocaleUpperCase();
