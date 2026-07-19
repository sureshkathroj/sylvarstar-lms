interface Props {
  featured?: boolean;
}

export function CourseBadge({ featured }: Props) {
  if (!featured) return null;

  return (
    <span className="inline-flex rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-700">
      Featured
    </span>
  );
}