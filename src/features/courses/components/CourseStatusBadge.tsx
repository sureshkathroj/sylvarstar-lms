import { Badge } from "@/components/ui/badge";
import type { CourseStatus } from "../types/course.types";

interface CourseStatusBadgeProps {
  status: CourseStatus;
}

export default function CourseStatusBadge({
  status,
}: CourseStatusBadgeProps) {
  return (
    <Badge
      variant={status === "active" ? "default" : "secondary"}
    >
      {status === "active" ? "Active" : "Inactive"}
    </Badge>
  );
}