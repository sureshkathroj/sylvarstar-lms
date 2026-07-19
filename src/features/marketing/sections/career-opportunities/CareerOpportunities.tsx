import { CareerHeader } from "./CareerHeader";
import { CareerCard } from "./CareerCard";
import { careers } from "./career.data";

export function CareerOpportunities() {
  return (
    <section className="bg-[#07142B] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <CareerHeader />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {careers.map((career) => (
            <CareerCard
              key={career.title}
              title={career.title}
              description={career.description}
              icon={career.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}