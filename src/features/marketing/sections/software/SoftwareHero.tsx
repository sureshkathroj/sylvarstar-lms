import {
  PrimaryButton,
  SecondaryButton,
  SectionHeader,
} from "@/features/marketing/shared";

export function SoftwareHero() {
  return (
    <section className="bg-[#F7F9FC] py-24">

      <div className="container mx-auto px-6">

        <SectionHeader
          badge="SOFTWARE DEVELOPMENT ACADEMY"
          title="Become a Modern Software Engineer"
          description="Learn Full Stack Development, AI-assisted coding, React, Node.js, MongoDB and cloud deployment"
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