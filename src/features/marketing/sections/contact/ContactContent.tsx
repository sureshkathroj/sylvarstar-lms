import { CheckCircle2 } from "lucide-react";
import { benefits, contactInfo } from "@/features/marketing/data/contact";
import { ContactInfoCard } from "./ContactInfoCard";

export function ContactContent() {
  return (
    <div>

      <span className="rounded-full bg-[#2F5BFF]/10 px-4 py-2 text-sm font-semibold text-[#2F5BFF]">
        ADMISSIONS OPEN
      </span>

      <h2 className="mt-6 text-5xl font-bold leading-tight text-[#111827]">
        Ready to Start
        <br />
        Your IT Career?
      </h2>

      <p className="mt-6 max-w-xl text-lg leading-8 text-[#64748B]">
        Talk directly with our mentors, attend a free demo class
        and choose the right learning path for your career.
      </p>

      <div className="mt-10 grid gap-3">

        {benefits.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3"
          >
            <CheckCircle2 className="h-5 w-5 text-[#22C55E]" />

            <span className="font-medium text-[#111827]">
              {item}
            </span>
          </div>
        ))}

      </div>

      <div className="mt-12 space-y-5">

        {contactInfo.map((item) => (
          <ContactInfoCard
            key={item.title}
            {...item}
          />
        ))}

      </div>

    </div>
  );
}