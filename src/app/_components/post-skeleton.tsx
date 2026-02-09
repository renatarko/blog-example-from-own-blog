import { cn } from "@/lib/cn";

export const PostSkeleton = ({ className }: { className?: string }) => {
	return (
		<div className={cn(className)}>
			<div className="w-full bg-slate-400 dark:bg-stone-800 animate-pulse min-h-40 h-full"></div>

			<div className="w-full bg-slate-400 dark:bg-stone-800 animate-pulse h-4 mt-6"></div>
			<div className="w-full bg-slate-400 dark:bg-stone-800 animate-pulse h-4 mt-2"></div>
			<div className="w-full bg-slate-400 dark:bg-stone-800 animate-pulse h-4 mt-2"></div>
		</div>
	);
};
