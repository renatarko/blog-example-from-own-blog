import { cn } from "@/lib/cn";
import imgDefault from '../../../public/assets/blog/dynamic-routing/cover.jpg'

type Props = {
	name: string;
	avatar?: string;
	className?: string;
};

const Avatar = ({ name, avatar, className }: Props) => {
	return (
		<div className={cn("flex items-center gap-2", className)}>
			<img
				src={avatar  && avatar !== "" ? avatar : imgDefault.src }
				className="w-12 h-12 border-stone-300 border p-2 rounded-full"
				alt={name}
			/>
			<p className="text-base">{name}</p>
		</div>
	);
};

export default Avatar;
