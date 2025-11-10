import React from "react";
import Box from "@/public/components/layout/Box";

export default function Triangles() {
  return (
    <Box className="pointer-events-none absolute inset-0 z-1  blur-[60px]">
      {/* Top-left orange triangle sweep */}
      <Box
        className="absolute left-[-12vw] top-[100px] w-[85vw] h-[26vw] opacity-100 "
        style={{
          clipPath: "polygon(0% 0%, 100% 60%, 0% 60%)",
          background:
            "linear-gradient(90deg, rgba(250,166,0,0.9) 0%, rgba(250,166,0,0.65) 50%, rgba(250,166,0,0.35) 100%)",
          filter: "drop-shadow(0px 12px 28px rgba(250,166,0,0.35))",
        }}
      />

      {/* Bottom-right pink triangle sweep */}
      <Box
        className="absolute right-[-15vw] bottom-[-30vh] w-[95vw] h-[28vw] opacity-100"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 80%)",
          background:
            "linear-gradient(90deg, rgba(233,57,94,0.25) 0%, rgba(233,57,94,0.65) 55%, rgba(233,57,94,0.9) 100%)",
          filter: "drop-shadow(0px 14px 32px rgba(233,57,94,0.35))",
        }}
      />
    </Box>
  );
}
