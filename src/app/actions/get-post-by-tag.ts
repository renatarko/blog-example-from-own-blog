import { Posts } from "@/interfaces/post";
import axios from "axios";

export const getPostByTag = async ({ tag }: { tag: string }) => {
	try {
		const response = await axios.get(
			`${process.env.OWN_BLOG_API_URL}/posts?tag=${tag}`,
			{
				headers: {
					"x-api-key": process.env.OWN_BLOG_API_KEY,
				},
			},
		);

		if (!response) return { posts: [], pagination: {} };

		const data = response.data;

		return data as Posts;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			if (error.response?.status === 404) {
				return { posts: [], pagination: {} }; // post não encontrado
			}
		}

		console.error("Get Tag Error:", error);
		return { posts: [], pagination: {} };
	}
};
