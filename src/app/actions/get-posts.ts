import { Posts } from "@/interfaces/post";
import axios from "axios";

export const getPosts = async () => {
	try {
		const response = await axios.get(`${process.env.OWN_BLOG_API_URL}/posts`, {
			headers: {
				"x-api-key": process.env.OWN_BLOG_API_KEY,
			},
		});
		if (!response) return { posts: [], pagination: {} };
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
