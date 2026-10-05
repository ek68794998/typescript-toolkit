import { isDebug } from "./isDebug";

describe("environment/isDebug", () => {
	afterEach(() => {
		vi.unstubAllEnvs();
	});

	test.each<[string, boolean]>([
		["development", true],
		["production", false],
		["test", false],
		["", false],
	])("returns correct value when NODE_ENV is '%s'", (env, expected) => {
		vi.stubEnv("NODE_ENV", env);
		expect(isDebug()).toBe(expected);
	});
});
