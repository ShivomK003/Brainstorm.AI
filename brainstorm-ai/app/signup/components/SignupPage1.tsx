"use client";
import React, { useEffect } from "react";
import Box from "@/lib/components/layout/Box";
import { Heading } from "@/lib/components/text-styles/Heading";
import { Body } from "@/lib/components/text-styles/Body";
import PrimaryButton from "@/lib/components/Buttons/PrimaryButton";
import Image from "next/image";
import googleIcon from "@/public/assets/images/Google__G__logo.svg.webp";
import { useSignupForm } from "@/Context/SignupFormContext";
import { useAlert } from "@/lib/components/Alert/AlertProvider";
import DropDownTextInput from "@/lib/components/DropDownTextInput/DropDownTextInput";
import { useGetCountriesDialCodeQuery } from "@/lib/state/services/countriesDialCode";

export default function SignupPage1() {
  const { email, setEmail, firstName, setFirstName, lastName, setLastName, phone, setPhone, nextPage } =
    useSignupForm();
  const { showAlert } = useAlert();

  // Country data (extend as needed)
  const COUNTRIES = React.useMemo(
    () =>
      [
        { name: "United States", code: "US", dialCode: "+1" },
        { name: "Canada", code: "CA", dialCode: "+1" },
        { name: "United Kingdom", code: "GB", dialCode: "+44" },
        { name: "India", code: "IN", dialCode: "+91" },
        { name: "Australia", code: "AU", dialCode: "+61" },
        { name: "Germany", code: "DE", dialCode: "+49" },
        { name: "France", code: "FR", dialCode: "+33" },
        { name: "Singapore", code: "SG", dialCode: "+65" },
        { name: "Japan", code: "JP", dialCode: "+81" },
        { name: "China", code: "CN", dialCode: "+86" },
        { name: "Brazil", code: "BR", dialCode: "+55" },
        { name: "Mexico", code: "MX", dialCode: "+52" },
        { name: "South Africa", code: "ZA", dialCode: "+27" },
        { name: "Spain", code: "ES", dialCode: "+34" },
        { name: "Italy", code: "IT", dialCode: "+39" },
        { name: "Netherlands", code: "NL", dialCode: "+31" },
        { name: "Sweden", code: "SE", dialCode: "+46" },
        { name: "Norway", code: "NO", dialCode: "+47" },
        { name: "Denmark", code: "DK", dialCode: "+45" },
        { name: "Ireland", code: "IE", dialCode: "+353" },
        { name: "New Zealand", code: "NZ", dialCode: "+64" },
        { name: "United Arab Emirates", code: "AE", dialCode: "+971" },
      ] as Array<{ name: string; code: string; dialCode: string }>,
    []
  );

  const {
    data: countriesDialCode,
    isLoading: isLoadingCountriesDialCode,
    error: errorCountriesDialCode,
  } = useGetCountriesDialCodeQuery({ name: "" });

  useEffect(() => {
    console.log({ countriesDialCode, isLoadingCountriesDialCode, errorCountriesDialCode });
  }, [countriesDialCode, isLoadingCountriesDialCode, errorCountriesDialCode]);

  // Derive initial dial code and national number from the stored phone (if present)
  const initialDialMatch = React.useMemo(() => /^\+[\d]+/.exec(phone || ""), [phone]);
  const [dialCode, setDialCode] = React.useState<string>(initialDialMatch ? initialDialMatch[0] : "+1");
  const [nationalNumber, setNationalNumber] = React.useState<string>((phone || "").replace(/^\+[\d]+\s*/, ""));
  const [countryOpen, setCountryOpen] = React.useState(false);
  const [countryQuery, setCountryQuery] = React.useState("");

  // Keep context phone up to date as a combined value
  React.useEffect(() => {
    const combined = `${dialCode} ${nationalNumber}`.trim();
    setPhone(combined);
  }, [dialCode, nationalNumber, setPhone]);

  const isEmailValid = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPhoneValid = (value: string) => /^[0-9+\-() ]{7,20}$/.test(value.trim());

  const handleNext = () => {
    if (!firstName || !lastName) {
      showAlert({ title: "Missing name", description: "Enter first and last name.", variant: "error" });
      return;
    }
    if (!isEmailValid(email)) {
      showAlert({ title: "Invalid email", description: "Enter a valid email.", variant: "error" });
      return;
    }
    if (!isPhoneValid(phone)) {
      showAlert({ title: "Invalid phone", description: "Enter a valid phone number.", variant: "error" });
      return;
    }
    nextPage();
  };

  return (
    <Box className="w-full h-full flex flex-col items-center justify-center">
      <Heading className="text-[32px] mb-2 tracking-wide">Create your account</Heading>
      <Body className="text-white/80 mb-8 text-center">Sign up to start using BrainStorm.AI</Body>

      <Box className="w-full grid grid-cols-1 gap-4">
        <Box className="flex flex-col">
          <label className="text-white/80 mb-1 text-sm">First name</label>
          <input
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#FAA600]"
            placeholder="Jane"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Box>
        <Box className="flex flex-col">
          <label className="text-white/80 mb-1 text-sm">Last name</label>
          <input
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#FAA600]"
            placeholder="Doe"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Box>
        <Box className="flex flex-col">
          <label className="text-white/80 mb-1 text-sm">Email</label>
          <input
            type="email"
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#FAA600]"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box className="flex flex-col">
          <label className="text-white/80 mb-1 text-sm">Phone</label>
          <Box className="relative">
            <Box className="flex w-full">
              <button
                type="button"
                onClick={() => setCountryOpen((v) => !v)}
                className="px-3 rounded-l-lg bg-white/10 border border-white/20 text-white text-sm hover:bg-white/20 transition-colors">
                {dialCode}
              </button>
              <input
                type="tel"
                className="flex-1 px-4 py-3 rounded-r-lg bg-white/10 border border-white/20 border-l-0 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#FAA600]"
                placeholder="555 123 4567"
                value={nationalNumber}
                onChange={(e) => setNationalNumber(e.target.value)}
              />
            </Box>

            {countryOpen && (
              <DropDownTextInput
                searchValue={countryQuery}
                setSearchValue={setCountryQuery}
                setDropDownOpen={setCountryOpen}
                items={countriesDialCode?.data?.map((country) => ({
                  key: country.code,
                  value: country.name,
                  subvalue: country.callingCode,
                }))}
                setSelectedItem={(value) => setDialCode(value)}
                saveBy="subvalue"
              />
            )}
          </Box>
        </Box>
      </Box>

      <PrimaryButton buttonText="Next" className="w-full mt-4" onClick={handleNext} />

      <Box className="w-full flex items-center my-6">
        <div className="flex-grow h-[1px] bg-white/20" />
        <span className="text-white/50 text-sm mx-3">OR</span>
        <div className="flex-grow h-[1px] bg-white/20" />
      </Box>

      <button
        className="
          w-full py-3 rounded-lg 
          bg-white/90 text-[#1F0438] 
          font-medium flex items-center justify-center gap-2 
          hover:bg-white transition
        ">
        <Image src={googleIcon} alt="Google" width={20} height={20} />
        Continue with Google
      </button>

      <Body className="mt-6 text-white/70 text-sm">
        Already have an account?{" "}
        <a href="/login" className="text-[#FAA600] underline">
          Login
        </a>
      </Body>
    </Box>
  );
}
