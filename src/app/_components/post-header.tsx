import { Post } from "@/interfaces/post";
import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";

type Props = Pick<Post, "title" | "published_at" | "creator" | "excerpt">;

export function PostHeader({ title, creator, published_at, excerpt }: Props) {
	return (
		<>
			<div className="space-y-2">
				<PostTitle>{title}</PostTitle>
				{excerpt && <p className="leading-6 font-light italic">{excerpt}</p>}
			</div>

			<div className="my-12 flex items-center gap-4">
				<Avatar
					className="text-bold text-sm"
					name={creator?.name}
					picture={creator?.avatar}
				/>
				{"|"}
				<DateFormatter dateString={published_at} />
			</div>
		</>
	);
}
