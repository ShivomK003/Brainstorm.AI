import React from "react";
import Box from "@/public/components/layout/Box";
import { Heading } from "@/public/components/text-styles/Heading";
import Image from "next/image";
import shivomImage from "../../../public/assets/shivomImage.jpg";
import Bio from "./Bio";
import AnimatedSection from "@/lib/animations/AnimatedSection";

function AboutMe() {
  return (
    <Box
      id="about-me"
      className="relative w-full h-full flex-col items-center justify-between px-6 md:px-12 lg:px-24 bg-transparent z-20 mt-20">
      <Box className="w-full">
        <Heading className="text-center text-[36px]">ABOUT ME</Heading>
      </Box>
      {/* Gradient Line */}
      <Box className="w-full h-[1px] bg-gradient-to-r from-[#FAA600] to-[#E9395E] mt-5 mb-10" />
      <AnimatedSection direction="right" stagger={true}>
        <Box className="relative w-full flex flex-col items-center mb-40">
          {/* Avatar */}
          <Box className="relative w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] rounded-full overflow-hidden ring-4 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <Image src={shivomImage} alt="Profile" fill className="object-cover" />
          </Box>

          {/* Name */}
          <Heading className="mt-8 text-center text-[24px] md:text-[28px] tracking-wide">SHIVOM KARNAD</Heading>

          <Bio />
        </Box>
      </AnimatedSection>
    </Box>
  );
}

export default AboutMe;
