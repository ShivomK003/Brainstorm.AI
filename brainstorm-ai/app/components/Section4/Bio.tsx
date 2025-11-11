import React from "react";
import Box from "@/public/components/layout/Box";
import { Body } from "@/public/components/text-styles";

function Bio() {
  return (
    <>
      {/* Bio */}
      <Box className="mt-6 max-w-3xl text-center text-white/90 leading-relaxed space-y-4">
        <Body>
          Aspiring student pursuing his Master of Data Science and Innovation at University of Technology, Sydney.
          Keenly interested in modern LLMs and the latest advancements in software development, machine learning, and
          data science.
        </Body>
        <Body>
          This project reflects those interests—combining skills for web development in React with a fascination for AI.
          The goal is to ease and automate the tedious process of quiz generation and evaluation.
        </Body>
      </Box>

      {/* Contact */}
      <Box className="mt-8 text-center text-white/80 space-y-2">
        <Body>Reach out to me at:</Body>
        <Body>
          Email:{" "}
          <a
            href="mailto:shivomkarnad@gmail.com"
            className="underline decoration-[#FAA600] decoration-2 underline-offset-4 hover:text-[#FAA600]">
            shivomkarnad@gmail.com
          </a>
        </Body>
        <Body>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/shivom-karnad/"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-[#E9395E] decoration-2 underline-offset-4 hover:text-[#E9395E]">
            linkedin.com/in/shivom--karnad/
          </a>
        </Body>
      </Box>
    </>
  );
}

export default Bio;
