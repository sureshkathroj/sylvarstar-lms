import { CalendarDays, GraduationCap } from "lucide-react";

import { FloatingInfoCard } from "./FloatingInfoCard";
import { LearningJourneyCard } from "./LearningJourneyCard";

export function HeroImage() {
  return (
    <div className="relative flex items-center justify-center py-12">

      {/* Main Card */}

      <LearningJourneyCard />

      {/* Top Right */}

      {/* <FloatingInfoCard
        icon={CalendarDays}
        title="Next Batch"
        subtitle="Starts Monday"
        className="-right-6 top-8 hidden lg:block"
      /> */}

      {/* Bottom Left */}

      {/* <FloatingInfoCard
        icon={GraduationCap}
        title="Learning Mode"
        subtitle="Online & Classroom"
        className="-left-6 bottom-10 hidden lg:block"
      /> */}

    </div>
  );
}