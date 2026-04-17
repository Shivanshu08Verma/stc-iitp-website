"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSectionSS";
import AboutSection from "@/components/AboutSectionSS";
import EventTable from "@/components/EventTableSS";
import EventCarousel from "@/components/EventCarousel";
import { slides } from "@/data/galleryDataSS";

export default function SummerSprintPage() {
	const carouselImages = slides.map((slide, i) => ({
		id: i,
		src: slide.src,
		name: slide.caption,
	}));

	return (
		<main className="w-full min-h-screen flex flex-col font-roboto overflow-x-hidden">
			<div className="flex-grow w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center pt-[80px] pb-[100px] gap-20">
				<div className="w-full flex flex-col items-center gap-[60px]">
					<HeroSection />
					<AboutSection />
				</div>

				<div className="w-full">
					<EventTable />
				</div>

				<div className="w-full">
					<EventCarousel images={carouselImages} />
				</div>
			</div>
		</main>
	);
}
