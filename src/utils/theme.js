export const THEMES = {
  noire: {
    id: 'noire',
    name: 'NOIRE OBSIDIAN',
    tag: 'Signature Carbon Black',
    carColor: '#0a0b0e',
    caliperColor: '#00f0ff',
    accentColor: '#00f0ff',
    accentGlow: 'rgba(0, 240, 255, 0.35)',
    bgPrimary: '#060608',
    bgSecondary: '#0c0d12',
    bgCard: 'rgba(14, 15, 20, 0.85)',
    borderGlow: 'rgba(0, 240, 255, 0.4)',
    badgeBg: 'rgba(0, 240, 255, 0.12)',
    badgeBorder: 'rgba(0, 240, 255, 0.3)',
    pillColor: '#00f0ff',
    leatherColor: '#121316',
    rimColor: '#222630',
  },
  blanc: {
    id: 'blanc',
    name: 'BLANC PUR',
    tag: 'Glacier Pearl White',
    carColor: '#f1f3f7',
    caliperColor: '#d4af37',
    accentColor: '#e5c158', // Champagne Gold
    accentGlow: 'rgba(229, 193, 88, 0.35)',
    bgPrimary: '#08090d',
    bgSecondary: '#11131a',
    bgCard: 'rgba(18, 20, 28, 0.85)',
    borderGlow: 'rgba(229, 193, 88, 0.4)',
    badgeBg: 'rgba(229, 193, 88, 0.12)',
    badgeBorder: 'rgba(229, 193, 88, 0.3)',
    pillColor: '#e5c158',
    leatherColor: '#1c1b18',
    rimColor: '#dcdfe6',
  },
  jaune: {
    id: 'jaune',
    name: 'JAUNE MOLSHEIM',
    tag: 'Competition Racing Yellow',
    carColor: '#eab308',
    caliperColor: '#0a0a0c',
    accentColor: '#fbbf24',
    accentGlow: 'rgba(251, 191, 36, 0.35)',
    bgPrimary: '#070604',
    bgSecondary: '#121008',
    bgCard: 'rgba(22, 19, 12, 0.85)',
    borderGlow: 'rgba(251, 191, 36, 0.4)',
    badgeBg: 'rgba(251, 191, 36, 0.12)',
    badgeBorder: 'rgba(251, 191, 36, 0.3)',
    pillColor: '#fbbf24',
    leatherColor: '#18150f',
    rimColor: '#141416',
  },
  bleu: {
    id: 'bleu',
    name: 'BLEU ROYAL',
    tag: 'French Racing Atlantic Blue',
    carColor: '#164ea0',
    caliperColor: '#ff1e27',
    accentColor: '#3b82f6',
    accentGlow: 'rgba(59, 130, 246, 0.35)',
    bgPrimary: '#05070d',
    bgSecondary: '#090e1c',
    bgCard: 'rgba(11, 17, 32, 0.85)',
    borderGlow: 'rgba(59, 130, 246, 0.4)',
    badgeBg: 'rgba(59, 130, 246, 0.12)',
    badgeBorder: 'rgba(59, 130, 246, 0.3)',
    pillColor: '#3b82f6',
    leatherColor: '#10141d',
    rimColor: '#25334d',
  },
};

export function applyThemeVariables(theme) {
  const root = document.documentElement;
  root.style.setProperty('--bg-primary', theme.bgPrimary);
  root.style.setProperty('--bg-secondary', theme.bgSecondary);
  root.style.setProperty('--bg-card', theme.bgCard);
  root.style.setProperty('--accent-cyan', theme.accentColor);
  root.style.setProperty('--border-highlight', theme.borderGlow);
}
