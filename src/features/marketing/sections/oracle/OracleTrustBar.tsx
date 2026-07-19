import {
  Trophy,
  Users,
  Target,
} from "lucide-react";

export function OracleTrustBar() {
  return (
    <div className="mt-16">
      <div
        className="
          mx-auto
          flex
          max-w-5xl
          flex-wrap
          items-center
          justify-center
          gap-8
          rounded-2xl
          border
          border-white/10
          bg-white/[0.03]
          px-10
          py-6
          backdrop-blur-xl
        "
      >
        <div className="flex items-center gap-3">
          <Users className="h-6 w-6 text-cyan-400" />

          <div>
            <div className="text-xl font-bold text-white">
              500+
            </div>

            <div className="text-sm text-slate-400">
              Students
            </div>
          </div>
        </div>

        <div className="hidden h-10 w-px bg-white/10 md:block" />

        <div className="flex items-center gap-3">
          <Trophy className="h-6 w-6 text-cyan-400" />

          <div>
            <div className="text-xl font-bold text-white">
              25+
            </div>

            <div className="text-sm text-slate-400">
              Live Projects
            </div>
          </div>
        </div>

        <div className="hidden h-10 w-px bg-white/10 md:block" />

        <div className="flex items-center gap-3">
          <Target className="h-6 w-6 text-cyan-400" />

          <div>
            <div className="text-xl font-bold text-white">
              100%
            </div>

            <div className="text-sm text-slate-400">
              Career Focused
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}