"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

import neural from "../../../public/assets/how/neural.png";
import doc from "../../../public/assets/how/doc.png";
import cardPink from "../../../public/assets/how/card-pink.png";
import cardWhite from "../../../public/assets/how/card-white.png";
import cardYellow from "../../../public/assets/how/card-yellow.png";
import brain from "../../../public/assets/how/brain.png";

export default function AnimatedSequence() {
  const docControls = useAnimation();
  const brainControls = useAnimation();
  const swirlControls = useAnimation();
  const cardControls = useAnimation();

  // 🔥 NEW: container ref
  const ref = useRef(null);

  // 🔥 NEW: detect when visible
  const inView = useInView(ref, {
    amount: 0.3, // trigger when 30% visible
    once: true, // run only once
  });

  useEffect(() => {
    if (!inView) return; // 🔥 only start when visible

    async function sequence() {
      // === STEP 1: Document floats in ===
      await docControls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });

      await docControls.start({
        opacity: 1,
        x: -450,
        scale: 0.9,
        transition: { duration: 0.8, ease: "easeOut" },
      });

      await brainControls.start({
        opacity: 1,
        scale: 2,
        transition: { duration: 0.8, ease: "easeOut" },
      });

      // === STEP 2: Swirl grows + glows ===
      swirlControls.start({
        opacity: 0.5,
        scale: [0.7, 1.1, 1],
        rotate: [0, 10, -5, 0],
        transition: {
          duration: 1.2,
          ease: "easeOut",
        },
      });

      // === STEP 3: Cards burst outward ===
      cardControls.start((i) => ({
        opacity: 1,
        scale: 0.8,
        x: [0, [360, 460, 540][i]],
        y: [0, [0, -40, 0][i]],
        rotate: [0, [-12, 6, 12][i]],
        transition: {
          duration: 0.7,
          delay: i * 0.15,
          ease: "easeOut",
        },
      }));
    }

    sequence();
  }, [inView]); // 🔥 dependency

  return (
    <div
      ref={ref} // 🔥 attach visibility observer
      className="relative w-full h-[380px] flex items-center justify-center mt-10">
      {/* === Neural Swirl === */}
      <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={swirlControls} className="absolute z-10">
        <Image src={neural} alt="Neural Swirl" width={380} height={380} />
      </motion.div>

      {/* === Document === */}
      <motion.div initial={{ opacity: 0, y: 70, scale: 0.9 }} animate={docControls} className="absolute z-20">
        <Image src={doc} alt="Document" width={180} height={180} />
      </motion.div>

      {/* === Brain === */}
      <motion.div initial={{ opacity: 0, y: 0, scale: 4 }} animate={brainControls} className="absolute z-20">
        <Image src={brain} alt="Brain" width={180} height={180} />
      </motion.div>

      {/* === Quiz Cards (3) === */}
      {[cardPink, cardWhite, cardYellow].map((src, i) => (
        <motion.div
          key={i}
          custom={i}
          initial={{ opacity: 0, scale: 0, x: 400 }}
          animate={cardControls}
          className="absolute z-30">
          <Image src={src} alt="Quiz Card" width={150} height={150} />
        </motion.div>
      ))}
    </div>
  );
}
