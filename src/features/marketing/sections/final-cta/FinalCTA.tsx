import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="bg-[#07142B] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            bg-gradient-to-r
            from-cyan-600
            via-blue-600
            to-indigo-700
            px-8
            py-20
            text-center
            shadow-2xl
            lg:px-20
          "
        >
          {/* Decorative Glow */}
          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-100">
              Start Your Journey Today
            </p>

            <h2 className="mt-6 text-4xl font-black text-white lg:text-6xl">
              Ready to Build
              <span className="block">
                Your Future?
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-cyan-50/90">
              Learn from industry experts, work on real-world projects,
              and gain the skills needed to succeed in Oracle Fusion
              and modern Software Development careers.
            </p>

            <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
              {/* Primary Button */}
              <button
                className="
                  rounded-xl
                  bg-white
                  px-8
                  py-4
                  text-base
                  font-semibold
                  text-slate-900
                  transition
                  hover:scale-105
                "
              >
                Book Free Demo
              </button>

              {/* Secondary Button */}
              <button
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/30
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:bg-white/10
                "
              >
                Explore Courses

                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>

            <p className="mt-10 text-sm text-cyan-100/80">
              Trusted by aspiring professionals across India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}