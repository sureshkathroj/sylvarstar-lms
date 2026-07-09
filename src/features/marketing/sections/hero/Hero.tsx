import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/40 to-white">

      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-120px]
          top-20
          h-[520px]
          w-[520px]
          rounded-full
          bg-indigo-200/30
          blur-3xl
        "
      />

      <div className="container mx-auto grid min-h-[760px] items-center gap-16 px-6 py-20 lg:grid-cols-2">

        <HeroContent />

        <HeroImage />

      </div>
    </section>
  );
}