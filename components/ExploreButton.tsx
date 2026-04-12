"use client"
import Link from "next/link";
interface ExploreButtonProps{
    href: string;
}
const ExploreButton = ({href}:ExploreButtonProps) => {
  return (
    <Link href={href}
    className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-xl border-2 border-[#2448E3] bg-white text-[#2448E3] font-bold text-[28px] overflow-hidden transition-colors duration-500 hover:text-white">
        <span className="absolute inset-0 bg-[#2448E3] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
         <span className="relative z-10">Explore</span>
         <span className="relative z-10 inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-current text-xl">
        ↗
        </span>
    </Link>
  )
}

export default ExploreButton;
