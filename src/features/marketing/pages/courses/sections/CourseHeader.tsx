import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import type { Course } from "../types";

interface Props {
  course: Course;
}

export function CourseHeader({ course }: Props) {
  return (
    <section className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <Link
          to="/courses"
          className="inline-flex items-center gap-2 text-sm text-cyan-600 hover:text-cyan-700"
        >
          <ArrowLeft size={18} />
          Back to Courses
        </Link>

        <h1 className="mt-6 text-4xl font-bold">
          {course.title}
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-slate-600">
          {course.shortDescription}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">

          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm">
            {course.level}
          </span>

          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm">
            {course.duration}
          </span>

          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm">
            {course.mode}
          </span>

        </div>

        <div className="mt-10 flex flex-wrap gap-4">

          <button className="rounded-xl bg-cyan-600 px-6 py-3 font-medium text-white hover:bg-cyan-700">
            Enroll Now
          </button>

          <button className="rounded-xl border border-slate-300 px-6 py-3 font-medium hover:bg-slate-100">
            Book Free Demo
          </button>

        </div>

      </div>
    </section>
  );
}