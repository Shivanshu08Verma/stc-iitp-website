"use client";
import { clubs } from "./data/clubs";
import ClubList from "@/components/clubs/ClubList";
import { motion, Transition } from "framer-motion";
import AnimatedLogo from "@/components/clubs/animatedLogo";

export default function ClubsPage() {
  const transition: Transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
  const variants = {
    hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
    visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1},
  };

  return (
    <main className="min-h-screen bg-[#0006629] text-white">
      {/* Hero — full width, dome lives here */}
      <section className="relative overflow-hidden">
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-[-10%] bg-[#123498] w-[105%]"
          style={{ height: "100%", borderRadius: "0 0 50% 50%" }}
          initial={{ opacity: 0, y: "-50%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ duration: 1, type: "tween"}}
        />

        {/* CLuBS + subtitle both inside the dome */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 pb-24 sm:pb-32 md:pb-40 text-center">
          <AnimatedLogo className="w-full max-w-xl mx-auto" />

          {/* Subtitle inside the dome */}
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={transition}
            className="mt-4 sm:mt-6 text-white/80 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-xl mx-auto font-light leading-relaxed"
          >
            Discover the technical and creative clubs that power innovation at{" "}
            <span className="text-white font-semibold">IIT Patna</span>
          </motion.p>
        </div>
      </section>

      {/* Club list — starts right after the dome */}
      <section className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-16 sm:pb-24">
        <ClubList clubs={clubs} />
      </section>
    </main>
  );
}
