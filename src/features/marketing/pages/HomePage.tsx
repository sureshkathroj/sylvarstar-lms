import { Hero } from "../sections/hero/Hero";
import CourseSection from '../components/CourseSection';
import WhyChooseSection from '../components/WhyChooseSection';
import TestimonialSection from '../components/TestimonialSection';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import { Trusted } from "../sections/trusted";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trusted/>
      <CourseSection />
      <WhyChooseSection />
      <FAQSection/>
      <TestimonialSection />
      <CTASection />
    </>
  );
}