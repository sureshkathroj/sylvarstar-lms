import { academies } from "@/features/marketing/data/academies";
import { ProgramCard } from "./ProgramCard";

export function ProgramsSection() {
  return (
    <section className="py-20">

      <div className="container mx-auto px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-[#2F5BFF]/10 px-4 py-2 text-sm font-semibold text-[#2F5BFF]">
            OUR TRAINING PROGRAMS
          </span>

          <h2 className="mt-6 text-5xl font-bold text-[#111827]">
            Choose Your Career Path
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#64748B]">
            Industry-oriented training programs designed to help students,
            fresh graduates and professionals build successful careers.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {academies.map((academy) => (
            <ProgramCard key={academy.title} {...academy} />
          ))}

        </div>

      </div>

    </section>
  );
}