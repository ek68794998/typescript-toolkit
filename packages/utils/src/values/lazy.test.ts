import { describe, expect, it, vi } from "vitest";
import { Lazy } from "./lazy";

describe("Lazy", () => {
	it("should not invoke factory on construction", () => {
		const factory = vi.fn(() => "value");
		new Lazy(factory);

		expect(factory).not.toHaveBeenCalled();
	});

	it("should invoke factory on first get()", () => {
		const factory = vi.fn(() => "value");
		const lazy = new Lazy(factory);

		const result = lazy.get();

		expect(factory).toHaveBeenCalledTimes(1);
		expect(result).toBe("value");
	});

	it("should only invoke factory once across multiple get() calls", () => {
		const factory = vi.fn(() => "value");
		const lazy = new Lazy(factory);

		lazy.get();
		lazy.get();
		lazy.get();

		expect(factory).toHaveBeenCalledTimes(1);
	});

	it("should return the same instance on subsequent get() calls", () => {
		const lazy = new Lazy(() => ({ id: Math.random() }));

		const first = lazy.get();
		const second = lazy.get();

		expect(first).toBe(second);
	});

	it("should handle undefined as a valid value", () => {
		const factory = vi.fn(() => undefined);
		const lazy = new Lazy(factory);

		const result = lazy.get();

		expect(result).toBeUndefined();
		expect(factory).toHaveBeenCalledTimes(1);
	});

	it("should handle null as a valid value", () => {
		const factory = vi.fn(() => null);
		const lazy = new Lazy(factory);

		const first = lazy.get();
		const second = lazy.get();

		expect(first).toBeNull();
		expect(second).toBeNull();
		expect(factory).toHaveBeenCalledTimes(1);
	});

	it("should work with complex objects", () => {
		class ExpensiveResource {
			constructor(public readonly data: string) {}
		}

		const factory = vi.fn(() => new ExpensiveResource("test"));
		const lazy = new Lazy(factory);

		const result = lazy.get();

		expect(result).toBeInstanceOf(ExpensiveResource);
		expect(result.data).toBe("test");
		expect(factory).toHaveBeenCalledTimes(1);
	});

	it("should work with primitive types", () => {
		const numberLazy = new Lazy(() => 42);
		const stringLazy = new Lazy(() => "hello");
		const boolLazy = new Lazy(() => true);

		expect(numberLazy.get()).toBe(42);
		expect(stringLazy.get()).toBe("hello");
		expect(boolLazy.get()).toBe(true);
	});

	it("should propagate factory errors", () => {
		const error = new Error("Factory failed");
		const lazy = new Lazy(() => {
			throw error;
		});

		expect(() => lazy.get()).toThrow("Factory failed");
	});

	it("should cache result even if factory throws on first call", () => {
		let callCount = 0;
		const lazy = new Lazy(() => {
			callCount++;
			if (callCount === 1) {
				throw new Error("First call fails");
			}
			return "success";
		});

		expect(() => lazy.get()).toThrow("First call fails");
		expect(lazy.get()).toBe("success");
		expect(callCount).toBe(2);
	});
});
