import { ContactSection } from "@/features/marketing/sections/contact";

import { AboutHeader } from "./sections/AboutHeader";
import { WhoWeAre } from "./sections/WhoWeAre";
import { MissionVision } from "./sections/MissionVision";
import { AboutCTA } from "./sections/AboutCTA";

export function AboutPage() {
  return (
    <>
      <AboutHeader />

      <WhoWeAre />

      <MissionVision />

      <AboutCTA />

      <ContactSection />
    </>
  );
}

export default AboutPage;