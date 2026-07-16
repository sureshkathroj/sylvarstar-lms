import { Badge } from "./Badge";

type Props = {
  badge: string;
  title: string;
  description: string;
  center?: boolean;
};

export function SectionHeader({
  badge,
  title,
  description,
  center = true,
}: Props) {
  return (
    <div
      className={`${
        center ? "mx-auto max-w-3xl text-center" : ""
      }`}
    >
      <Badge>{badge}</Badge>

      <h2 className="mt-6 text-5xl font-bold leading-tight text-[#111827]">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-[#64748B]">
        {description}
      </p>
    </div>
  );
}