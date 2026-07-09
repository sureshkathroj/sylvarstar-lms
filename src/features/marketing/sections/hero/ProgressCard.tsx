import { Card, CardContent } from "@/components/ui";

export function ProgressCard() {
  return (
    <Card className="w-52">
      <CardContent className="pt-6">
        <p className="text-sm text-muted-foreground">
          Weekly Goal
        </p>

        <h3 className="mt-2 text-3xl font-bold">
          7 / 10
        </h3>

        <div className="mt-4 h-2 rounded-full bg-slate-100">
          <div className="h-2 w-[70%] rounded-full bg-primary"></div>
        </div>

        <p className="mt-2 text-xs text-muted-foreground">
          70% Complete
        </p>
      </CardContent>
    </Card>
  );
}