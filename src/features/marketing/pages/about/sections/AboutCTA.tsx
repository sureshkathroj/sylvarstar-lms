import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import {
  PrimaryButton,
  SecondaryButton,
} from "@/features/marketing/shared";

export function AboutCTA() {
  return (
    <section className="py-20">

      <div className="mx-auto max-w-4xl px-6 text-center">

        <h2 className="text-4xl font-bold">
          Ready to Start Your IT Career?
        </h2>

        <p className="mt-5 text-lg text-slate-600">
          Join SylvarStar and gain the skills, confidence, and practical
          experience needed to succeed in today's technology industry.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <PrimaryButton>
            <a href="#contact">
              Book Free Demo Class
            </a>
          </PrimaryButton>

          <SecondaryButton>
            <Link
              to="/courses"
              className="flex items-center gap-2"
            >
              Browse Courses

              <ArrowRight className="h-4 w-4" />

            </Link>
          </SecondaryButton>

        </div>

      </div>

    </section>
  );
}