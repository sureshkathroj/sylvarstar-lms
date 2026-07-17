import { SectionHeader } from "@/features/marketing/shared";

const features = [
  "Live Practical Sessions",
  "Real-Time Project Scenarios",
  "Corporate Trainers",
  "Interview Preparation",
  "Resume Building",
  "Placement Assistance",
];

export function OracleFeaturesSection() {
  return (
    <section className="bg-[#F7F9FC] py-24">

      <div className="container mx-auto px-6">

        <SectionHeader
          badge="WHY SYLVARSTAR"
          title="Why Learn Oracle Fusion With Us?"
          description="Industry-oriented training that prepares you for real Oracle Fusion implementation projects."
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