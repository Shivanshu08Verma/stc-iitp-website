import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import EventsSection from "@/components/EventsSection";
import OneIITP from "@/components/OneIITP";
import CollabNest from "@/components/CollabNest";
import Celesta from "@/components/Celesta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <div>
        <HeroSection />
        <MissionSection />
        <EventsSection />
        <OneIITP />
        <CollabNest />
        <Celesta />
      </div>
      <Footer />
    </main>
  );
}