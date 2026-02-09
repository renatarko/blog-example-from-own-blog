import { CMS_NAME, CMS_URL } from "@/lib/constants";

export function Intro() {
	return (
		<section className="flex-col md:flex-row flex items-center md:justify-between mt-4 mb-16 md:mb-12">
			<h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
				Seu Blog.
			</h1>
			<h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
				Exemplo do que pode ser o seu Blog dinâmico usando{" "}
				<a
					href={CMS_URL}
					className="underline hover:text-blue-600 duration-200 transition-colors"
				>
					{CMS_NAME}.
				</a>
			</h4>
		</section>
	);
}
