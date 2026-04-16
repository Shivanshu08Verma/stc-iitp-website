"use client";

import Image from "next/image";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import {
  m,
  LazyMotion,
  domAnimation,
  Variants,
} from "framer-motion";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
});

const minasans = localFont({
  src: "../../../public/fonts/Minasans.ttf",
  variable: "--font-minasans",
  display: "swap",
});

interface TeamMember {
  name: string;
  image: string;
  github?: string;
  linkedin?: string;
  objectPosition?: string;
}

const ADVISORY: TeamMember[] = [
  {
    name: "Shivank Goyal",
    image: "/team/web-dev/Shivank_Goyal_-_Technical_Secretary_Junior_Year.jpeg",
    github: "https://github.com/avianbob/",
    linkedin: "https://www.linkedin.com/in/shivankgoyal23",
  },
  {
    name: "Akhand Pratap Singh",
    image: "/team/web-dev/Akhand_Pratap_Narayan_Singh_-_General_Secretary_Technical_Affairs.jpeg",
    github: "https://github.com/akhandsinghjr",
    linkedin: "https://www.linkedin.com/in/asjx/",
  },
  
  {
    name: "Aditya Aggrawal",
    image: "/team/web-dev/aditya.jpeg",
    github: "https://github.com/ProLimitHyperCodeNovaCreator",
    linkedin: "https://www.linkedin.com/in/adityaag2005",
  },
];

