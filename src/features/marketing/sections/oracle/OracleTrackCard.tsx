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
        group
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-7
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-cyan-400/40
        hover:bg-white/[0.05]
      "
    >
      <div
        className="
          mb-6
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-cyan-500/10
        "
      >
        <Icon className="h-8 w-8 text-cyan-400" />
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
    </div>
  );
}