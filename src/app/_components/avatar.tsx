import { cn } from "@/lib/cn";

type Props = {
	name: string;
	picture: string;
	className?: string;
};

const Avatar = ({ name, picture, className }: Props) => {
	return (
		<div className={cn("flex items-center gap-2", className)}>
			<img
				src={picture}
				className="w-12 h-12 border-stone-300 border p-2 rounded-full"
				alt={name}
			/>
			<p className="text-base">{name}</p>
		</div>
	);
};

export default Avatar;
