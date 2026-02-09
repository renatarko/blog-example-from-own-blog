import { Tag } from "@/interfaces/tag";
import axios from "axios";

export const getAllTags = async () => {
	try {
		const response = await axios.get(`${process.env.OWN_BLOG_API_URL}/tags`, {
			headers: {
				"x-api-key": process.env.OWN_BLOG_API_KEY,
			},
		});

		if (!response) return [];

		const data = response.data;

		return data.tags as Tag[];
	} catch (error) {
		if (axios.isAxiosError(error)) {
			if (error.response?.status === 404) {
				return []; // post não encontrado
			}
		}

		console.error("Get Tags Error:", error);
		return [];
	}
};
