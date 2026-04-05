import Slideshow from "@/components/Slideshow";
import ExploreButton from "@/components/ExploreButton";

const COLLABNEST_IMAGES = [
  "/COLLABNEST/IMG-1.png",
  "/COLLABNEST/IMG-2.png",
  "/COLLABNEST/IMG-3.png",
];

const CollabNest = () => {
  return (
    <section className="w-full min-h-screen bg-[#0a0f2c] flex items-center">
      <div className="w-full grid grid-cols-2">
        <div className="flex flex-col justify-center px-16 py-20 gap-8">
          <h1 className="text-white font-extrabold text-[80px] leading-none tracking-tight">
            CollabNest
          </h1>
          <p className="text-gray-300 text-[18px] leading-relaxed max-w-[520px]">
            Professional networking platform designed specifically for students
            and professionals to collaborate, learn, and grow together. Connect
            with peers, find mentors, discover opportunities, and build meaningful
            professional relationships. CollabNest bridges the gap between
            academic learning and industry requirements.
          </p>
          <div className="mt-4">
            <ExploreButton href="https://collabnest.iitp.ac.in/" />
          </div>
        </div>
        <div className="relative h-screen p-10">
          <Slideshow images={COLLABNEST_IMAGES} />
        </div>

      </div>
    </section>
  );
};

export default CollabNest;