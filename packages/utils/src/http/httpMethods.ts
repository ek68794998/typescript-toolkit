import { type ConstantValue, createConstant } from "../values";

export const HttpMethod = createConstant("HttpMethod", [
	"CONNECT",
	"DELETE",
	"GET",
	"HEAD",
	"OPTIONS",
	"PATCH",
	"POST",
	"PUT",
	"TRACE",
]);

export type HttpMethod = ConstantValue<typeof HttpMethod>;

export const Connect = "CONNECT" as const satisfies HttpMethod;
export const Delete = "DELETE" as const satisfies HttpMethod;
export const Get = "GET" as const satisfies HttpMethod;
export const Head = "HEAD" as const satisfies HttpMethod;
export const Options = "OPTIONS" as const satisfies HttpMethod;
export const Patch = "PATCH" as const satisfies HttpMethod;
export const Post = "POST" as const satisfies HttpMethod;
export const Put = "PUT" as const satisfies HttpMethod;
export const Trace = "TRACE" as const satisfies HttpMethod;

export const asHttpMethod = (value: unknown): HttpMethod =>
	HttpMethod.asConstant(value);

export const isHttpMethod = (obj: unknown): obj is HttpMethod =>
	HttpMethod.isConstant(obj);
