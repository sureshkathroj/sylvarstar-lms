import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface LearningPathCardProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  features: string[];
  button: string;
  theme: "blue" | "purple";
}

export function LearningPathCard({
  title,
  subtitle,
  icon: Icon,
  features,
  button,
  theme,
}: LearningPathCardProps) {
  const accent =
    theme === "blue"
      ? "from-cyan-500 to-blue-500"
      : "from-violet-500 to-fuchsia-500";

  return (
    <article
      className="
        group
        rounded-3xl
        border
        border-slate-200/80
        bg-white
        p-10 min-h-[700px] flex flex-col
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      <div
  className={`
    relative
    flex
    h-64
    items-center
    justify-center
    overflow-hidden
    rounded-3xl
    bg-gradient-to-br
    ${accent}
  `}
>
  {/* Decorative circles */}
  <div className="absolute -left-10 -top-10 h-36 w-36 rounded-full bg-white/10" />
  <div className="absolute -right-8 bottom-0 h-28 w-28 rounded-full bg-white/10" />
  <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" />

  <Icon className="relative h-24 w-24 text-white drop-shadow-lg" />
</div>
      <div
        className={`
          flex
          h-56
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          ${accent}
          text-white
        `}
      >
        <Icon className="h-20 w-20 opacity-90" />
      </div>

      <h3 className="mt-8 text-3xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 text-slate-600 leading-7">
        {subtitle}
      </p>

      <div className="mt-8 mt-8 space-y-5">
        {features.map((feature) => (
          <div
            key={feature}
            className="flex items-start gap-3"
          >
            <CheckCircle2 className="h-5 w-5 text-cyan-500" />

            <span className="text-[15px] leading-7 text-slate-700">
              {feature}
            </span>
          </div>
        ))}
      </div>
        <div className="mt-auto pt-10">
      <button
  className="
    group/button
    inline-flex
    items-center
    font-semibold
    text-cyan-600
    transition-all
    duration-300
    hover:gap-3
  "
>
        {button}

        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover/button:translate-x-2" />
      </button></div>
    </article>
  );
}