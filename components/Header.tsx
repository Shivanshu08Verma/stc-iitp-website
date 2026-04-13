"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const isFlagshipActive = ['/flagship-events/summer-sprint', '/flagship-events/hello-world', '/flagship-events/ictc'].includes(pathname);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#00051A] backdrop-blur-md">
      <div className="flex w-full h-[60px] items-center justify-between px-4 sm:px-6 lg:px-8">

        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-7 w-7 overflow-hidden rounded-md">
              <Image
                src="/stclogo.png"
                alt="STC IITP Logo"
                fill
                className="object-contain"
                sizes="28px"
                priority
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-white w-max">
              STC
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center justify-end gap-6 align-middle">
              <li className="relative group">
                <Link href="/" className={`relative block py-1 before:absolute before:-inset-4 before:content-[''] transition-colors duration-300 ease-in-out group-hover:text-[#6BFB9A] font-[family-name:var(--font-space-mono)] font-normal text-[11px] tracking-[4px] uppercase ${pathname === "/" ? 'text-[#6BFB9A]' : 'text-[#94A3B8]'}`}>
                  <span className="inline-block transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:-translate-y-1 relative z-10">
                    HOME
                  </span>
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#6BFB9A] transition-all duration-300 w-0 ${pathname === "/" ? '' : 'group-hover:w-full'}`}></span>
                </Link>
              </li>

              <li className="relative group">
                <button className={`relative block py-1 before:absolute before:-inset-4 before:content-[''] transition-colors duration-300 ease-in-out group-hover:text-[#6BFB9A] font-[family-name:var(--font-space-mono)] font-normal text-[11px] tracking-[4px] uppercase ${isFlagshipActive ? 'text-[#6BFB9A]' : 'text-[#94A3B8]'}`}>
                  <span className="inline-block transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:-translate-y-1 relative z-10">
                    FLAGSHIP EVENTS
                  </span>
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#6BFB9A] transition-all duration-300 w-0 ${isFlagshipActive ? '' : 'group-hover:w-full'}`}></span>
                </button>
                <div className="absolute top-full left-0 mt-2 bg-[#00051A] shadow-lg rounded-md py-3 px-6 z-60 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <Link href="/flagship-events/summer-sprint" className="block text-[#94A3B8] hover:text-[#6BFB9A] transition-colors duration-200 py-2 font-[family-name:var(--font-space-mono)] text-[11px] tracking-[4px] uppercase">SUMMER SPRINT</Link>
                  <Link href="/flagship-events/hello-world" className="block text-[#94A3B8] hover:text-[#6BFB9A] transition-colors duration-200 py-2 font-[family-name:var(--font-space-mono)] text-[11px] tracking-[4px] uppercase">HELLO WORLD</Link>
                  <Link href="/flagship-events/ictc" className="block text-[#94A3B8] hover:text-[#6BFB9A] transition-colors duration-200 py-2 font-[family-name:var(--font-space-mono)] text-[11px] tracking-[4px] uppercase">ICTC</Link>
                </div>
              </li>

              <li className="relative group">
                <Link href="/inter-iit" className={`relative block py-1 before:absolute before:-inset-4 before:content-[''] transition-colors duration-300 ease-in-out group-hover:text-[#6BFB9A] font-[family-name:var(--font-space-mono)] font-normal text-[11px] tracking-[4px] uppercase ${pathname === "/inter-iit" ? 'text-[#6BFB9A]' : 'text-[#94A3B8]'}`}>
                  <span className="inline-block transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:-translate-y-1 relative z-10">
                    INTER IIT
                  </span>
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#6BFB9A] transition-all duration-300 w-0 ${pathname === "/inter-iit" ? '' : 'group-hover:w-full'}`}></span>
                </Link>
              </li>

              <li className="relative group">
                <Link href="/clubs" className={`relative block py-1 before:absolute before:-inset-4 before:content-[''] transition-colors duration-300 ease-in-out group-hover:text-[#6BFB9A] font-[family-name:var(--font-space-mono)] font-normal text-[11px] tracking-[4px] uppercase ${pathname === "/clubs" ? 'text-[#6BFB9A]' : 'text-[#94A3B8]'}`}>
                  <span className="inline-block transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:-translate-y-1 relative z-10">
                    CLUBS
                  </span>
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#6BFB9A] transition-all duration-300 w-0 ${pathname === "/clubs" ? '' : 'group-hover:w-full'}`}></span>
                </Link>
              </li>

              <li className="relative group">
                <Link href="/team" className={`relative block py-1 before:absolute before:-inset-4 before:content-[''] transition-colors duration-300 ease-in-out group-hover:text-[#6BFB9A] font-[family-name:var(--font-space-mono)] font-normal text-[11px] tracking-[4px] uppercase ${pathname === "/team" ? 'text-[#6BFB9A]' : 'text-[#94A3B8]'}`}>
                  <span className="inline-block transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:-translate-y-1 relative z-10">
                    TEAM
                  </span>
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#6BFB9A] transition-all duration-300 w-0 ${pathname === "/team" ? '' : 'group-hover:w-full'}`}></span>
                </Link>
              </li>
            </ul>
          </nav>

          <button
            className="block md:hidden text-gray-200 hover:text-white transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-700 bg-[#00051A] px-6 py-6 shadow-xl">
          <ul className="flex flex-col gap-6 uppercase">
            <li className="relative group w-max">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={`relative block py-1 before:absolute before:-inset-4 before:content-[''] transition-colors duration-300 ease-in-out group-hover:text-[#6BFB9A] font-[family-name:var(--font-space-mono)] font-normal text-[11px] tracking-[4px] ${pathname === "/" ? 'text-[#6BFB9A]' : 'text-[#94A3B8]'}`}>
                <span className="inline-block transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:-translate-y-1 relative z-10">
                  HOME
                </span>
                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#6BFB9A] transition-all duration-300 w-0 ${pathname === "/" ? '' : 'group-hover:w-full'}`}></span>
              </Link>
            </li>

            <li className="relative group w-full">
              <div className="w-max">
                <button
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  className={`relative block py-1 before:absolute before:-inset-4 before:content-[''] transition-colors duration-300 ease-in-out group-hover:text-[#6BFB9A] font-[family-name:var(--font-space-mono)] font-normal text-[11px] tracking-[4px] ${isFlagshipActive ? 'text-[#6BFB9A]' : 'text-[#94A3B8]'}`}
                >
                  <span className="inline-flex items-center gap-2 transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:-translate-y-1 relative z-10">
                    FLAGSHIP EVENTS
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-4 h-4 transition-transform duration-300 ${isMobileDropdownOpen ? 'rotate-180' : ''}`}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#6BFB9A] transition-all duration-300 w-0 ${isFlagshipActive ? '' : 'group-hover:w-full'}`}></span>
                </button>
              </div>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileDropdownOpen ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                <div className="flex flex-col pl-4 space-y-4 border-l-2 border-gray-700 pb-2">
                  <Link href="/flagship-events/summer-sprint" onClick={() => setIsMobileMenuOpen(false)} className="block text-[#94A3B8] hover:text-[#6BFB9A] transition-colors duration-200 font-[family-name:var(--font-space-mono)] text-[11px] tracking-[4px] uppercase">SUMMER SPRINT</Link>
                  <Link href="/flagship-events/hello-world" onClick={() => setIsMobileMenuOpen(false)} className="block text-[#94A3B8] hover:text-[#6BFB9A] transition-colors duration-200 font-[family-name:var(--font-space-mono)] text-[11px] tracking-[4px] uppercase">HELLO WORLD</Link>
                  <Link href="/flagship-events/ictc" onClick={() => setIsMobileMenuOpen(false)} className="block text-[#94A3B8] hover:text-[#6BFB9A] transition-colors duration-200 font-[family-name:var(--font-space-mono)] text-[11px] tracking-[4px] uppercase">ICTC</Link>
                </div>
              </div>
            </li>

            <li className="relative group w-max">
              <Link href="/inter-iit" onClick={() => setIsMobileMenuOpen(false)} className={`relative block py-1 before:absolute before:-inset-4 before:content-[''] transition-colors duration-300 ease-in-out group-hover:text-[#6BFB9A] font-[family-name:var(--font-space-mono)] font-normal text-[11px] tracking-[4px] ${pathname === "/inter-iit" ? 'text-[#6BFB9A]' : 'text-[#94A3B8]'}`}>
                <span className="inline-block transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:-translate-y-1 relative z-10">
                  INTER IIT
                </span>
                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#6BFB9A] transition-all duration-300 w-0 ${pathname === "/inter-iit" ? '' : 'group-hover:w-full'}`}></span>
              </Link>
            </li>

            <li className="relative group w-max">
              <Link href="/clubs" onClick={() => setIsMobileMenuOpen(false)} className={`relative block py-1 before:absolute before:-inset-4 before:content-[''] transition-colors duration-300 ease-in-out group-hover:text-[#6BFB9A] font-[family-name:var(--font-space-mono)] font-normal text-[11px] tracking-[4px] ${pathname === "/clubs" ? 'text-[#6BFB9A]' : 'text-[#94A3B8]'}`}>
                <span className="inline-block transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:-translate-y-1 relative z-10">
                  CLUBS
                </span>
                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#6BFB9A] transition-all duration-300 w-0 ${pathname === "/clubs" ? '' : 'group-hover:w-full'}`}></span>
              </Link>
            </li>

            <li className="relative group w-max">
              <Link href="/team" onClick={() => setIsMobileMenuOpen(false)} className={`relative block py-1 before:absolute before:-inset-4 before:content-[''] transition-colors duration-300 ease-in-out group-hover:text-[#6BFB9A] font-[family-name:var(--font-space-mono)] font-normal text-[11px] tracking-[4px] ${pathname === "/team" ? 'text-[#6BFB9A]' : 'text-[#94A3B8]'}`}>
                <span className="inline-block transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:-translate-y-1 relative z-10">
                  TEAM
                </span>
                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#6BFB9A] transition-all duration-300 w-0 ${pathname === "/team" ? '' : 'group-hover:w-full'}`}></span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}