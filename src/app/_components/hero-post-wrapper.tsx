import { getPosts } from "../actions/get-posts";
import { HeroPost } from "./hero-post";

export default async function HeroPostWrapper() {
	const { posts } = await getPosts();
	return <HeroPost {...posts[0]} />;
}
