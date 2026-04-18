"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AnimatedRowHW({
	children,
	index,
}: {
	children: React.ReactNode;
	index: number;
}) {
	const [ref, isVisible] = useScrollReveal<HTMLDivElement>(0.1);

	return (
		<div
			ref={ref}
			className="border-b border-white/5 last:border-b-0 hover:bg-white/5 transition-colors w-full"
			style={{
				opacity: isVisible ? 1 : 0,
				transform: isVisible ? "translateX(0px)" : "translateX(40px)",
				// This is the magic formula for the cascading Summer Sprint animation!
				transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s, background-color 0.15s`,
			}}
		>
			{children}
		</div>
	);
}
