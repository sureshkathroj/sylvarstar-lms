import { SectionHeader } from "@/features/marketing/shared";
import { CourseCard } from "@/features/marketing/shared/CourseCard";
import { oracleCourses } from "@/features/marketing/data/oracleCourses";

export function OracleCoursesSection() {
  return (
    <section className="py-24">

      <div className="container mx-auto px-6">

        <SectionHeader
          badge="COURSES OFFERED"
          title="Choose Your Oracle Specialization"
          description="Professional Oracle Fusion programs designed for freshers and working professionals."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {oracleCourses.map((course) => (
            <CourseCard
              key={course.title}
              {...course}
            />
          ))}

        </div>

      </div>

    </section>
  );
}