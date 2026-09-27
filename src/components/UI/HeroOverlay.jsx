import React from 'react';
import { ChevronDown, Compass, ShieldCheck } from 'lucide-react';

export default function HeroOverlay({ scrollProgress = 0 }) {
  // Fade out hero overlay as user scrolls down towards exploded sequence
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
              letterSpacing: '0.18em',
              color: 'var(--accent-cyan)',
              marginBottom: '1rem',
              backdropFilter: 'blur(10px)',
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)' }} />
            <span>MOLSHEIM ATELIER • CHASSIS 001/001</span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 4.6vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
              textTransform: 'uppercase',
              margin: '0 0 1rem 0',
              background: 'linear-gradient(180deg, #ffffff 40%, #94a3b8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              maxWidth: '820px',
            }}
          >
            ENGINEERED BEYOND LIMITS
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.85rem, 1.4vw, 1.15rem)',
              letterSpacing: '0.2em',
              color: '#94a3b8',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            Bugatti La Voiture Noire • The Black Car
          </p>
        </div>

        {/* Right Corner Heritage Badge */}
        <div
          className="hidden lg:block glass-panel"
          style={{
            padding: '16px 20px',
            borderRadius: '12px',
            maxWidth: '240px',
            textAlign: 'right',
          }}
        >
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#64748b', letterSpacing: '0.15em' }}>
            HOMMAGE TO
          </div>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '13px', fontWeight: 700, color: '#f8fafc', marginTop: '2px' }}>
            TYPE 57 SC ATLANTIC
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-cyan)', marginTop: '4px' }}>
            JEAN BUGATTI'S LOST COUPE
          </div>
        </div>
      </div>

      {/* Bottom Row: Quick Stats & Scroll Indicator */}
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
        {/* Specs Highlights */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: '1.25rem',
            width: '100%',
            maxWidth: '680px',
          }}
        >
          {[
            { value: '1,500', unit: 'PS', label: 'HORSEPOWER' },
            { value: '1,600', unit: 'NM', label: 'PEAK TORQUE' },
            { value: '420', unit: 'KM/H', label: 'TOP SPEED' },
            { value: '2.4', unit: 'SEC', label: '0–100 KM/H' },
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
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
                  {stat.value}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>
                  {stat.unit}
                </span>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.12em', color: '#64748b', marginTop: '2px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll to Explore Indicator */}
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
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#94a3b8',
            }}
          >
            SCROLL TO EXPLODE
          </span>
          <div
            className="animate-bounce-slow"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: '1px solid rgba(0, 240, 255, 0.4)',
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
