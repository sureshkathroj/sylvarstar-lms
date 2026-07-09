import { testimonials } from "./testimonials-data";
import { TestimonialCard } from "./TestimonialCard";
import { Section, SectionHeader } from "@/components/shared";

export function Testimonials() {
  return (
    <Section className="container mx-auto px-6 py-24">
     <SectionHeader
    title="What Our Learners Say"
    subtitle="Thousands of professionals trust SylvarStar to accelerate their careers."
/>
      

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            {...testimonial}
          />
        ))}
      </div>
    </Section>
  );
}