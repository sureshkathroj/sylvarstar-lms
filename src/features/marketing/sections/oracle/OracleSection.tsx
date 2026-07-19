import { OracleHeader } from "./OracleHeader";
import { OracleBenefits } from "./OracleBenefits";
import { OracleCTA } from "./OracleCTA";
import { OracleTracksGrid } from "./OracleTracksGrid";
import { OracleTrustBar } from "./OracleTrustBar";
import { OracleIllustration } from "./OracleIllustration";

export function OracleSection() {
  return (
    <section className="relative overflow-hidden bg-[#07142B] py-28">
      {/* Left Glow */}
      <div
        className="
          absolute
          left-[-200px]
          top-1/2
          h-[450px]
          w-[450px]
          -translate-y-1/2
          rounded-full
          bg-cyan-500/10
          blur-[140px]
        "
      />

      {/* Right Glow */}
      <div
        className="
          absolute
          right-[-150px]
          top-24
          h-[350px]
          w-[350px]
          rounded-full
          bg-blue-500/10
          blur-[140px]
        "
      />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-8">
        <OracleHeader />

        <div className="mt-20">
          <OracleIllustration />

          <OracleTracksGrid />

          <OracleBenefits />

          <OracleTrustBar />

          <OracleCTA />
        </div>
      </div>
    </section>
  );
}