import React, { useState } from 'react';
import { Volume2, VolumeX, Menu, X, Sparkles } from 'lucide-react';
import { startEngineSound, stopEngineSound, revEngine } from '../../utils/audio';

export default function Navbar({ onOpenInquire }) {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleAudio = () => {
    if (isPlayingAudio) {
      stopEngineSound();
      setIsPlayingAudio(false);
    } else {
      startEngineSound();
      setIsPlayingAudio(true);
      setTimeout(() => revEngine(), 500);
    }
  };

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 40,
        padding: '1.25rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(180deg, rgba(6,6,8,0.85) 0%, rgba(6,6,8,0.2) 80%, transparent 100%)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      {/* Brand Logo & Name */}
      <div
        onClick={() => scrollTo('hero')}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        <div
          style={{
            width: '42px',
            height: '24px',
            borderRadius: '999px',
            background: 'linear-gradient(135deg, #d31620, #880910)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px rgba(211, 22, 32, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '11px',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '1px',
            }}
          >
            EB
          </span>
        </div>

        <div>
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '14px',
              fontWeight: 800,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#f8fafc',
            }}
          >
            BUGATTI
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--accent-cyan)',
            }}
          >
            LA VOITURE NOIRE
          </div>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
        }}
        className="hidden md:flex"
      >
        {[
          { label: 'OVERVIEW', id: 'hero' },
          { label: 'EXPLODED VIEW', id: 'exploded' },
          { label: 'PERFORMANCE', id: 'performance' },
          { label: 'DESIGN', id: 'design' },
          { label: 'INTERIOR', id: 'interior' },
          { label: 'ATELIER', id: 'atelier' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            style={{
              background: 'none',
              border: 'none',
              color: '#94a3b8',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              letterSpacing: '0.12em',
              cursor: 'pointer',
              transition: 'color 0.2s ease',
              padding: '6px 0',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#00f0ff')}
            onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Action Buttons: Engine Sound & Inquire */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {/* Sound Toggle Button */}
        <button
          onClick={toggleAudio}
          title={isPlayingAudio ? 'Mute W16 Engine' : 'Start W16 Engine Sound'}
          style={{
            background: isPlayingAudio ? 'rgba(0, 240, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)',
            border: `1px solid ${isPlayingAudio ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.12)'}`,
            borderRadius: '999px',
            padding: '8px 14px',
            color: isPlayingAudio ? 'var(--accent-cyan)' : '#94a3b8',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.1em',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: isPlayingAudio ? '0 0 15px rgba(0, 240, 255, 0.3)' : 'none',
          }}
        >
          {isPlayingAudio ? <Volume2 size={15} /> : <VolumeX size={15} />}
          <span className="hidden sm:inline">{isPlayingAudio ? 'W16 ACTIVE' : 'ENGINE AUDIO'}</span>
          {isPlayingAudio && (
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#00f0ff',
                boxShadow: '0 0 8px #00f0ff',
              }}
              className="animate-pulse"
            />
          )}
        </button>

        {/* CTA Inquire Button */}
        <button
          onClick={onOpenInquire}
          className="btn-luxury btn-primary-red"
          style={{
            padding: '8px 20px',
            fontSize: '11px',
          }}
        >
          <Sparkles size={13} />
          <span>INQUIRE</span>
        </button>

        {/* Mobile menu hamburger toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#f8fafc',
            cursor: 'pointer',
            padding: '4px',
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            background: 'rgba(6, 6, 8, 0.96)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
          className="md:hidden"
        >
          {[
            { label: 'OVERVIEW', id: 'hero' },
            { label: 'EXPLODED VIEW', id: 'exploded' },
            { label: 'PERFORMANCE', id: 'performance' },
            { label: 'DESIGN', id: 'design' },
            { label: 'INTERIOR', id: 'interior' },
            { label: 'ATELIER', id: 'atelier' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                background: 'none',
                border: 'none',
                color: '#e2e8f0',
                fontFamily: 'var(--font-mono)',
                fontSize: '14px',
                textAlign: 'left',
                padding: '8px 0',
                cursor: 'pointer',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
