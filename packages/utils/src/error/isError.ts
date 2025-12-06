import { z } from "zod";

const errorSchema = z.object({
	message: z.string(),
	name: z.string(),
	stack: z.string().optional(),
});

export const isError = (obj: unknown): obj is Error => {
	if (obj instanceof Error) {
		return true;
	}

	return errorSchema.safeParse(obj).success;
};
