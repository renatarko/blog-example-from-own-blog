import { PostContent } from "@/interfaces/post";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";

type Props = PostContent;

export function PostBody({ blocks }: Props) {
	return (
		<div>
			{blocks.map((block) =>
				block.type === "content" ? (
					<ReactMarkdown
						key={block.id}
						remarkPlugins={[remarkGfm]}
						components={{
							h1: ({ children }) => (
								<h1 className="text-3xl font-bold mb-4">{children}</h1>
							),
							h2: ({ children }) => (
								<h2 className="text-2xl font-bold mb-4">{children}</h2>
							),
							h3: ({ children }) => (
								<h2 className="text-xl font-bold mb-4">{children}</h2>
							),
							p: ({ children }) => (
								<p className="text-base leading-relaxed mb-4">{children}</p>
							),
							a: ({ children, href }) => (
								<a href={href} className="text-blue-600 underline">
									{children}
								</a>
							),
							ol: ({ children }) => (
								<ol className="list-decimal pl-6 space-y-2">{children}</ol>
							),
							ul: ({ children }) => (
								<ul className="list-disc pl-6 space-y-2">{children}</ul>
							),
							li: ({ children }) => (
								<li className="leading-relaxed marker:text-xl marker:font-bold">
									{children}
								</li>
							),
						}}
					>
						{block.content}
					</ReactMarkdown>
				) : (
					<Image
						key={block.id}
						src={block.url}
						alt={block.alt}
						width={600}
						height={600}
						className="object-cover w-full h-full my-6"
					/>
				),
			)}
		</div>
	);
}
