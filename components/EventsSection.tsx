import EventCard from "./EventCard";

const events = [
  {
    img: "/events/event1-img.jpg",
    eventName: "EVENT NAME 1",
    clubName: "CLUB NAME",
    date: "DATE: 13 JULY - 23 JULY",
  },
  {
    img: "/events/event1-img.jpg",
    eventName: "EVENT NAME 2",
    clubName: "CLUB NAME",
    date: "DATE: 13 JULY - 23 JULY",
  },
  {
    img: "/events/event1-img.jpg",
    eventName: "EVENT NAME 3",
    clubName: "CLUB NAME",
    date: "DATE: 13 JULY - 23 JULY",
  },
];

const EventsSection = () => {
  return (
    <section className="py-16">
<<<<<<< Updated upstream
        <h2 className="text-[36px] font-extrabold uppercase text-white mb-8 px-16">
        CURRENT EVENTS
        </h2>
        <div className="grid grid-cols-3 gap-6 px-16">
=======
        <h2 className="text-3xl md:text-[36px] font-extrabold uppercase text-white mb-6 md:mb-8 px-4 md:px-8 lg:px-16">
        CURRENT EVENTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-16">
>>>>>>> Stashed changes
            {
                events.map((event)=>(
                    <EventCard
                    key={event.eventName}
                    img={event.img}
                    eventName={event.eventName}
                    clubName={event.clubName}
                    date={event.date}
                    />
                ))}
        </div>
    </section>
  )
}

export default EventsSection;
