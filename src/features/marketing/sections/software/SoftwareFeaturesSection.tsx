import { SectionHeader } from "@/features/marketing/shared";

const features = [
  "Live Coding Sessions",
  "Real Industry Projects",
  "GitHub Portfolio",
  "Resume Building",
  "Resume Building",
  "Mock Interviews",
  "Career Mentorship"
];

export function SoftwareFeaturesSection() {
  return (
    <section className="bg-[#F7F9FC] py-24">

      <div className="container mx-auto px-6">

        <SectionHeader
          badge="WHY SYLVARSTAR"
          title="Why Learn Software Development With Us?"
          description="Industry-oriented training that prepares you for real Software Development and implementation projects."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature}
              className="rounded-2xl border border-[#E4EAF5] bg-white p-6 text-center font-semibold"
            >
              ✅ {feature}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}