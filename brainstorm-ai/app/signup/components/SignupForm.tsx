"use client";
import React from "react";
import SignupPage1 from "./SignupPage1";
import SignupPage2 from "./SignupPage2";
import Box from "@/lib/components/layout/Box";
import { useSignupForm } from "@/Context/SignupFormContext";

function SignupForm() {
  const { page } = useSignupForm();
  return (
    <Box className="relative z-10 w-full flex items-center justify-center mb-20">
      <Box
        className="
                relative z-10 w-[90%] sm:w-[450px] 
                p-10 rounded-2xl 
                bg-white/10 backdrop-blur-xl 
                border border-white/20 
                shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                flex flex-col items-center
                animate-fade-in
              ">
        {page === 1 && <SignupPage1 />}
        {page === 2 && <SignupPage2 />}
        <div
          className="
                  absolute w-[350px] h-[350px] 
                  bg-[#E9395E] rounded-full blur-[120px] opacity-40 
                  top-[40%] left-[50%] -translate-x-1/2 -z-10
                "
        />
      </Box>
    </Box>
  );
}

export default SignupForm;
