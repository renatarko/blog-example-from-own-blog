import { getAllTags } from "../actions/get-all-tags";
import { getPosts } from "../actions/get-posts";
import { HeroPost } from "./hero-post";
import { PostTags } from "./post-tags";

export default async function HeroPostWrapper() {
	const { posts } = await getPosts();
	const tags = await getAllTags();
	return (
		<div className="space-y-12">
			<PostTags tags={tags} />
			<HeroPost {...posts[0]} />
		</div>
	);
}
