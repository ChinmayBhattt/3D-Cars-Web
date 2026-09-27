import React from 'react';
import { Layers, Crosshair } from 'lucide-react';

export default function ExplodedOverlay({
  explodeProgress = 0,
  activeHotspot = null,
  onSelectHotspot = () => {},
}) {
  // Only display when user has entered exploded sequence
  if (explodeProgress < 0.08 || explodeProgress > 0.98) return null;

  let stageTitle = 'STAGE 1: FRONTEND DYNAMICS & UI/UX';
  let stageDesc = 'Decoupling React.js, Three.js 3D viewport, and interactive motion systems.';
  if (explodeProgress >= 0.35 && explodeProgress < 0.65) {
    stageTitle = 'STAGE 2: CORE LOGIC & DATA MONOCOQUE';
    stageDesc = 'Exposing C++, Python algorithms, Data Structures, and MySQL relational schemas.';
  } else if (explodeProgress >= 0.65) {
    stageTitle = 'STAGE 3: BACKEND POWERPLANT & LEADERSHIP';
    stageDesc = 'Revealing Node.js/Express REST server engines and HackAryaVerse organizer leadership.';
  }

  const percentage = Math.round(explodeProgress * 100);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '5.5rem 2rem 2rem 2rem',
        zIndex: 15,
      }}
    >
      {/* Top Left: Compact Telemetry HUD */}
      <div
        className="glass-panel"
        style={{
          alignSelf: 'flex-start',
          padding: '12px 18px',
          borderRadius: '10px',
          borderLeft: '3px solid var(--accent-cyan)',
          maxWidth: '340px',
          pointerEvents: 'auto',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Layers size={13} className="text-cyan-400" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent-cyan)', letterSpacing: '0.12em' }}>
              TECH STACK DECONSTRUCTION
            </span>
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, color: '#f8fafc' }}>
            {percentage}%
          </span>
        </div>

        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '12px', fontWeight: 800, color: '#ffffff', letterSpacing: '0.04em' }}>
          {stageTitle}
        </div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: '#94a3b8', marginTop: '2px', lineHeight: 1.35 }}>
          {stageDesc}
        </div>

        {/* Progress bar */}
        <div style={{ width: '100%', height: '2px', background: 'rgba(255,255,255,0.1)', marginTop: '8px', borderRadius: '2px', overflow: 'hidden' }}>
          <div style={{ width: `${percentage}%`, height: '100%', background: 'var(--accent-cyan)', transition: 'width 0.1s ease' }} />
        </div>
      </div>

      {/* Top Right: Competency Focus Pills */}
      <div
        style={{
          alignSelf: 'flex-end',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          pointerEvents: 'auto',
        }}
        className="hidden sm:flex"
      >
        {[
          { id: 'frontend', label: 'Frontend & UI/UX (React/3D)' },
          { id: 'systems', label: 'Systems & Logic (C++/Python)' },
          { id: 'database', label: 'Data Architecture (MySQL)' },
          { id: 'backend', label: 'Backend APIs (Node/Express)' },
          { id: 'leadership', label: 'Leadership @HackAryaVerse' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => onSelectHotspot(item.id)}
            style={{
              background: activeHotspot === item.id ? 'rgba(0, 240, 255, 0.2)' : 'rgba(8, 9, 14, 0.75)',
              border: `1px solid ${activeHotspot === item.id ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.1)'}`,
              backdropFilter: 'blur(8px)',
              padding: '5px 10px',
              borderRadius: '6px',
              color: activeHotspot === item.id ? '#ffffff' : '#cbd5e1',
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              textAlign: 'right',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: '6px',
              transition: 'all 0.2s ease',
            }}
          >
            <Crosshair size={10} className={activeHotspot === item.id ? 'text-cyan-400' : 'text-gray-500'} />
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      {/* Bottom Center: Minimalist Scroll Guide */}
      <div
        style={{
          alignSelf: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          letterSpacing: '0.18em',
          color: 'rgba(255, 255, 255, 0.55)',
          background: 'rgba(0, 0, 0, 0.6)',
          padding: '6px 14px',
          borderRadius: '999px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(8px)',
        }}
      >
        SCROLL TO DECONSTRUCT • SCROLL UP TO REASSEMBLE
      </div>
    </div>
  );
}
