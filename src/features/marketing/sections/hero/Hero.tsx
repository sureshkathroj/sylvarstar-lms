import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#07142B]">
      {/* Background Glow - Top Right */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[-120px]
          h-[520px]
          w-[520px]
          rounded-full
          bg-cyan-500/20
          blur-[120px]
        "
      />

      {/* Background Glow - Bottom Left */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[-220px]
          left-[-160px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-indigo-600/20
          blur-[120px]
        "
      />

    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

  <div
    className="
      grid
      min-h-[calc(100vh-80px)]
      items-center
      gap-12
      pt-28
      pb-16
      lg:min-h-screen
      lg:grid-cols-12
      lg:gap-8
      lg:pt-0
      lg:pb-0
    "
  >

        <div className="lg:col-span-5">
            <HeroContent />
        </div>

        <div className="lg:col-span-7">
            <HeroImage />
        </div>

    </div>

</div>
    </section>
  );
}