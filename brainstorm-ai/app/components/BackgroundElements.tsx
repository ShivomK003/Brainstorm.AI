import React from "react";
import Box from "@/public/components/layout/Box";

function BackgroundElements() {
  return (
    <>
      {/* Pink Circle */}
      <Box
        replace={true}
        className="absolute top-[30vh] left-[-5vw] w-[300px] h-[300px] bg-[#E9395E] rounded-full blur-[90px] opacity-90 z-1"
      />
      {/* Yellow Circle */}
      <Box
        replace={true}
        className="absolute top-[-50vh] right-[10vw] w-[479px] h-[479px] bg-[#FAA600] rounded-full blur-[50px] opacity-80 z-1"
      />
    </>
  );
}

export default BackgroundElements;
