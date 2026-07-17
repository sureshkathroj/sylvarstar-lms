import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState("");
const [error, setError] = useState("");
const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!formRef.current) return;

  setLoading(true);
  setSuccess("");
  setError("");

  try {
    await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setSuccess(
      "Thank you! Your enquiry has been sent successfully."
    );

    formRef.current.reset();
  } catch (err) {
    console.error(err);

    setError(
      "Something went wrong. Please try again."
    );
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="rounded-[32px] border border-[#E4EAF5] bg-white p-8 shadow-xl">

      <h3 className="text-3xl font-bold text-[#111827]">
        Book a Free Demo Class
      </h3>

      <p className="mt-2 text-[#64748B]">
        Fill in your details and our team will contact you shortly.
      </p>

      <form 
      ref={formRef}
  onSubmit={sendEmail}
      className="mt-8 space-y-5">

        <div>
          <label className="mb-2 block text-sm font-medium">
            Full Name
          </label>

          <input
            name="from_name"
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
            name="phone"
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
            name="from_email"
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
            name="program"
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
             name="mode"
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
            name="message"
            rows={4}
            placeholder="Tell us about your learning goals..."
            className="w-full rounded-xl border border-[#E4EAF5] px-4 py-3 outline-none focus:border-[#2F5BFF]"
          />
        </div>
        {success && (
  <p className="text-sm font-medium text-green-600">
    {success}
  </p>
)}

{error && (
  <p className="text-sm font-medium text-red-600">
    {error}
  </p>
)}
        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2F5BFF] px-6 py-4 font-semibold text-white transition hover:bg-[#2447D9]"
        >
          <Send className="h-5 w-5" />

          {loading ? "Sending..." : "Book Free Demo Class" }
        </button>

      </form>

    </div>
  );
}