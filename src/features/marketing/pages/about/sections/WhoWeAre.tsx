import {
  BookOpen,
  Briefcase,
  GraduationCap,
} from "lucide-react";

import {
  Badge,
  Card,
} from "@/features/marketing/shared";

export function WhoWeAre() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">

        <div>

          <Badge>WHO WE ARE</Badge>

          <h2 className="mt-4 text-3xl font-bold">
            Learn. Build. Succeed.
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            SylvarStar is a modern software training institute based in
            Hyderabad, dedicated to preparing students and professionals
            for successful careers in the IT industry.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Our programs combine industry-relevant curriculum, hands-on
            projects, experienced trainers, and personalized mentorship
            to bridge the gap between academic learning and real-world
            job requirements.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Whether you're a beginner, a working professional, or looking
            for a career transition, we help you build practical skills
            with confidence.
          </p>

        </div>

        <div className="space-y-6">

          <Card className="flex items-center gap-4 p-6">

            <BookOpen className="h-8 w-8 text-primary" />

            <div>

              <h3 className="font-semibold">
                Practical Learning
              </h3>

              <p className="text-slate-600">
                Learn through live projects and hands-on assignments.
              </p>

            </div>

          </Card>

          <Card className="flex items-center gap-4 p-6">

            <Briefcase className="h-8 w-8 text-primary" />

            <div>

              <h3 className="font-semibold">
                Industry Mentorship
              </h3>

              <p className="text-slate-600">
                Learn from experienced industry professionals.
              </p>

            </div>

          </Card>

          <Card className="flex items-center gap-4 p-6">

            <GraduationCap className="h-8 w-8 text-primary" />

            <div>

              <h3 className="font-semibold">
                Career Support
              </h3>

              <p className="text-slate-600">
                Resume preparation, interview guidance and placement support.
              </p>

            </div>

          </Card>

        </div>

      </div>
    </section>
  );
}