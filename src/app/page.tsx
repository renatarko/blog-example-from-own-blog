import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { PostSkeleton } from "./_components/post-skeleton";
import { Suspense } from "react";
import HeroPostWrapper from "./_components/hero-post-wrapper";
import PostsList from "./_components/post-list";

export default async function Index() {
	return (
		<main>
			<Container>
				<Intro />

				<Suspense fallback={<PostSkeleton className="mt-16 mb-8" />}>
					<HeroPostWrapper />
				</Suspense>

				<Suspense
					fallback={
						<div className="grid grid-cols-3 gap-4 mt-6">
							<PostSkeleton />
							<PostSkeleton />
							<PostSkeleton />
						</div>
					}
				>
					<PostsList />
				</Suspense>
			</Container>
		</main>
	);
}
