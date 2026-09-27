import React, { useState } from 'react';
import { Gauge, Zap, Flame, Wind, Play } from 'lucide-react';
import { revEngine } from '../../utils/audio';

export default function PerformanceSection() {
  const [isRevving, setIsRevving] = useState(false);

  const handleRev = () => {
    setIsRevving(true);
    revEngine();
    setTimeout(() => setIsRevving(false), 1400);
  };

  const stats = [
    {
      icon: <Gauge className="text-cyan-400" size={24} />,
      title: 'TOP SPEED',
      value: '420',
      unit: 'KM/H',
      sub: 'Electronically Limited for Road Use (261 MPH)',
    },
    {
      icon: <Zap className="text-cyan-400" size={24} />,
      title: 'ACCELERATION',
      value: '2.4',
      unit: 'SEC',
      sub: '0 to 100 KM/H (0 to 62 MPH) in 2.4s',
    },
    {
      icon: <Flame className="text-cyan-400" size={24} />,
      title: 'POWER OUTPUT',
      value: '1,500',
      unit: 'PS',
      sub: '1,479 HP @ 6,700 RPM Quad-Turbocharged',
    },
    {
      icon: <Wind className="text-cyan-400" size={24} />,
      title: 'MAXIMUM TORQUE',
      value: '1,600',
      unit: 'NM',
      sub: 'Flat torque curve from 2,000 to 6,000 RPM',
    },
  ];

  return (
    <section
      id="performance"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        padding: '7rem 2rem 5rem 2rem',
        background: 'linear-gradient(180deg, rgba(6,6,8,0.92) 0%, #090a0f 50%, #060608 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
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
              background: 'rgba(0, 240, 255, 0.08)',
              border: '1px solid rgba(0, 240, 255, 0.25)',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.2em',
              color: 'var(--accent-cyan)',
              marginBottom: '1rem',
            }}
          >
            <span>ENGINEERING BENCHMARK</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: '#ffffff',
              margin: '0 0 1rem 0',
              letterSpacing: '-0.01em',
            }}
          >
            THE PINNACLE OF POWER
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
            An 8.0-liter W16 quad-turbo engine with 16 cylinders arranged in an 
            ingenious dual-V configuration, delivering unprecedented hyper-sports performance.
          </p>
        </div>

        {/* 4 Performance Stat Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3.5rem',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-panel"
              style={{
                padding: '2rem 1.8rem',
                borderRadius: '16px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.4)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 240, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <div style={{ padding: '10px', borderRadius: '10px', background: 'rgba(255,255,255,0.04)' }}>
                  {stat.icon}
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#64748b', letterSpacing: '0.15em' }}>
                  {stat.title}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '0.75rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '3.2rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--accent-cyan)',
                  }}
                >
                  {stat.unit}
                </span>
              </div>

              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: '#94a3b8', margin: 0, lineHeight: 1.5 }}>
                {stat.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Engine Throttle Interactive Bar */}
        <div
          className="glass-panel"
          style={{
            padding: '2.5rem',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            mdDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            background: 'radial-gradient(ellipse at top, rgba(0,240,255,0.06) 0%, rgba(14,15,20,0.85) 70%)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ff1e27' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#ff4d53', letterSpacing: '0.15em' }}>
                ACOUSTIC SYNTHESIZER
              </span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
              EXPERIENCE THE W16 QUAD-TURBO ROAR
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: '#94a3b8', marginTop: '6px', margin: 0 }}>
              Trigger the throttle response to hear the 16-cylinder ignition cycle and turbocharger blow-off.
            </p>
          </div>

          <button
            onClick={handleRev}
            className={`btn-luxury ${isRevving ? 'btn-primary-red' : ''}`}
            style={{
              padding: '1.1rem 2.5rem',
              fontSize: '0.95rem',
              boxShadow: isRevving ? '0 0 40px rgba(255, 30, 39, 0.8)' : undefined,
            }}
          >
            <Play size={16} fill="currentColor" />
            <span>{isRevving ? 'THROTTLE REV ACTIVE...' : 'REV W16 ENGINE'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
