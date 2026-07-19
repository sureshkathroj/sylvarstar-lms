import type { LucideIcon } from "lucide-react";

interface CareerCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function CareerCard({
  title,
  description,
  icon: Icon,
}: CareerCardProps) {
  return (
    <article
      className="
        group
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/60
        p-8
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-cyan-500/40
        hover:bg-slate-900
      "
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
        <Icon className="h-7 w-7 text-cyan-400" />
      </div>

      <h3 className="mt-6 text-xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        {description}
      </p>
    </article>
  );
}