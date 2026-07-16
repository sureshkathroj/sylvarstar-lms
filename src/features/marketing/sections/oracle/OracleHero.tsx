import {
  PrimaryButton,
  SecondaryButton,
  SectionHeader,
} from "@/features/marketing/shared";

export function OracleHero() {
  return (
    <section className="bg-[#F7F9FC] py-24">

      <div className="container mx-auto px-6">

        <SectionHeader
          badge="ORACLE FUSION ACADEMY"
          title="Build Your Career in Oracle Fusion"
          description="Master Oracle Fusion HCM, Financials, SCM and SQL with hands-on training, live projects and expert mentorship."
        />

        <div className="mt-10 flex justify-center gap-4">

          <PrimaryButton>
            Book Free Demo
          </PrimaryButton>

          <SecondaryButton>
            Download Curriculum
          </SecondaryButton>

        </div>

      </div>

    </section>
  );
}