import { teams } from "../data/teamData";

export default function TeamCards() {
	return (
		<section className="grid grid-cols-1 md:grid-cols-3 gap-[33px] w-full max-w-[1304px] mx-auto mb-[60px]">
			{teams.map((team, index) => (
				<div
					key={team.id}
					className="opacity-0 animate-fade-in-up w-full"
					style={{ animationDelay: `${index * 200 + 200}ms` }}
				>
					<div className="bg-[#0d1424] border border-[#1e293b] rounded-[20px] p-[32px] md:p-[40px] w-full h-full transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-[0_8px_30px_rgba(59,130,246,0.3)] hover:border-[#3b82f6] cursor-pointer flex flex-col items-center">
						{/* <div className="text-6xl md:text-7xl mb-6 transform transition-transform duration-500 hover:scale-110">
							{team.icon}
						</div> */}

						<h3 className="text-center font-bold mb-[8px] text-white text-[24px] md:text-[28px] leading-[38px]">
							{team.name}
						</h3>

						<p className="text-[#6BFB9A] text-[12px] md:text-[14px] font-bold tracking-[0.2em] uppercase mb-[24px]">
							{team.tagline}
						</p>

						<p className="text-[#94a3b8] text-[15px] md:text-[16px] text-center leading-[1.8] font-light">
							{team.description}
						</p>
					</div>
				</div>
			))}
		</section>
	);
}
