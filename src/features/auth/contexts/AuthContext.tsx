import {
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import type { User } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "@/lib/firebase";

import { authService } from "../services/auth.service";
import type { AuthContextType } from "../types/auth.types";

export const AuthContext = createContext<AuthContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export function AuthProvider({ children }: Props) {
      console.log("✅ AuthProvider Rendered");
  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = useMemo(
    () => ({
      user,

      loading,

      login: authService.login,

      logout: authService.logout,
    }),
    [user, loading]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}