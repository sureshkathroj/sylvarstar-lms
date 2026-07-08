import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

export function Hero() {
  return (
    <section className="container mx-auto grid min-h-[85vh] items-center gap-12 px-6 py-20 lg:grid-cols-2">
      <HeroContent />
      <HeroImage />
    </section>
  );
}