import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
}

export function OracleTrackCard({
  title,
  subtitle,
  description,
  icon: Icon,
}: Props) {
  return (
    <div
      className="
group/card
rounded-3xl
border
border-white/10
bg-white/[0.03]
p-7
transition-all
duration-300

hover:-translate-y-3
hover:scale-[1.02]
hover:border-cyan-400/50
hover:bg-white/[0.06]
hover:shadow-[0_25px_60px_rgba(34,211,238,.12)]
"
    >
      <div
        className="
          mb-6
flex
h-20
w-20
items-center
justify-center
rounded-2xl
bg-cyan-500/10
transition-all
duration-300
group-hover/card:bg-cyan-500/20
group-hover/card:scale-110
        "
      >
        <Icon className="h-10
w-10
text-cyan-400
transition-transform
duration-300
group-hover/card:rotate-6" />
      </div>

      <h3 className="text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-2 text-cyan-300">
        {subtitle}
      </p>

      <p className="mt-5 leading-7 text-slate-400">
        {description}
      </p>
      <div className="mt-8 flex items-center justify-end">
  <button className="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300">
    Explore Track →
  </button>
</div>
    </div>
  );
}