import { PostPreview } from "@/app/_components/post-preview";
import { getAllTags } from "@/app/actions/get-all-tags";
import { getPostByTag } from "@/app/actions/get-post-by-tag";
import { notFound } from "next/navigation";

type Params = {
	params: Promise<{
		tag: string;
	}>;
};

export default async function TagPage({ params }: Params) {
	const { tag } = await params;
	const { posts } = await getPostByTag({ tag });

	if (!posts) notFound();

	return (
		<main className="max-w-5xl mx-auto mb-16 px-4 sm:px-0">
			<h1 className="text-2xl font-bold mb-6">
				Resultados sobre <b className="text-sky-600">{tag}</b>
			</h1>

			{posts.length === 0 && <p>Nenhum post encontrado</p>}

			<ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
				{posts.length > 0 &&
					posts.map((post) => <PostPreview key={post.slug} {...post} />)}
			</ul>
		</main>
	);
}

export async function generateMetadata({ params }: Params) {
	const { tag } = await params;
	return {
		title: `Posts sobre ${tag} | Blog Exemplo`,
		description: `Artigos relacionados a ${tag}`,
	};
}

export async function generateStaticParams() {
	const tags = await getAllTags();

	return tags.map((tag) => ({ tag: tag.slug }));
}
