import React from 'react'
import Image from "next/image";

interface EventCardProps{
    img: string;
    eventName: string;
    clubName: string;
    date: string;
  }

const EventCard = ({img, eventName, clubName, date}:EventCardProps ) => {
  return (
    <div className="rounded-xl overflow-hidden flex flex-col" style={{
  background: 'linear-gradient(180deg, #1745A3, #091A3D, #091A3D)',
  border: '2px solid #2D5BA3',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
}}>
  <Image
    src={img}
    alt={eventName}
    width={400}
    height={250}
    style={{ width: '100%', height: '220px', objectFit: 'cover' as const }}
  />
  <div className="p-4">
    <p style={{
            fontFamily: 'var(--font-roboto)',
            fontWeight: 700,
            fontSize: '20px',
            letterSpacing: '1px',
            color: '#FFFFFF',
            textTransform: 'uppercase' as const,
            marginBottom: '1rem'}}>{eventName}</p>
    <p style={{
            fontFamily: 'var(--font-roboto)',
            fontWeight: 700,
            fontSize: '20px',
            letterSpacing: '1px',
            color: '#A1A1AA',
            textTransform: 'uppercase' as const,
            marginBottom: '1rem'}}>{clubName}</p>
    <p style={{
            fontFamily: 'var(--font-roboto)',
            fontWeight: 700,
            fontSize: '20px',
            letterSpacing: '1px',
            color: '#A1A1AA',
            textTransform: 'uppercase' as const,
            marginBottom: '1rem'}}>{date}</p>
  </div>
</div>
  )
}

export default EventCard;
