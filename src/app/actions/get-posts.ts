import { Posts } from "@/interfaces/post";
import axios from "axios";

export const getPosts = async () => {
	try {
		const response = await axios.get(`${process.env.BLOG_URL}/posts`, {
			headers: {
				"x-api-key": process.env.BLOG_TEST_API_KEY,
			},
		});
		if (!response || !response.data) return { posts: [], pagination: {} };
		return response.data as Posts;
	} catch (error) {
		console.log({
			status: 500,
			message: "Get Posts Error: Internal server error",
			error,
		});
		return { posts: [], pagination: {} };
	}
};
