import { testimonials } from "./testimonials-data";
import { TestimonialCard } from "./TestimonialCard";

export function Testimonials() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-4xl font-bold">
          What Our Students Say
        </h2>

        <p className="mt-4 text-muted-foreground">
          Thousands of learners trust SylvarStar to grow their careers.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            {...testimonial}
          />
        ))}
      </div>
    </section>
  );
}