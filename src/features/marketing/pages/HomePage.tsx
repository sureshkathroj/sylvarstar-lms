import { Hero } from "../sections/hero/Hero";
import { WhyChooseSection } from "../sections/why-choose";
// import { Testimonials } from "../sections/testimonials";
import { CTA } from "../sections/cta/CTA";
import { ProgramsSection } from "../sections/programs/ProgramsSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProgramsSection />
      <WhyChooseSection />
      {/* <Testimonials/> */}
      <CTA/>
      
    </>
  );
}