export default function HeroSection() {
	return (
		<h1
			className="text-center font-extrabold mb-[60px] tracking-[0.05em] leading-none animate-title-reveal whitespace-nowrap"
			style={{
				fontSize: "clamp(40px, 8vw, 96px)", // Reduced max size so it fits the narrower container
				animationDelay: "80ms",
			}}
		>
			<span
				className="text-transparent bg-clip-text"
				style={{
					backgroundImage: "linear-gradient(135deg, #ffffff, #e2e8f0, #1E90FF)",
				}}
			>
				SUMMER SPRINT
			</span>
		</h1>
	);
}
