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
<<<<<<< Updated upstream
    <div className="rounded-xl overflow-hidden flex flex-col" style={{
  background: 'linear-gradient(180deg, #1745A3, #091A3D, #091A3D)',
  border: '2px solid #2D5BA3',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
}}>
=======
    <div className="rounded-xl overflow-hidden flex flex-col bg-gradient-to-b from-[#1745A3] to-[#091A3D] border-2 border-[#2D5BA3] shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
>>>>>>> Stashed changes
  <Image
    src={img}
    alt={eventName}
    width={400}
    height={250}
<<<<<<< Updated upstream
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
=======
    className="w-full h-[220px] object-cover"
  />
  <div className="p-4">
    <p className="font-[family-name:var(--font-roboto)] font-bold text-[20px] tracking-[1px] text-white uppercase mb-4">{eventName}</p>
    <p className="font-[family-name:var(--font-roboto)] font-bold text-[20px] tracking-[1px] text-[#A1A1AA] uppercase mb-4">{clubName}</p>
    <p className="font-[family-name:var(--font-roboto)] font-bold text-[20px] tracking-[1px] text-[#A1A1AA] uppercase mb-4">{date}</p>
>>>>>>> Stashed changes
  </div>
</div>
  )
}

export default EventCard;
