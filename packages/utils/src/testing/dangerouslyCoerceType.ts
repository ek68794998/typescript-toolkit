/**
 * Casts any value to `T` without checking it. This is meant for tests that
 * deliberately pass values the type system would otherwise reject.
 */
export const dangerouslyCoerceType = <T>(obj: unknown): T => obj as T; // eslint-disable-line @typescript-eslint/consistent-type-assertions
