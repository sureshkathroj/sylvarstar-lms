import { ContactSection } from "@/features/marketing/sections/contact";
import { SoftwareHero } from "../sections/software/SoftwareHero";
import { SoftwareFeaturesSection } from "../sections/software/SoftwareFeaturesSection";
import { SoftwareCoursesSection } from "../sections/software/SoftwareCoursesSection";

export function SoftwareDevelopmentPage() {
  return (
    <>
      <SoftwareHero />
      <SoftwareFeaturesSection />
      <SoftwareCoursesSection />
      <ContactSection />
    </>
  );
}

export default SoftwareDevelopmentPage;