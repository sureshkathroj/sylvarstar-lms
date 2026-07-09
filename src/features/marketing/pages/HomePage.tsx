import { Hero } from "../sections/hero/Hero";
import CourseSection from '../components/CourseSection';
import WhyChooseSection from '../components/WhyChooseSection';
import TestimonialSection from '../components/TestimonialSection';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import { Trusted } from "../sections/trusted";
import { Courses } from "../sections/courses";
import { Features} from "../sections/features";
import { WhyChoose } from "../sections/why-choose";
import { Testimonials } from "../sections/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trusted/>
      <Features />
      <Courses/>
      <WhyChoose/>
      <Testimonials/>
    </>
  );
}