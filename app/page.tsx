import Image from "next/image";
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection";
export default function Home() {
  return (
    <main className="px-16">
      <HeroSection/>
      <AboutSection/>
    </main>
  );
}
