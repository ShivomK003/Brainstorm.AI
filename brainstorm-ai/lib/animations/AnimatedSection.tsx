"use client";

import { motion, useAnimation, Variants, Transition } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedSectionProps {
  id?: string;
  children: React.ReactNode;
  /** "up", "down", "left", "right", or "scale" */
  direction?: "up" | "down" | "left" | "right" | "scale";
  /** Enable a slight blur reveal */
  blur?: boolean;
  /** Stagger child motion (for grids/cards) */
  stagger?: boolean;
  /** Custom delay (in seconds) */
  delay?: number;
  /** Animate again on scroll up */
  repeatOnExit?: boolean;
}

/**
 * Generic motion wrapper: fade, slide, blur, scale, stagger.
 * Works both on scroll down (enter) and scroll up (exit).
 */
export default function AnimatedSection({
  id,
  children,
  direction = "up",
  blur = false,
  stagger = false,
  delay = 0,
  repeatOnExit = true,
}: AnimatedSectionProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: !repeatOnExit });

  useEffect(() => {
    if (inView) controls.start("visible");
    else if (repeatOnExit) controls.start("hidden");
  }, [controls, inView, repeatOnExit]);

  // directional offset
  const dirOffset =
    direction === "up"
      ? { y: 60 }
      : direction === "down"
      ? { y: -60 }
      : direction === "left"
      ? { x: 60 }
      : direction === "right"
      ? { x: -60 }
      : { scale: 0.95 };

  const blurVal = blur ? "blur(10px)" : "blur(0px)";

  // typed easing and transition
  const transition: Transition = {
    duration: 0.8,
    delay,
    ease: [0.25, 0.1, 0.25, 1], // "easeOut" cubic-bezier equivalent
    ...(stagger && { staggerChildren: 0.15 }),
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...dirOffset,
      filter: blurVal,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition,
    },
  };

  return (
    <section id={id} className="relative overflow-hidden">
      <motion.div ref={ref} variants={variants} initial="hidden" animate={controls} className="will-change-transform">
        {children}
      </motion.div>
    </section>
  );
}
