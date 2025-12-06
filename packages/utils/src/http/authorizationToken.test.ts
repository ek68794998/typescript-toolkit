import { getAuthorizationHeader, isExpired } from "./authorizationToken";

describe("http/authorizationToken", () => {
	beforeAll(() => {
		vi.useFakeTimers();
	});

	afterAll(() => {
		vi.useRealTimers();
	});

	describe("getAuthorizationHeader", () => {
		test("properly handles a URL with no parameters", () => {
			const result = getAuthorizationHeader({
				expiresOn: Date.now(),
				tokenType: "Bearer",
				value: "123456",
			});

			expect(result).toBe("Bearer 123456");
		});
	});

	describe("isExpired", () => {
		test.each<{
			currentDate: string;
			expected: boolean;
			tokenDate: string;
		}>([
			{
				currentDate: "2000-01-01T00:00:00Z",
				expected: false,
				tokenDate: "2000-01-01T00:00:00Z",
			},
			{
				currentDate: "2000-01-01T00:01:00Z",
				expected: true,
				tokenDate: "2000-01-01T00:00:00Z",
			},
			{
				currentDate: "2000-01-01T00:00:00Z",
				expected: false,
				tokenDate: "2000-01-01T00:01:00Z",
			},
		])(
			"indicates on %s that a token which expires on %s is expired=%s",
			({ currentDate, expected, tokenDate }) => {
				vi.setSystemTime(currentDate);

				const result = isExpired({
					expiresOn: new Date(tokenDate).getTime(),
					tokenType: "Bearer",
					value: "123456",
				});

				expect(result).toBe(expected);
			},
		);
	});
});
