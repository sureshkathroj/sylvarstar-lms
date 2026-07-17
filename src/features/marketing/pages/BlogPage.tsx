import { ArrowLeft, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export  function BlogPage() {
  const topics = [
    "Oracle Fusion",
    "React.js",
    "Angular",
    "AI Powered Development",
    "Full Stack Development",
    "Career Guidance",
    "Interview Preparation",
    "Resume Building",
    "Industry Tips",
  ];

  return (
    <section className="bg-[#F7F9FC] py-24 min-h-screen">

      <div className="container mx-auto max-w-5xl px-6 text-center">

        <div className="inline-flex rounded-full bg-[#2F5BFF]/10 px-4 py-2 text-sm font-semibold text-[#2F5BFF]">
          KNOWLEDGE CENTER
        </div>

        <div className="mt-8 flex justify-center">
          <BookOpen className="h-16 w-16 text-[#2F5BFF]" />
        </div>

        <h1 className="mt-8 text-5xl font-bold text-[#111827]">
          Blogs Coming Soon
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#64748B]">
          We're preparing practical articles, career guidance,
          interview tips and technology tutorials to help
          students learn faster and build successful IT careers.
        </p>
        

        <div className="mt-14 flex flex-wrap justify-center gap-3">

          {topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full bg-white border border-[#E4EAF5] px-5 py-3 text-sm font-medium text-[#111827]"
            >
              {topic}
            </span>
          ))}

        </div>

        <Link
          to="/"
          className="mt-16 inline-flex items-center gap-2 rounded-xl bg-[#2F5BFF] px-8 py-4 font-semibold text-white transition hover:bg-[#2447D9]"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Home
        </Link>

      </div>

    </section>
  );
}