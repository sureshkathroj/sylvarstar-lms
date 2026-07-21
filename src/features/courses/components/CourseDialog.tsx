import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import CourseForm from "./CourseForm";
import type { Course } from "../types/course.types";

interface CourseDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  mode: "create" | "edit";

  course?: Course;

  onSuccess: () => void;
}

export default function CourseDialog({
  open,
  onOpenChange,
  mode,
  course,
  onSuccess,
}: CourseDialogProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>
            {mode === "create"
              ? "Create Course"
              : "Edit Course"}
          </DialogTitle>
        </DialogHeader>

        <CourseForm
          mode={mode}
          course={course}
          onSuccess={onSuccess}
          onCancel={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  );
}