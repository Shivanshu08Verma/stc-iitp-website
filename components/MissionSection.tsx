const MissionSection = () => {
  return (
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
            Prioritizing modularity and efficiency in every layer of our educational stack.
          </p>
        </div>

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
            VISION
          </p>
          <p style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '22.75px',
            color: '#A1A1AA',
          }}>
            Envisioning a future where technology is both seamless and structurally sound.
          </p>
        </div>

      </div>
    </section>
  );
};

export default MissionSection;