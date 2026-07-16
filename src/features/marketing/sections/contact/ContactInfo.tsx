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
    <div className="flex gap-4 rounded-2xl border border-[#E4EAF5] bg-white p-5">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2F5BFF]/10">
        <Icon className="h-6 w-6 text-[#2F5BFF]" />
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