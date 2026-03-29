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
    <section className="w-full pt-4 pb-20">
    <h2 style={{
        fontFamily: "var(--font-roboto)",
        fontWeight: 800,
        fontSize: "36px",
        color: "#FFFFFF",
        textTransform: "uppercase",
        lineHeight: "100%",
        marginBottom: "48px",
      }}>
        About Us
      </h2>

      <div style={{ display: "flex", flexDirection: "row", gap: "24px" }}>
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>

    </section>
  );
}

export default AboutSection;