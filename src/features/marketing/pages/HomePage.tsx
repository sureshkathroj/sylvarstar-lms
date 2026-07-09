import { Hero } from "../sections/hero/Hero";
import { Courses } from "../sections/courses";
import { WhyChoose } from "../sections/why-choose";
import { Testimonials } from "../sections/testimonials";
import { CTA } from "../sections/cta/CTA";
import { Footer } from "../sections/footer/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Courses/>
      <WhyChoose/>
      <Testimonials/>
      <CTA/>
      <Footer/>
    </>
  );
}