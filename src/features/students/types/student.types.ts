export const STUDENT_STATUS = {
  ACTIVE: "active",
  INACTIVE: "inactive",
} as const;

export type StudentStatus =
  (typeof STUDENT_STATUS)[keyof typeof STUDENT_STATUS];

export interface Student {
  id: string;

  name: string;

  email: string;

  phone: string;

  academy: string;

  mode: string;

  course: string;

  batch: string;

  trainer: string;

  admissionDate: string;

  fee: number;

  status: StudentStatus;

  createdAt: Date;

  updatedAt: Date;
}