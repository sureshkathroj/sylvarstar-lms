import { CourseCard } from "./CourseCard";
import { courses } from "./courses-data";

export function Courses() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold">
          Popular Courses
        </h2>

        <p className="mt-4 text-muted-foreground">
          Explore our most popular courses and start learning today.
        </p>
      </div>

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
    </section>
  );
}