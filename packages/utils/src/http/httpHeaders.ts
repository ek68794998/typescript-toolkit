export type HttpRequestHeader =
	| "Accept"
	| "Accept-Charset"
	| "Accept-Datetime"
	| "Accept-Encoding"
	| "Accept-Language"
	| "Authorization"
	| "Cache-Control"
	| "Connection"
	| "Content-Length"
	| "Content-MD5"
	| "Content-Type"
	| "Cookie"
	| "Date"
	| "Expect"
	| "From"
	| "Host"
	| "If-Match"
	| "If-Modified-Since"
	| "If-None-Match"
	| "If-Range"
	| "If-Unmodified-Since"
	| "Max-Forwards"
	| "Pragma"
	| "Proxy-Authorization"
	| "Range"
	| "Referer"
	| "TE"
	| "Upgrade"
	| "User-Agent"
	| "Via"
	| "Warning";

export type HttpResponseHeader =
	| "Accept-Ranges"
	| "Age"
	| "Allow"
	| "Cache-Control"
	| "Connection"
	| "Content-Disposition"
	| "Content-Encoding"
	| "Content-Language"
	| "Content-Length"
	| "Content-Location"
	| "Content-MD5"
	| "Content-Range"
	| "Content-Type"
	| "Date"
	| "ETag"
	| "Expires"
	| "Last-Modified"
	| "Link"
	| "Location"
	| "P3P"
	| "Pragma"
	| "Proxy-Authenticate"
	| "Refresh"
	| "Retry-After"
	| "Server"
	| "Set-Cookie"
	| "Strict-Transport-Security"
	| "Trailer"
	| "Transfer-Encoding"
	| "Vary"
	| "Via"
	| "Warning"
	| "WWW-Authenticate";

export const Accept: HttpRequestHeader = "Accept";
export const AcceptCharset: HttpRequestHeader = "Accept-Charset";
export const AcceptDatetime: HttpRequestHeader = "Accept-Datetime";
export const AcceptEncoding: HttpRequestHeader = "Accept-Encoding";
export const AcceptLanguage: HttpRequestHeader = "Accept-Language";
export const AcceptRanges: HttpResponseHeader = "Accept-Ranges";
export const Age: HttpResponseHeader = "Age";
export const Allow: HttpResponseHeader = "Allow";
export const Authorization: HttpRequestHeader = "Authorization";
export const CacheControl: HttpRequestHeader | HttpResponseHeader =
	"Cache-Control";
export const Connection: HttpRequestHeader | HttpResponseHeader = "Connection";
export const ContentDisposition: HttpResponseHeader = "Content-Disposition";
export const ContentEncoding: HttpResponseHeader = "Content-Encoding";
export const ContentLanguage: HttpResponseHeader = "Content-Language";
export const ContentLength: HttpRequestHeader | HttpResponseHeader =
	"Content-Length";
export const ContentLocation: HttpResponseHeader = "Content-Location";
export const ContentMd5: HttpRequestHeader | HttpResponseHeader = "Content-MD5";
export const ContentRange: HttpResponseHeader = "Content-Range";
export const ContentType: HttpRequestHeader | HttpResponseHeader =
	"Content-Type";
export const Cookie: HttpRequestHeader = "Cookie";
export const DateTime: HttpRequestHeader | HttpResponseHeader = "Date";
export const ETag: HttpResponseHeader = "ETag";
export const Expect: HttpRequestHeader = "Expect";
export const Expires: HttpResponseHeader = "Expires";
export const From: HttpRequestHeader = "From";
export const Host: HttpRequestHeader = "Host";
export const IfMatch: HttpRequestHeader = "If-Match";
export const IfModifiedSince: HttpRequestHeader = "If-Modified-Since";
export const IfNoneMatch: HttpRequestHeader = "If-None-Match";
export const IfRange: HttpRequestHeader = "If-Range";
export const IfunmodifiedSince: HttpRequestHeader = "If-Unmodified-Since";
export const LastModified: HttpResponseHeader = "Last-Modified";
export const Link: HttpResponseHeader = "Link";
export const LocationUri: HttpResponseHeader = "Location";
export const MaxForwards: HttpRequestHeader = "Max-Forwards";
export const P3P: HttpResponseHeader = "P3P";
export const Pragma: HttpRequestHeader | HttpResponseHeader = "Pragma";
export const ProxyAuthenticate: HttpResponseHeader = "Proxy-Authenticate";
export const ProxyAuthorization: HttpRequestHeader = "Proxy-Authorization";
export const Ranges: HttpRequestHeader = "Range";
export const Referer: HttpRequestHeader = "Referer";
export const Referrer: HttpRequestHeader = Referer;
export const Refresh: HttpResponseHeader = "Refresh";
export const RetryAfter: HttpResponseHeader = "Retry-After";
export const Server: HttpResponseHeader = "Server";
export const SetCookie: HttpResponseHeader = "Set-Cookie";
export const StrictTransportSecurity: HttpResponseHeader =
	"Strict-Transport-Security";
export const TE: HttpRequestHeader = "TE";
export const Trailer: HttpResponseHeader = "Trailer";
export const TransferEncodingRequest: HttpRequestHeader = TE;
export const TransferEncodingResponse: HttpResponseHeader = "Transfer-Encoding";
export const Upgrade: HttpRequestHeader = "Upgrade";
export const UserAgent: HttpRequestHeader = "User-Agent";
export const Vary: HttpResponseHeader = "Vary";
export const Via: HttpRequestHeader | HttpResponseHeader = "Via";
export const Warning: HttpRequestHeader | HttpResponseHeader = "Warning";
export const WwwAuthenticate: HttpResponseHeader = "WWW-Authenticate";
