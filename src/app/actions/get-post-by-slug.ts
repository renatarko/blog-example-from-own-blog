import { Post } from "@/interfaces/post";
import axios from "axios";

export const getPostBySlug = async ({ slug }: { slug: string }) => {
	try {
		const response = await axios.get(`${process.env.BLOG_URL}/posts/${slug}`, {
			headers: {
				"x-api-key": process.env.BLOG_TEST_API_KEY,
			},
		});

		if (!response) return null;

		const data = response.data;
		console.log("post: ", data);

		return data as Post;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			if (error.response?.status === 404) {
				return null; // post não encontrado
			}
		}

		console.error("Get Post Error:", error);
		return null;
	}
};
