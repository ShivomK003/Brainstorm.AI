"use client";
import React from "react";

export interface SignupFormState {
  page: number;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  password: string;
  confirmPassword: string;
  showPassword: boolean;
}

export interface SignupFormContextValue extends SignupFormState {
  setPage: (page: number) => void;
  setEmail: (email: string) => void;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setPhone: (phone: string) => void;
  setPassword: (password: string) => void;
  setConfirmPassword: (confirmPassword: string) => void;
  setShowPassword: (show: boolean) => void;
  nextPage: () => void;
  previousPage: () => void;
}

const SignupFormContext = React.createContext<SignupFormContextValue | undefined>(undefined);

export function useSignupForm() {
  const ctx = React.useContext(SignupFormContext);
  if (!ctx) throw new Error("useSignupForm must be used within SignupFormProvider");
  return ctx;
}

export function SignupFormProvider({ children }: { children: React.ReactNode }) {
  const [page, setPage] = React.useState(1);
  const [email, setEmail] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const nextPage = React.useCallback(() => setPage((p) => p + 1), []);
  const previousPage = React.useCallback(() => setPage((p) => p - 1), []);

  const value = React.useMemo<SignupFormContextValue>(
    () => ({
      page,
      email,
      firstName,
      lastName,
      phone,
      password,
      confirmPassword,
      showPassword,
      setPage,
      setEmail,
      setFirstName,
      setLastName,
      setPhone,
      setPassword,
      setConfirmPassword,
      setShowPassword,
      nextPage,
      previousPage,
    }),
    [page, email, firstName, lastName, phone, password, confirmPassword, showPassword, nextPage, previousPage]
  );

  return <SignupFormContext.Provider value={value}>{children}</SignupFormContext.Provider>;
}
