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

  const borderHover =
    theme === "blue"
      ? "hover:border-cyan-300"
      : "hover:border-violet-300";

  const buttonColor =
    theme === "blue"
      ? "text-cyan-600 hover:text-cyan-700"
      : "text-violet-600 hover:text-violet-700";

  const checkColor =
    theme === "blue"
      ? "text-cyan-500"
      : "text-violet-500";

  return (
    <article
      className={`
        group
        flex
        min-h-[620px]
        flex-col
        rounded-3xl
        border
        border-slate-200/80
        bg-white
        p-10
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
        ${borderHover}
      `}
    >
      {/* Illustration */}
      <div
        className={`
          relative
          flex
          h-52
          items-center
          justify-center
          overflow-hidden
          rounded-3xl
          bg-gradient-to-br
          ${accent}
        `}
      >
        {/* Decorative Elements */}
        <div className="absolute -left-10 -top-10 h-36 w-36 rounded-full bg-white/10" />
        <div className="absolute -right-8 bottom-0 h-28 w-28 rounded-full bg-white/10" />
        <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20" />

        <Icon className="relative h-24 w-24 text-white drop-shadow-lg" />
      </div>

      {/* Title */}
      <h3 className="mt-8 text-3xl font-bold text-slate-900">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 text-slate-600 leading-7">
        {subtitle}
      </p>

      {/* Features */}
      <div className="mt-8 space-y-5">
        {features.map((feature) => (
          <div
            key={feature}
            className="flex items-start gap-3"
          >
            <CheckCircle2 className={`mt-1 h-5 w-5 ${checkColor}`} />

            <span className="text-[15px] leading-7 text-slate-700">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-auto pt-10">
        <button
          className={`
            group/button
            inline-flex
            items-center
            font-semibold
            transition-all
            duration-300
            hover:gap-3
            ${buttonColor}
          `}
        >
          {button}

          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover/button:translate-x-2" />
        </button>
      </div>
    </article>
  );
}