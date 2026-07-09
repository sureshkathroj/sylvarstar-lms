type CourseCardProps = {
  title: string;
  category: string;
  students: string;
  duration: string;
  level: string;
};

export function CourseCard({
  title,
  category,
  students,
  duration,
  level,
}: CourseCardProps) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-lg">
      <div className="mb-3 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold">
        {category}
      </div>

      <h3 className="mb-4 text-xl font-bold">
        {title}
      </h3>

      <div className="space-y-2 text-sm text-muted-foreground">
        <p>👥 {students} Students</p>
        <p>⏱ {duration}</p>
        <p>📘 {level}</p>
      </div>

      <button className="mt-6 w-full rounded-md bg-black py-2 text-white transition hover:bg-slate-800">
        View Course
      </button>
    </div>
  );
}