import React from 'react';
import { THEMES } from '../../utils/theme';
import { Sparkles, Check } from 'lucide-react';

export default function ThemeBar({ currentThemeId, onSelectTheme }) {
  const themesList = Object.values(THEMES);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 35,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        background: 'rgba(10, 11, 16, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '999px',
        padding: '6px 10px',
        boxShadow: '0 12px 35px rgba(0, 0, 0, 0.65), 0 0 20px rgba(0, 240, 255, 0.08)',
        userSelect: 'none',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '0 10px 0 6px',
          borderRight: '1px solid rgba(255, 255, 255, 0.1)',
        }}
        className="hidden md:flex"
      >
        <Sparkles size={13} style={{ color: 'var(--accent-cyan)' }} />
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            letterSpacing: '0.14em',
            color: '#94a3b8',
            whiteSpace: 'nowrap',
          }}
        >
          THEME / FINISH:
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        {themesList.map((t) => {
          const isActive = currentThemeId === t.id;
          return (
            <button
              key={t.id}
              onClick={() => onSelectTheme(t.id)}
              title={`${t.name} — ${t.tag}`}
              style={{
                background: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                border: `1px solid ${isActive ? t.accentColor : 'transparent'}`,
                borderRadius: '999px',
                padding: '6px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: isActive ? `0 0 15px ${t.accentGlow}` : 'none',
              }}
            >
              {/* Color swatch circle */}
              <div
                style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  backgroundColor: t.carColor,
                  border: `2px solid ${t.accentColor}`,
                  boxShadow: '0 2px 6px rgba(0,0,0,0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {isActive && (
                  <Check
                    size={11}
                    color={t.id === 'blanc' || t.id === 'jaune' ? '#000000' : '#ffffff'}
                    strokeWidth={3}
                  />
                )}
              </div>

              {/* Name label */}
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#ffffff' : '#94a3b8',
                  whiteSpace: 'nowrap',
                }}
                className="hidden sm:inline"
              >
                {t.name.split(' ')[0]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
