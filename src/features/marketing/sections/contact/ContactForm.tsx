import { Send } from "lucide-react";

export function ContactForm() {
  return (
    <div className="rounded-[32px] border border-[#E4EAF5] bg-white p-8 shadow-xl">

      <h3 className="text-3xl font-bold text-[#111827]">
        Book a Free Demo Class
      </h3>

      <p className="mt-2 text-[#64748B]">
        Fill in your details and our team will contact you shortly.
      </p>

      <form className="mt-8 space-y-5">

        <div>
          <label className="mb-2 block text-sm font-medium">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            className="w-full rounded-xl border border-[#E4EAF5] px-4 py-3 outline-none focus:border-[#2F5BFF]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Phone Number
          </label>

          <input
            type="tel"
            placeholder="+91"
            className="w-full rounded-xl border border-[#E4EAF5] px-4 py-3 outline-none focus:border-[#2F5BFF]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Email Address
          </label>

          <input
            type="email"
            placeholder="example@gmail.com"
            className="w-full rounded-xl border border-[#E4EAF5] px-4 py-3 outline-none focus:border-[#2F5BFF]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Choose Your Academy
          </label>

          <select
            className="w-full rounded-xl border border-[#E4EAF5] px-4 py-3 outline-none focus:border-[#2F5BFF]"
          >
            <option>Oracle Fusion Academy</option>
            <option>Software Development Academy</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Training Mode
          </label>

          <select
            className="w-full rounded-xl border border-[#E4EAF5] px-4 py-3 outline-none focus:border-[#2F5BFF]"
          >
            <option>Online</option>
            <option>Classroom</option>
            <option>Either</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Message
          </label>

          <textarea
            rows={4}
            placeholder="Tell us about your learning goals..."
            className="w-full rounded-xl border border-[#E4EAF5] px-4 py-3 outline-none focus:border-[#2F5BFF]"
          />
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2F5BFF] px-6 py-4 font-semibold text-white transition hover:bg-[#2447D9]"
        >
          <Send className="h-5 w-5" />

          Book My Free Demo
        </button>

      </form>

    </div>
  );
}