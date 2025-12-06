export interface AuthorizationToken {
	expiresOn: number;
	tokenType: string;
	value: string;
}

export const getAuthorizationHeader = (token: AuthorizationToken): string =>
	`${token.tokenType} ${token.value}`;

export const isExpired = (token: AuthorizationToken): boolean =>
	token.expiresOn < Date.now();
