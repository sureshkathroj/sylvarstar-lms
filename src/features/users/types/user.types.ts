import type {
  UserRole,
  UserStatus,
} from "../constants/roles";

export interface AppUser {
  uid: string;

  email: string;

  displayName: string;

  phone?: string;

  role: UserRole;

  status: UserStatus;

  createdAt: Date;

  updatedAt: Date;
}