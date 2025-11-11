import React from "react";
import Box from "@/public/components/layout/Box";

function Circles() {
  return (
    <>
      {/* Pink Circle */}
      <Box
        replace={true}
        className="absolute top-[0vh] left-[-15vw] w-[300px] h-[300px] bg-[#E9395E] rounded-full blur-[90px] opacity-90 z-1"
      />
      {/* Yellow Circle */}
      <Box
        replace={true}
        className="absolute top-[60vh] right-[-20vw] w-[500px] h-[500px] bg-[#FAA600] rounded-full blur-[50px] opacity-80 z-1"
      />
    </>
  );
}

export default Circles;
