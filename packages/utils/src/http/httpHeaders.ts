import { type ConstantValue, createConstant } from "../values";

export const HttpRequestHeader = createConstant("HttpRequestHeader", [
	"Accept",
	"Accept-Charset",
	"Accept-Datetime",
	"Accept-Encoding",
	"Accept-Language",
	"Authorization",
	"Cache-Control",
	"Connection",
	"Content-Length",
	"Content-MD5",
	"Content-Type",
	"Cookie",
	"Date",
	"Expect",
	"From",
	"Host",
	"If-Match",
	"If-Modified-Since",
	"If-None-Match",
	"If-Range",
	"If-Unmodified-Since",
	"Max-Forwards",
	"Pragma",
	"Proxy-Authorization",
	"Range",
	"Referer",
	"TE",
	"Upgrade",
	"User-Agent",
	"Via",
	"Warning",
]);

export type HttpRequestHeader = ConstantValue<typeof HttpRequestHeader>;

export const HttpResponseHeader = createConstant("HttpResponseHeader", [
	"Accept-Ranges",
	"Age",
	"Allow",
	"Cache-Control",
	"Connection",
	"Content-Disposition",
	"Content-Encoding",
	"Content-Language",
	"Content-Length",
	"Content-Location",
	"Content-MD5",
	"Content-Range",
	"Content-Type",
	"Date",
	"ETag",
	"Expires",
	"Last-Modified",
	"Link",
	"Location",
	"P3P",
	"Pragma",
	"Proxy-Authenticate",
	"Refresh",
	"Retry-After",
	"Server",
	"Set-Cookie",
	"Strict-Transport-Security",
	"Trailer",
	"Transfer-Encoding",
	"Vary",
	"Via",
	"Warning",
	"WWW-Authenticate",
]);

export type HttpResponseHeader = ConstantValue<typeof HttpResponseHeader>;

export const Accept = "Accept" as const satisfies HttpRequestHeader;
export const AcceptCharset =
	"Accept-Charset" as const satisfies HttpRequestHeader;
export const AcceptDatetime =
	"Accept-Datetime" as const satisfies HttpRequestHeader;
export const AcceptEncoding =
	"Accept-Encoding" as const satisfies HttpRequestHeader;
export const AcceptLanguage =
	"Accept-Language" as const satisfies HttpRequestHeader;
export const AcceptRanges =
	"Accept-Ranges" as const satisfies HttpResponseHeader;
export const Age = "Age" as const satisfies HttpResponseHeader;
export const Allow = "Allow" as const satisfies HttpResponseHeader;
export const Authorization =
	"Authorization" as const satisfies HttpRequestHeader;
export const CacheControl =
	"Cache-Control" as const satisfies HttpRequestHeader & HttpResponseHeader;
export const Connection = "Connection" as const satisfies HttpRequestHeader &
	HttpResponseHeader;
export const ContentDisposition =
	"Content-Disposition" as const satisfies HttpResponseHeader;
export const ContentEncoding =
	"Content-Encoding" as const satisfies HttpResponseHeader;
export const ContentLanguage =
	"Content-Language" as const satisfies HttpResponseHeader;
export const ContentLength =
	"Content-Length" as const satisfies HttpRequestHeader & HttpResponseHeader;
export const ContentLocation =
	"Content-Location" as const satisfies HttpResponseHeader;
export const ContentMd5 = "Content-MD5" as const satisfies HttpRequestHeader &
	HttpResponseHeader;
export const ContentRange =
	"Content-Range" as const satisfies HttpResponseHeader;
export const ContentType = "Content-Type" as const satisfies HttpRequestHeader &
	HttpResponseHeader;
export const Cookie = "Cookie" as const satisfies HttpRequestHeader;
export const DateTime = "Date" as const satisfies HttpRequestHeader &
	HttpResponseHeader;
export const ETag = "ETag" as const satisfies HttpResponseHeader;
export const Expect = "Expect" as const satisfies HttpRequestHeader;
export const Expires = "Expires" as const satisfies HttpResponseHeader;
export const From = "From" as const satisfies HttpRequestHeader;
export const Host = "Host" as const satisfies HttpRequestHeader;
export const IfMatch = "If-Match" as const satisfies HttpRequestHeader;
export const IfModifiedSince =
	"If-Modified-Since" as const satisfies HttpRequestHeader;
export const IfNoneMatch = "If-None-Match" as const satisfies HttpRequestHeader;
export const IfRange = "If-Range" as const satisfies HttpRequestHeader;
export const IfUnmodifiedSince =
	"If-Unmodified-Since" as const satisfies HttpRequestHeader;
/** @deprecated Use `IfUnmodifiedSince`. */
export const IfunmodifiedSince = IfUnmodifiedSince;
export const LastModified =
	"Last-Modified" as const satisfies HttpResponseHeader;
export const Link = "Link" as const satisfies HttpResponseHeader;
export const LocationUri = "Location" as const satisfies HttpResponseHeader;
export const MaxForwards = "Max-Forwards" as const satisfies HttpRequestHeader;
export const P3P = "P3P" as const satisfies HttpResponseHeader;
export const Pragma = "Pragma" as const satisfies HttpRequestHeader &
	HttpResponseHeader;
export const ProxyAuthenticate =
	"Proxy-Authenticate" as const satisfies HttpResponseHeader;
export const ProxyAuthorization =
	"Proxy-Authorization" as const satisfies HttpRequestHeader;
export const Ranges = "Range" as const satisfies HttpRequestHeader;
export const Referer = "Referer" as const satisfies HttpRequestHeader;
export const Referrer = Referer;
export const Refresh = "Refresh" as const satisfies HttpResponseHeader;
export const RetryAfter = "Retry-After" as const satisfies HttpResponseHeader;
export const Server = "Server" as const satisfies HttpResponseHeader;
export const SetCookie = "Set-Cookie" as const satisfies HttpResponseHeader;
export const StrictTransportSecurity =
	"Strict-Transport-Security" as const satisfies HttpResponseHeader;
export const TE = "TE" as const satisfies HttpRequestHeader;
export const Trailer = "Trailer" as const satisfies HttpResponseHeader;
export const TransferEncodingRequest = TE;
export const TransferEncodingResponse =
	"Transfer-Encoding" as const satisfies HttpResponseHeader;
export const Upgrade = "Upgrade" as const satisfies HttpRequestHeader;
export const UserAgent = "User-Agent" as const satisfies HttpRequestHeader;
export const Vary = "Vary" as const satisfies HttpResponseHeader;
export const Via = "Via" as const satisfies HttpRequestHeader &
	HttpResponseHeader;
export const Warning = "Warning" as const satisfies HttpRequestHeader &
	HttpResponseHeader;
export const WwwAuthenticate =
	"WWW-Authenticate" as const satisfies HttpResponseHeader;

export const asHttpRequestHeader = (value: unknown): HttpRequestHeader =>
	HttpRequestHeader.asConstant(value);

export const isHttpRequestHeader = (obj: unknown): obj is HttpRequestHeader =>
	HttpRequestHeader.isConstant(obj);

export const asHttpResponseHeader = (value: unknown): HttpResponseHeader =>
	HttpResponseHeader.asConstant(value);

export const isHttpResponseHeader = (obj: unknown): obj is HttpResponseHeader =>
	HttpResponseHeader.isConstant(obj);
