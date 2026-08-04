import * as httpHeaders from "./httpHeaders";

describe("http/httpHeaders", () => {
	describe("isHttpRequestHeader", () => {
		test.each<
			[
				(
					| httpHeaders.HttpRequestHeader
					| httpHeaders.HttpResponseHeader
					| string
				),
				boolean,
			]
		>([
			[httpHeaders.Accept, true],
			[httpHeaders.AcceptCharset, true],
			[httpHeaders.AcceptDatetime, true],
			[httpHeaders.AcceptEncoding, true],
			[httpHeaders.AcceptLanguage, true],
			[httpHeaders.AcceptRanges, false],
			[httpHeaders.Age, false],
			[httpHeaders.Allow, false],
			[httpHeaders.Authorization, true],
			[httpHeaders.CacheControl, true],
			[httpHeaders.Connection, true],
			[httpHeaders.ContentDisposition, false],
			[httpHeaders.ContentEncoding, false],
			[httpHeaders.ContentLanguage, false],
			[httpHeaders.ContentLength, true],
			[httpHeaders.ContentLocation, false],
			[httpHeaders.ContentMd5, true],
			[httpHeaders.ContentRange, false],
			[httpHeaders.ContentType, true],
			[httpHeaders.Cookie, true],
			[httpHeaders.DateTime, true],
			[httpHeaders.ETag, false],
			[httpHeaders.Expect, true],
			[httpHeaders.Expires, false],
			[httpHeaders.From, true],
			[httpHeaders.Host, true],
			[httpHeaders.IfMatch, true],
			[httpHeaders.IfModifiedSince, true],
			[httpHeaders.IfNoneMatch, true],
			[httpHeaders.IfRange, true],
			[httpHeaders.IfUnmodifiedSince, true],
			[httpHeaders.IfunmodifiedSince, true],
			[httpHeaders.LastModified, false],
			[httpHeaders.Link, false],
			[httpHeaders.LocationUri, false],
			[httpHeaders.MaxForwards, true],
			[httpHeaders.P3P, false],
			[httpHeaders.Pragma, true],
			[httpHeaders.ProxyAuthenticate, false],
			[httpHeaders.ProxyAuthorization, true],
			[httpHeaders.Ranges, true],
			[httpHeaders.Referer, true],
			[httpHeaders.Referrer, true],
			[httpHeaders.Refresh, false],
			[httpHeaders.RetryAfter, false],
			[httpHeaders.Server, false],
			[httpHeaders.SetCookie, false],
			[httpHeaders.StrictTransportSecurity, false],
			[httpHeaders.TE, true],
			[httpHeaders.Trailer, false],
			[httpHeaders.TransferEncodingRequest, true],
			[httpHeaders.TransferEncodingResponse, false],
			[httpHeaders.Upgrade, true],
			[httpHeaders.UserAgent, true],
			[httpHeaders.Vary, false],
			[httpHeaders.Via, true],
			[httpHeaders.Warning, true],
			[httpHeaders.WwwAuthenticate, false],
			["", false],
			["X-Custom-Header", false],
		])("should handle %s correctly", (input, expected) => {
			expect(httpHeaders.isHttpRequestHeader(input)).toBe(expected);
		});
	});

	describe("isHttpResponseHeader", () => {
		test.each<
			[
				(
					| httpHeaders.HttpRequestHeader
					| httpHeaders.HttpResponseHeader
					| string
				),
				boolean,
			]
		>([
			[httpHeaders.Accept, false],
			[httpHeaders.AcceptCharset, false],
			[httpHeaders.AcceptDatetime, false],
			[httpHeaders.AcceptEncoding, false],
			[httpHeaders.AcceptLanguage, false],
			[httpHeaders.AcceptRanges, true],
			[httpHeaders.Age, true],
			[httpHeaders.Allow, true],
			[httpHeaders.Authorization, false],
			[httpHeaders.CacheControl, true],
			[httpHeaders.Connection, true],
			[httpHeaders.ContentDisposition, true],
			[httpHeaders.ContentEncoding, true],
			[httpHeaders.ContentLanguage, true],
			[httpHeaders.ContentLength, true],
			[httpHeaders.ContentLocation, true],
			[httpHeaders.ContentMd5, true],
			[httpHeaders.ContentRange, true],
			[httpHeaders.ContentType, true],
			[httpHeaders.Cookie, false],
			[httpHeaders.DateTime, true],
			[httpHeaders.ETag, true],
			[httpHeaders.Expect, false],
			[httpHeaders.Expires, true],
			[httpHeaders.From, false],
			[httpHeaders.Host, false],
			[httpHeaders.IfMatch, false],
			[httpHeaders.IfModifiedSince, false],
			[httpHeaders.IfNoneMatch, false],
			[httpHeaders.IfRange, false],
			[httpHeaders.IfUnmodifiedSince, false],
			[httpHeaders.LastModified, true],
			[httpHeaders.Link, true],
			[httpHeaders.LocationUri, true],
			[httpHeaders.MaxForwards, false],
			[httpHeaders.P3P, true],
			[httpHeaders.Pragma, true],
			[httpHeaders.ProxyAuthenticate, true],
			[httpHeaders.ProxyAuthorization, false],
			[httpHeaders.Ranges, false],
			[httpHeaders.Referer, false],
			[httpHeaders.Referrer, false],
			[httpHeaders.Refresh, true],
			[httpHeaders.RetryAfter, true],
			[httpHeaders.Server, true],
			[httpHeaders.SetCookie, true],
			[httpHeaders.StrictTransportSecurity, true],
			[httpHeaders.TE, false],
			[httpHeaders.Trailer, true],
			[httpHeaders.TransferEncodingRequest, false],
			[httpHeaders.TransferEncodingResponse, true],
			[httpHeaders.Upgrade, false],
			[httpHeaders.UserAgent, false],
			[httpHeaders.Vary, true],
			[httpHeaders.Via, true],
			[httpHeaders.Warning, true],
			[httpHeaders.WwwAuthenticate, true],
			["", false],
			["X-Custom-Header", false],
		])("should handle %s correctly", (input, expected) => {
			expect(httpHeaders.isHttpResponseHeader(input)).toBe(expected);
		});
	});
});
