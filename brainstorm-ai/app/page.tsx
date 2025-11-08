import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function HomePage() {
  return (
    <main className="min-h-screen w-screen bg-[#1F0438] text-white overflow-hidden">
      {/* === Enhanced Glow Effects === */}
      {/* Left Pink Glow */}
      <div
        className="absolute top-[60vh] left-[-15vw] w-[600px] h-[600px]
                   bg-[#E9395E] rounded-full blur-[50px] opacity-70 z-1"
      />
      {/* Right Yellow Glow */}
      <div
        className="absolute top-[-30vh] right-[-10vw] w-[650px] h-[650px]
                   bg-[#FAA600] rounded-full blur-[50px] opacity-80 z-1"
      />
      <Navbar />
      <Hero />
    </main>
  );
}
