import {
  Eye,
  Target,
} from "lucide-react";

import { Card } from "@/features/marketing/shared";

export function MissionVision() {
  return (
    <section className="bg-slate-50 py-20">

      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2 lg:px-8">

        <Card className="p-8">

          <Target className="h-10 w-10 text-primary" />

          <h3 className="mt-5 text-2xl font-bold">
            Our Mission
          </h3>

          <p className="mt-4 leading-7 text-slate-600">
            Deliver practical, project-based IT education that prepares
            learners for real industry opportunities.
          </p>

        </Card>

        <Card className="p-8">

          <Eye className="h-10 w-10 text-primary" />

          <h3 className="mt-5 text-2xl font-bold">
            Our Vision
          </h3>

          <p className="mt-4 leading-7 text-slate-600">
            Become one of India's most trusted software training
            institutes by developing future-ready IT professionals.
          </p>

        </Card>

      </div>

    </section>
  );
}