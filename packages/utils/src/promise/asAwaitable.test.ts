import { asAwaitable } from "./asAwaitable";

describe("promise/asAwaitable", () => {
	test.each([
		["new Promise", new Promise((resolve) => resolve(undefined))],
		[
			"lambda returning a resolved Promise",
			() => Promise.resolve(undefined),
		],
		[
			"lambda awaiting a resolved Promise",
			async () => {
				await Promise.resolve(undefined);
			},
		],
	])("supports %s", (_case, promiseLike) => {
		expect(asAwaitable(promiseLike)).toBeInstanceOf(Promise<undefined>);
	});
});
