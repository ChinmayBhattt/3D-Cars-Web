import React, { useState } from 'react';
import { Compass, Sparkles, Shield, CircleDot } from 'lucide-react';

export default function InteriorSection({ onSetCameraMode }) {
  const [selectedMaterial, setSelectedMaterial] = useState('leather');

  const materials = [
    {
      id: 'leather',
      name: 'HAVANA BROWN GRAIN LEATHER',
      badge: 'HAND-STITCHED',
      desc: 'Sourced from alpine steer hides, conditioned with natural wax, and tailored by master artisans in Molsheim with contrast French seams.',
      colorHex: '#6d4224',
      origin: 'Bavaria, Germany',
      texture: 'Full Grain Aniline',
    },
    {
      id: 'carbon',
      name: '3K SATIN TWILL CARBON FIBER',
      badge: 'STRUCTURAL WEAVE',
      desc: 'Autoclave-cured aerospace carbon weave with matte clearcoat, accentuating the monocoque cockpit tub and door cards.',
      colorHex: '#18191f',
      origin: 'Molsheim Aerospace Works',
      texture: '200g/m² Dry Carbon',
    },
    {
      id: 'aluminum',
      name: 'CNC MILLED BILLET ALUMINUM',
      badge: 'MONOLITHIC CHASSIS',
      desc: 'A single 120kg block of aerospace aluminum CNC-machined over 48 hours down to a single 4kg center console spine.',
      colorHex: '#9ca3af',
      origin: 'Zurich Precision Alloys',
      texture: 'Micro-Bead Blasted',
    },
    {
      id: 'chronograph',
      name: 'SWISS ANALOG INSTRUMENTATION',
      badge: 'HOROLOGY CRAFT',
      desc: 'Engine-turned guilloché dial faces inspired by Ettore Bugatti’s mechanical chronographs, illuminated by subtle optical fiber glow.',
      colorHex: '#d4af37',
      origin: 'Geneva, Switzerland',
      texture: 'Guilloché Sapphire',
    },
  ];

  const current = materials.find((m) => m.id === selectedMaterial);

  return (
    <section
      id="interior"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        padding: '7rem 2rem 5rem 2rem',
        background: 'linear-gradient(180deg, #070709 0%, #0d0f16 50%, #070709 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 20,
      }}
    >
      <div style={{ maxWidth: '1200px', width: '100%' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '999px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.2em',
              color: 'var(--accent-cyan)',
              marginBottom: '1rem',
            }}
          >
            <span>BESPOKE CABIN CRAFTSMANSHIP</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: '#ffffff',
              margin: '0 0 1rem 0',
            }}
          >
            THE HAVEN OF OPULENCE
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.1rem',
              color: '#94a3b8',
              maxWidth: '650px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            An intimate sanctuary cloaked in exquisite materials, combining Grand Tourer 
            comfort with the ergonomic command center of a 420 km/h hypercar.
          </p>
        </div>

        {/* Interactive Material Studio Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
          }}
        >
          {/* Material Selector Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#64748b', letterSpacing: '0.15em' }}>
              SELECT MATERIAL TO AUDIT
            </span>

            {materials.map((mat) => (
              <div
                key={mat.id}
                onClick={() => setSelectedMaterial(mat.id)}
                className={`glass-panel cursor-pointer ${selectedMaterial === mat.id ? 'glass-panel-glow' : ''}`}
                style={{
                  padding: '1.25rem 1.5rem',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                  borderLeft: selectedMaterial === mat.id ? '3px solid var(--accent-cyan)' : undefined,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: mat.colorHex,
                      border: '2px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                    }}
                  />
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: '#f8fafc' }}>
                      {mat.name}
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent-cyan)' }}>
                      {mat.badge}
                    </div>
                  </div>
                </div>
                <CircleDot size={18} className={selectedMaterial === mat.id ? 'text-cyan-400' : 'text-gray-600'} />
              </div>
            ))}
          </div>

          {/* Material Detail Inspection Box */}
          <div
            className="glass-panel"
            style={{
              padding: '2.5rem',
              borderRadius: '20px',
              borderTop: '2px solid var(--accent-cyan)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
              <Sparkles size={16} className="text-cyan-400" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-cyan)', letterSpacing: '0.15em' }}>
                ATELIER SPECIFICATION SHEET
              </span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
              {current?.name}
            </h3>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '2rem' }}>
              {current?.desc}
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                paddingTop: '1.5rem',
                marginBottom: '2rem',
              }}
            >
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#64748b', letterSpacing: '0.1em' }}>
                  PROVENANCE
                </span>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginTop: '4px' }}>
                  {current?.origin}
                </div>
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#64748b', letterSpacing: '0.1em' }}>
                  SURFACE GRAIN
                </span>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginTop: '4px' }}>
                  {current?.texture}
                </div>
              </div>
            </div>

            <button
              onClick={() => onSetCameraMode('interior')}
              className="btn-luxury"
              style={{ width: '100%' }}
            >
              <Compass size={15} />
              <span>ORBIT COCKPIT 3D PERSPECTIVE</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
