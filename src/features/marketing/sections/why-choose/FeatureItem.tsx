import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function FeatureItem({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <div className="group flex gap-4 rounded-2xl border border-[#E4EAF5] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2F5BFF]/30 hover:shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2F5BFF]/10 transition-colors duration-300 group-hover:bg-[#2F5BFF]">
        <Icon className="h-6 w-6 text-[#2F5BFF] transition-colors duration-300 group-hover:text-white" />
      </div>

      <div>
        <h3 className="font-semibold text-[#111827]">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-[#64748B]">
          {description}
        </p>
      </div>
    </div>
  );
}