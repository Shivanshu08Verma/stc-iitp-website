"use client";

import { useRef, useState, useEffect } from "react";
import { Event } from "@/types/eventSS";

export default function AnimatedRow({
	ev,
	index,
}: {
	ev: Event;
	index: number;
}) {
	const ref = useRef<HTMLDivElement | null>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.1 },
		);

		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	const delay = `${Math.min(index * 0.045, 0.4)}s`;

	return (
		<div
			ref={ref}
			// CHANGED: border-white is now border-white/5 for that super subtle faint line!
			className="grid grid-cols-3 items-center border-b border-white/5 hover:bg-white/5 transition-colors"
			style={{
				opacity: visible ? 1 : 0,
				transform: visible ? "translateX(0px)" : "translateX(40px)",
				transition: `background 0.15s, opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}`,
			}}
		>
			<div className="py-4 px-2 flex items-center justify-center text-center font-bold text-sm md:text-base text-white">
				{ev.name}
			</div>
			<div className="py-4 px-2 flex items-center justify-center text-center font-normal text-sm md:text-base text-white/70">
				{ev.club}
			</div>
			<div className="py-4 px-2 flex items-center justify-center text-center font-semibold text-sm md:text-base text-[#94A3B8]">
				{ev.dates}
			</div>
		</div>
	);
}
