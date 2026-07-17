import { ArrowRight, LucideIcon } from "lucide-react";
import { Card } from "@/features/marketing/shared";
import { Link } from "react-router-dom";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  duration: string;
  mode: string;
  route: string;
};

export function ProgramCard({
  icon: Icon,
  title,
  description,
  technologies,
  highlights,
  route,
}: Props) {
  return (
    <Card className="p-8 hover:-translate-y-2">

      <div className="flex items-center gap-4">

        <div className="rounded-2xl bg-[#2F5BFF]/10 p-4">
          <Icon className="h-7 w-7 text-[#2F5BFF]" />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#111827]">
            {title}
          </h3>

          <p className="mt-1 text-[#64748B]">
            {description}
          </p>
        </div>

      </div>

      <div className="mt-8 flex flex-wrap gap-2">

        {technologies.map((item) => (
          <span
            key={item}
            className="rounded-full bg-[#F7F9FC] px-3 py-1 text-sm"
          >
            {item}
          </span>
        ))}

      </div>

      <div className="mt-8 space-y-3">

        {highlights.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 text-[#111827]"
          >
            <div className="h-2 w-2 rounded-full bg-[#22C55E]" />

            {item}
          </div>
        ))}

      </div>

      <button className="mt-10 flex items-center gap-2 font-semibold text-[#2F5BFF]">

        <Link
  to={route}
  className="mt-10 inline-flex items-center font-semibold text-[#2F5BFF]">
  View Academy <ArrowRight className="h-4 w-4" />
</Link>

        

      </button>

    </Card>
  );
}