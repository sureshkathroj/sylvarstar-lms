import { ContactContent } from "./ContactContent";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">

      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-20 px-6 lg:grid-cols-2 lg:px-8">

        <ContactContent />

        <ContactForm />

      </div>

    </section>
  );
}