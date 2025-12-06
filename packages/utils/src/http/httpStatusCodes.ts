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

export const Continue: HttpStatusCode = 100 as const;
export const SwitchingProtocols: HttpStatusCode = 101 as const;
export const Processing: HttpStatusCode = 102 as const;
export const EarlyHints: HttpStatusCode = 103 as const;
export const Ok: HttpStatusCode = 200 as const;
export const Created: HttpStatusCode = 201 as const;
export const Accepted: HttpStatusCode = 202 as const;
export const NonAuthoritativeInformation: HttpStatusCode = 203 as const;
export const NoContent: HttpStatusCode = 204 as const;
export const ResetContent: HttpStatusCode = 205 as const;
export const PartialContent: HttpStatusCode = 206 as const;
export const MultiStatus: HttpStatusCode = 207 as const;
export const AlreadyReported: HttpStatusCode = 208 as const;
export const ImUsed: HttpStatusCode = 226 as const;
export const MultipleChoices: HttpStatusCode = 300 as const;
export const MovedPermanently: HttpStatusCode = 301 as const;
export const Found: HttpStatusCode = 302 as const;
export const SeeOther: HttpStatusCode = 303 as const;
export const NotModified: HttpStatusCode = 304 as const;
export const UseProxyDeprecated: HttpStatusCode = 305 as const;
export const TemporaryRedirect: HttpStatusCode = 307 as const;
export const PermanentRedirect: HttpStatusCode = 308 as const;
export const BadRequest: HttpStatusCode = 400 as const;
export const Unauthorized: HttpStatusCode = 401 as const;
export const PaymentRequired: HttpStatusCode = 402 as const;
export const Forbidden: HttpStatusCode = 403 as const;
export const NotFound: HttpStatusCode = 404 as const;
export const MethodNotAllowed: HttpStatusCode = 405 as const;
export const NotAcceptable: HttpStatusCode = 406 as const;
export const ProxyAuthenticationRequired: HttpStatusCode = 407 as const;
export const RequestTimeout: HttpStatusCode = 408 as const;
export const Conflict: HttpStatusCode = 409 as const;
export const Gone: HttpStatusCode = 410 as const;
export const LengthRequired: HttpStatusCode = 411 as const;
export const PreconditionFailed: HttpStatusCode = 412 as const;
export const PayloadTooLarge: HttpStatusCode = 413 as const;
export const UriTooLong: HttpStatusCode = 414 as const;
export const UnsupportedMediaType: HttpStatusCode = 415 as const;
export const RangeNotSatisfiable: HttpStatusCode = 416 as const;
export const ExpectationFailed: HttpStatusCode = 417 as const;
export const ImATeapot: HttpStatusCode = 418 as const;
export const MisdirectedRequest: HttpStatusCode = 421 as const;
export const UnprocessableContent: HttpStatusCode = 422 as const;
export const Locked: HttpStatusCode = 423 as const;
export const FailedDependency: HttpStatusCode = 424 as const;
export const TooEarly: HttpStatusCode = 425 as const;
export const UpgradeRequired: HttpStatusCode = 426 as const;
export const PreconditionRequired: HttpStatusCode = 428 as const;
export const TooManyRequests: HttpStatusCode = 429 as const;
export const RequestHeaderFieldsTooLarge: HttpStatusCode = 431 as const;
export const UnavailableForLegalReasons: HttpStatusCode = 451 as const;
export const InternalServerError: HttpStatusCode = 500 as const;
export const NotImplemented: HttpStatusCode = 501 as const;
export const BadGateway: HttpStatusCode = 502 as const;
export const ServiceUnavailable: HttpStatusCode = 503 as const;
export const GatewayTimeout: HttpStatusCode = 504 as const;
export const HttpVersionNotSupported: HttpStatusCode = 505 as const;
export const VariantAlsoNegotiates: HttpStatusCode = 506 as const;
export const InsufficientStorage: HttpStatusCode = 507 as const;
export const LoopDetected: HttpStatusCode = 508 as const;
export const NotExtended: HttpStatusCode = 510 as const;
export const NetworkAuthenticationRequired: HttpStatusCode = 511 as const;

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
