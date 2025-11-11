import React from "react";
import Box from "@/public/components/layout/Box";
import { Heading } from "@/public/components/text-styles/Heading";
import InstructionTile from "./InstructionTile";
import Circles from "./Circles";

function HowTo() {
  const instructions = [
    {
      title: "Upload Your File",
      description: "We extract key text and topics from your documents.",
    },
    {
      title: "AI Understands & Generates",
      description: "Our models analyze the material, detect patterns, and create context-based questions.",
    },
    {
      title: "Quiz & Learn",
      description: "You receive a ready-to-use, interactive quiz with instant explanations and score tracking.",
    },
  ];
  return (
    <Box className="relative w-full h-full flex-col items-center justify-between px-6 md:px-12 lg:px-24 bg-transparent z-10 mt-20">
      <Box className="w-full">
        <Heading className="text-center text-[36px]">HOW IT WORKS?</Heading>
      </Box>
      {/* Gradient Line */}
      <Box className="w-full h-[1px] bg-gradient-to-r from-[#FAA600] to-[#E9395E] mt-5 mb-10" />
      <Box className="w-[80%] h-[300px] flex bg-white opacity-10 rounded-2xl p-10 mx-auto mb-5" />
      <Box className="w-full h-full flex justify-between gap-4 mb-40">
        {instructions.map((instruction, index) => (
          <InstructionTile key={index} title={instruction.title} description={instruction.description} />
        ))}
      </Box>
      <Circles />
    </Box>
  );
}

export default HowTo;
