import { clubs } from "./data/clubs";
import ClubList from "@/components/clubs/ClubList";
import Image from "next/image";

export const metadata = {
  title: "STC Clubs IIT Patna",
  description:
    "Explore the technical and creative clubs under the Student Technical Council at IIT Patna.",
};

export default function ClubsPage() {
  return (
    <main className="min-h-screen bg-[#0006629] text-white">

      {/* Hero — full width, dome lives here */}
      <section className="relative overflow-hidden">
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 bg-[#123498] w-[105%]"
          style={{ height: "100%", borderRadius: "0 0 50% 50%" }}
        />

        {/* CLuBS + subtitle both inside the dome */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 pb-24 sm:pb-32 md:pb-40 text-center">
          <Image
            src="/clubs_font.png"
            alt="Clubs Hero Image"
            width={600}
            height={150}
            className="mx-auto w-[240px] sm:w-[380px] md:w-[480px] lg:w-[600px] h-auto"
            loading="eager"
          />

          {/* Subtitle inside the dome */}
          <p className="mt-4 sm:mt-6 text-white/80 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-xl mx-auto font-light leading-relaxed">
            Discover the technical and creative clubs that power innovation at{" "}
            <span className="text-white font-semibold">IIT Patna</span>
          </p>
        </div>
      </section>

      {/* Club list — starts right after the dome */}
      <section className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-16 sm:pb-24">
        <ClubList clubs={clubs} />
      </section>

    </main>
  );
}