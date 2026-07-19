import { CheckCircle2 } from "lucide-react";
import { benefits, contactInfo } from "@/features/marketing/data/contact";
import { ContactInfoCard } from "./ContactInfo";

export function ContactContent() {
  return (
    <section id="contact" className="py-10">
    <div>

      <span className="rounded-full bg-cyan-500/100 px-3 py-1.5 text-sm font-semibold text-cyan-600">
        CONTACT US
      </span>

      <h2 className="mt-6 text-5xl font-bold leading-tight text-[#111827]">
        Let's Build Your Future
        <br />
        Together.
      </h2>

      <p className="mt-6 max-w-xl text-lg leading-8 text-[#64748B]">
        Whether you're exploring Oracle Fusion or
Software Development, our mentors are here
to help you choose the right learning path.
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
    </section>
  );
}