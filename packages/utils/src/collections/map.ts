export const mapAsync = async <TIn, TOut>(
	array: TIn[],
	mapAsyncFn: (v: TIn) => Promise<TOut>,
): Promise<TOut[]> => {
	const out: TOut[] = [];

	for (const element of array) {
		out.push(await mapAsyncFn(element));
	}

	return out;
};
