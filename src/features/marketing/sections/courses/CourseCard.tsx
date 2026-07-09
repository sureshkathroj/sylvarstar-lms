import { Star, Clock, Users, BookOpen } from "lucide-react";

type Props = {
  title: string;
  category: string;
  image: string;
  rating: string;
  students: string;
  duration: string;
  level: string;
};

export function CourseCard({
  title,
  category,
  image,
  rating,
  students,
  duration,
  level,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="h-52 bg-gradient-to-br from-indigo-100 to-violet-100 flex items-center justify-center">
        <div className="flex h-full items-center justify-center">
    <BookOpen className="h-14 w-14 text-white/80"/>
</div>
      </div>

      <div className="p-6">

        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
          {category}
        </span>

        <h3 className="mt-4 text-xl font-bold">
          {title}
        </h3>

        <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          {rating}
        </div>

        <div className="mt-4 flex items-center gap-6 text-sm text-slate-500">

          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            {students}
          </div>

          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            {duration}
          </div>

        </div>

        <div className="mt-6 flex items-center justify-between">

          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs">
            {level}
          </span>

          <button className="rounded-xl bg-indigo-600 px-5 py-2 text-white hover:bg-indigo-700">
            Enroll
          </button>

        </div>

      </div>

    </div>
  );
}