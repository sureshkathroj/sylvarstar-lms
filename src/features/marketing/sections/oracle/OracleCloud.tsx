import { Cloud } from "lucide-react";

export function OracleCloud() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer Glow */}
      <div
        className="
          absolute
          h-80
          w-80
          rounded-full
          bg-cyan-500/20
          blur-[90px]
          transition-all
          duration-700
          group-hover:scale-110
          group-hover:bg-cyan-400/30
        "
      />

      {/* Animated Ring */}
      <div
        className="
          absolute
          h-[420px]
          w-[420px]
          rounded-full
          border
          border-cyan-400/10
          animate-pulse
        "
      />

      {/* Oracle Cloud Card */}
      <div
        className="
          relative
          z-10
          flex
          h-[380px]
          w-[380px]
          flex-col
          items-center
          justify-center
          rounded-[42px]
          border
          border-cyan-400/20
          bg-gradient-to-b
          from-white/15
          to-white/[0.04]
          backdrop-blur-xl
          transition-all
          duration-500
          group-hover:-translate-y-2
          group-hover:border-cyan-300/60
          group-hover:shadow-[0_0_80px_rgba(34,211,238,.25)]
        "
      >
        <div className="text-5xl font-black tracking-wide text-red-500">
          ORACLE
        </div>

        <div className="mt-4 text-2xl font-semibold text-white">
          Fusion Cloud
        </div>

        <Cloud className="mt-10 h-24 w-24 text-cyan-400" />

        <div className="mt-10 text-center text-slate-300">
          One Platform.
          <br />
          Infinite Opportunities.
        </div>
      </div>
    </div>
  );
}