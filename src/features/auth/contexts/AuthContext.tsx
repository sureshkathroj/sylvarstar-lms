import {
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  onAuthStateChanged,
  type User,
} from "firebase/auth";

import { auth } from "@/lib/firebase";
import { userService } from "@/features/users/services/user.service";
import type { AppUser } from "@/features/users/types/user.types";

import { authService } from "../services/auth.service";
import type { AuthContextType } from "../types/auth.types";

export const AuthContext =
  createContext<AuthContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export function AuthProvider({
  children,
}: Props) {
  const [firebaseUser, setFirebaseUser] =
    useState<User | null>(null);

  const [appUser, setAppUser] =
    useState<AppUser | null>(null);

  const [loading, setLoading] = useState(true);

  async function loadUser(user: User | null) {
    if (!user) {
      setFirebaseUser(null);
      setAppUser(null);
      setLoading(false);
      return;
    }

    const profile = await userService.getUser(user.uid);

    if (!profile) {
      await authService.logout();
      return;
    }

    setFirebaseUser(user);
    setAppUser(profile);
    setLoading(false);
  }

  async function refreshUser() {
    if (!firebaseUser) return;

    const profile = await userService.getUser(
      firebaseUser.uid
    );

    setAppUser(profile);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      loadUser
    );

    return unsubscribe;
  }, []);

  const value = useMemo(
    () => ({
      firebaseUser,

      appUser,

      loading,

      login: authService.login,

      logout: authService.logout,

      refreshUser,
    }),
    [firebaseUser, appUser, loading]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}