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
        // Smooth random increments
        const inc = Math.floor(Math.random() * 12) + 4;
        return Math.min(100, prev + inc);
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#060608] text-white transition-opacity duration-700 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#060608',
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
        {/* Bugatti Monogram Crest */}
        <div style={{ marginBottom: '24px' }}>
          <div
            style={{
              width: '72px',
              height: '72px',
              margin: '0 auto',
              borderRadius: '50%',
              border: '1px solid rgba(0, 240, 255, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 30px rgba(0, 240, 255, 0.2)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '28px',
                fontWeight: 900,
                letterSpacing: '2px',
                color: '#ffffff',
              }}
            >
              EB
            </span>
          </div>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '24px',
            fontWeight: 800,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            margin: '0 0 8px 0',
            color: '#f8fafc',
          }}
        >
          BUGATTI
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            color: 'var(--accent-cyan)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            marginBottom: '36px',
          }}
        >
          LA VOITURE NOIRE
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
            fontSize: '11px',
            color: '#64748b',
          }}
        >
          <span>CALIBRATING 3D ATELIER</span>
          <span style={{ color: '#00f0ff', fontWeight: 600 }}>{progress}%</span>
        </div>
      </div>
    </div>
  );
}
