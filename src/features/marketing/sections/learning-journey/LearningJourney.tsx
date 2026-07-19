import { LearningJourneyHeader } from "./LearningJourneyHeader";
import { JourneyStep } from "./JourneyStep";
import { learningJourney } from "./learningJourney.data";

export function LearningJourney() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <LearningJourneyHeader />

        <div className="relative mt-20">
          {/* Timeline */}
          <div className="absolute left-0 right-0 top-10 hidden h-1 rounded-full bg-slate-200 lg:block" />

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-6">
            {learningJourney.map((step) => (
              <JourneyStep
                key={step.title}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}