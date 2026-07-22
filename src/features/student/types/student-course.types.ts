export interface StudentCourse {
  id: string;
  studentId: string;
  courseId: string;
  assignedAt: Date;
  assignedBy: string;
  startDate?: Date | null;
  endDate?: Date | null;
  status: string;
  notes?: string;
}

export interface StudentCourseCard {
  id: string;
  name: string;
  description: string;
  category: string;
  duration: string;
  level: string;
  mode: string;
  fee: number;
  status: string;
}