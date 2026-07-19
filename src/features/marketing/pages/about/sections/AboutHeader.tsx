import { Badge } from "@/features/marketing/shared";

export function AboutHeader() {
  return (
    <section className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-28 lg:px-8">

        <Badge>ABOUT US</Badge>

        <h1 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
          Empowering Careers Through Practical IT Training
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          SylvarStar is committed to helping students and professionals
          build successful careers through industry-focused training,
          hands-on learning, and expert mentorship.
        </p>

      </div>
    </section>
  );
}