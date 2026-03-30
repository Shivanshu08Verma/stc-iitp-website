"use client";

import Image from "next/image";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

const minasans = localFont({
  src: "../../public/fonts/Minasans.ttf",
  variable: "--font-minasans",
  display: "swap",
});

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
}

const facultyAdvisor: TeamMember[] = [
  {
    name: "Dr. Arpit Jain",
    role: "PIC Technical Affairs",
    image: "/team/arpit.jpeg",
    objectPosition: "top", // Prioritize the top (face)
  }
];

const studentHeads: TeamMember[] = [
  {
    name: "Akhand Pratap Narayan Singh",
    role: "General Secretary, Technical Affairs",
    image: "/team/akhand.jpeg",
  },
  {
    name: "Shivank Goyal",
    role: "Technical Secretary, Junior Year",
    image: "/team/shivank.jpeg",
  },
  {
    name: "Manish Kumar",
    role: "Technical Secretary, Sophomore Year",
    image: "/team/manish.jpeg",
  },
  {
    name: "Disha Vishnu Mulchandani",
    role: "Technical Secretary, UG Girls",
    image: "/team/disha.jpeg",
  },
];

export default function TeamPage() {
  return (
    <div 
      className={`min-h-screen text-white pb-20 ${spaceGrotesk.className} ${minasans.variable}`}
      style={{ background: 'linear-gradient(48.65deg, #00072D 8.63%, #353131 103.98%)' }}
    >
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#6BFB9A] opacity-5 blur-[120px] rounded-full"></div>
           <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500 opacity-5 blur-[120px] rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center min-h-[50vh]">
          <h1 
            className={`uppercase ${minasans.className}`}
            style={{ 
              fontWeight: 500, 
              fontSize: 'min(333px, 20vw)', 
              lineHeight: '100%', 
              letterSpacing: '0%',
              textAlign: 'center'
            }}
          >
            TEAM
          </h1>
        </div>
      </section>

      {/* Faculty Section */}
      <TeamSection title="Faculty Advisor" members={facultyAdvisor} center />

      {/* Student Heads Section */}
      <TeamSection title="Student Heads" members={studentHeads} />

    </div>
  );
}

function TeamSection({ title, members, center }: { title: string; members: TeamMember[]; center?: boolean }) {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">{title}</h2>
        <div className="h-px flex-grow bg-gradient-to-r from-[#6BFB9A] to-transparent opacity-30"></div>
      </div>
      
      <div className={center ? "flex justify-center" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 sm:gap-8"}>
        {members.map((member, index) => (
          <div key={index} className="w-full flex justify-center">
            <TeamCard member={member} />
          </div>
        ))}
      </div>
    </section>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group relative w-full max-w-[320px] bg-[#1E293B]/50 backdrop-blur-sm border border-white/5 rounded-2xl p-4 transition-all duration-500 hover:border-[#6BFB9A]/30 hover:shadow-[0_0_30px_rgba(107,251,154,0.1)] hover:-translate-y-2">
      <div className="relative aspect-square overflow-hidden rounded-xl mb-6 bg-[#0F172A]">
        {/* Placeholder image logic */}
        <div className="absolute inset-0 flex items-center justify-center text-[#6BFB9A]/20">
          <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
        
        {/* Actual Image */}
        <Image 
          src={member.image} 
          alt={member.name} 
          fill 
          className={`transition-transform duration-700 group-hover:scale-110 ${member.objectFit === "contain" ? "object-contain" : "object-cover"}`}
          style={{ objectPosition: member.objectPosition || "center" }}
          sizes="(max-width: 640px) 280px, 320px"
        />
        
        {/* Overlay subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2238] via-transparent to-transparent opacity-60"></div>
      </div>

      <div className="text-center relative z-10">
        <h3 className="text-xl font-bold mb-1 group-hover:text-[#6BFB9A] transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 mb-4 font-medium uppercase tracking-widest leading-tight">
          {member.role.split(',').map((part, i) => (
            <span key={i} className="block">
              {part.trim()}{i < member.role.split(',').length - 1 ? ',' : ''}
            </span>
          ))}
        </p>

        <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {member.linkedin && (
            <Link href={member.linkedin} target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-[#6BFB9A] hover:text-[#1A2238] transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Link>
          )}
          {member.github && (
            <Link href={member.github} target="_blank" className="p-2 bg-white/5 rounded-full hover:bg-[#6BFB9A] hover:text-[#1A2238] transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
