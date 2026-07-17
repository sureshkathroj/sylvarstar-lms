import {
  PrimaryButton,
  SecondaryButton,
  SectionHeader,
} from "@/features/marketing/shared";

export function ProgramsHero() {
  return (
    <section className="bg-[#F7F9FC] py-24">

      <div className="container mx-auto px-6">

        <SectionHeader
          badge="OUR ACADEMIES"
          title="Choose the Right Learning Path"
          description="Whether your goal is becoming an Oracle Fusion Consultant or a Modern Full Stack Developer, SylvarStar provides industry-oriented programs designed to help you succeed."
        />

        <div className="mt-10 flex justify-center gap-4">

          <PrimaryButton>
            <a
  href="#academies"
  className="..."
>
  Explore Academies
</a>
          </PrimaryButton>
          

          <SecondaryButton>
            <a
    href="#contact"
    className="..."
>
    Talk to a Mentor
</a>
          </SecondaryButton>

        </div>

      </div>

    </section>
  );
}