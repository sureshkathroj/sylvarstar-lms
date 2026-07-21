import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";

import { useAssignCourse } from "../hooks/useAssignCourse";
import { useCourses } from "@/features/courses/hooks/useCourses";
import { STUDENT_COURSE_STATUS } from "../types/student-course.types";

export default function AssignCoursePage() {
  const navigate = useNavigate();

  const { studentId } = useParams();

  const { courses, loading } = useCourses();

  const { assignCourse, loading: saving } = useAssignCourse();

  const [courseId, setCourseId] = useState("");

  const [status, setStatus] = useState(
    STUDENT_COURSE_STATUS.ACTIVE
  );

  const [notes, setNotes] = useState("");

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    if (!studentId) return;

    const success = await assignCourse(
      {
        studentId,
        courseId,
        status,
        notes,
      },
      "admin"
    );

    if (success) {
      navigate("/app/students");
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6">

      <h1 className="text-2xl font-bold mb-6">
        Assign Course
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <div>

          <Label>
            Course
          </Label>

          <Select
            value={courseId}
            onValueChange={setCourseId}
          >
            {loading ? (
              <option>
                Loading...
              </option>
            ) : (
              courses.map((course) => (
                <option
                  key={course.id}
                  value={course.id}
                >
                  {course.title}
                </option>
              ))
            )}
          </Select>

        </div>

        <div>

          <Label>
            Status
          </Label>

          <Select
            value={status}
            onValueChange={(value) =>
              setStatus(value as any)
            }
          >
            <option value="active">
              Active
            </option>

            <option value="completed">
              Completed
            </option>

            <option value="expired">
              Expired
            </option>

          </Select>

        </div>

        <div>

          <Label>
            Notes
          </Label>

          <Input
            value={notes}
            onChange={(e) =>
              setNotes(e.target.value)
            }
          />

        </div>

        <div className="flex gap-3">

          <Button
            type="submit"
            disabled={saving}
          >
            {saving
              ? "Assigning..."
              : "Assign Course"}
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={() =>
              navigate("/app/students")
            }
          >
            Cancel
          </Button>

        </div>

      </form>

    </div>
  );
}