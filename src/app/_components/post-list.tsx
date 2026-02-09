// components/PostsList.tsx

import { getPosts } from "../actions/get-posts";
import { MoreStories } from "./more-stories";

export default async function PostsList() {
	const { posts } = await getPosts();

	return <MoreStories posts={posts} />;
}
