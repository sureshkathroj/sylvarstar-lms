import { Badge } from "@/components/ui/badge";
import type { StudentStatus } from "../types/student.types";

interface StudentStatusBadgeProps {
  status: StudentStatus;
}

export default function StudentStatusBadge({
  status,
}: StudentStatusBadgeProps) {
  return (
    <Badge
      variant={status === "active" ? "default" : "secondary"}
    >
      {status === "active" ? "Active" : "Inactive"}
    </Badge>
  );
}