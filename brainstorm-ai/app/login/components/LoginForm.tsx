"use client";

import Box from "@/lib/components/layout/Box";
import FormPage1 from "./FormPage1";
import FormPage2 from "./FormPage2";
import { useLoginForm } from "@/Context/LoginFormContext";

export default function LoginForm() {
  const { page } = useLoginForm();

  return (
    <main className="relative h-full w-full flex justify-center bg-transparent">
      {/* Glass Card */}
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
        {page === 1 && <FormPage1 />}
        {page === 2 && <FormPage2 />}
        {/* Glow behind card */}
        <div
          className="
          absolute w-[350px] h-[350px] 
          bg-[#E9395E] rounded-full blur-[120px] opacity-40 
          top-[20%] left-[50%] -translate-x-1/2 -z-10
        "
        />
      </Box>
    </main>
  );
}
