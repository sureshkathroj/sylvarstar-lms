import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  lines: string[];
};

export function ContactInfoCard({
  icon: Icon,
  title,
  lines,
}: Props) {
  return (
    <div className="
group
flex
gap-4
rounded-2xl
border
border-slate-200
bg-white
p-5
transition-all
duration-300
hover:-translate-y-1
hover:border-cyan-300
hover:shadow-lg
">
      <div className="
flex
h-12
w-12
items-center
justify-center
rounded-xl
bg-cyan-500/10
transition-colors
group-hover:bg-cyan-500
">
        <Icon className="
h-6
w-6
text-cyan-600
transition-colors
group-hover:text-white
" />
      </div>

      <div>
        <h3 className="font-semibold text-[#111827]">
          {title}
        </h3>

        {lines.map((line) => (
          <p
            key={line}
            className="mt-1 text-sm text-[#64748B]"
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}