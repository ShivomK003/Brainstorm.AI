"use client";
import React from "react";

export interface LoginFormState {
  email: string;
  page: number;
  password: string;
  confirmPassword: string;
  showPassword: boolean;
}

export interface LoginFormContextValue extends LoginFormState {
  setEmail: (email: string) => void;
  setPage: (page: number) => void;
  setPassword: (password: string) => void;
  setConfirmPassword: (confirmPassword: string) => void;
  setShowPassword: (show: boolean) => void;
  nextPage: () => void;
  previousPage: () => void;
}

const LoginFormContext = React.createContext<LoginFormContextValue | undefined>(undefined);

export function useLoginForm() {
  const ctx = React.useContext(LoginFormContext);
  if (!ctx) {
    throw new Error("useLoginForm must be used within a LoginFormProvider");
  }
  return ctx;
}

export function LoginFormProvider({ children }: { children: React.ReactNode }) {
  const [email, setEmail] = React.useState<string>("");
  const [page, setPage] = React.useState<number>(1);
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const nextPage = React.useCallback(() => setPage((p) => p + 1), []);
  const previousPage = React.useCallback(() => setPage((p) => p - 1), []);

  const value = React.useMemo<LoginFormContextValue>(
    () => ({
      email,
      page,
      password,
      confirmPassword,
      showPassword,
      setEmail,
      setPage,
      setPassword,
      setConfirmPassword,
      setShowPassword,
      nextPage,
      previousPage,
    }),
    [email, page, password, confirmPassword, showPassword, nextPage, previousPage]
  );

  return <LoginFormContext.Provider value={value}>{children}</LoginFormContext.Provider>;
}