const TEAM: TeamMember[] = [
  {
    name: "Paarth Mandelia",
    image: "/team/web-dev/paarth_mandelia.jpeg",
    github: "https://github.com/paarthM007",
    linkedin: "https://www.linkedin.com/in/paarth-mandelia-178236319",
  },
  {
    name: "Aanushka Saha",
    image: "/team/web-dev/aanushka.jpeg",
    github: "https://github.com/aanushkasaha",
    linkedin: "https://www.linkedin.com/in/aanushka-saha/",
    
  },
  {
    name: "Rameshwar Dudhate",
    image: "/team/web-dev/rameshwar.jpeg",
    github: "https://github.com/Rameshwar1302",
    linkedin: "https://www.linkedin.com/in/rameshwar-dudhate-334650315",
    objectPosition: "center 35%",
  },
  {
    name: "Shivanshu Verma",
    image: "/team/web-dev/shivanshu.jpeg",
    github: "https://github.com/Shivanshu08Verma",
    linkedin: "https://www.linkedin.com/in/shivanshu-verma-899575321",
  },
  {
    name: "Rohan Bhandari",
    image: "/team/web-dev/rohan.jpeg",
    github: "https://github.com/Rohan-Bhandari162",
    linkedin: "https://www.linkedin.com/in/rohan-bhandari-5bb745319",
    objectPosition: "center 5%"
  },
    {
    name: "Hardik Batwal",
    image: "/team/web-dev/hardik.jpeg",
    github: "https://github.com/riseuppant",
    linkedin: "https://www.linkedin.com/in/hardik-batwal-a534a231a/",
  },
  {
    name: "Ramavath Jagadeesh",
    image: "/team/web-dev/Ramavath.jpeg",
    linkedin: "https://www.linkedin.com/in/ramavath-jagadeesh",
  },
  {
    name : "Anshika Singh",
    image: "/team/web-dev/anshika.jpeg",
    linkedin : "https://www.linkedin.com/in/anshika-singh-764830365/" 
  }
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function WebDevTeamPage() {
  return (
    <LazyMotion features={domAnimation}>
      <div
        className={`min-h-screen text-white pb-32 ${manrope.className} ${minasans.variable}`}
        style={{
          background: "linear-gradient(48.65deg, #00072D 8.63%, #353131 103.98%)",
        }}
      >
        {/* Decorative Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] bg-[#6BFB9A] opacity-[0.03] blur-[150px] rounded-full" />
          <div className="absolute bottom-[-5%] right-[-5%] w-[50%] h-[50%] bg-blue-500 opacity-[0.03] blur-[150px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 pt-40 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Left Column: Title & Subtitle */}
            <m.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="w-full lg:w-[35%] lg:sticky lg:top-40 h-fit flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <h1
                className="tracking-tighter w-full"
                style={{
                  fontWeight: 700,
                  fontSize: "min(120px, 9vw)",
                  lineHeight: "1.0",
                }}
              >
                People
              </h1>
              <p className="text-[#94A3B8] text-2xl md:text-3xl mt-10 max-w-sm mx-auto lg:mx-0 leading-tight font-light tracking-tight">
                The great minds behind the digital experience.
              </p>
            </m.div>

            {/* Right Column: Member Groups */}
            <div className="w-full lg:w-[65%] flex flex-col gap-32">
              <TeamGroup title="Advisory" members={ADVISORY} isLeadGroup />
              <TeamGroup title="Team" members={TEAM} />
            </div>
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}

/* ─── Team Group Component ─── */
function TeamGroup({
  title,
  members,
  isLeadGroup,
}: {
  title: string;
  members: TeamMember[];
  isLeadGroup?: boolean;
}) {
  return (
    <m.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      className="flex flex-col gap-8"
    >
      <h2 className="text-white text-base font-bold lg:ml-4 uppercase tracking-[0.3em] text-center lg:text-left w-full">
        {title}
      </h2>
      <div className="bg-[#1a1a1a]/40 backdrop-blur-3xl border border-white/5 rounded-[56px] p-12 md:p-20">
        <m.div 
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-x-16 gap-y-20"
        >
          {members.map((member) => (
            <m.div 
              variants={fadeInUp}
              key={member.name} 
              className={`${
                isLeadGroup 
                  ? "w-full sm:w-[calc(45%)] lg:w-[calc(40%)]" 
                  : "w-full sm:w-[calc(45%)] lg:w-[calc(28%)]"
              } flex justify-center`}
            >
              <MemberCard member={member} isLead={isLeadGroup} />
            </m.div>
          ))}
        </m.div>
      </div>
    </m.div>
  );
}

/* ─── Member Card Component ─── */
function MemberCard({ member, isLead }: { member: TeamMember; isLead?: boolean }) {
  const imageSize = isLead
    ? "w-44 h-44 md:w-52 md:h-52"
    : "w-36 h-36 md:w-44 md:h-44";

  return (
    <m.div 
      whileHover={{ y: -10 }}
      className="group flex flex-col items-center text-center"
    >
      {/* Avatar Container */}
      <div className={`relative ${imageSize} mb-8`}>
        {/* Glow effect */}
        <div className="absolute -inset-2 rounded-full bg-[#6BFB9A]/0 group-hover:bg-[#6BFB9A]/10 blur-3xl transition-all duration-1000" />

        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-[#6BFB9A]/30 transition-all duration-700 z-10" />

        {/* Profile Image */}
        <div className="relative w-full h-full rounded-full overflow-hidden transition-all duration-1000 ease-in-out">
          <div className="absolute inset-0 bg-[#0F172A] flex items-center justify-center text-[#6BFB9A]/10">
            <svg className="w-1/2 h-1/2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>

          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
            style={{ objectPosition: member.objectPosition || "center" }}
            sizes={isLead ? "400px" : "300px"}
            unoptimized
            priority
          />
        </div>
      </div>

      {/* Info Section */}
      <div className="flex flex-col items-center overflow-visible">
        <h3 className={`${isLead ? 'text-2xl' : 'text-xl'} font-bold text-white group-hover:text-[#6BFB9A] transition-colors duration-300 tracking-tight whitespace-nowrap`}>
          {member.name}
        </h3>

        {/* Social Link Row - Fixed for Mobile visibility */}
        {(member.github || member.linkedin) && (
          <div className="flex gap-4 mt-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 transform translate-y-0 md:translate-y-2 md:group-hover:translate-y-0">
            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/[0.03] border border-white/10 rounded-full hover:bg-[#6BFB9A] hover:text-[#1A2238] transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/[0.03] border border-white/10 rounded-full hover:bg-[#6BFB9A] hover:text-[#1A2238] transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
    </m.div>
  );
}
