export function HeroStats() {
  const items = [
    {
      title: "Live Online Classes",
      value: "Weekly",
    },
    {
      title: "Weekend Batches",
      value: "Available",
    },
    {
      title: "Placement Support",
      value: "Included",
    },
  ];

  return (
    <div className="mt-12 flex flex-wrap gap-8">
      {items.map((item) => (
        <div key={item.title}>
          <p className="text-2xl font-bold text-slate-900">
            {item.value}
          </p>

          <p className="text-sm text-slate-500">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}