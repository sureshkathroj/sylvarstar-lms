import { academies } from "../data/academies";
import { useCourseContext } from "../context/CourseContext";

export function AcademyTabs() {
  const { academy, setAcademy } = useCourseContext();

  return (
    <section className="bg-white py-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
  <div className="inline-flex rounded-2xl bg-slate-100 p-2">
          {academies.map((item) => (
            <button
              key={item.id}
              onClick={() =>
                setAcademy(item.id as "oracle" | "software")
              }
              className={`rounded-xl px-8 py-4 font-semibold transition-all duration-300 ${
                academy === item.id
                  ? "bg-white text-cyan-700 shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}