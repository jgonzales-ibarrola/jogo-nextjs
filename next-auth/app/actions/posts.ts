"use server";

import { prisma } from "@/lib/db";
import { postSchema, TPostSchema } from "@/types/forms/posts";
import { revalidatePath } from "next/cache";

export async function createPostAction(values: TPostSchema) {
	try {
		const validatedData = postSchema.safeParse(values);

		if (validatedData.error) {
			throw new Error("Failed to create post.");
		}

		const data = validatedData.data;

		await prisma.post.create({
			data: {
				body: data.body,
				title: data.title,
			},
		});

		revalidatePath("/");

		return { success: true };
	} catch (error) {
		return { success: false };
	}
}
