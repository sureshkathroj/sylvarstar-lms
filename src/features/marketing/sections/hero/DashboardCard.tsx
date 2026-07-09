import { Card, CardContent, CardHeader } from "@/components/ui";

export function DashboardCard() {
  return (
    <Card className="w-80">
      <CardHeader>
        <h3 className="font-semibold text-lg">
          Learning Dashboard
        </h3>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">

          <div>
            <div className="flex justify-between text-sm">
              <span>React Masterclass</span>
              <span>72%</span>
            </div>

            <div className="mt-2 h-2 rounded-full bg-slate-100">
              <div className="h-2 w-[72%] rounded-full bg-primary"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm">
              <span>TypeScript</span>
              <span>95%</span>
            </div>

            <div className="mt-2 h-2 rounded-full bg-slate-100">
              <div className="h-2 w-[95%] rounded-full bg-primary"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm">
              <span>AI Fundamentals</span>
              <span>54%</span>
            </div>

            <div className="mt-2 h-2 rounded-full bg-slate-100">
              <div className="h-2 w-[54%] rounded-full bg-primary"></div>
            </div>
          </div>

        </div>
      </CardContent>
    </Card>
  );
}