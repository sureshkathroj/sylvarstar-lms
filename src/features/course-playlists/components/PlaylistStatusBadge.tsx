import { Badge } from "@/components/ui/badge";

interface PlaylistStatusBadgeProps {
  status: "active" | "inactive";
}

export default function PlaylistStatusBadge({
  status,
}: PlaylistStatusBadgeProps) {
  return (
    <Badge
      variant={
        status === "active"
          ? "default"
          : "secondary"
      }
    >
      {status === "active"
        ? "Active"
        : "Inactive"}
    </Badge>
  );
}