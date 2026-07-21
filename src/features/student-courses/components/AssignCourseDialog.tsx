import { useEffect, useState } from "react";

import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Student } from "@/features/students/types/student.types";

import { useCourses } from "@/features/courses/hooks/useCourses";

import { useAssignCourse } from "../hooks/useAssignCourse";

import {
  STUDENT_COURSE_STATUS,
} from "../types/student-course.types";

interface AssignCourseDialogProps {
  open: boolean;

  onOpenChange: (open: boolean) => void;

  student?: Student;

  onSuccess: () => void;
}

export default function AssignCourseDialog({
  open,
  onOpenChange,
  student,
  onSuccess,
}: AssignCourseDialogProps) {

  const { courses, loading: coursesLoading } =
    useCourses();

  const { assignCourse, loading } =
    useAssignCourse();

  const [courseId, setCourseId] =
    useState("");

  const [status, setStatus] =
    useState(
      STUDENT_COURSE_STATUS.ACTIVE
    );

  const [notes, setNotes] =
    useState("");

  useEffect(() => {

    if (open) {

      setCourseId("");

      setStatus(
        STUDENT_COURSE_STATUS.ACTIVE
      );

      setNotes("");

    }

  }, [open]);

  if (!student) {
    return null;
  }

  return (

    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >

      <DialogContent className="sm:max-w-lg">

        <DialogHeader>

          <DialogTitle>
            Assign Course
          </DialogTitle>

          <DialogDescription>

            Assign a course to this student.

          </DialogDescription>

        </DialogHeader>

        <div className="space-y-5">

          <div>

            <Label>
              Student
            </Label>

            <div className="mt-2 rounded-md border bg-slate-50 p-2 text-sm">

              <div className="font-medium">
                {student.name}
              </div>

              <div className="text-slate-500">
                {student.email}
              </div>

            </div>

          </div>

          <div>

            <Label>
              Course
            </Label>

            <Select
    value={courseId}
    onValueChange={(value) => {
        setCourseId(value ?? "");
    }}
>

              <SelectTrigger className="mt-2 w-full">

                <SelectValue
                  placeholder={
                    coursesLoading
                      ? "Loading courses..."
                      : "Select a course"
                  }
                />

              </SelectTrigger>

              <SelectContent>

  {courses
    .filter((course) => course.status === "active")
    .map((course) => (

      <SelectItem
        key={course.id}
        value={course.id}
      >
        {course.name}
      </SelectItem>

    ))}

</SelectContent>

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

              <SelectTrigger className="mt-2 w-full">

                <SelectValue />

              </SelectTrigger>

              <SelectContent>

                <SelectItem
                  value={
                    STUDENT_COURSE_STATUS.ACTIVE
                  }
                >
                  Active
                </SelectItem>

                <SelectItem
                  value={
                    STUDENT_COURSE_STATUS.COMPLETED
                  }
                >
                  Completed
                </SelectItem>

                <SelectItem
                  value={
                    STUDENT_COURSE_STATUS.EXPIRED
                  }
                >
                  Expired
                </SelectItem>

              </SelectContent>

            </Select>

          </div>
                    <div>

            <Label>
              Notes
            </Label>

            <Textarea
              className="mt-2"
              placeholder="Optional notes..."
              value={notes}
              onChange={(e) =>
                setNotes(e.target.value)
              }
            />

          </div>

        </div>

        <DialogFooter>

          <Button
            variant="outline"
            onClick={() =>
              onOpenChange(false)
            }
          >
            Cancel
          </Button>

          <Button
            disabled={loading}
            onClick={async () => {

              if (!courseId) {

                toast.error(
                  "Please select a course."
                );

                return;
              }

              const success =
                await assignCourse(

                  {

                    studentId:
                      student.id,

                    courseId,

                    status,

                    notes,

                  },

                  "admin"

                );

              if (!success) {

                return;

              }

              toast.success(
                "Course assigned successfully."
              );

              onSuccess();

              onOpenChange(false);

            }}
          >

            {loading
              ? "Assigning..."
              : "Assign Course"}

          </Button>

        </DialogFooter>

      </DialogContent>

    </Dialog>

  );

}