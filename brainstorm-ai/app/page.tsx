import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Circles from "./components/Circles";
import Features from "./components/Section2/Features";
import HowTo from "./components/Section3/HowTo";
import AboutMe from "./components/Section4/AboutMe";

export default function HomePage() {
  return (
    <main className="min-h-screen w-[80%] bg-[#1F0438] text-white mx-auto">
      <Circles />
      <Navbar />
      <Hero />
      <Features />
      <HowTo />
      <AboutMe />
    </main>
  );
}
