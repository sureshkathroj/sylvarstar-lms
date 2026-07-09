import { Section, SectionHeader } from "@/components/shared";
import { WhyChooseCard } from "./WhyChooseCard";
import { whyChooseItems } from "./whyChoose-data";

export function WhyChoose() {
  return (
    <Section>
      <SectionHeader
        title="Why Students Choose SylvarStar"
        subtitle="Everything you need to learn, practice and grow your career in one beautiful platform."
      />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {whyChooseItems.map((item) => (
          <WhyChooseCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </Section>
  );
}