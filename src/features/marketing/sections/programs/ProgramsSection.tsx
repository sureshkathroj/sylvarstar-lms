import { academies } from "@/features/marketing/data/academies";
import { ProgramCard } from "./ProgramCard";
import { SectionHeader } from "@/features/marketing/shared";

export function ProgramsSection() {
  return (
    <section id="programs" className="py-20">

      <div className="container mx-auto px-6">

        <SectionHeader
  badge="OUR TRAINING PROGRAMS"
  title="Choose Your Career Path"
  description="Industry-oriented training programs designed to help students, fresh graduates and professionals build successful careers."
>

         

        </SectionHeader>

        <div className="grid gap-8 lg:grid-cols-2">

          {academies.map((academy) => (
            <ProgramCard key={academy.title} {...academy} />
          ))}

        </div>

      </div>

    </section>
  );
}