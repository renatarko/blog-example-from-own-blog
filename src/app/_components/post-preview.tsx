import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { Post } from "@/interfaces/post";

type Props = Pick<
	Post,
	| "title"
	| "published_at"
	| "featured_image_url"
	| "creator"
	| "excerpt"
	| "slug"
>;

export function PostPreview({
	title,
	featured_image_url,
	published_at,
	excerpt,
	creator,
	slug,
}: Props) {
	return (
		<div>
			<div className="mb-5">
				<CoverImage slug={slug} title={title} src={featured_image_url} />
			</div>
			<h3 className="text-3xl mb-3 leading-snug">
				<Link href={`/posts/${slug}`} className="hover:underline">
					{title}
				</Link>
			</h3>
			<div className="text-lg mb-4">
				<DateFormatter dateString={published_at} />
			</div>
			<p className="text-lg leading-relaxed mb-4">{excerpt}</p>
			<Avatar name={creator.name} picture={creator.avatar} />
		</div>
	);
}
