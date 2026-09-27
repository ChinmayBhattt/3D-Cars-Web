import React from 'react';
import { Camera, Eye, Sparkles } from 'lucide-react';

export default function DesignPhilosophySection({ onSetCameraMode, currentCameraMode }) {
  const stories = [
    {
      title: 'SCULPTED CARBON MONOLITH',
      subtitle: 'SURFACE PURITY & DRAMATIC STANCE',
      desc: 'Every single body component is handcrafted from ultra-fine carbon fiber, covered with a deep gloss black finish that lets the woven carbon structure shimmer under direct light.',
      image: '/assets/01_LVN_34-Front.jpeg',
      cameraMode: 'default',
      tag: 'EXTERIOR FRONT',
    },
    {
      title: 'THE DORSAL SEAM TRIBUTE',
      subtitle: 'JEAN BUGATTI TYPE 57 SC ATLANTIC',
      desc: 'The unbroken fin line running along the center spine pays homage to the legendary Type 57 SC Atlantic coupe. It seamlessly merges aerodynamic flow with historical majesty.',
      image: '/assets/images.jpeg',
      cameraMode: 'top',
      tag: 'AERODYNAMIC CREST',
    },
    {
      title: 'INTEGRATED HEXA-EXHAUST',
      subtitle: '6 3D-PRINTED TITANIUM OUTLETS',
      desc: 'A signature design tribute: six inline exhaust pipes crown the rear diffuser, allowing the 8.0-liter W16 powerplant to exhale while generating ground-effect downforce.',
      image: '/assets/images-3.jpeg',
      cameraMode: 'exhaust',
      tag: 'HEXA TITANIUM',
    },
    {
      title: 'CRYSTALLINE LIGHT ARCHITECTURE',
      subtitle: 'PARAMETRIC LED OPTICS',
      desc: 'Ultra-thin curved LED tail light wave traverses the rear contour in a single unbroken beam, complemented by parametric faceted LED headlights carved into the carbon fenders.',
      image: '/assets/images-2.jpeg',
      cameraMode: 'wheel',
      tag: 'LED WAVE DESIGN',
    },
  ];

  return (
    <section
      id="design"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        padding: '7rem 2rem 5rem 2rem',
        background: '#070709',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 20,
      }}
    >
      <div style={{ maxWidth: '1200px', width: '100%' }}>
        {/* Section Header */}
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
            <span>AESTHETIC MANIFESTO</span>
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
            DESIGN PHILOSOPHY
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.1rem',
              color: '#94a3b8',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            "Perfection is not when there is nothing more to add, but when there is nothing left to take away."
            A one-off creation reconciling hypercar performance with haute couture elegance.
          </p>
        </div>

        {/* 4 Feature Story Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3rem',
          }}
        >
          {stories.map((story, i) => (
            <div
              key={i}
              className="glass-panel"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.4s ease',
              }}
            >
              {/* Image Preview Container */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '280px',
                  overflow: 'hidden',
                  background: '#0a0b10',
                }}
              >
                <img
                  src={story.image}
                  alt={story.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    background: 'rgba(6, 6, 8, 0.85)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0, 240, 255, 0.3)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    color: 'var(--accent-cyan)',
                    letterSpacing: '0.15em',
                  }}
                >
                  {story.tag}
                </div>
              </div>

              {/* Text & 3D Orbit Button */}
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#64748b', letterSpacing: '0.15em', marginBottom: '6px' }}>
                    {story.subtitle}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
                    {story.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.6, margin: '0 0 1.5rem 0' }}>
                    {story.desc}
                  </p>
                </div>

                <button
                  onClick={() => onSetCameraMode(story.cameraMode)}
                  className="btn-luxury"
                  style={{
                    padding: '0.75rem 1.4rem',
                    fontSize: '0.8rem',
                    alignSelf: 'flex-start',
                    borderColor: currentCameraMode === story.cameraMode ? 'var(--accent-cyan)' : undefined,
                    color: currentCameraMode === story.cameraMode ? 'var(--accent-cyan)' : '#ffffff',
                  }}
                >
                  <Camera size={14} />
                  <span>{currentCameraMode === story.cameraMode ? 'VIEWING ANGLE ACTIVE' : 'ALIGN 3D CAMERA'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
