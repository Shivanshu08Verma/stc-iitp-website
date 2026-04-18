export default function AboutSection() {
	return (
		<div
			className="w-full animate-fade-in-up"
			style={{ animationDelay: "80ms" }}
		>
			<h2 className="text-[28px] md:text-[32px] font-bold mb-[24px] text-white tracking-wide">
				About
			</h2>
			<p className="text-[#94a3b8] text-[16px] md:text-[18px] leading-[1.8] md:leading-[2] text-justify font-light">
				Summer Sprint is the flagship summer event by the Student Technical
				Council, IIT Patna. A season-long series of technical competitions
				spanning multiple clubs and domains — from robotics and coding to design
				and finance — Summer Sprint gives every student the chance to explore,
				compete, and build something remarkable over the summer break.
			</p>
		</div>
	);
}
