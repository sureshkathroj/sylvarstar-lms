import {
  Card,
  CardContent,
} from "@/components/ui/card";

import type {
  StudentCourseCard,
} from "../types/student-course.types";

interface Props {
  course: StudentCourseCard;
}

export default function CourseCard({
  course,
}: Props) {
  return (
    <Card className="cursor-pointer transition hover:shadow-lg">
      <CardContent className="space-y-2 p-6">
        <h3 className="text-lg font-semibold">
          {course.name}
        </h3>

        <p className="text-sm text-muted-foreground">
          {course.description}
        </p>

        <div className="flex gap-2 text-xs">
          <span>{course.category}</span>

          <span>•</span>

          <span>{course.level}</span>

          <span>•</span>

          <span>{course.duration} Months</span>
        </div>
      </CardContent>
    </Card>
  );
}