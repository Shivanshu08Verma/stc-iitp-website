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
					The Intra College Technical Championship (ICTC) is a cornerstone event
					within our tech community, meticulously designed to emulate the
					prestigious Inter IIT Tech Meet. This championship serves as a
					platform for students to engage in rigorous and stimulating technical
					challenges across various domains, providing an excellent opportunity
					to both develop and showcase their innovative skills. ICTC is a
					premier competitive arena where students collaborate under three
					houses—Draco, Cassiopeia, and Pegasus—to earn points toward the
					coveted Grand Champion title. Participants test their technical
					prowess through a mix of rigorous High-Prep projects and fast-paced
					Low-Prep problem statements, with their solutions evaluated on
					innovation, accuracy, and feasibility by a panel of esteemed
					professors and industry experts. Ultimately, the ICTC serves as a
					dynamic platform for tech enthusiasts to elevate their skills, gain
					real-world experience, and build invaluable professional networks.
				</p>
			</div>
		</section>
	);
}
