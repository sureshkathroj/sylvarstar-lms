import { ProgramsHero } from "../sections/programs/ProgramHero";
import { AcademiesSection } from "../sections/programs/AcademiesSection";
import { ContactSection } from "../sections/contact";

export function ProgramsPage() {
  return (
    <>
      <ProgramsHero />

      <AcademiesSection />

      <ContactSection />
    </>
  );
}