import { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/app/_components/container";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import { getPostBySlug } from "@/app/actions/get-post-by-slug";

export default async function Post(props: Params) {
	const { slug } = await props.params;

	if (!slug) {
		return notFound();
	}
	const post = await getPostBySlug({ slug });

	if (!post) {
		return notFound();
	}

	return (
		<main>
			<Container>
				<article className="mb-32 max-w-5xl mx-auto">
					<PostHeader
						title={post.title}
						published_at={post.published_at}
						creator={post.creator}
						excerpt={post.excerpt}
					/>
					<PostBody {...post.content} />
				</article>
			</Container>
		</main>
	);
}

type Params = {
	params: Promise<{
		slug: string;
	}>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
	const { slug } = await props.params;
	const post = await getPostBySlug({ slug });

	if (!post) {
		return notFound();
	}

	const { metadata } = post;

	const title = `${metadata.seo_title} | Blog Example`;
	const description = metadata.seo_description;

	return {
		title,
		description,
		keywords: metadata.seo_keywords ?? [],
		openGraph: {
			title: metadata.og_title,
			description: metadata.og_description,
			images: [metadata.og_image_url ?? ""],
			tags: post.tags,
		},
	};
}
