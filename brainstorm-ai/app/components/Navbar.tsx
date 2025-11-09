"use client";
import { Heading } from "@/public/components/text-styles/Heading";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import Box from "@/public/components/layout/Box";
import { Subheading } from "@/public/components/text-styles";

export default function Navbar() {
  return (
    <Box className="w-full h-full flex items-center justify-between px-32 pt-10 bg-[#1F0438]">
      {/* Logo */}
      <Box className="flex-col items-center space-x-3 font-roboto">
        <Image src={logo} alt="BrainStorm.AI logo" width={100} height={100} className="justify-self-center" />
        <Heading className="" style={{ textShadow: "0px 5px 10px rgba(255,255,255,0.5)" }}>
          BRAINSTORM.AI
        </Heading>
      </Box>

      {/* Nav Links */}
      <Box className="z-100">
        <Box className="flex items-center space-x-13">
          {["Features", "How it Works?", "About", "Login"].map((label, i) => (
            <Box key={i} className="relative inline-block group select-none">
              <span
                className="absolute left-0 top-0 text-transparent text-lg font-medium pointer-events-none whitespace-nowrap select-none"
                style={{ textShadow: "0px 5px 10px rgba(255,255,255,0.5)" }}>
                {label}
              </span>
              <Subheading
                as="span"
                className="
                inline-block whitespace-nowrap 
                text-white no-underline text-lg font-medium 
                transition-transform duration-200 ease-out will-change-transform 
                group-hover:-translate-y-1">
                {label}
              </Subheading>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
