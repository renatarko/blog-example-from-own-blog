import { Tag as TagType } from "@/interfaces/tag";
import Link from "next/link";

type Props = {
	tag: TagType;
};

export const Tag = ({ tag }: Props) => {
	return (
		<li>
			<Link
				className="border dark:border-zinc-500 px-2 py-1 rounded-full text-sm dark:hover:bg-zinc-800 transition-colors font-light hover:bg-zinc-200"
				href={`/tags/${tag.slug}`}
			>
				{tag.name}
			</Link>
		</li>
	);
};

type PostTagsProps = {
	tags?: TagType[];
};

export const PostTags = ({ tags }: PostTagsProps) => {
	return (
		<ul className="flex items-center gap-4 flex-wrap">
			{tags && tags.length > 0
				? tags.map((tag) => <Tag key={tag.id} tag={tag} />)
				: null}
		</ul>
	);
};
