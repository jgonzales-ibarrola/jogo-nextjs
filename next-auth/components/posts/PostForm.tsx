"use client";

import React from "react";

import { postSchema, TPostSchema } from "@/types/forms/posts";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPostAction } from "@/app/actions/posts";

const PostForm = ({ post }: { post?: TPostSchema | null }) => {
	const form = useForm<TPostSchema>({
		resolver: zodResolver(postSchema),
		defaultValues: post || {
			title: "test-title",
			body: "test-body",
			image: "",
			created_at: new Date(),
			updated_at: new Date(),
		},
	});

	// 2. Define a submit handler.
	async function onSubmit(values: TPostSchema) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);

        await createPostAction(values)
        
        form.reset();
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Title</FormLabel>
							<FormControl>
								<Input
									placeholder="(e.g I've got new phone!)"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="body"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Body</FormLabel>
							<FormControl>
								<Input
									placeholder="(e.g It's dope and shining!!)"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="image"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Image</FormLabel>
							<FormControl>
								<Input
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Create</Button>
			</form>
		</Form>
	);
};

export default PostForm;
