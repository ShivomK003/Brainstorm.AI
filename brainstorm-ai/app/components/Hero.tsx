"use client";

import Image from "next/image";
import docToQuiz from "../../public/assets/docToQuiz.png";

export default function Hero() {
  return (
    <section className="relative w-screen min-h-[90vh] flex items-center justify-between px-24 bg-[#1F0438] overflow-hidden">
      {/* === Hero Content === */}
      <div className="relative z-10 flex flex-col max-w-xl space-y-6">
        <h1 className="text-5xl font-extrabold text-white leading-tight text-glow">
          TRANSFORM YOUR NOTES INTO QUIZZES. INSTANTLY.
        </h1>

        <p className="text-gray-200 text-lg leading-relaxed">
          Upload your study materials — PPTs, PDFs, Docs, or notes and let BrainStorm.AI instantly generate personalized
          quizzes for quick revision, classroom practice, or self-study.
        </p>

        <div className="flex space-x-5 pt-4">
          <button
            className="bg-gradient-to-r from-[#FAA600] to-[#E9395E]
                       text-white font-semibold px-6 py-3 rounded-full shadow-lg
                       hover:scale-105 transition-transform">
            GET STARTED FREE
          </button>

          <button
            className="border border-[#FAA600] text-white font-semibold
                       px-6 py-3 rounded-full hover:bg-[#FAA600]
                       hover:text-[#1F0438] transition-all">
            SEE HOW IT WORKS
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="z-10 flex-shrink-0">
        <Image
          src={docToQuiz}
          alt="Document to Quiz Illustration"
          width={420}
          height={420}
          className="object-contain drop-shadow-2xl"
        />
      </div>
    </section>
  );
}
