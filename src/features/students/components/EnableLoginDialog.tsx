import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { studentService } from "../../student/services/student.service";

import type { Student } from "../types/student.types";

interface EnableLoginDialogProps {
   open: boolean;
  student: Student | null;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => Promise<void> | void;
}

export default function EnableLoginDialog({
   open,
  student,
  onOpenChange,
  onSuccess,
}: EnableLoginDialogProps) {
  const [firebaseUid, setFirebaseUid] = useState("");
  const [saving, setSaving] = useState(false);

  const handleEnableLogin = async () => {
  if (!student || !firebaseUid.trim()) {
    return;
  }

  try {
    setSaving(true);

    await studentService.enableStudentLogin(
      student,
      firebaseUid.trim()
    );

    toast.success("Student login enabled successfully.");

    setFirebaseUid("");

    onOpenChange(false);

    await onSuccess?.();
  } catch (error) {
    console.error(error);

    toast.error("Failed to enable student login.");
  } finally {
    setSaving(false);
  }
};

  if (!student) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Enable Student Login</DialogTitle>

          <DialogDescription>
            Create the student in Firebase Authentication,
            then paste the generated Firebase UID below.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">

          <div>
            <Label>Name</Label>
            <Input value={student.name} readOnly />
          </div>

          <div>
            <Label>Email</Label>
            <Input value={student.email} readOnly />
          </div>

          <div>
            <Label>Firebase UID</Label>
            <Input
              value={firebaseUid}
              onChange={(e) =>
                setFirebaseUid(e.target.value)
              }
              placeholder="Paste Firebase UID"
            />
          </div>

        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>

          <Button
  disabled={!firebaseUid.trim() || saving}
  onClick={handleEnableLogin}
>
  {saving ? "Saving..." : "Enable Login"}
</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}