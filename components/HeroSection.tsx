'use client';
import { useState, useEffect, useRef } from 'react';

const fullText = "STUDENTS TECHNICAL COUNCIL";
const TYPING_SPEED = 70;
const START_DELAY = 800;

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [typingDone, setTypingDone] = useState(false);
  const idxRef = useRef(0);

  useEffect(() => {
    if (idxRef.current >= fullText.length) {
      setDisplayedText(fullText);
      setTypingDone(true);
      return;
    }

    let interval: ReturnType<typeof setInterval>;

    const delay = setTimeout(() => {
      interval = setInterval(() => {
        const next = idxRef.current + 1;
        setDisplayedText(fullText.slice(0, next));
        idxRef.current = next;
        if (next >= fullText.length) {
          clearInterval(interval);
          setTypingDone(true);
        }
      }, TYPING_SPEED);
    }, START_DELAY);

    return () => {
      clearTimeout(delay);
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      className="min-h-screen flex flex-col justify-center px-16"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <video
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          objectFit: 'cover',
          zIndex: 0,
          filter: 'blur(4px)'
        }}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/HERO/hero_vide.mp4" type="video/mp4" />
      </video>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.55)',
          zIndex: 1,
        }}
      />

      <div style={{ position: 'relative', zIndex: 2 }}>
        

        <h1 style={{
          fontFamily: 'var(--font-inter)',
          fontWeight: 900,
          fontSize: '88px',
          lineHeight: '79.2px',
          letterSpacing: '-4.4px',
          color: '#FFFFFF',
          marginBottom: '2.5rem',
          whiteSpace: 'nowrap',
          textShadow: '0px 2px 12px rgba(0, 0, 0, 0.85)',
        }}>
          {typingDone ? fullText : displayedText}
          <span style={{
            display: 'inline-block',
            width: '3px',
            height: '70px',
            backgroundColor: '#FFFFFF',
            marginLeft: '4px',
            verticalAlign: 'middle',
            opacity: typingDone ? 0 : 1,
            transition: 'opacity 0.3s ease',
            animation: typingDone ? 'none' : 'blink 1s step-end infinite',
          }} />
        </h1>

        <p style={{
          fontFamily: 'var(--font-inter)',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '1.7',
          color: '#FFFFFF',
          maxWidth: '640px',
          opacity: typingDone ? 1 : 0,
          transform: typingDone ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 0.9s ease 0.4s, transform 0.9s ease 0.4s',
          textShadow: '0px 1px 8px rgba(0, 0, 0, 0.75)',
        }}>
          The Student Technical Council at IIT Patna is the apex body of all
          technical activities on campus. We foster innovation, organize technical
          events, manage clubs, and provide a platform for students to showcase
          their talents. From workshops to hackathons, from seminars to
          competitions, STC is at the forefront of technical excellence at IIT
          Patna, empowering students to learn, create, and innovate.
        </p>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;