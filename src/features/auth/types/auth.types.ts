import type { User } from "firebase/auth";

import type { AppUser } from "@/features/users/types/user.types";

export interface AuthContextType {
  firebaseUser: User | null;

  appUser: AppUser | null;

  loading: boolean;

  login(
    email: string,
    password: string
  ): Promise<void>;

  logout(): Promise<void>;

  refreshUser(): Promise<void>;
}