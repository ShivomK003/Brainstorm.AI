import React from "react";
import BackgroundLogin from "./components/BackgroundLogin";
import Box from "@/public/components/layout/Box";
import Navbar from "@/app/components/Navbar";
import LoginForm from "./components/LoginForm";

function page() {
  return (
    <main className="h-full bg-[#1F0438] text-white overflow-x-hidden overflow-y-hidden">
      <Box className="w-full h-full">
        <BackgroundLogin />

        <Navbar isLogin={true} />

        <LoginForm />
      </Box>
    </main>
  );
}

export default page;
