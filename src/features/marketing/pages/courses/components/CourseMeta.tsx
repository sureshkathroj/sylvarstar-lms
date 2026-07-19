interface Props {
  duration: string;
  level: string;
  mode: string;
}

export function CourseMeta({
  duration,
  level,
  mode,
}: Props) {
  return (
    <div className="space-y-2 text-sm text-slate-600">

      <p>⏱ {duration}</p>

      <p>🎓 {level}</p>

      <p>💻 {mode}</p>

    </div>
  );
}