import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  actionLabel?: string;
  actionIcon?: ReactNode;
  onActionClick?: () => void;
}

export default function PageHeader({
  title,
  description,
  actionLabel,
  actionIcon,
  onActionClick,
}: PageHeaderProps) {
  return (
    <div className="flex items-start justify-between">
      <div>
        <h1 className="text-3xl font-bold">
          {title}
        </h1>

        {description && (
          <p className="mt-1 text-slate-500">
            {description}
          </p>
        )}
      </div>

      {actionLabel && (
        <Button onClick={onActionClick}>
          {actionIcon}
          {actionLabel}
        </Button>
      )}
    </div>
  );
}