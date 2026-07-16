import { Clock3, MonitorSmartphone } from "lucide-react";
import { Card } from "./Card";

type Props = {
  title: string;
  duration: string;
  mode: string;
};

export function CourseCard({
  title,
  duration,
  mode,
}: Props) {
  return (
    <Card className="p-6">

      <h3 className="text-xl font-bold text-[#111827]">
        {title}
      </h3>

      <div className="mt-6 space-y-3">

        <div className="flex items-center gap-3 text-[#64748B]">
          <Clock3 className="h-5 w-5 text-[#2F5BFF]" />
          {duration}
        </div>

        <div className="flex items-center gap-3 text-[#64748B]">
          <MonitorSmartphone className="h-5 w-5 text-[#2F5BFF]" />
          {mode}
        </div>

      </div>

      <button className="mt-8 font-semibold text-[#2F5BFF]">
        View Details →
      </button>

    </Card>
  );
}