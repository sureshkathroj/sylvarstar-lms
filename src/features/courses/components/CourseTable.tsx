import { Button } from "@/components/ui/button";

import CourseStatusBadge from "./CourseStatusBadge";
import type { Course } from "../types/course.types";

interface CourseTableProps {
  courses: Course[];

  onEdit: (course: Course) => void;

  onManagePlaylists: (course: Course) => void;

  onToggleStatus: (course: Course) => void;
}

export default function CourseTable({
  courses,
  onEdit,
  onManagePlaylists,
  onToggleStatus,
}: CourseTableProps) {
  return (
    <div className="overflow-hidden rounded-lg border bg-white">
      <table className="w-full">
        <thead className="bg-slate-50">
          <tr>
            <th className="p-4 text-left">Course Name</th>
            <th className="p-4 text-left">Category</th>
            <th className="p-4 text-left">Duration</th>
            <th className="p-4 text-left">Fee</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {courses.map((course) => (
            <tr key={course.id} className="border-t">
              <td className="p-4">{course.name}</td>

              <td className="p-4">{course.category}</td>

              <td className="p-4">{course.duration}</td>

              <td className="p-4">{course.fee}</td>

              <td className="p-4">
                <CourseStatusBadge status={course.status} />
              </td>

              <td className="p-4">
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onEdit(course)}
                  >
                    Edit
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onManagePlaylists(course)}
                  >
                    Playlists
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onToggleStatus(course)}
                  >
                    {course.status === "active"
                      ? "Deactivate"
                      : "Activate"}
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}