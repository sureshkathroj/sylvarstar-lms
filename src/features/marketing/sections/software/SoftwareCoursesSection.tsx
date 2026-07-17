import { SectionHeader } from "@/features/marketing/shared";
import { CourseCard } from "@/features/marketing/shared/CourseCard";
import { softwareCourses } from "../../data/softwareCourses";

export function SoftwareCoursesSection() {
  return (
    <section className="py-24">

      <div className="container mx-auto px-6">

        <SectionHeader
          badge="COURSES OFFERED"
          title="Choose Your Software Specialization"
          description="Professional Software Development programs designed for freshers and working professionals."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {softwareCourses.map((course) => (
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