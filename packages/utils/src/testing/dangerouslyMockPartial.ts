/**
 * Treats a partial object as a complete `T`. This is an unchecked cast meant
 * for test fixtures that only need some of a type's properties.
 */
export const dangerouslyMockPartial = <T>(partialObject: Partial<T>): T =>
	partialObject as T; // eslint-disable-line @typescript-eslint/consistent-type-assertions
