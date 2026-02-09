import { Creator } from "./creator";
import { Category } from "./category";
import { Pagination } from "./pagination";
import { Tag } from "./tag";

export interface HeaderContent {
	title: string;
	description: string;
}

export interface PostContent {
	header: HeaderContent;
	blocks: PostBlock[];
}

export interface ContentBlock {
	id: string;
	type: "content";
	content: string;
}

export interface ImageBlock {
	id: string;
	type: "image";
	url: string;
	alt: string;
	caption?: string;
}

export type PostBlock = ContentBlock | ImageBlock;

interface MetadataPost {
	og_image_url?: string;
	og_title?: string;
	og_description?: string;
	seo_title: string;
	seo_description: string;
	seo_keywords?: string[];
	canonical_url?: string;
}

export interface Post {
	slug: string;
	title: string;
	excerpt?: string;
	featured_image_alt: string;
	featured_image_url: string;
	published_at: string;
	reading_time_minutes: number;
	category?: Category;
	tags?: Tag[];
	creator: Creator;
	content: PostContent;
	metadata: MetadataPost;
}

export interface Posts {
	posts: Post[];
	pagination: Pagination;
}
