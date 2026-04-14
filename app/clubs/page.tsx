import { clubs } from "./data/clubs";
import ClubList from "@/components/clubs/ClubList";
import Image from "next/image";

export const metadata = {
  title: "Clubs — STC IIT Patna",
  description:
    "Explore the technical and creative clubs under the Student Technical Council at IIT Patna.",
};

export default function ClubsPage() {
  return (
    <main className="min-h-screen bg-[#070c22] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-[#0a1035] to-[#070c22] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] sm:w-[600px] h-[300px] sm:h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-14 md:pb-16 text-center">
          <Image
            src="/clubs_font.png"
            alt="Clubs Hero Image"
            width={600}
            height={150}
            className="mx-auto mb-4 sm:mb-6 w-[240px] sm:w-[380px] md:w-[480px] lg:w-[600px] h-auto"
            loading="eager"
          />

          <p className="mt-2 sm:mt-4 text-blue-200/70 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-xl mx-auto font-light text-center leading-relaxed">
            Discover the technical and creative clubs that power innovation at{" "}
            <span className="text-blue-400 font-medium">IIT Patna</span>
          </p>
        </div>
      </section>

      {/* Club list */}
      <section className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <ClubList clubs={clubs} />
      </section>
    </main>
  );
}