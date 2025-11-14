"use client";

import { useState } from "react";
import Box from "@/public/components/layout/Box";
import { Heading } from "@/public/components/text-styles/Heading";
import { Body } from "@/public/components/text-styles/Body";
import Image from "next/image"; // adjust if needed

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center bg-transparent overflow-y-hidden">
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
          />
        </Box>

        {/* Password */}
        <Box className="w-full mb-6 flex flex-col">
          <label className="text-white/80 mb-1 text-sm">Password</label>
          <input
            type="password"
            className="
              w-full px-4 py-3 rounded-lg 
              bg-white/10 border border-white/20 
              text-white placeholder-white/40
              focus:outline-none focus:ring-2 focus:ring-[#E9395E]
            "
            placeholder="••••••••"
          />
        </Box>

        {/* Login button */}
        <button
          onClick={() => setLoading(true)}
          className="
            w-full py-3 rounded-lg mt-2
            bg-gradient-to-r from-[#FAA600] to-[#E9395E] 
            text-[#1F0438] font-bold tracking-wide
            hover:opacity-90 transition
            shadow-[0_10px_32px_rgba(233,57,94,0.45)]
          ">
          {loading ? "Logging in..." : "Login"}
        </button>

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
          <Image src="/assets/google.png" alt="Google" width={20} height={20} />
          Continue with Google
        </button>

        {/* Bottom text */}
        <Body className="mt-6 text-white/70 text-sm">
          Don’t have an account?{" "}
          <a href="#" className="text-[#FAA600] underline">
            Sign up
          </a>
        </Body>
      </Box>

      {/* Glow behind card */}
      <div
        className="
          absolute w-[350px] h-[350px] 
          bg-[#E9395E] rounded-full blur-[120px] opacity-40 
          top-[40%] left-[50%] -translate-x-1/2 -z-10
        "
      />
    </main>
  );
}
