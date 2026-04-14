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
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-[#0a1035] to-[#070c22] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
          {/* <h1
            className="font-black text-[clamp(4rem,12vw,9rem)] leading-none tracking-tight uppercase select-none"
            style={{
              background: "linear-gradient(135deg, #ffffff 30%, #3b82f6 70%, #1e40af 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            CLüBS
          </h1> */}
          <Image
            src="/clubs_font.png"
            alt="Clubs Hero Image"
            width={600}
            height={150}
            className="mx-auto mb-6"
            loading="eager"
          />  

          <p className="mt-4 text-blue-200/70 text-base md:text-lg max-w-xl mx-auto font-light text-center">
             Discover the technical and creative clubs that power innovation at
             <span className="text-blue-400 font-medium"> IIT Patna</span>
           </p>

          {/* Stats bar */}
          {/* <div className="mt-8 inline-flex items-center gap-6 px-6 py-3 rounded-full bg-blue-900/20 border border-blue-500/20 text-sm text-blue-300">
            <span>
              <strong className="text-white text-base">{clubs.length}</strong> Clubs
            </span>
            <span className="w-px h-4 bg-blue-500/30" />
            <span>
              <strong className="text-white text-base">
                {clubs.reduce((acc, c) => acc + c.photos.length, 0)}
              </strong>{" "}
              Photos
            </span>
          </div> */}
        </div>
          {/* --------------------------------------------------------------- */}

{/* --------------------------------------------------------------- */}
      </section>

      {/* Club list */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <ClubList clubs={clubs} />
      </section>
    </main>
  );
}
