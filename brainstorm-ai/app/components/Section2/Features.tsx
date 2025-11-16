import React from "react";
import { Heading } from "@/lib/components/text-styles/Heading";
import Box from "@/lib/components/layout/Box";
import FeatureBox from "./FeatureBox";
import feature1 from "../../../public/assets/images/feature1.png";
import feature2 from "../../../public/assets/images/feature2.png";
import feature3 from "../../../public/assets/images/feature3.png";
import feature4 from "../../../public/assets/images/feature4.png";
import AnimatedSection from "@/lib/animations/AnimatedSection";

function Features() {
  const features = [
    {
      image: feature1,
      title: "AI-Powered quiz generation",
      description: "Upload any document  PPT, PDF, Word, or CSV  and let AI create meaningful questions in seconds.",
    },
    {
      image: feature2,
      title: "Fully customizable",
      description: "Choose difficulty, number of questions, and time limits tailored to your needs.",
    },
    {
      image: feature3,
      title: "For students and Educators",
      description: "Students get instant feedback. Teachers manage quizzes, track progress, and save time.",
    },
    {
      image: feature4,
      title: "Context-Aware Explanations",
      description: "AI not only grades your answers but also explains mistakes with personalized insights.",
    },
  ];
  return (
    <Box
      id="features"
      className="relative w-full h-full flex-col items-center justify-between px-6 md:px-12 lg:px-24 bg-transparent z-20">
      <Box className="w-full">
        <Heading className="text-center text-[36px]">WHY BRAINSTORM.AI?</Heading>
      </Box>
      {/* Gradient Line */}
      <Box className="w-full h-[1px] bg-gradient-to-r from-[#FAA600] to-[#E9395E] mt-5" />
      <AnimatedSection direction="right" stagger={true}>
        <Box className="relative z-[1] w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-4 mt-6 mb-40 auto-rows-fr items-stretch z-20">
          {features.map((feature, index) => (
            <Box key={index} className="h-full">
              <FeatureBox
                featureImage={feature.image.src}
                featureTitle={feature.title}
                featureDescription={feature.description}
              />
            </Box>
          ))}
        </Box>
      </AnimatedSection>
    </Box>
  );
}

export default Features;
