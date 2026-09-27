import React, { useState, useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import Scene from './components/Canvas/Scene';
import Navbar from './components/UI/Navbar';
import HeroOverlay from './components/UI/HeroOverlay';
import ExplodedOverlay from './components/UI/ExplodedOverlay';
import Preloader from './components/UI/Preloader';
import ThemeBar from './components/UI/ThemeBar';

import PerformanceSection from './components/Sections/PerformanceSection';
import DesignPhilosophySection from './components/Sections/DesignPhilosophySection';
import InteriorSection from './components/Sections/InteriorSection';
import ConfiguratorSection from './components/Sections/ConfiguratorSection';
import CtaSection from './components/Sections/CtaSection';

import { THEMES, applyThemeVariables } from './utils/theme';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [explodeProgress, setExplodeProgress] = useState(0);
  const [heroScroll, setHeroScroll] = useState(0);

  // 4 Theme system
  const [currentThemeId, setCurrentThemeId] = useState('noire');
  const currentTheme = THEMES[currentThemeId] || THEMES.noire;

  const [carColor, setCarColor] = useState(currentTheme.carColor);
  const [caliperColor, setCaliperColor] = useState(currentTheme.caliperColor);
  const [rimColor, setRimColor] = useState(currentTheme.rimColor);
  const [leatherColor, setLeatherColor] = useState(currentTheme.leatherColor);

  // Interactive mouse rotation state
  const [userRotationY, setUserRotationY] = useState(0);
  const [userRotationX, setUserRotationX] = useState(0);
  const isDraggingRef = useRef(false);
  const prevPointerRef = useRef({ x: 0, y: 0 });

  // Camera & inspection state
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [cameraMode, setCameraMode] = useState('default');
  const [isSpinning, setIsSpinning] = useState(false);
  const [isOpenInquire, setIsOpenInquire] = useState(false);

  const lenisRef = useRef(null);
  const explodedTrackRef = useRef(null);

  // Switch theme function
  const handleSelectTheme = useCallback((themeId) => {
    const theme = THEMES[themeId];
    if (!theme) return;
    setCurrentThemeId(themeId);
    setCarColor(theme.carColor);
    setCaliperColor(theme.caliperColor);
    setRimColor(theme.rimColor);
    setLeatherColor(theme.leatherColor);
    applyThemeVariables(theme);
  }, []);

  // Initialize theme on mount
  useEffect(() => {
    applyThemeVariables(THEMES.noire);
  }, []);

  // Initialize Lenis smooth scroll and synchronize with GSAP ScrollTrigger
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.8,
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateLenis);
    };
  }, []);

  // Set up ScrollTrigger for the exploded 3D sequence
  useEffect(() => {
    if (isLoading) return;

    ScrollTrigger.refresh();

    // Hero trigger for fading out hero text
    const heroTrigger = ScrollTrigger.create({
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        setHeroScroll(self.progress);
      },
    });

    // Main 3D Exploded View Scroll-Scrub Trigger (scrub: 1.2)
    const explodeTrigger = ScrollTrigger.create({
      trigger: '#exploded-track',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.2,
      onUpdate: (self) => {
        setExplodeProgress(self.progress);
        if (self.progress > 0.05 && self.progress < 0.95) {
          setCameraMode('default');
        }
      },
    });

    return () => {
      heroTrigger.kill();
      explodeTrigger.kill();
    };
  }, [isLoading]);

  // Mouse Drag rotation handlers
  const handlePointerDown = (e) => {
    // Only drag if not clicking buttons or interactive links
    if (e.target.closest('button, a, input, select, .callout-badge-compact')) return;
    isDraggingRef.current = true;
    prevPointerRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - prevPointerRef.current.x;
    const deltaY = e.clientY - prevPointerRef.current.y;
    prevPointerRef.current = { x: e.clientX, y: e.clientY };

    setUserRotationY((prev) => prev + deltaX * 0.007);
    setUserRotationX((prev) => Math.max(-0.25, Math.min(0.25, prev + deltaY * 0.003)));
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const resetRotation = () => {
    setUserRotationY(0);
    setUserRotationX(0);
  };

  // Hotspot selection
  const handleSelectHotspot = (id) => {
    setActiveHotspot(id);
    if (id === 'engine') setCameraMode('engine');
    else if (id === 'wheel') setCameraMode('wheel');
    else if (id === 'aerodynamics') setCameraMode('default');
    else if (id === 'exhaust') setCameraMode('exhaust');
    else if (id === 'chassis') setCameraMode('default');
  };

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        backgroundColor: 'var(--bg-primary)',
        color: '#f8fafc',
        minHeight: '100vh',
        position: 'relative',
        cursor: isDraggingRef.current ? 'grabbing' : 'default',
        transition: 'background-color 0.4s ease',
      }}
    >
      {/* Preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Luxury Navbar */}
      <Navbar onOpenInquire={() => setIsOpenInquire(true)} />

      {/* Floating 4-Theme Selector Bar */}
      <ThemeBar
        currentThemeId={currentThemeId}
        onSelectTheme={handleSelectTheme}
      />

      {/* ========================================================= */}
      {/* FIXED 3D VIEWPORT CANVAS (STAYS PINNED FOR SCROLL HERO)   */}
      {/* ========================================================= */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 5,
          pointerEvents: 'none', // Handled smoothly by pointer event listeners
        }}
        className="studio-vignette"
      >
        <Scene
          explodeProgress={explodeProgress}
          carColor={carColor}
          caliperColor={caliperColor}
          rimColor={rimColor}
          leatherColor={leatherColor}
          activeHotspot={activeHotspot}
          onSelectHotspot={handleSelectHotspot}
          cameraMode={cameraMode}
          isSpinning={isSpinning}
          userRotationY={userRotationY}
          userRotationX={userRotationX}
        />
      </div>

      {/* Hero Section (100vh) */}
      <section
        id="hero"
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          zIndex: 10,
        }}
      >
        <HeroOverlay
          scrollProgress={heroScroll}
          onResetRotation={resetRotation}
          userRotationY={userRotationY}
        />
      </section>

      {/* ========================================================= */}
      {/* SCROLL-DRIVEN EXPLODED SEQUENCE TRACK (320vh HEIGHT)      */}
      {/* ========================================================= */}
      <section
        id="exploded-track"
        ref={explodedTrackRef}
        style={{
          position: 'relative',
          width: '100%',
          height: '320vh',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            position: 'sticky',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            pointerEvents: 'none',
          }}
        >
          <ExplodedOverlay
            explodeProgress={explodeProgress}
            activeHotspot={activeHotspot}
            onSelectHotspot={handleSelectHotspot}
          />
        </div>
      </section>

      {/* ========================================================= */}
      {/* SUBSEQUENT SHOWCASE SECTIONS                              */}
      {/* ========================================================= */}
      <div style={{ position: 'relative', zIndex: 20 }}>
        {/* Performance & W16 Engine Stats */}
        <PerformanceSection />

        {/* Design Philosophy featuring user assets */}
        <DesignPhilosophySection
          onSetCameraMode={(mode) => setCameraMode(mode)}
          currentCameraMode={cameraMode}
        />

        {/* Bespoke Cockpit Interior & Material Lab */}
        <InteriorSection onSetCameraMode={(mode) => setCameraMode(mode)} />

        {/* Interactive Atelier 3D Configurator */}
        <ConfiguratorSection
          carColor={carColor}
          onChangeCarColor={(col) => setCarColor(col)}
          caliperColor={caliperColor}
          onChangeCaliperColor={(col) => setCaliperColor(col)}
          enableOrbit={false}
          onToggleOrbit={resetRotation}
          isSpinning={isSpinning}
          onToggleSpin={() => setIsSpinning(!isSpinning)}
        />

        {/* Final CTA, Technical Sheet & Inquire Modal */}
        <CtaSection
          isOpenInquire={isOpenInquire}
          onOpenInquire={() => setIsOpenInquire(true)}
          onCloseInquire={() => setIsOpenInquire(false)}
        />
      </div>
    </div>
  );
}
