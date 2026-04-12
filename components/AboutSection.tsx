import React from 'react'
import Card from './Card';
const cards = [
  {
    title: "COMMUNITY DRIVEN",
    description: "A vibrant community of over 200+ active members across 15+ technical clubs, working together to create an ecosystem of learning and innovation at IIT Patna.",
  },
  {
    title: "EXCELLENCE IN EVENTS",
    description: "Organizing 50+ technical events annually including hackathons, workshops, seminars, and competitions that attract participants from across the nation.",
  },
  {
    title: "INNOVATION FIRST",
    description: "Fostering a culture of innovation through hands-on projects, research initiatives, and collaborations with industry leaders to solve real-world problems.",
  },
];

const AboutSection = () => {
  return (
    <section className="w-full pt-16 pb-24 md:pt-20 md:pb-32 flex flex-col items-center">
      <div className="flex flex-col items-center text-center mb-16 md:mb-20">
        <h2 className="text-white font-black text-5xl md:text-6xl uppercase tracking-tighter font-['Space_Grotesk',sans-serif]">
          About Us
        </h2>
        <div className="w-16 md:w-24 h-1.5 bg-[#6BFB9A] mt-6 rounded-full" />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full max-w-7xl">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>

    </section>
  );
}

export default AboutSection;