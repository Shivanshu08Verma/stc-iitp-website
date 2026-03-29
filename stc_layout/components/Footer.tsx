import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[linear-gradient(180deg,#020617_0%,#0F172A_100%)] border-t border-gray-800 text-[#94A3B8] py-12 lg:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    {/* Brand/About Section */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-2 flex items-center">
                        <Link href="/" className="flex items-center gap-5 w-fit">
                            <div className="relative h-20 w-20 overflow-hidden shrink-0">
                                <Image
                                    src="/stclogo.png"
                                    alt="STC IITP Logo"
                                    fill
                                    className="object-contain"
                                    sizes="80px"
                                />
                            </div>
                            <span className="text-6xl font-bold tracking-tight text-white uppercase translate-y-1">
                                STC IITP
                            </span>
                        </Link>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h3 className="text-white font-bold uppercase tracking-wider mb-6 text-lg">QUICK LINKS</h3>
                        <ul className="flex flex-col space-y-3">
                            <li>
                                <Link href="/" className="inline-block hover:text-[#6BFB9A] transition-colors duration-300">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/summer-sprint" className="inline-block hover:text-[#6BFB9A] transition-colors duration-300">
                                    Summer Sprint
                                </Link>
                            </li>
                            <li>
                                <Link href="/hello-world" className="inline-block hover:text-[#6BFB9A] transition-colors duration-300">
                                    Hello World
                                </Link>
                            </li>
                            <li>
                                <Link href="/ictc" className="inline-block hover:text-[#6BFB9A] transition-colors duration-300">
                                    ICTC
                                </Link>
                            </li>
                            <li>
                                <Link href="/inter-iit" className="inline-block hover:text-[#6BFB9A] transition-colors duration-300">
                                    Inter IIT
                                </Link>
                            </li>
                            <li>
                                <Link href="/clubs" className="inline-block hover:text-[#6BFB9A] transition-colors duration-300">
                                    Clubs
                                </Link>
                            </li>
                            <li>
                                <Link href="/teams" className="inline-block hover:text-[#6BFB9A] transition-colors duration-300">
                                    Teams
                                </Link>
                            </li>
                            <li>
                                <Link href="/developers" className="inline-block hover:text-[#6BFB9A] transition-colors duration-300">
                                    Developers
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Socials */}
                    <div className="col-span-1">
                        <h3 className="text-white font-bold uppercase tracking-wider mb-6 text-lg">SOCIALS</h3>
                        <ul className="flex flex-col space-y-4">
                            <li className="flex items-center gap-3">
                                <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="shrink-0 text-[#6BFB9A]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                <a href="mailto:stc@iitp.ac.in" className="hover:text-[#6BFB9A] transition-colors duration-300">stc@iitp.ac.in</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="shrink-0 text-[#6BFB9A]">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <span>STC Office, Admin Building, Indian Institute of Technology (IIT) Patna</span>
                            </li>
                        </ul>

                        <div className="mt-6 flex gap-4">
                            {/* Instagram Icon */}
                            <a href="https://www.instagram.com/iitpatna_stc?igsh=dDgwaDIweTB3OGpi" className="w-10 h-10 shrink-0 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#6BFB9A] hover:text-[#1A2238] transition-all duration-300">
                                <svg width={20} height={20} className="shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                </svg>
                            </a>
                            {/* LinkedIn Icon */}
                            <a href="#" className="w-10 h-10 shrink-0 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#6BFB9A] hover:text-[#1A2238] transition-all duration-300">
                                <svg width={20} height={20} className="shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Line */}
                <div className="mt-12 pt-8 border-t border-gray-800 flex justify-center items-center text-sm w-full">
                    <p className="text-center">© {currentYear} Student Technical Council, IIT Patna. All rights reserved.</p>
                </div>

            </div>
        </footer>
    );
}