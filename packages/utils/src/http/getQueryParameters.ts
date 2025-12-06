export const getQueryParameters = (url: string | URL): URLSearchParams => {
	const urlString = url.toString();

	const queryStringIndex = urlString.indexOf("?");
	const queryString =
		queryStringIndex >= 0 ? urlString.substring(queryStringIndex) : "";
	const query = new URLSearchParams(queryString);

	return query;
};
