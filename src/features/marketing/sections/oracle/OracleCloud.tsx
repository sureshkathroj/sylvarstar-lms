import { Cloud } from "lucide-react";

export function OracleCloud() {
  return (
    <div className="relative flex items-center justify-center">
      <div
        className="
          absolute
          h-72
          w-72
          rounded-full
          bg-cyan-500/20
          blur-[80px]
        "
      />

      <div
        className="
          relative
          flex
          h-[340px]
          w-[340px]
          flex-col
          items-center
          justify-center
          rounded-[40px]
          border
          border-cyan-400/30
          bg-gradient-to-b
          from-white/15
          to-white/5
          backdrop-blur-xl
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