import { useCourseContext } from "../context/CourseContext";
import { CourseCard } from "../components/CourseCard";

export function CoursesGrid() {
  const { filteredCourses } = useCourseContext();

  return (
    <section className="bg-slate-50 py-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {filteredCourses.length === 0 ? (
          <div className="py-24 text-center">
            <h3 className="text-2xl font-bold text-slate-900">
              No courses found
            </h3>

            <p className="mt-4 text-slate-500">
              Try another search or filter.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}