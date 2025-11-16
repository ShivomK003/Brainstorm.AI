import React from "react";
import Box from "@/lib/components/layout/Box";
import { Heading } from "@/lib/components/text-styles/Heading";
import { Body } from "@/lib/components/text-styles/Body";
import PrimaryButton from "@/lib/components/Buttons/PrimaryButton";
import Image from "next/image";
import googleIcon from "@/public/assets/images/Google__G__logo.svg.webp";
import { useLoginForm } from "@/Context/LoginFormContext";
import { useAlert } from "@/lib/components/Alert/AlertProvider";

function FormPage1() {
  const { email, setEmail, nextPage } = useLoginForm();
  const { showAlert } = useAlert();

  const isEmailValid = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleNext = () => {
    if (isEmailValid(email)) {
      nextPage();
    } else {
      showAlert({
        title: "Invalid email",
        description: "Please enter a valid email",
        variant: "error",
      });
    }
  };
  return (
    <>
      <Box className="w-full h-full flex flex-col items-center justify-center">
        <Heading className="text-[32px] mb-2 tracking-wide">Welcome Back</Heading>
        <Body className="text-white/80 mb-8 text-center">Login to continue to BrainStorm.AI</Body>

        {/* Email */}
        <Box className="w-full mb-4 flex flex-col">
          <label className="text-white/80 mb-1 text-sm">Email</label>
          <input
            type="email"
            className="
              w-full px-4 py-3 rounded-lg 
              bg-white/10 border border-white/20 
              text-white placeholder-white/40 
              focus:outline-none focus:ring-2 focus:ring-[#FAA600]
            "
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>

        <PrimaryButton buttonText="Next" className="w-full" onClick={handleNext} />

        {/* Divider */}
        <Box className="w-full flex items-center my-6">
          <div className="flex-grow h-[1px] bg-white/20" />
          <span className="text-white/50 text-sm mx-3">OR</span>
          <div className="flex-grow h-[1px] bg-white/20" />
        </Box>

        {/* Google Button */}
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

        {/* Bottom text */}
        <Body className="mt-6 text-white/70 text-sm">
          Don’t have an account?{" "}
          <a href="/signup" className="text-[#FAA600] underline">
            Sign up
          </a>
        </Body>
      </Box>
    </>
  );
}

export default FormPage1;
