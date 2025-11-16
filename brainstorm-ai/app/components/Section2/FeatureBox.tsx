import React from "react";
import Box from "@/lib/components/layout/Box";
import { Heading } from "@/lib/components/text-styles/Heading";
import Image from "next/image";
import { Body } from "@/lib/components/text-styles/Body";

export interface FeatureBoxProps {
  featureImage: string;
  featureTitle: string;
  featureDescription: string;
}

function FeatureBox({ featureImage, featureTitle, featureDescription }: FeatureBoxProps) {
  return (
    <Box
      className="relative w-full h-full min-h-[260px] rounded-2xl overflow-hidden
      bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_20px_10px_rgba(0,0,0,0.35)] z-20">
      {/* subtle inner highlight/frame */}
      <Box className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 z-20" />

      <Box className="relative grid items-center gap-5 md:gap-6 lg:gap-8 h-full">
        <Box className="p-2 w-full h-full flex text-center">
          {/* Left icon (fixed size for consistency) */}
          <Box className="w-1/3 p-5 h-24 my-auto flex items-center justify-center">
            <Image
              src={featureImage}
              alt="Feature Image"
              width={96}
              height={96}
              className="object-contain drop-shadow-[0_10px_28px_rgba(250,166,0,0.55)]"
            />
          </Box>

          {/* Text content (centered within its column) */}
          <Box className="w-2/3 flex-col text-center my-auto">
            <Heading className="text-white text-[20px] md:text-[22px] lg:text-[24px] font-bold uppercase tracking-wide">
              {featureTitle}
            </Heading>
            <Body className="mt-2 md:mt-3 text-white/90 text-[16px] md:text-[18px] leading-[1.4]">
              {featureDescription}
            </Body>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default FeatureBox;
