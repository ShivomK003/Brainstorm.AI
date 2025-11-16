"use client";
import React from "react";
import BackgroundLogin from "../login/components/BackgroundLogin";
import Box from "@/lib/components/layout/Box";
import Navbar from "@/app/components/Navbar";
import { SignupFormProvider } from "@/Context/SignupFormContext";
import SignupForm from "./components/SignupForm";

function page() {
  return (
    <main className="h-full bg-[#1F0438] text-white overflow-x-hidden overflow-y-hidden">
      <Box className="w-full h-full">
        <SignupFormProvider>
          <BackgroundLogin />
          <Navbar />
          <SignupForm />
        </SignupFormProvider>
      </Box>
    </main>
  );
}

export default page;
