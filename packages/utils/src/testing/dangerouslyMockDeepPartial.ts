import type { DeepPartial } from "../types";

/**
 * Treats a deeply partial object as a complete `T`. This is an unchecked cast
 * meant for test fixtures that only need some of a type's nested properties.
 */
export const dangerouslyMockDeepPartial = <T>(
	incompleteObject: DeepPartial<T>,
): T => incompleteObject as T; // eslint-disable-line @typescript-eslint/consistent-type-assertions
