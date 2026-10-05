import { toFormData } from "./toFormData";

describe("http/toFormData", () => {
	test("serializes values and skips nullish ones", () => {
		const file = new File(["a,b"], "upload.csv");

		const formData = toFormData({
			count: 3,
			file,
			isValidationOnly: true,
			missing: undefined,
			name: "Checking",
			nothing: null,
		});

		expect([...formData.keys()]).toEqual([
			"count",
			"file",
			"isValidationOnly",
			"name",
		]);
		expect(formData.get("count")).toBe("3");
		expect(formData.get("file")).toBe(file);
		expect(formData.get("isValidationOnly")).toBe("true");
		expect(formData.get("name")).toBe("Checking");
	});

	test.each<[string | number | boolean, string]>([
		[true, "true"],
		[false, "false"],
		[0, "0"],
		[-1.5, "-1.5"],
		[Number.NaN, "NaN"],
		["", ""],
		["text", "text"],
	])("serializes %p as %p", (value, expected) => {
		const formData = toFormData({ key: value });

		expect(formData.getAll("key")).toEqual([expected]);
	});

	test("appends a plain Blob as a File with its content", async () => {
		const blob = new Blob(["hello"], { type: "text/plain" });

		const entry = toFormData({ blob }).get("blob");

		expect(entry).toBeInstanceOf(Blob);
		expect(await (entry as Blob).text()).toBe("hello");
		expect((entry as Blob).type).toBe("text/plain");
	});

	test("preserves a File's name", () => {
		const file = new File(["x"], "report.pdf");

		const entry = toFormData({ file }).get("file");

		expect((entry as File).name).toBe("report.pdf");
	});

	test("returns an empty FormData for an empty record", () => {
		expect([...toFormData({}).keys()]).toEqual([]);
	});
});
