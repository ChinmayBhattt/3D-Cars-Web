import React from 'react';
import { ChevronDown, RotateCw, ExternalLink, Code2 } from 'lucide-react';
import { LinkedinIcon } from './Icons';

export default function HeroOverlay({ scrollProgress = 0, onResetRotation, userRotationY = 0 }) {
  const opacity = Math.max(0, 1 - scrollProgress * 4.5);

  if (opacity <= 0.01) return null;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '7rem 2.5rem 3rem 2.5rem',
        opacity: opacity,
        transition: 'opacity 0.15s ease-out',
        zIndex: 10,
      }}
    >
      {/* Top Header Eyebrow */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '999px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.16em',
              color: 'var(--accent-cyan)',
              marginBottom: '1rem',
              backdropFilter: 'blur(10px)',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)' }} />
            <span>ASPIRING SDE • TEAM LEAD • ORGANIZER @HACKARYAVERSE</span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.0rem, 4.4vw, 4.2rem)',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              margin: '0 0 1rem 0',
              background: 'linear-gradient(180deg, #ffffff 40%, #94a3b8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              maxWidth: '820px',
            }}
          >
            <span style={{ whiteSpace: 'nowrap' }}>ARCHITECTING</span> HIGH-PERFORMANCE DIGITAL SYSTEMS
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.8rem, 1.25vw, 1.05rem)',
              letterSpacing: '0.15em',
              color: '#94a3b8',
              textTransform: 'uppercase',
              margin: '0 0 1.25rem 0',
            }}
          >
            Aditya Dahuja • Full Stack Engineering & Systems Design
          </p>

          {/* Action Row: Drag hint + LinkedIn profile pill */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                borderRadius: '6px',
                background: 'rgba(6, 8, 12, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: '#cbd5e1',
                pointerEvents: 'auto',
                backdropFilter: 'blur(8px)',
              }}
            >
              <RotateCw size={12} className="text-cyan-400" />
              <span>DRAG MOUSE TO ROTATE 360°</span>
              {Math.abs(userRotationY) > 0.1 && (
                <button
                  onClick={onResetRotation}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--accent-cyan)',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    padding: 0,
                    marginLeft: '4px',
                  }}
                >
                  [ RESET ]
                </button>
              )}
            </div>

            <a
              href="https://www.linkedin.com/in/aditya-dahuja/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '6px',
                background: 'rgba(0, 119, 181, 0.15)',
                border: '1px solid rgba(0, 119, 181, 0.4)',
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: '#38bdf8',
                textDecoration: 'none',
                pointerEvents: 'auto',
                backdropFilter: 'blur(8px)',
                letterSpacing: '0.1em',
              }}
            >
              <LinkedinIcon size={12} />
              <span>LINKEDIN PROFILE</span>
              <ExternalLink size={10} />
            </a>
          </div>
        </div>

        {/* Right Corner Bio Card with Photo */}
        <div
          className="hidden lg:block glass-panel"
          style={{
            padding: '16px 20px',
            borderRadius: '16px',
            maxWidth: '280px',
            textAlign: 'left',
            pointerEvents: 'auto',
            borderLeft: '3px solid var(--accent-cyan)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
            <img
              src="/assets/aditya.jpeg"
              alt="Aditya Dahuja"
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid var(--accent-cyan)',
                boxShadow: '0 0 15px rgba(0, 240, 255, 0.3)',
              }}
            />
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 800, color: '#ffffff' }}>
                ADITYA DAHUJA
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent-cyan)' }}>
                SDE CANDIDATE
              </div>
            </div>
          </div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: '#94a3b8', lineHeight: 1.45 }}>
            "Engineering clean, resilient full-stack systems with the speed and precision of a supercar."
          </div>
        </div>
      </div>

      {/* Bottom Row: Core Tech Competencies */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          mdDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: '2rem',
        }}
      >
        {/* Core Stack Badges */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: '1.25rem',
            width: '100%',
            maxWidth: '740px',
          }}
        >
          {[
            { value: 'MERN', unit: 'STACK', label: 'REACT • NODE • EXPRESS • MYSQL' },
            { value: 'SYSTEMS', unit: 'CORE', label: 'C++ • PYTHON • OOP • DSA' },
            { value: 'LEAD', unit: 'IMPACT', label: 'ORGANIZER @HACKARYAVERSE' },
            { value: 'UI/UX', unit: 'DESIGN', label: '3D GRAPHICS & MODERN WEB' },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass-panel"
              style={{
                padding: '14px 16px',
                borderRadius: '10px',
                borderLeft: '2px solid var(--accent-cyan)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>
                  {stat.value}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-cyan)' }}>
                  {stat.unit}
                </span>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '8.5px', letterSpacing: '0.1em', color: '#94a3b8', marginTop: '2px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            alignSelf: 'center',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#94a3b8',
            }}
          >
            SCROLL TO DECONSTRUCT STACK
          </span>
          <div
            className="animate-bounce-slow"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: '1px solid var(--accent-cyan)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-cyan)',
              boxShadow: '0 0 15px rgba(0, 240, 255, 0.2)',
            }}
          >
            <ChevronDown size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}
