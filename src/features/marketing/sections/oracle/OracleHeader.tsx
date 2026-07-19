import { ShieldCheck } from "lucide-react";

export function OracleHeader() {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <div
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-cyan-400/20
          bg-cyan-400/10
          px-5
          py-2
          backdrop-blur-xl
        "
      >
        <ShieldCheck className="h-4 w-4 text-cyan-400" />

        <span className="text-sm font-semibold tracking-wide text-cyan-300">
          ORACLE FUSION TRAINING EXCELLENCE
        </span>
      </div>

      <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-7xl">
        Master Oracle Fusion,
        <br />

        <span className="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
          Lead the Future.
        </span>
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
        Industry-focused Oracle Cloud training designed around
        real business scenarios, live implementation projects,
        expert mentors and career-focused learning paths for
        aspiring Oracle professionals.
      </p>
    </div>
  );
}