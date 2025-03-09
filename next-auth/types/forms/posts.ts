import { date, object, string, z } from "zod";

export const postSchema = object({
	title: string().min(1, "required"),
	body: string().min(1, "required"),
	image: string(),
	created_at: date().nullable(),
	updated_at: date().nullable(),
});

export type TPostSchema = z.infer<typeof postSchema>;