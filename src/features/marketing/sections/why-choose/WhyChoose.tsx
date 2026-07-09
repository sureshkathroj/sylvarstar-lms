import { WhyChooseCard } from "./WhyChooseCard";
import { whyChooseItems } from "./whyChoose-data";
import { Section, SectionHeader } from "@/components/shared";

export function WhyChoose() {
  return (
    <Section className="container mx-auto px-6 py-24">
       <SectionHeader
    title="Why Choose SylvarStar?"
    subtitle="Everything you need to learn faster, stay motivated, and grow your career."
  />
     

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {whyChooseItems.map((item) => (
          <WhyChooseCard
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </Section>
  );
}