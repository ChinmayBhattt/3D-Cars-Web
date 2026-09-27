import React, { useState } from 'react';
import { Volume2, VolumeX, Menu, X, Send } from 'lucide-react';
import { LinkedinIcon } from './Icons';
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
        padding: '1.2rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(180deg, rgba(6,6,8,0.88) 0%, rgba(6,6,8,0.2) 80%, transparent 100%)',
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
            height: '26px',
            borderRadius: '999px',
            background: 'linear-gradient(135deg, #1e293b, #0f172a)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px rgba(0, 240, 255, 0.3)',
            border: '1px solid var(--accent-cyan)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '11px',
              fontWeight: 900,
              color: 'var(--accent-cyan)',
              letterSpacing: '1px',
            }}
          >
            AD
          </span>
        </div>

        <div>
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '15px',
              fontWeight: 800,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#f8fafc',
            }}
          >
            ADITYA DAHUJA
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--accent-cyan)',
            }}
          >
            ASPIRING SDE • TEAM LEAD
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
        className="hidden lg:flex"
      >
        {[
          { label: 'OVERVIEW', id: 'hero' },
          { label: 'TECH ARCHITECTURE', id: 'exploded' },
          { label: 'TELEMETRY', id: 'performance' },
          { label: 'EXPERIENCE & PROJECTS', id: 'projects' },
          { label: 'ABOUT ADITYA', id: 'about' },
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
              fontSize: '11px',
              letterSpacing: '0.12em',
              cursor: 'pointer',
              transition: 'color 0.2s ease',
              padding: '6px 0',
            }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--accent-cyan)')}
            onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Action Buttons: LinkedIn, Audio, Connect */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        {/* LinkedIn Quick Link */}
        <a
          href="https://www.linkedin.com/in/aditya-dahuja/"
          target="_blank"
          rel="noopener noreferrer"
          title="Connect on LinkedIn"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '50%',
            width: '34px',
            height: '34px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#00f0ff',
            textDecoration: 'none',
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent-cyan)';
            e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 240, 255, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <LinkedinIcon size={15} />
        </a>

        {/* Engine Sound Toggle Button (Preserved!) */}
        <button
          onClick={toggleAudio}
          title={isPlayingAudio ? 'Mute Audio' : 'Play Engine Sound'}
          style={{
            background: isPlayingAudio ? 'rgba(0, 240, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)',
            border: `1px solid ${isPlayingAudio ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.12)'}`,
            borderRadius: '999px',
            padding: '7px 12px',
            color: isPlayingAudio ? 'var(--accent-cyan)' : '#94a3b8',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            letterSpacing: '0.1em',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          className="hidden sm:flex"
        >
          {isPlayingAudio ? <Volume2 size={14} /> : <VolumeX size={14} />}
          <span>{isPlayingAudio ? 'AUDIO ON' : 'AUDIO'}</span>
        </button>

        {/* Connect / Hire Button */}
        <button
          onClick={onOpenInquire}
          className="btn-luxury"
          style={{
            padding: '7px 18px',
            fontSize: '11px',
            borderColor: 'var(--accent-cyan)',
          }}
        >
          <Send size={12} />
          <span>CONNECT</span>
        </button>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#f8fafc',
            cursor: 'pointer',
            padding: '4px',
          }}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
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
            background: 'rgba(6, 6, 8, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
          className="lg:hidden"
        >
          {[
            { label: 'OVERVIEW', id: 'hero' },
            { label: 'TECH ARCHITECTURE', id: 'exploded' },
            { label: 'TELEMETRY', id: 'performance' },
            { label: 'EXPERIENCE & PROJECTS', id: 'projects' },
            { label: 'ABOUT ADITYA', id: 'about' },
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
                fontSize: '13px',
                textAlign: 'left',
                padding: '8px 0',
                cursor: 'pointer',
              }}
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://www.linkedin.com/in/aditya-dahuja/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--accent-cyan)',
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              textDecoration: 'none',
              padding: '8px 0',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <LinkedinIcon size={15} />
            <span>LINKEDIN PROFILE</span>
          </a>
        </div>
      )}
    </header>
  );
}
