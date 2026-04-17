import HeroAbout from "@/components/HeroAbout";
import TeamCards from "@/components/TeamCards";
import Leaderboard from "@/components/Leaderboard";
import EventCarousel from "@/components/EventCarousel";
import { events } from "@/data/eventData";

export default function ICTCPage() {
	const carouselImages = events.map((event) => ({
		id: event.id,
		src: event.imagePath,
		name: event.name,
	}));

	return (
		<main className="min-h-screen flex flex-col items-center">
			<div className="w-full max-w-6xl px-6 md:px-12">
				<HeroAbout />
				<TeamCards />
				<Leaderboard />
				<EventCarousel images={carouselImages} />
			</div>
		</main>
	);
}
