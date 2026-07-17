import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  className?: string;
};

export function FloatingInfoCard({
  icon: Icon,
  title,
  subtitle,
  className = "",
}: Props) {
  return (
    <div
      className={`
        absolute rounded-3xl border border-[#E4EAF5]
        bg-white/90 backdrop-blur-xl
        px-6 py-5
        shadow-[0_20px_50px_rgba(47,91,255,0.12)]
        ${className}
      `}
    >
      <Icon className="mb-3 h-7 w-7 text-[#2F5BFF]" />

      <p className="text-sm text-[#64748B]">
        {title}
      </p>

      <h4 className="mt-1 text-lg font-bold text-[#111827]">
        {subtitle}
      </h4>
    </div>
  );
}