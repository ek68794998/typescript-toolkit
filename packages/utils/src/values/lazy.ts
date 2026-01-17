interface InitializedLazy<T> {
	data: T;
	initialized: true;
}

interface UninitializedLazy {
	initialized: false;
}

type LazyInstance<T> = InitializedLazy<T> | UninitializedLazy;

export class Lazy<T> {
	private instance: LazyInstance<T>;

	public constructor(private readonly factory: () => T) {
		this.instance = { initialized: false };
	}

	public get(): T {
		const { initialized } = this.instance;

		if (!initialized) {
			this.instance = {
				data: this.factory(),
				initialized: true,
			};
		}

		return this.instance.data;
	}
}
