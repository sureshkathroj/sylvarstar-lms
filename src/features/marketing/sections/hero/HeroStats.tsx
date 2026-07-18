const stats = [
  {
    value: "500+",
    label: "Students Trained",
  },
  {
    value: "25+",
    label: "Industry Projects",
  },
  {
    value: "100%",
    label: "Career Guidance",
  },
];

export function HeroStats() {
  return (
    <div className="mt-16 grid grid-cols-3 gap-6">
      {stats.map((item) => (
        <div
          key={item.label}
          className="
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-6
            backdrop-blur-xl
          "
        >
          <div className="text-3xl font-bold text-cyan-400">
            {item.value}
          </div>

          <div className="mt-2 text-sm text-slate-300">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}