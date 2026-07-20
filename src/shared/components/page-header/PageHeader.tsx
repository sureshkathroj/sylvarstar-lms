import { ReactNode } from "react";

import { Button } from "@/components/ui/button";

interface PageHeaderProps {
  title: string;
  description?: string;
  actionLabel?: string;
  onActionClick?: () => void;
  actionIcon?: ReactNode;
}

export default function PageHeader({
  title,
  description,
  actionLabel,
  onActionClick,
  actionIcon,
}: PageHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          {title}
        </h1>

        {description && (
          <p className="mt-1 text-muted-foreground">
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