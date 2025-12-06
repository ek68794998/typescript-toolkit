import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		...configDefaults,
		coverage: {
			exclude: [
				...(configDefaults.coverage.exclude ?? []),
				"**/__test__/**",
				"**/build/**",
				"**/dist/**",
				"**/node_modules/**",
			],
			provider: "v8",
			reporter: ["text", "html"],
		},
		exclude: [...configDefaults.exclude, "**/build/**"],
		globals: true,
		include: ["./src/**/*.{test,spec}.?(c|m)[jt]s?(x)"],
	},
});
