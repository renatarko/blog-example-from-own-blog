import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import Link from "next/link";
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

export function HeroPost({
	title,
	featured_image_url,
	published_at,
	excerpt,
	creator,
	slug,
}: Props) {
	return (
		<section>
			<div className="mb-8 md:mb-16">
				<CoverImage title={title} src={featured_image_url} slug={slug} />
			</div>
			<div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
				<div>
					<h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
						<Link href={`/posts/${slug}`} className="hover:underline">
							{title}
						</Link>
					</h3>

					<DateFormatter
						className="mb-4 md:mb-0 text-lg"
						dateString={published_at}
					/>
				</div>
				<div>
					<p className="text-lg leading-relaxed mb-4">{excerpt}</p>
					{creator && <Avatar {...creator} />}
				</div>
			</div>
		</section>
	);
}
