export default function HeroAbout() {
	return (
		<section className="mt-[40px] mb-[60px] flex flex-col items-center w-full">
			<h1
				className="text-center text-[80px] md:text-[130px] font-extrabold mb-[100px] tracking-[0.05em] leading-none opacity-0 animate-title-reveal"
				style={{ animationDelay: "80ms" }}
			>
				<span className="text-transparent bg-clip-text bg-gradient-to-br from-[#ffffff] via-[#e2e8f0] to-[#3b82f6]">
					ICTC
				</span>
			</h1>

			<div
				className="w-full text-left opacity-0 animate-fade-in-up"
				style={{ animationDelay: "600ms" }}
			>
				<h2 className="text-[28px] md:text-[32px] font-bold mb-[24px] text-white tracking-wide">
					About
				</h2>
				<p className="text-[#94a3b8] text-[16px] md:text-[18px] leading-[1.8] md:leading-[2] text-justify font-light">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
					dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
					velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia deserunt
					mollit anim id est laborum.
				</p>
			</div>
		</section>
	);
}
