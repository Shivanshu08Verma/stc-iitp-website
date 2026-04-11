import Slideshow from "@/components/Slideshow";
import ExploreButton from "@/components/ExploreButton";

const ONEITTP_IMAGES = [
  "/ONEIITP/IMG_7960.jpeg",
  "/ONEIITP/IMG_7961.jpeg",
  "/ONEIITP/IMG_7962.jpeg",
  "/ONEIITP/IMG_7963.jpeg",
  "/ONEIITP/IMG_7964.jpeg",
];

const OneIITP = () => {
  return (
    <section className="w-full min-h-screen bg-[#0a0f2c] flex items-center">
<<<<<<< Updated upstream
      <div className="w-full grid grid-cols-2">

        <div className="relative h-screen p-10">
          <Slideshow images={ONEITTP_IMAGES} />
        </div>

        <div className="flex flex-col justify-center px-16 py-20 gap-8">
          <h1 className="text-white font-extrabold text-[80px] leading-none tracking-tight">
            OneIITP
          </h1>
          <p className="text-gray-300 text-[18px] leading-relaxed max-w-[520px]">
=======
      <div className="w-full grid grid-cols-1 md:grid-cols-2">

        <div className="relative h-[60vh] md:h-screen p-4 md:p-10 order-2 md:order-1">
          <Slideshow images={ONEITTP_IMAGES} />
        </div>

        <div className="flex flex-col justify-center px-6 md:px-16 py-12 md:py-20 gap-6 md:gap-8 order-1 md:order-2">
          <h1 className="text-white font-extrabold text-5xl md:text-[80px] leading-none tracking-tight">
            OneIITP
          </h1>
          <p className="text-gray-300 text-base md:text-[18px] leading-relaxed max-w-[520px]">
>>>>>>> Stashed changes
            A unified platform connecting all IIT Patna students, faculty, and
            alumni. Access everything from course materials to campus news,
            event registrations to club activities - all in one place. OneIITP
            streamlines campus life and enhances communication across the entire
            IIT Patna community.
          </p>
          <div className="mt-4">
            <ExploreButton href="https://www.instagram.com/reel/DBZUMwEJQPi/?igsh=MW40aXBmdThzcDRydA==" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default OneIITP;