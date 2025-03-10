import PostForm from "@/components/posts/PostForm";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { prisma } from "@/lib/db";
import Image from "next/image";
import React from "react";

const HomePage = async () => {
	const posts = await prisma.post.findMany({
		orderBy: {
			created_at: "desc"
		}
	});

	return (
		<>
			<section className="pb-6">
				<h1 className="text-4xl font-bold">Home Page</h1>
			</section>

			<section className="pb-6">
				<PostForm />
			</section>

			<section>
				{posts.map((post) => {
					const { id, body, image, created_at, updated_at, title } =
						post;

					return (
						<Card key={id}>
							<CardHeader>
								<h2 className="text-3xl font-bold">{title}</h2>
							</CardHeader>

							<CardContent>
								<p>Created At: {created_at.toUTCString()}</p>
								<p>Updated At: {updated_at.toUTCString()}</p>
								<p>{body}</p>
								{image ? (
									<Image src={image} alt="image" />
								) : (
									<p>No Image</p>
								)}
							</CardContent>
						</Card>
					);
				})}
			</section>
		</>
	);
};

export default HomePage;
