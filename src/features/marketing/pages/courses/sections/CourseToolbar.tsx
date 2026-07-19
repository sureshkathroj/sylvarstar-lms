import { Search } from "lucide-react";
import { useCourseContext } from "../context/CourseContext";

export function CourseToolbar() {
  const {
    search,
    setSearch,
    level,
    setLevel,
  } = useCourseContext();

  const levels = [
    "All",
    "Beginner",
    "Intermediate",
    "Advanced",
  ];

  return (
    <section className="bg-slate-50 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search courses..."
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 transition focus:border-cyan-500 focus:bg-white focus:outline-none"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {levels.map((item) => (
              <button
                key={item}
                onClick={() => setLevel(item)}
                className={`rounded-xl px-5 py-2.5 font-medium transition ${
                  level === item
                    ? "bg-cyan-600 text-white"
                    : "border border-slate-200 bg-white hover:border-cyan-300"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}