import { useEffect, useState } from "react";

import { studentService } from "../services/student.service";
import type { Student } from "../types/student.types";

export function useStudents() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  const loadStudents = async () => {
    try {
      setLoading(true);

      const data =
        await studentService.getStudents();
        console.log("Students:", data);
      setStudents(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  return {
    students,
    loading,
    refresh: loadStudents,
  };
}