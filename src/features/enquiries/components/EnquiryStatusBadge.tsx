import { Badge } from "@/components/ui/badge";

interface Props {
  status: string;
}

export default function EnquiryStatusBadge({ status }: Props) {
  const normalized = status.toLowerCase();

  const variant =
    normalized === "new"
      ? "default"
      : normalized === "contacted"
      ? "secondary"
      : normalized === "follow-up"
      ? "outline"
      : normalized === "registered"
      ? "default"
      : "destructive";

  return <Badge variant={variant}>{status}</Badge>;
}