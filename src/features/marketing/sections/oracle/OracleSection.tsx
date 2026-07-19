import { OracleHeader } from "./OracleHeader";
import { OracleCloud } from "./OracleCloud";
import { OracleTrackCard } from "./OracleTrackCard";
import { oracleTracks } from "./oracle.data";

export function OracleSection() {
  return (
    <section className="relative overflow-hidden bg-[#07142B] py-28">
      <div className="mt-20 grid items-center gap-10 lg:grid-cols-12">
  <div className="space-y-8 lg:col-span-4">
    <OracleTrackCard {...oracleTracks[0]} />
    <OracleTrackCard {...oracleTracks[2]} />
  </div>

  <div className="flex justify-center lg:col-span-4">
    <OracleCloud />
  </div>

  <div className="space-y-8 lg:col-span-4">
    <OracleTrackCard {...oracleTracks[1]} />
    <OracleTrackCard {...oracleTracks[3]} />
  </div>
</div>

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-8">
        <OracleHeader />

        {/* Oracle Ecosystem */}
        <div className="mt-20 rounded-3xl border border-white/10 bg-white/[0.02] p-12 backdrop-blur-sm">
          <div className="flex h-[520px] items-center justify-center rounded-2xl border border-dashed border-cyan-500/20">
            <p className="text-lg text-slate-400">
              Oracle Fusion Ecosystem (Pack 2)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}