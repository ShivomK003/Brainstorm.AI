"use client";
import React from "react";
import Box from "@/lib/components/layout/Box";
import { Heading } from "@/lib/components/text-styles/Heading";
import { Body } from "@/lib/components/text-styles/Body";
import PrimaryButton from "@/lib/components/Buttons/PrimaryButton";
import { ArrowLeftIcon, EyeIcon, EyeOffIcon } from "lucide-react";
import { useSignupForm } from "@/Context/SignupFormContext";
import { useAlert } from "@/lib/components/Alert/AlertProvider";

export default function SignupPage2() {
  const {
    email,
    firstName,
    lastName,
    phone,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    showPassword,
    setShowPassword,
    previousPage,
  } = useSignupForm();
  const { showAlert } = useAlert();

  const isPasswordValid = (pwd: string) => {
    const hasMinLength = pwd.length > 8;
    const hasLowercase = /[a-z]/.test(pwd);
    const hasUppercase = /[A-Z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    const hasSymbol = /[^A-Za-z0-9]/.test(pwd);
    return hasMinLength && hasLowercase && hasUppercase && hasNumber && hasSymbol;
  };

  const handlePrevious = () => previousPage();
  const handleCreateAccount = () => {
    if (!isPasswordValid(password)) {
      showAlert({
        title: "Invalid password",
        description: "Use >8 chars with at least one lowercase, uppercase, number, and symbol.",
        variant: "error",
      });
      return;
    }
    if (password !== confirmPassword) {
      showAlert({
        title: "Passwords do not match",
        description: "Please enter the same password in both fields.",
        variant: "error",
      });
      return;
    }
    // Submit — integrate with backend here
    showAlert({
      title: "Account created",
      description: `Welcome, ${firstName}!`,
      variant: "success",
    });
  };

  return (
    <Box className="w-full h-full flex flex-col justify-center">
      <Box className="w-full h-full flex items-center">
        <button
          className="w-full flex items-center justify-start text-[#FAA600] mb-1 text-sm "
          onClick={handlePrevious}>
          {<ArrowLeftIcon className="w-4 h-4 mr-1" />} Back
        </button>
      </Box>

      <Box className="w-full h-full mt-2 flex flex-col justify-center">
        <Heading className="text-[32px] mb-2 tracking-wide">Set your password</Heading>
        <Body className="text-white/80">
          {firstName} {lastName}
        </Body>
        <Body className="text-white/80">{email}</Body>
        <Body className="text-white/80 mb-3">{phone}</Body>
      </Box>

      <Box className="w-full mb-6 flex flex-col">
        <label className="text-white/80 mb-1 text-sm">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            className="
              w-full px-4 py-3 pr-10 rounded-lg 
              bg-white/10 border border-white/20 
              text-white placeholder-white/40
              focus:outline-none focus:ring-2 focus:ring-[#E9395E]
            "
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center justify-center text-white/80 hover:text-white transition-colors">
            {showPassword ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
          </button>
        </div>
      </Box>

      <Box className="w-full mb-6 flex flex-col">
        <label className="text-white/80 mb-1 text-sm">Confirm Password</label>
        <input
          type="password"
          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#E9395E]"
          placeholder="••••••••"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Box>

      <PrimaryButton buttonText="Create account" className="w-full" onClick={handleCreateAccount} />
    </Box>
  );
}
