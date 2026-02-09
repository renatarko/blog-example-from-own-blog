import Link from "next/link";

const Header = () => {
	return (
		<header className="max-w-7xl mt-8 mb-16 mx-auto px-8">
			<p className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight flex items-center justify-start">
				<Link href="/" className="hover:underline">
					Blog
				</Link>
				.
			</p>
		</header>
	);
};

export default Header;
