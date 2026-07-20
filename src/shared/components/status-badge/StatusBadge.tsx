import { Badge } from "@/components/ui/badge";

interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  const normalized = status.toLowerCase();

  const variant =
    normalized === "active"
      ? "default"
      : normalized === "inactive"
      ? "secondary"
      : "destructive";

  return (
    <Badge variant={variant}>
      {status}
    </Badge>
  );
}