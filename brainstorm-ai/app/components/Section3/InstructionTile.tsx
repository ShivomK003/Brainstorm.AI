import React from "react";
import Box from "@/lib/components/layout/Box";
import { Body, Subheading } from "@/lib/components/text-styles";

export interface InstructionTileProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
}

function InstructionTile({ title, description }: InstructionTileProps) {
  return (
    <Box
      className="relative w-1/3 min-h-[200px] rounded-2xl overflow-hidden flex-col items-center justify-center
      bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_20px_10px_rgba(0,0,0,0.35)] z-10">
      <Box className="w-full h-1/2 flex flex-col items-center justify-center p-2">
        <Subheading className="text-center pt-10 pb-2">{title.toUpperCase()}</Subheading>
      </Box>
      <Box className="w-full h-1/2 flex-col p-2">
        <Body className="text-center">{description}</Body>
      </Box>
    </Box>
  );
}

export default InstructionTile;
