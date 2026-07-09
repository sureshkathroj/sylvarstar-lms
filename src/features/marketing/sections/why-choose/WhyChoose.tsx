import { WhyChooseCard } from "./WhyChooseCard";
import { whyChooseItems } from "./whyChoose-data";

export function WhyChoose() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-4xl font-bold">
          Why Choose SylvarStar?
        </h2>

        <p className="mt-4 text-muted-foreground">
          Everything you need to learn faster, stay motivated, and grow your career.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {whyChooseItems.map((item) => (
          <WhyChooseCard
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}