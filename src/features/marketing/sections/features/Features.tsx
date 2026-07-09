import { Section, SectionHeader } from "@/components/shared";
import { FeatureCard } from "./FeatureCard";
import { featureItems } from "./features-data";

export function Features() {
  return (
    <Section>
      <SectionHeader
        title="Everything You Need to Learn Better"
        subtitle="Powerful features designed to help students, instructors, and organizations succeed."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {featureItems.map((feature) => (
          <FeatureCard
            key={feature.id}
            {...feature}
          />
        ))}
      </div>
    </Section>
  );
}