import { z } from "zod";

export type HttpStatusCode =
	| 100
	| 101
	| 102
	| 103
	| 200
	| 201
	| 202
	| 203
	| 204
	| 205
	| 206
	| 207
	| 208
	| 226
	| 300
	| 301
	| 302
	| 303
	| 304
	| 305
	| 307
	| 308
	| 400
	| 401
	| 402
	| 403
	| 404
	| 405
	| 406
	| 407
	| 408
	| 409
	| 410
	| 411
	| 412
	| 413
	| 414
	| 415
	| 416
	| 417
	| 418
	| 421
	| 422
	| 423
	| 424
	| 425
	| 426
	| 428
	| 429
	| 431
	| 451
	| 500
	| 501
	| 502
	| 503
	| 504
	| 505
	| 506
	| 507
	| 508
	| 510
	| 511;

export const Continue = 100 as const satisfies HttpStatusCode;
export const SwitchingProtocols = 101 as const satisfies HttpStatusCode;
export const Processing = 102 as const satisfies HttpStatusCode;
export const EarlyHints = 103 as const satisfies HttpStatusCode;
export const Ok = 200 as const satisfies HttpStatusCode;
export const Created = 201 as const satisfies HttpStatusCode;
export const Accepted = 202 as const satisfies HttpStatusCode;
export const NonAuthoritativeInformation =
	203 as const satisfies HttpStatusCode;
export const NoContent = 204 as const satisfies HttpStatusCode;
export const ResetContent = 205 as const satisfies HttpStatusCode;
export const PartialContent = 206 as const satisfies HttpStatusCode;
export const MultiStatus = 207 as const satisfies HttpStatusCode;
export const AlreadyReported = 208 as const satisfies HttpStatusCode;
export const ImUsed = 226 as const satisfies HttpStatusCode;
export const MultipleChoices = 300 as const satisfies HttpStatusCode;
export const MovedPermanently = 301 as const satisfies HttpStatusCode;
export const Found = 302 as const satisfies HttpStatusCode;
export const SeeOther = 303 as const satisfies HttpStatusCode;
export const NotModified = 304 as const satisfies HttpStatusCode;
export const UseProxyDeprecated = 305 as const satisfies HttpStatusCode;
export const TemporaryRedirect = 307 as const satisfies HttpStatusCode;
export const PermanentRedirect = 308 as const satisfies HttpStatusCode;
export const BadRequest = 400 as const satisfies HttpStatusCode;
export const Unauthorized = 401 as const satisfies HttpStatusCode;
export const PaymentRequired = 402 as const satisfies HttpStatusCode;
export const Forbidden = 403 as const satisfies HttpStatusCode;
export const NotFound = 404 as const satisfies HttpStatusCode;
export const MethodNotAllowed = 405 as const satisfies HttpStatusCode;
export const NotAcceptable = 406 as const satisfies HttpStatusCode;
export const ProxyAuthenticationRequired =
	407 as const satisfies HttpStatusCode;
export const RequestTimeout = 408 as const satisfies HttpStatusCode;
export const Conflict = 409 as const satisfies HttpStatusCode;
export const Gone = 410 as const satisfies HttpStatusCode;
export const LengthRequired = 411 as const satisfies HttpStatusCode;
export const PreconditionFailed = 412 as const satisfies HttpStatusCode;
export const PayloadTooLarge = 413 as const satisfies HttpStatusCode;
export const UriTooLong = 414 as const satisfies HttpStatusCode;
export const UnsupportedMediaType = 415 as const satisfies HttpStatusCode;
export const RangeNotSatisfiable = 416 as const satisfies HttpStatusCode;
export const ExpectationFailed = 417 as const satisfies HttpStatusCode;
export const ImATeapot = 418 as const satisfies HttpStatusCode;
export const MisdirectedRequest = 421 as const satisfies HttpStatusCode;
export const UnprocessableContent = 422 as const satisfies HttpStatusCode;
export const Locked = 423 as const satisfies HttpStatusCode;
export const FailedDependency = 424 as const satisfies HttpStatusCode;
export const TooEarly = 425 as const satisfies HttpStatusCode;
export const UpgradeRequired = 426 as const satisfies HttpStatusCode;
export const PreconditionRequired = 428 as const satisfies HttpStatusCode;
export const TooManyRequests = 429 as const satisfies HttpStatusCode;
export const RequestHeaderFieldsTooLarge =
	431 as const satisfies HttpStatusCode;
export const UnavailableForLegalReasons = 451 as const satisfies HttpStatusCode;
export const InternalServerError = 500 as const satisfies HttpStatusCode;
export const NotImplemented = 501 as const satisfies HttpStatusCode;
export const BadGateway = 502 as const satisfies HttpStatusCode;
export const ServiceUnavailable = 503 as const satisfies HttpStatusCode;
export const GatewayTimeout = 504 as const satisfies HttpStatusCode;
export const HttpVersionNotSupported = 505 as const satisfies HttpStatusCode;
export const VariantAlsoNegotiates = 506 as const satisfies HttpStatusCode;
export const InsufficientStorage = 507 as const satisfies HttpStatusCode;
export const LoopDetected = 508 as const satisfies HttpStatusCode;
export const NotExtended = 510 as const satisfies HttpStatusCode;
export const NetworkAuthenticationRequired =
	511 as const satisfies HttpStatusCode;

// Allow any numbers between 100 and 599 as those are potentially valid.
// https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
export const httpStatusCodeSchema = z.number().int().gte(100).lt(600);

export const clientErrorHttpStatusCodeSchema = httpStatusCodeSchema.and(
	z.number().gte(400).lt(500),
);
export const serverErrorHttpStatusCodeSchema = httpStatusCodeSchema.and(
	z.number().gte(500).lt(600),
);
export const successHttpStatusCodeSchema = httpStatusCodeSchema.and(
	z.number().gte(100).lt(400),
);

export const isHttpStatusCode = (obj: unknown): obj is HttpStatusCode =>
	httpStatusCodeSchema.safeParse(obj).success;

export const isClientErrorHttpStatusCode = (
	obj: unknown,
): obj is HttpStatusCode =>
	clientErrorHttpStatusCodeSchema.safeParse(obj).success;

export const isServerErrorHttpStatusCode = (
	obj: unknown,
): obj is HttpStatusCode =>
	serverErrorHttpStatusCodeSchema.safeParse(obj).success;

export const isSuccessHttpStatusCode = (obj: unknown): obj is HttpStatusCode =>
	successHttpStatusCodeSchema.safeParse(obj).success;
