import { LearningPathHeader } from "./LearningPathHeader";
import { LearningPathCard } from "./LearningPathCard";
import { learningPaths } from "./learningPath.data";

export function LearningPath() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">
      {/* Background Glow */}
      <div className="absolute left-0 top-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <LearningPathHeader />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
  {learningPaths.map((path) => (
    <LearningPathCard
      key={path.id}
      title={path.title}
      subtitle={path.subtitle}
      icon={path.icon}
      features={path.features}
      button={path.button}
      theme={path.theme}
      href={path.href}
    />
  ))}
</div>
      </div>
    </section>
  );
}