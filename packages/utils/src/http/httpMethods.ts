export type HttpMethod =
	| "CONNECT"
	| "DELETE"
	| "GET"
	| "HEAD"
	| "OPTIONS"
	| "PATCH"
	| "POST"
	| "PUT"
	| "TRACE";

export const Connect = "CONNECT" as const satisfies HttpMethod;
export const Delete = "DELETE" as const satisfies HttpMethod;
export const Get = "GET" as const satisfies HttpMethod;
export const Head = "HEAD" as const satisfies HttpMethod;
export const Options = "OPTIONS" as const satisfies HttpMethod;
export const Patch = "PATCH" as const satisfies HttpMethod;
export const Post = "POST" as const satisfies HttpMethod;
export const Put = "PUT" as const satisfies HttpMethod;
export const Trace = "TRACE" as const satisfies HttpMethod;

const httpMethods = new Set<HttpMethod>([
	Connect,
	Delete,
	Get,
	Head,
	Options,
	Patch,
	Post,
	Put,
	Trace,
]);

export const isHttpMethod = (obj: unknown): obj is HttpMethod => {
	const possibleHttpMethod = obj as HttpMethod;
	return httpMethods.has(possibleHttpMethod);
};
