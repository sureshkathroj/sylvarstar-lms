export type CourseStatus = "active" | "inactive";

export type CourseMode = "Online" | "Offline" | "Hybrid";

export type CourseLevel =
  | "Beginner"
  | "Intermediate"
  | "Advanced";

export interface Course {
  id: string;

  name: string;

  category: string;

  description?: string;

  duration: string;

  fee: number;

  mode: CourseMode;

  level: CourseLevel;

  status: CourseStatus;

  createdAt?: Date;

  updatedAt?: Date;
}

export interface CreateCourseInput
  extends Omit<
    Course,
    "id" | "createdAt" | "updatedAt" | "status"
  > {}

export interface UpdateCourseInput
  extends Partial<CreateCourseInput> {}