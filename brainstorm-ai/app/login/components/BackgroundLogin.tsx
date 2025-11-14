import React from "react";
import Box from "@/public/components/layout/Box";

function BackgroundLogin() {
  return (
    <Box className="absolute w-full h-screen z-0">
      {/* Pink Circle */}
      <Box
        replace={true}
        className="absolute top-[50vh] left-[-10vw] w-[500px] h-[500px] bg-[#E9395E] rounded-full blur-[90px] opacity-90 z-0"
      />
      {/* Yellow Circle */}
      <Box
        replace={true}
        className="absolute top-[-30vh] right-[-10vw] w-[500px] h-[500px] bg-[#FAA600] rounded-full blur-[50px] opacity-80 z-0"
      />
    </Box>
  );
}

export default BackgroundLogin;
