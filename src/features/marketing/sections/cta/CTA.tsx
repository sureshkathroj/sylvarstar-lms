import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-20">

      <div className="container mx-auto px-6">

        <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 px-10 py-20 text-center text-white">

          <h2 className="text-5xl font-black">
            Start Your Learning Journey Today
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-indigo-100">
            Join live online classes, hands-on projects and expert mentors.
          </p>

          <Button
            className="mt-10 rounded-xl bg-white px-8 text-indigo-700 hover:bg-slate-100"
          >
            Book Free Demo
          </Button>

        </div>

      </div>

    </section>
  );
}