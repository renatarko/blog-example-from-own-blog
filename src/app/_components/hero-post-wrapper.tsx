import Link from "next/link";
import { getAllTags } from "../actions/get-all-tags";
import { getPosts } from "../actions/get-posts";
import { HeroPost } from "./hero-post";
import { PostTags } from "./post-tags";
import { CMS_URL } from "@/lib/constants";

export default async function HeroPostWrapper() {
	const { posts } = await getPosts();
	const tags = await getAllTags();
	return (
		<div className="space-y-12">
			{posts.length === 0 ? (
				<div className="w-full col-span-full flex flex-col gap-4 text-center">
					<h2 className="text-2xl">
						Não há artigos no seu blog, comece a criar agora
					</h2>
					<Link href={CMS_URL}>Criar um post</Link>
				</div>
			) : (
				<PostTags tags={tags} />
			)}
			<HeroPost {...posts[0]} />
		</div>
	);
}
