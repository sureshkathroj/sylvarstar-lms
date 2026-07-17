import { academies } from "@/features/marketing/data/academies";
import { ProgramCard } from "../programs/ProgramCard";
import { SectionHeader } from "@/features/marketing/shared";

export function AcademiesSection() {
  return (
    <section id="academies" className="py-20">

      <div className="container mx-auto px-6">

        <SectionHeader
          badge="OUR ACADEMIES"
          title="Choose Your Academy"
          description="Select the academy that matches your career goals and start your journey with industry-oriented training."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {academies.map((academy) => (
            <ProgramCard
              key={academy.id}
              {...academy}
            />
          ))}

        </div>

      </div>

    </section>
  );
}