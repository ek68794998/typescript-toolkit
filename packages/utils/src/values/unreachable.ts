export const unreachable = (_: never): never => {
	throw new Error("Unreachable code was reached at runtime.");
};
