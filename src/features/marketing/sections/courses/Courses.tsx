import { CourseCard } from "./CourseCard";
import { courses } from "./courses-data";
import { Section, SectionHeader } from "@/components/shared";

export function Courses() {
  return (
    <Section className="container mx-auto px-6 py-24">
      <SectionHeader
        title="Popular Courses"
        subtitle="Explore our most popular courses and start learning today."
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            category={course.category}
            students={course.students}
            duration={course.duration}
            level={course.level}
          />
        ))}
      </div>
    </Section>
  );
}