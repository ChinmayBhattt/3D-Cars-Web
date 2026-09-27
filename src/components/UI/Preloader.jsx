import React, { useState, useEffect } from 'react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsFading(true), 300);
          setTimeout(() => onComplete?.(), 1000);
          return 100;
        }
        const inc = Math.floor(Math.random() * 12) + 4;
        return Math.min(100, prev + inc);
      });
    }, 55);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#060608',
        transition: 'opacity 0.7s ease',
        opacity: isFading ? 0 : 1,
        pointerEvents: isFading ? 'none' : 'auto',
      }}
    >
      {/* Background ambient glow */}
      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', textAlign: 'center', maxWidth: '440px', padding: '0 20px' }}>
        {/* Monogram Crest */}
        <div style={{ marginBottom: '24px' }}>
          <div
            style={{
              width: '72px',
              height: '72px',
              margin: '0 auto',
              borderRadius: '50%',
              border: '2px solid rgba(0, 240, 255, 0.5)',
              background: 'linear-gradient(135deg, #1e293b, #0f172a)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 35px rgba(0, 240, 255, 0.25)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '26px',
                fontWeight: 900,
                letterSpacing: '2px',
                color: 'var(--accent-cyan)',
              }}
            >
              AD
            </span>
          </div>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '24px',
            fontWeight: 800,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            margin: '0 0 8px 0',
            color: '#f8fafc',
          }}
        >
          ADITYA DAHUJA
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--accent-cyan)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            marginBottom: '36px',
          }}
        >
          PORTFOLIO & 3D ARCHITECTURE
        </p>

        {/* Progress Bar */}
        <div
          style={{
            width: '100%',
            height: '2px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '999px',
            overflow: 'hidden',
            marginBottom: '16px',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: '100%',
              backgroundColor: '#00f0ff',
              boxShadow: '0 0 15px #00f0ff',
              transition: 'width 0.1s ease',
            }}
          />
        </div>

        {/* Telemetry info */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            color: '#64748b',
          }}
        >
          <span>CALIBRATING 3D ENVIRONMENT</span>
          <span style={{ color: '#00f0ff', fontWeight: 600 }}>{progress}%</span>
        </div>
      </div>
    </div>
  );
}
