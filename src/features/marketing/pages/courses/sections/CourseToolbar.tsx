import { Search } from "lucide-react";
import { useCourseContext } from "../context/CourseContext";

const levels = ["All", "Beginner", "Intermediate", "Advanced"];

export function CourseToolbar() {
  const {
    search,
    setSearch,
    level,
    setLevel,
  } = useCourseContext();

  return (
    <section className="bg-white pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-4">

          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search courses..."
              className="w-full rounded-xl border border-slate-200 py-3 pl-12 pr-4 outline-none transition focus:border-cyan-500"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {levels.map((item) => (
              <button
                key={item}
                onClick={() => setLevel(item)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
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