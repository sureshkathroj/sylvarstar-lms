export const USER_ROLES = {
  SUPER_ADMIN: "super-admin",
  ADMIN: "admin",
  TRAINER: "trainer",
  STUDENT: "student",
} as const;

export type UserRole =
  (typeof USER_ROLES)[keyof typeof USER_ROLES];

export const USER_STATUS = {
  ACTIVE: "active",
  INACTIVE: "inactive",
  SUSPENDED: "suspended",
} as const;

export type UserStatus =
  (typeof USER_STATUS)[keyof typeof USER_STATUS];