const MissionSection = () => {
  return (
<<<<<<< Updated upstream
    <section className="py-24 max-w-5xl mx-auto px-8">
      <p style={{
        fontFamily: 'var(--font-space-mono)',
        fontWeight: 400,
        fontSize: '10px',
        letterSpacing: '5px',
        color: '#FFFFFF',
        textTransform: 'uppercase' as const,
        textAlign: 'center' as const,
        marginBottom: '2rem',
      }}>
        MISSION // 01
      </p>
      <h2 style={{
        fontFamily: 'var(--font-inter)',
        fontWeight: 300,
        fontSize: '48px',
        lineHeight: '48px',
        letterSpacing: '0px',
        color: '#FFFFFF',
        textAlign: 'center' as const,
        marginBottom: '4rem',
      }}>
        We engineer the frameworks that empower the next generation of digital architects to build resilient systems.
      </h2>
      <div className="flex gap-16 mt-8">

        <div>
          <p style={{
            fontFamily: 'var(--font-space-mono)',
            fontWeight: 700,
            fontSize: '10px',
            letterSpacing: '1px',
            color: '#A1A1AA',
            textTransform: 'uppercase' as const,
            marginBottom: '1rem',
          }}>
            STRATEGY
          </p>
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '22.75px',
            color: '#A1A1AA',
          }}>
=======
    <section className="py-16 md:py-24 max-w-5xl mx-auto px-4 md:px-8">
      <p className="font-[family-name:var(--font-space-mono)] font-normal text-[10px] tracking-[5px] text-white uppercase text-center mb-8">
        MISSION // 01
      </p>
      <h2 className="text-white text-center font-light text-3xl md:text-5xl leading-tight md:leading-[48px] mb-10 md:mb-16 tracking-[0px] font-[family-name:var(--font-inter)]">
        We engineer the frameworks that empower the next generation of digital architects to build resilient systems.
      </h2>
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-8">

        <div>
          <p className="font-[family-name:var(--font-space-mono)] font-bold text-[10px] tracking-[1px] text-[#A1A1AA] uppercase mb-4">
            STRATEGY
          </p>
          <p className="font-[family-name:var(--font-inter)] font-normal text-[14px] leading-[22.75px] text-[#A1A1AA]">
>>>>>>> Stashed changes
            Prioritizing modularity and efficiency in every layer of our educational stack.
          </p>
        </div>

        <div>
<<<<<<< Updated upstream
          <p style={{
            fontFamily: 'var(--font-space-mono)',
            fontWeight: 700,
            fontSize: '10px',
            letterSpacing: '1px',
            color: '#A1A1AA',
            textTransform: 'uppercase' as const,
            marginBottom: '1rem',
          }}>
            VISION
          </p>
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '22.75px',
            color: '#A1A1AA',
          }}>
=======
          <p className="font-[family-name:var(--font-space-mono)] font-bold text-[10px] tracking-[1px] text-[#A1A1AA] uppercase mb-4">
            VISION
          </p>
          <p className="font-[family-name:var(--font-inter)] font-normal text-[14px] leading-[22.75px] text-[#A1A1AA]">
>>>>>>> Stashed changes
            Envisioning a future where technology is both seamless and structurally sound.
          </p>
        </div>

      </div>
    </section>
  );
};

export default MissionSection;