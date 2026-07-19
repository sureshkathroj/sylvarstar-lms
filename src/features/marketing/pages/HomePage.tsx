import { CareerOpportunities } from "../sections/career-opportunities";
import { FinalCTA } from "../sections/final-cta";
import { Hero } from "../sections/hero/Hero";
import { LearningJourney } from "../sections/learning-journey";
import { LearningPath } from "../sections/learning-path";
// import { WhyChooseSection } from "../sections/why-choose";
// import { Testimonials } from "../sections/testimonials";
// import { CTA } from "../sections/cta/CTA";
// import { ProgramsSection } from "../sections/programs/ProgramsSection";
// import { ContactSection } from "../sections/contact";
// import {OracleSection} from "../sections/oracle"

export default function HomePage() {
  return (
    <>
      <Hero />
       {/* Hero → Learning Path Divider */}
  <div className="relative h-20 overflow-hidden bg-[#07142B]">
    <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-[#07142B] via-slate-100/40 to-white" />
  </div>
      <LearningPath />
      <LearningJourney />
      <CareerOpportunities />
      <FinalCTA />
      {/* <OracleSection /> */}
      {/* <ProgramsSection /> */}
      {/* <WhyChooseSection /> */}
      {/* <Testimonials/> */}
      {/* <CTA/> */}
      {/* <ContactSection /> */}

      
    </>
  );
}