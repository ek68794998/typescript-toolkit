import * as httpStatusCodes from "./httpStatusCodes";

describe("http/httpStatusCodes", () => {
	describe("isHttpStatusCode", () => {
		test.each<[httpStatusCodes.HttpStatusCode | number, boolean]>([
			[httpStatusCodes.Continue, true], // 100
			[httpStatusCodes.SwitchingProtocols, true], // 101
			[httpStatusCodes.Processing, true], // 102
			[httpStatusCodes.EarlyHints, true], // 103
			[httpStatusCodes.Ok, true], // 200
			[httpStatusCodes.Created, true], // 201
			[httpStatusCodes.Accepted, true], // 202
			[httpStatusCodes.NonAuthoritativeInformation, true], // 203
			[httpStatusCodes.NoContent, true], // 204
			[httpStatusCodes.ResetContent, true], // 205
			[httpStatusCodes.PartialContent, true], // 206
			[httpStatusCodes.MultiStatus, true], // 207
			[httpStatusCodes.AlreadyReported, true], // 208
			[httpStatusCodes.ImUsed, true], // 226
			[httpStatusCodes.MultipleChoices, true], // 300
			[httpStatusCodes.MovedPermanently, true], // 301
			[httpStatusCodes.Found, true], // 302
			[httpStatusCodes.SeeOther, true], // 303
			[httpStatusCodes.NotModified, true], // 304
			[httpStatusCodes.UseProxyDeprecated, true], // 305
			[httpStatusCodes.TemporaryRedirect, true], // 307
			[httpStatusCodes.PermanentRedirect, true], // 308
			[httpStatusCodes.BadRequest, true], // 400
			[httpStatusCodes.Unauthorized, true], // 401
			[httpStatusCodes.PaymentRequired, true], // 402
			[httpStatusCodes.Forbidden, true], // 403
			[httpStatusCodes.NotFound, true], // 404
			[httpStatusCodes.MethodNotAllowed, true], // 405
			[httpStatusCodes.NotAcceptable, true], // 406
			[httpStatusCodes.ProxyAuthenticationRequired, true], // 407
			[httpStatusCodes.RequestTimeout, true], // 408
			[httpStatusCodes.Conflict, true], // 409
			[httpStatusCodes.Gone, true], // 410
			[httpStatusCodes.LengthRequired, true], // 411
			[httpStatusCodes.PreconditionFailed, true], // 412
			[httpStatusCodes.PayloadTooLarge, true], // 413
			[httpStatusCodes.UriTooLong, true], // 414
			[httpStatusCodes.UnsupportedMediaType, true], // 415
			[httpStatusCodes.RangeNotSatisfiable, true], // 416
			[httpStatusCodes.ExpectationFailed, true], // 417
			[httpStatusCodes.ImATeapot, true], // 418
			[httpStatusCodes.MisdirectedRequest, true], // 421
			[httpStatusCodes.UnprocessableContent, true], // 422
			[httpStatusCodes.Locked, true], // 423
			[httpStatusCodes.FailedDependency, true], // 424
			[httpStatusCodes.TooEarly, true], // 425
			[httpStatusCodes.UpgradeRequired, true], // 426
			[httpStatusCodes.PreconditionRequired, true], // 428
			[httpStatusCodes.TooManyRequests, true], // 429
			[httpStatusCodes.RequestHeaderFieldsTooLarge, true], // 431
			[httpStatusCodes.UnavailableForLegalReasons, true], // 451
			[httpStatusCodes.InternalServerError, true], // 500
			[httpStatusCodes.NotImplemented, true], // 501
			[httpStatusCodes.BadGateway, true], // 502
			[httpStatusCodes.ServiceUnavailable, true], // 503
			[httpStatusCodes.GatewayTimeout, true], // 504
			[httpStatusCodes.HttpVersionNotSupported, true], // 505
			[httpStatusCodes.VariantAlsoNegotiates, true], // 506
			[httpStatusCodes.InsufficientStorage, true], // 507
			[httpStatusCodes.LoopDetected, true], // 508
			[httpStatusCodes.NotExtended, true], // 510
			[httpStatusCodes.NetworkAuthenticationRequired, true], // 511
			[0, false],
			[100.5, false],
			[99, false],
			[600, false],
			[999, false],
		])("should handle %d correctly", (input, expected) => {
			expect(httpStatusCodes.isHttpStatusCode(input)).toBe(expected);
		});
	});

	describe("isClientErrorHttpStatusCode", () => {
		test.each<[httpStatusCodes.HttpStatusCode | number, boolean]>([
			[httpStatusCodes.Continue, false], // 100
			[httpStatusCodes.SwitchingProtocols, false], // 101
			[httpStatusCodes.Processing, false], // 102
			[httpStatusCodes.EarlyHints, false], // 103
			[httpStatusCodes.Ok, false], // 200
			[httpStatusCodes.Created, false], // 201
			[httpStatusCodes.Accepted, false], // 202
			[httpStatusCodes.NonAuthoritativeInformation, false], // 203
			[httpStatusCodes.NoContent, false], // 204
			[httpStatusCodes.ResetContent, false], // 205
			[httpStatusCodes.PartialContent, false], // 206
			[httpStatusCodes.MultiStatus, false], // 207
			[httpStatusCodes.AlreadyReported, false], // 208
			[httpStatusCodes.ImUsed, false], // 226
			[httpStatusCodes.MultipleChoices, false], // 300
			[httpStatusCodes.MovedPermanently, false], // 301
			[httpStatusCodes.Found, false], // 302
			[httpStatusCodes.SeeOther, false], // 303
			[httpStatusCodes.NotModified, false], // 304
			[httpStatusCodes.UseProxyDeprecated, false], // 305
			[httpStatusCodes.TemporaryRedirect, false], // 307
			[httpStatusCodes.PermanentRedirect, false], // 308
			[httpStatusCodes.BadRequest, true], // 400
			[httpStatusCodes.Unauthorized, true], // 401
			[httpStatusCodes.PaymentRequired, true], // 402
			[httpStatusCodes.Forbidden, true], // 403
			[httpStatusCodes.NotFound, true], // 404
			[httpStatusCodes.MethodNotAllowed, true], // 405
			[httpStatusCodes.NotAcceptable, true], // 406
			[httpStatusCodes.ProxyAuthenticationRequired, true], // 407
			[httpStatusCodes.RequestTimeout, true], // 408
			[httpStatusCodes.Conflict, true], // 409
			[httpStatusCodes.Gone, true], // 410
			[httpStatusCodes.LengthRequired, true], // 411
			[httpStatusCodes.PreconditionFailed, true], // 412
			[httpStatusCodes.PayloadTooLarge, true], // 413
			[httpStatusCodes.UriTooLong, true], // 414
			[httpStatusCodes.UnsupportedMediaType, true], // 415
			[httpStatusCodes.RangeNotSatisfiable, true], // 416
			[httpStatusCodes.ExpectationFailed, true], // 417
			[httpStatusCodes.ImATeapot, true], // 418
			[httpStatusCodes.MisdirectedRequest, true], // 421
			[httpStatusCodes.UnprocessableContent, true], // 422
			[httpStatusCodes.Locked, true], // 423
			[httpStatusCodes.FailedDependency, true], // 424
			[httpStatusCodes.TooEarly, true], // 425
			[httpStatusCodes.UpgradeRequired, true], // 426
			[httpStatusCodes.PreconditionRequired, true], // 428
			[httpStatusCodes.TooManyRequests, true], // 429
			[httpStatusCodes.RequestHeaderFieldsTooLarge, true], // 431
			[httpStatusCodes.UnavailableForLegalReasons, true], // 451
			[httpStatusCodes.InternalServerError, false], // 500
			[httpStatusCodes.NotImplemented, false], // 501
			[httpStatusCodes.BadGateway, false], // 502
			[httpStatusCodes.ServiceUnavailable, false], // 503
			[httpStatusCodes.GatewayTimeout, false], // 504
			[httpStatusCodes.HttpVersionNotSupported, false], // 505
			[httpStatusCodes.VariantAlsoNegotiates, false], // 506
			[httpStatusCodes.InsufficientStorage, false], // 507
			[httpStatusCodes.LoopDetected, false], // 508
			[httpStatusCodes.NotExtended, false], // 510
			[httpStatusCodes.NetworkAuthenticationRequired, false], // 511
			[0, false],
			[100.5, false],
			[99, false],
			[600, false],
			[999, false],
		])("should handle %d correctly", (input, expected) => {
			expect(httpStatusCodes.isClientErrorHttpStatusCode(input)).toBe(
				expected,
			);
		});
	});

	describe("isServerErrorHttpStatusCode", () => {
		test.each<[httpStatusCodes.HttpStatusCode | number, boolean]>([
			[httpStatusCodes.Continue, false], // 100
			[httpStatusCodes.SwitchingProtocols, false], // 101
			[httpStatusCodes.Processing, false], // 102
			[httpStatusCodes.EarlyHints, false], // 103
			[httpStatusCodes.Ok, false], // 200
			[httpStatusCodes.Created, false], // 201
			[httpStatusCodes.Accepted, false], // 202
			[httpStatusCodes.NonAuthoritativeInformation, false], // 203
			[httpStatusCodes.NoContent, false], // 204
			[httpStatusCodes.ResetContent, false], // 205
			[httpStatusCodes.PartialContent, false], // 206
			[httpStatusCodes.MultiStatus, false], // 207
			[httpStatusCodes.AlreadyReported, false], // 208
			[httpStatusCodes.ImUsed, false], // 226
			[httpStatusCodes.MultipleChoices, false], // 300
			[httpStatusCodes.MovedPermanently, false], // 301
			[httpStatusCodes.Found, false], // 302
			[httpStatusCodes.SeeOther, false], // 303
			[httpStatusCodes.NotModified, false], // 304
			[httpStatusCodes.UseProxyDeprecated, false], // 305
			[httpStatusCodes.TemporaryRedirect, false], // 307
			[httpStatusCodes.PermanentRedirect, false], // 308
			[httpStatusCodes.BadRequest, false], // 400
			[httpStatusCodes.Unauthorized, false], // 401
			[httpStatusCodes.PaymentRequired, false], // 402
			[httpStatusCodes.Forbidden, false], // 403
			[httpStatusCodes.NotFound, false], // 404
			[httpStatusCodes.MethodNotAllowed, false], // 405
			[httpStatusCodes.NotAcceptable, false], // 406
			[httpStatusCodes.ProxyAuthenticationRequired, false], // 407
			[httpStatusCodes.RequestTimeout, false], // 408
			[httpStatusCodes.Conflict, false], // 409
			[httpStatusCodes.Gone, false], // 410
			[httpStatusCodes.LengthRequired, false], // 411
			[httpStatusCodes.PreconditionFailed, false], // 412
			[httpStatusCodes.PayloadTooLarge, false], // 413
			[httpStatusCodes.UriTooLong, false], // 414
			[httpStatusCodes.UnsupportedMediaType, false], // 415
			[httpStatusCodes.RangeNotSatisfiable, false], // 416
			[httpStatusCodes.ExpectationFailed, false], // 417
			[httpStatusCodes.ImATeapot, false], // 418
			[httpStatusCodes.MisdirectedRequest, false], // 421
			[httpStatusCodes.UnprocessableContent, false], // 422
			[httpStatusCodes.Locked, false], // 423
			[httpStatusCodes.FailedDependency, false], // 424
			[httpStatusCodes.TooEarly, false], // 425
			[httpStatusCodes.UpgradeRequired, false], // 426
			[httpStatusCodes.PreconditionRequired, false], // 428
			[httpStatusCodes.TooManyRequests, false], // 429
			[httpStatusCodes.RequestHeaderFieldsTooLarge, false], // 431
			[httpStatusCodes.UnavailableForLegalReasons, false], // 451
			[httpStatusCodes.InternalServerError, true], // 500
			[httpStatusCodes.NotImplemented, true], // 501
			[httpStatusCodes.BadGateway, true], // 502
			[httpStatusCodes.ServiceUnavailable, true], // 503
			[httpStatusCodes.GatewayTimeout, true], // 504
			[httpStatusCodes.HttpVersionNotSupported, true], // 505
			[httpStatusCodes.VariantAlsoNegotiates, true], // 506
			[httpStatusCodes.InsufficientStorage, true], // 507
			[httpStatusCodes.LoopDetected, true], // 508
			[httpStatusCodes.NotExtended, true], // 510
			[httpStatusCodes.NetworkAuthenticationRequired, true], // 511
			[0, false],
			[100.5, false],
			[99, false],
			[600, false],
			[999, false],
		])("should handle %d correctly", (input, expected) => {
			expect(httpStatusCodes.isServerErrorHttpStatusCode(input)).toBe(
				expected,
			);
		});
	});

	describe("isSuccessHttpStatusCode", () => {
		test.each<[httpStatusCodes.HttpStatusCode | number, boolean]>([
			[httpStatusCodes.Continue, true], // 100
			[httpStatusCodes.SwitchingProtocols, true], // 101
			[httpStatusCodes.Processing, true], // 102
			[httpStatusCodes.EarlyHints, true], // 103
			[httpStatusCodes.Ok, true], // 200
			[httpStatusCodes.Created, true], // 201
			[httpStatusCodes.Accepted, true], // 202
			[httpStatusCodes.NonAuthoritativeInformation, true], // 203
			[httpStatusCodes.NoContent, true], // 204
			[httpStatusCodes.ResetContent, true], // 205
			[httpStatusCodes.PartialContent, true], // 206
			[httpStatusCodes.MultiStatus, true], // 207
			[httpStatusCodes.AlreadyReported, true], // 208
			[httpStatusCodes.ImUsed, true], // 226
			[httpStatusCodes.MultipleChoices, true], // 300
			[httpStatusCodes.MovedPermanently, true], // 301
			[httpStatusCodes.Found, true], // 302
			[httpStatusCodes.SeeOther, true], // 303
			[httpStatusCodes.NotModified, true], // 304
			[httpStatusCodes.UseProxyDeprecated, true], // 305
			[httpStatusCodes.TemporaryRedirect, true], // 307
			[httpStatusCodes.PermanentRedirect, true], // 308
			[httpStatusCodes.BadRequest, false], // 400
			[httpStatusCodes.Unauthorized, false], // 401
			[httpStatusCodes.PaymentRequired, false], // 402
			[httpStatusCodes.Forbidden, false], // 403
			[httpStatusCodes.NotFound, false], // 404
			[httpStatusCodes.MethodNotAllowed, false], // 405
			[httpStatusCodes.NotAcceptable, false], // 406
			[httpStatusCodes.ProxyAuthenticationRequired, false], // 407
			[httpStatusCodes.RequestTimeout, false], // 408
			[httpStatusCodes.Conflict, false], // 409
			[httpStatusCodes.Gone, false], // 410
			[httpStatusCodes.LengthRequired, false], // 411
			[httpStatusCodes.PreconditionFailed, false], // 412
			[httpStatusCodes.PayloadTooLarge, false], // 413
			[httpStatusCodes.UriTooLong, false], // 414
			[httpStatusCodes.UnsupportedMediaType, false], // 415
			[httpStatusCodes.RangeNotSatisfiable, false], // 416
			[httpStatusCodes.ExpectationFailed, false], // 417
			[httpStatusCodes.ImATeapot, false], // 418
			[httpStatusCodes.MisdirectedRequest, false], // 421
			[httpStatusCodes.UnprocessableContent, false], // 422
			[httpStatusCodes.Locked, false], // 423
			[httpStatusCodes.FailedDependency, false], // 424
			[httpStatusCodes.TooEarly, false], // 425
			[httpStatusCodes.UpgradeRequired, false], // 426
			[httpStatusCodes.PreconditionRequired, false], // 428
			[httpStatusCodes.TooManyRequests, false], // 429
			[httpStatusCodes.RequestHeaderFieldsTooLarge, false], // 431
			[httpStatusCodes.UnavailableForLegalReasons, false], // 451
			[httpStatusCodes.InternalServerError, false], // 500
			[httpStatusCodes.NotImplemented, false], // 501
			[httpStatusCodes.BadGateway, false], // 502
			[httpStatusCodes.ServiceUnavailable, false], // 503
			[httpStatusCodes.GatewayTimeout, false], // 504
			[httpStatusCodes.HttpVersionNotSupported, false], // 505
			[httpStatusCodes.VariantAlsoNegotiates, false], // 506
			[httpStatusCodes.InsufficientStorage, false], // 507
			[httpStatusCodes.LoopDetected, false], // 508
			[httpStatusCodes.NotExtended, false], // 510
			[httpStatusCodes.NetworkAuthenticationRequired, false], // 511
			[0, false],
			[100.5, false],
			[99, false],
			[600, false],
			[999, false],
		])("should handle %d correctly", (input, expected) => {
			expect(httpStatusCodes.isSuccessHttpStatusCode(input)).toBe(
				expected,
			);
		});
	});
});
