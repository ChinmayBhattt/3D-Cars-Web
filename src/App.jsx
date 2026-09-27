import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import Scene from './components/Canvas/Scene';
import Navbar from './components/UI/Navbar';
import HeroOverlay from './components/UI/HeroOverlay';
import ExplodedOverlay from './components/UI/ExplodedOverlay';
import Preloader from './components/UI/Preloader';

import PerformanceSection from './components/Sections/PerformanceSection';
import DesignPhilosophySection from './components/Sections/DesignPhilosophySection';
import InteriorSection from './components/Sections/InteriorSection';
import ConfiguratorSection from './components/Sections/ConfiguratorSection';
import CtaSection from './components/Sections/CtaSection';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [explodeProgress, setExplodeProgress] = useState(0);
  const [heroScroll, setHeroScroll] = useState(0);

  // Customization & Camera state
  const [carColor, setCarColor] = useState('#0c0d12');
  const [caliperColor, setCaliperColor] = useState('#00f0ff');
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [cameraMode, setCameraMode] = useState('default');
  const [enableOrbit, setEnableOrbit] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isOpenInquire, setIsOpenInquire] = useState(false);

  const lenisRef = useRef(null);
  const explodedTrackRef = useRef(null);

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

    // Refresh triggers once preloader finishes
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

    // Main 3D Exploded View Scroll-Scrub Trigger (scrub: 1.2 for heavy, physical luxury feel)
    const explodeTrigger = ScrollTrigger.create({
      trigger: '#exploded-track',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.2,
      onUpdate: (self) => {
        setExplodeProgress(self.progress);
        // Reset custom camera mode back to scroll-driven default when scrolling in exploded view
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

  // Handle hotspot selection
  const handleSelectHotspot = (id) => {
    setActiveHotspot(id);
    if (id === 'engine') setCameraMode('engine');
    else if (id === 'wheel') setCameraMode('wheel');
    else if (id === 'aerodynamics') setCameraMode('default');
    else if (id === 'exhaust') setCameraMode('exhaust');
    else if (id === 'chassis') setCameraMode('default');
  };

  return (
    <div style={{ backgroundColor: '#060608', color: '#f8fafc', minHeight: '100vh', position: 'relative' }}>
      {/* Preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Luxury Navbar */}
      <Navbar onOpenInquire={() => setIsOpenInquire(true)} />

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
          pointerEvents: enableOrbit ? 'auto' : 'none',
        }}
        className="studio-vignette"
      >
        <Scene
          explodeProgress={explodeProgress}
          carColor={carColor}
          caliperColor={caliperColor}
          activeHotspot={activeHotspot}
          onSelectHotspot={handleSelectHotspot}
          cameraMode={cameraMode}
          enableOrbit={enableOrbit}
          isSpinning={isSpinning}
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
        <HeroOverlay scrollProgress={heroScroll} />
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
        {/* Sticky Exploded HUD Overlay that remains on screen during explode scrub */}
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
          enableOrbit={enableOrbit}
          onToggleOrbit={() => setEnableOrbit(!enableOrbit)}
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
