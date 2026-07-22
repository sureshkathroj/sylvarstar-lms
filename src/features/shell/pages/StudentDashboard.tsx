import { BookOpen } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/features/auth/hooks/useAuth";

export default function StudentDashboard() {
  const { appUser } = useAuth();

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold">
          Welcome back 👋
        </h1>

        <p className="mt-2 text-muted-foreground">
          Hi {appUser?.displayName}, continue your learning journey.
        </p>
      </div>

      <Card>
        <CardContent className="flex items-center gap-4 p-6">
          <BookOpen className="h-10 w-10 text-blue-600" />

          <div>
            <h2 className="font-semibold">
              My Courses
            </h2>

            <p className="text-sm text-muted-foreground">
              Your enrolled courses will appear here.
            </p>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}