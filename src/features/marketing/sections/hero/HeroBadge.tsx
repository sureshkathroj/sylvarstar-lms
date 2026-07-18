import { Sparkles } from "lucide-react";

export function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 backdrop-blur-md">
      <Sparkles className="h-4 w-4 text-cyan-400" />

      <span className="text-sm font-medium tracking-wide text-cyan-200">
        Admissions Open • Online & Classroom Training
      </span>
    </div>
  );
}