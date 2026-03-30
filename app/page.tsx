import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import EventsSection from "@/components/EventsSection";
import OneIITP from "@/components/OneIITP";
export default function Home() {
  return (
    <main className="px-16">
      <HeroSection/>
      <MissionSection/>
      <EventsSection/>
      <OneIITP/>
    </main>
  );
}
