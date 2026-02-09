import { ReactNode } from "react";

type Props = {
	children?: ReactNode;
};

export function PostTitle({ children }: Props) {
	return (
		<h1 className="text-5xl md:text-7xl lg:text-8xl my-0 font-bold tracking-tighter leading-tight md:leading-none text-center md:text-left">
			{children}
		</h1>
	);
}
