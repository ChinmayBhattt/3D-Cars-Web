import React from 'react';
import { Palette, Eye, RotateCw, Check } from 'lucide-react';

export default function ConfiguratorSection({
  carColor,
  onChangeCarColor,
  caliperColor,
  onChangeCaliperColor,
  enableOrbit,
  onToggleOrbit,
  isSpinning,
  onToggleSpin,
}) {
  const paintFinishes = [
    { name: 'Noire Gloss Carbon', hex: '#0c0d12', desc: 'Signature deep black clearcoat over 3k woven carbon' },
    { name: 'Atlantic Deep Blue', hex: '#091834', desc: 'Historic tribute to Jean Bugatti’s Atlantic coupe' },
    { name: 'Liquid Chrome Silver', hex: '#6e7784', desc: 'Mirror polished metallic alloy pigment' },
    { name: 'French Racing Blue', hex: '#1d5ba8', desc: 'Traditional Grand Prix racing pedigree' },
    { name: 'Rosso Corsa Crimson', hex: '#820b12', desc: 'High-heat competition vermilion tint' },
    { name: 'Satin Stealth Matte', hex: '#1a1b20', desc: 'Light-absorbing satin finish with zero reflections' },
  ];

  const calipers = [
    { name: 'Electric Cyan', hex: '#00f0ff' },
    { name: 'Competition Red', hex: '#ff1e27' },
    { name: 'Speed Yellow', hex: '#eab308' },
    { name: 'Polished Silver', hex: '#e2e8f0' },
  ];

  return (
    <section
      id="atelier"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        padding: '7rem 2rem 5rem 2rem',
        background: '#060608',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 20,
      }}
    >
      <div style={{ maxWidth: '1200px', width: '100%' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
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
            <span>LIVE 3D CONFIGURATOR</span>
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
            ATELIER BESPOKE STUDIO
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
            Customize your unique commission in real time. Switch exterior body finishes, 
            caliper accents, and enable 360° orbital camera inspection.
          </p>
        </div>

        {/* Configuration Controls Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
          {/* Paint Swatches Box */}
          <div
            className="glass-panel"
            style={{
              padding: '2rem',
              borderRadius: '20px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
              <Palette size={18} className="text-cyan-400" />
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                EXTERIOR BESPOKE FINISH
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
              {paintFinishes.map((p) => {
                const isActive = carColor.toLowerCase() === p.hex.toLowerCase();
                return (
                  <button
                    key={p.name}
                    onClick={() => onChangeCarColor(p.hex)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: `1px solid ${isActive ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.1)'}`,
                      borderRadius: '12px',
                      padding: '12px 8px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      boxShadow: isActive ? '0 0 20px rgba(0, 240, 255, 0.25)' : 'none',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        backgroundColor: p.hex,
                        border: '2px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {isActive && <Check size={16} color="#ffffff" />}
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: isActive ? '#ffffff' : '#94a3b8', textAlign: 'center' }}>
                      {p.name}
                    </span>
                  </button>
                );
              })}
            </div>

            <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5 }}>
              Selected:{' '}
              <strong style={{ color: 'var(--accent-cyan)' }}>
                {paintFinishes.find((p) => p.hex.toLowerCase() === carColor.toLowerCase())?.name || 'Custom'}
              </strong>{' '}
              — {paintFinishes.find((p) => p.hex.toLowerCase() === carColor.toLowerCase())?.desc}
            </div>
          </div>

          {/* Caliper & Camera Interaction Controls Box */}
          <div
            className="glass-panel"
            style={{
              padding: '2rem',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
                <Eye size={18} className="text-cyan-400" />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                  BRAKE CALIPER ACCENT
                </h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem', marginBottom: '2rem' }}>
                {calipers.map((c) => {
                  const isActive = caliperColor.toLowerCase() === c.hex.toLowerCase();
                  return (
                    <button
                      key={c.name}
                      onClick={() => onChangeCaliperColor(c.hex)}
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: `1px solid ${isActive ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.1)'}`,
                        borderRadius: '12px',
                        padding: '10px 6px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '6px',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                      }}
                    >
                      <div
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '50%',
                          backgroundColor: c.hex,
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {isActive && <Check size={14} color="#000000" />}
                      </div>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: isActive ? '#ffffff' : '#94a3b8' }}>
                        {c.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Orbit & Spin Toggles */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button
                onClick={onToggleOrbit}
                className="btn-luxury"
                style={{
                  width: '100%',
                  borderColor: enableOrbit ? 'var(--accent-cyan)' : undefined,
                  boxShadow: enableOrbit ? '0 0 25px rgba(0, 240, 255, 0.3)' : undefined,
                  color: enableOrbit ? 'var(--accent-cyan)' : '#ffffff',
                }}
              >
                <RotateCw size={15} className={enableOrbit ? 'animate-spin' : ''} />
                <span>{enableOrbit ? '360° FREE ORBIT ACTIVE (CLICK & DRAG)' : 'ENABLE 360° FREE ORBIT'}</span>
              </button>

              <button
                onClick={onToggleSpin}
                className="btn-luxury"
                style={{
                  width: '100%',
                  borderColor: isSpinning ? 'var(--accent-cyan)' : undefined,
                  color: isSpinning ? 'var(--accent-cyan)' : '#ffffff',
                }}
              >
                <RotateCw size={15} />
                <span>{isSpinning ? 'DYNAMIC WHEEL SPIN: ON' : 'ENABLE DYNAMIC WHEEL SPIN'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
