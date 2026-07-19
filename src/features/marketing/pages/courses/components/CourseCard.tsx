import { ArrowRight, Clock3, GraduationCap, Monitor } from "lucide-react";
import { Link } from "react-router-dom";

import { Course } from "../types";
import { CourseBadge } from "./CourseBadge";
import { CourseMeta } from "./CourseMeta";

interface Props {
  course: Course;
}

export function CourseCard({ course }: Props) {
  return (
    <Link
      to={`/courses/${course.slug}`}
      className="group block h-full"
    >
      <article
        className="
          flex
          h-full
          flex-col
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-7
          transition-all
          duration-300
          hover:-translate-y-2
          hover:border-cyan-400
          hover:shadow-xl
        "
      >
        <CourseBadge featured={course.featured} />

        <h3 className="mt-5 text-2xl font-bold leading-tight text-slate-900">
          {course.title}
        </h3>

        <p className="mt-4 flex-1 text-slate-600 leading-7">
          {course.shortDescription}
        </p>

        <div className="mt-8">
          <CourseMeta
            duration={course.duration}
            level={course.level}
            mode={course.mode}
          />
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
          <span className="font-semibold text-cyan-600 transition group-hover:text-cyan-700">
            View Details
          </span>

          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </div>
      </article>
    </Link>
  );
}