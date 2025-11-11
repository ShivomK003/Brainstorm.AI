import React from "react";
import Box from "@/public/components/layout/Box";

function BackgroundElements() {
  return (
    <Box className="relative w-full h-full z-0">
      {/* Pink Circle */}
      <Box
        replace={true}
        className="absolute top-[30vh] left-[-15vw] w-[300px] h-[300px] bg-[#E9395E] rounded-full blur-[90px] opacity-90 z-0"
      />
      {/* Yellow Circle */}
      <Box
        replace={true}
        className="absolute top-[-45vh] right-[1vw] w-[500px] h-[500px] bg-[#FAA600] rounded-full blur-[50px] opacity-80 z-0"
      />

      <Box className="pointer-events-none absolute inset-0 z-10 blur-[40px] z-0">
        {/* Top-left orange triangle sweep */}
        <Box
          className="absolute left-[-12vw] top-[850px] w-[85vw] h-[26vw] z-0"
          style={{
            clipPath: "polygon(0% 0%, 100% 60%, 0% 60%)",
            background:
              "linear-gradient(90deg, rgba(250,166,0,0.9) 0%, rgba(250,166,0,0.65) 50%, rgba(250,166,0,0.35) 100%)",
            filter: "drop-shadow(0px 12px 28px rgba(250,166,0,0.35))",
          }}
        />
        {/* Bottom-right pink triangle sweep */}
        <Box
          className="absolute right-[-15vw] top-[170vh] w-[95vw] h-[28vw] z-0"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 80%)",
            background:
              "linear-gradient(90deg, rgba(233,57,94,0.25) 0%, rgba(233,57,94,0.65) 55%, rgba(233,57,94,0.9) 100%)",
            filter: "drop-shadow(0px 14px 32px rgba(233,57,94,0.35))",
          }}
        />
      </Box>

      {/* Pink Circle */}
      <Box
        replace={true}
        className="absolute top-[200vh] left-[-15vw] w-[300px] h-[300px] bg-[#E9395E] rounded-full blur-[90px] opacity-90 z-0"
      />
      {/* Yellow Circle */}
      <Box
        replace={true}
        className="absolute top-[280vh] right-[-20vw] w-[500px] h-[500px] bg-[#FAA600] rounded-full blur-[50px] opacity-50 z-0"
      />

      {/* Radial gradient glow behind avatar */}
      <Box
        className="pointer-events-none absolute -z-10 top-[2350px] justify-self-center w-[700px] h-[700px] rounded-full blur-[120px] z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(250,166,0,0.35) 0%, rgba(233,57,94,0.28) 55%, rgba(31,4,56,0) 70%)",
        }}
      />
    </Box>
  );
}

export default BackgroundElements;
