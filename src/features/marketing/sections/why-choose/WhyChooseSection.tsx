import { WhyChooseContent } from "./WhyChooseContent";
import { WhyChooseDashboard } from "./WhyChooseDashboard";

export function WhyChooseSection() {
  return (
    <section className="py-20">

      <div className="container mx-auto grid items-center gap-20 px-6 lg:grid-cols-2">

        <WhyChooseContent />

        <WhyChooseDashboard />

      </div>

    </section>
  );
}