import { whyChooseItems } from "@/features/marketing/data/whyChoose";
import { FeatureItem } from "./FeatureItem";

export function WhyChooseContent() {
  return (
    <div>
      <span className="rounded-full bg-[#2F5BFF]/10 px-4 py-2 text-sm font-semibold text-[#2F5BFF]">
        WHY SYLVARSTAR
      </span>

      <h2 className="mt-6 text-5xl font-bold leading-tight text-[#111827]">
        Learn Like
        <br />
        the Industry Works.
      </h2>

      <p className="mt-6 max-w-xl text-lg leading-8 text-[#64748B]">
        Our training programs are designed around real software industry
        practices. Learn modern technologies, build live projects and gain the
        confidence required to succeed in today's IT industry.
      </p>

      <div className="mt-10 space-y-5">
        {whyChooseItems.map((item) => (
          <FeatureItem
            key={item.title}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}