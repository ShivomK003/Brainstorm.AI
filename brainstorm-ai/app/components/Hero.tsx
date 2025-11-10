"use client";

import Image from "next/image";
import docToQuiz from "../../public/assets/docToQuiz.png";
import Box from "@/public/components/layout/Box";
import Heading from "@/public/components/text-styles/Heading";
import Body from "@/public/components/text-styles/Body";
import PrimaryButton from "@/public/components/Buttons/PrimaryButton";
import SecondaryButton from "@/public/components/Buttons/SecondaryButton";

export default function Hero() {
  return (
    <Box className="relative w-full min-h-[90vh] flex items-center justify-between px-24 -mt-10 bg-transparent overflow-hidden">
      {/* === Hero Content === */}
      <Box className="relative z-10 flex flex-col max-w-xl space-y-6 -mt-10">
        <Heading
          className="text-5xl font-extrabold text-white leading-tight"
          style={{ textShadow: "0 10px 24px rgba(0, 0, 0, 0.55)" }}>
          TRANSFORM YOUR NOTES INTO QUIZZES. INSTANTLY.
        </Heading>

        <Body className="text-gray-200 text-lg leading-relaxed -mt-4">
          Upload your study materials — PPTs, PDFs, Docs, or notes and let BrainStorm.AI instantly generate personalized
          quizzes for quick revision, classroom practice, or self-study.
        </Body>

        <Box className="flex space-x-5 pt-4">
          <PrimaryButton buttonText="GET STARTED FREE" />
          <SecondaryButton buttonText="SEE HOW IT WORKS" />
        </Box>
      </Box>

      {/* Right Image */}
      <Box className="z-10 flex-shrink-0">
        <Image
          src={docToQuiz}
          alt="Document to Quiz Illustration"
          width={420}
          height={420}
          className="object-contain drop-shadow-2xl"
        />
      </Box>
    </Box>
  );
}
