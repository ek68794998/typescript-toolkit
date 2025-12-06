export const getSlug = (url: string): string | undefined => {
	const parts = url.split("/");

	for (let i = parts.length - 1; i >= 0; i--) {
		const part = parts[i];

		if (!part) {
			continue;
		}

		return part;
	}

	return undefined;
};
