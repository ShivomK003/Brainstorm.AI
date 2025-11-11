import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BackgroundElements from "./components/BackgroundElements";
import Features from "./components/Section2/Features";
import HowTo from "./components/Section3/HowTo";
import AboutMe from "./components/Section4/AboutMe";
import AnimatedSection from "@/lib/animations/AnimatedSection";
import Box from "@/public/components/layout/Box";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#1F0438] text-white overflow-x-hidden">
      <Box className="w-full h-full">
        <BackgroundElements />

        <Navbar />

        <AnimatedSection id="hero" direction="right">
          <Hero />
        </AnimatedSection>

        <AnimatedSection id="features" direction="left">
          <Features />
        </AnimatedSection>

        <AnimatedSection id="how-to" direction="left">
          <HowTo />
        </AnimatedSection>

        <AnimatedSection id="about-me" direction="left">
          <AboutMe />
        </AnimatedSection>
      </Box>
    </main>
  );
}
