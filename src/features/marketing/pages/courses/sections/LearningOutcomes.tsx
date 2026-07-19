import { Course } from "../types";

interface LearningOutcomesProps {
  course: Course;
}

export function LearningOutcomes({ course }: LearningOutcomesProps) {
  if (!course.learningOutcomes) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-2xl font-bold">Learning outcomes</h2>

        <p className="leading-7 text-slate-600">
          {course.learningOutcomes}
        </p>
      </div>
    </section>
  );
}