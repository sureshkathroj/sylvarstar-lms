import { OracleHero } from "@/features/marketing/sections/oracle/OracleHero";
import { OracleCoursesSection } from "@/features/marketing/sections/oracle/OracleCoursesSection";
import { OracleFeaturesSection } from "@/features/marketing/sections/oracle/OracleFeaturesSection";
import { ContactSection } from "@/features/marketing/sections/contact";

export function OracleFusionPage() {
  return (
    <>
      <OracleHero />
      <OracleCoursesSection />
      <OracleFeaturesSection />
      <ContactSection />
    </>
  );
}

export default OracleFusionPage;