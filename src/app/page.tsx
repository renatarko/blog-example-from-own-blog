import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getPosts } from "./actions/get-posts";
import { notFound } from "next/navigation";

export default async function Index() {
	const { posts } = await getPosts();
	if (!posts) {
		return notFound();
	}

	return (
		<main>
			<Container>
				<Intro />
				<HeroPost
					title={posts[0].title}
					featured_image_url={posts[0].featured_image_url}
					published_at={posts[0].published_at}
					creator={posts[0].creator}
					slug={posts[0].slug}
					excerpt={posts[0].excerpt ?? ""}
				/>
				{posts.length > 0 && <MoreStories posts={posts} />}
			</Container>
		</main>
	);
}
