import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BackgroundElements from "./components/BackgroundElements";
import Section2 from "./components/Section2/Section2";

export default function HomePage() {
  return (
    <main className="min-h-screen w-[80%] bg-[#1F0438] text-white mx-auto">
      <BackgroundElements />
      <Navbar />
      <Hero />
      <Section2 />
    </main>
  );
}
