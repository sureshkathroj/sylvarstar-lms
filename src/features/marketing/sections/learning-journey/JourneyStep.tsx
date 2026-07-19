import type { LucideIcon } from "lucide-react";

interface JourneyStepProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function JourneyStep({
  title,
  description,
  icon: Icon,
}: JourneyStepProps) {
  return (
    <div className="relative flex flex-col items-center text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg ring-8 ring-cyan-50">
        <Icon className="h-9 w-9 text-cyan-600" />
      </div>

      <h3 className="mt-6 text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 max-w-[180px] text-sm leading-6 text-slate-600">
        {description}
      </p>
    </div>
  );
}