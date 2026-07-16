import { ContactContent } from "./ContactContent";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section className="bg-[#F7F9FC] py-20">

      <div className="container mx-auto grid items-start gap-16 px-6 lg:grid-cols-2">

        <ContactContent />

        <ContactForm />

      </div>

    </section>
  );
}