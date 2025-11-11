import React from "react";
import Box from "@/public/components/layout/Box";
import { Heading } from "@/public/components/text-styles/Heading";
import Image from "next/image";
import shivomImage from "../../../public/assets/shivomImage.jpg";
import { Body } from "@/public/components/text-styles";

function AboutMe() {
  return (
    <Box className="relative w-full h-full flex-col items-center justify-between px-6 md:px-12 lg:px-24 bg-transparent z-10 mt-20">
      <Box className="w-full">
        <Heading className="text-center text-[36px]">ABOUT ME</Heading>
      </Box>
      {/* Gradient Line */}
      <Box className="w-full h-[1px] bg-gradient-to-r from-[#FAA600] to-[#E9395E] mt-5 mb-10" />
      <Box className="relative w-full flex flex-col items-center mb-40">
        {/* Radial gradient glow behind avatar */}
        <Box
          className="pointer-events-none absolute -z-10 top-[-80px] w-[700px] h-[700px] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, rgba(250,166,0,0.35) 0%, rgba(233,57,94,0.28) 55%, rgba(31,4,56,0) 70%)",
          }}
        />

        {/* Avatar */}
        <Box className="relative w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] rounded-full overflow-hidden ring-4 ring-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
          <Image src={shivomImage} alt="Profile" fill className="object-cover" />
        </Box>

        {/* Name */}
        <Heading className="mt-8 text-center text-[24px] md:text-[28px] tracking-wide">SHIVOM KARNAD</Heading>

        {/* Bio */}
        <Box className="mt-6 max-w-3xl text-center text-white/90 leading-relaxed space-y-4">
          <Body>
            Aspiring student pursuing his Master of Data Science and Innovation at University of Technology, Sydney.
            Keenly interested in modern LLMs and the latest advancements in software development, machine learning, and
            data science.
          </Body>
          <Body>
            This project reflects those interests—combining skills for web development in React with a fascination for
            AI. The goal is to ease and automate the tedious process of quiz generation and evaluation.
          </Body>
        </Box>

        {/* Contact */}
        <Box className="mt-8 text-center text-white/80 space-y-2">
          <Body>Reach out to me at:</Body>
          <Body>
            Email:{" "}
            <a
              href="mailto:shivomkarnad@gmail.com"
              className="underline decoration-[#FAA600] decoration-2 underline-offset-4 hover:text-[#FAA600]">
              shivomkarnad@gmail.com
            </a>
          </Body>
          <Body>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/shivom-karnad/"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-[#E9395E] decoration-2 underline-offset-4 hover:text-[#E9395E]">
              linkedin.com/in/shivom--karnad/
            </a>
          </Body>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutMe;
