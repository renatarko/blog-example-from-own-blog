import { cn } from "@/lib/cn";
import { parseISO, format } from "date-fns";
import { ptBR } from "date-fns/locale";

type Props = {
	dateString?: string;
	className?: string;
};

const DateFormatter = ({ dateString, className }: Props) => {
	if (!dateString) return null;
	const date = parseISO(dateString);
	return (
		<time dateTime={dateString} className={cn("font-light", className)}>
			{format(date, "d LLLL, yyyy", { locale: ptBR })}
		</time>
	);
};

export default DateFormatter;
