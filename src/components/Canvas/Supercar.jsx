import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Html } from '@react-three/drei';
import * as THREE from 'three';

// Preload the car model
useGLTF.preload('/models/ferrari.glb');

export default function Supercar({
  explodeProgress = 0,
  carColor = '#0a0b0e',
  caliperColor = '#00f0ff',
  rimColor = '#222630',
  leatherColor = '#121316',
  activeHotspot = null,
  onSelectHotspot = () => {},
  isSpinning = false,
  userRotationY = 0,
  userRotationX = 0,
}) {
  const groupRef = useRef();
  const { scene } = useGLTF('/models/ferrari.glb');

  const clonedScene = useMemo(() => scene.clone(), [scene]);

  const parts = useMemo(() => {
    const p = {
      body: null,
      carbon: null,
      carbonTrim: null,
      glass: null,
      grills: null,
      wheelFL: null,
      wheelFR: null,
      wheelRL: null,
      wheelRR: null,
      steering: null,
      interior: null,
      lights: null,
      lightsRed: null,
      brakes: [],
    };

    clonedScene.traverse((child) => {
      if (child.name === 'body') p.body = child;
      else if (child.name === 'carbon fibre') p.carbon = child;
      else if (child.name === 'carbon_fibre_trim') p.carbonTrim = child;
      else if (child.name === 'glass') p.glass = child;
      else if (child.name === 'grills') p.grills = child;
      else if (child.name === 'wheel_fl') p.wheelFL = child;
      else if (child.name === 'wheel_fr') p.wheelFR = child;
      else if (child.name === 'wheel_rl') p.wheelRL = child;
      else if (child.name === 'wheel_rr') p.wheelRR = child;
      else if (child.name === 'steering_wheel') p.steering = child;
      else if (child.name === 'interior_dark' || child.name === 'leather' || child.name === 'carpet') p.interior = child;
      else if (child.name === 'lights' || child.name === 'leds') p.lights = child;
      else if (child.name === 'lights_red') p.lightsRed = child;

      if (child.name && child.name.toLowerCase().includes('brake')) {
        p.brakes.push(child);
      }
    });

    return p;
  }, [clonedScene]);

  const initialPos = useMemo(() => {
    return {
      body: parts.body ? parts.body.position.clone() : new THREE.Vector3(),
      wheelFL: parts.wheelFL ? parts.wheelFL.position.clone() : new THREE.Vector3(-0.84, 0.36, -1.15),
      wheelFR: parts.wheelFR ? parts.wheelFR.position.clone() : new THREE.Vector3(0.83, 0.36, -1.15),
      wheelRL: parts.wheelRL ? parts.wheelRL.position.clone() : new THREE.Vector3(-0.82, 0.36, 1.49),
      wheelRR: parts.wheelRR ? parts.wheelRR.position.clone() : new THREE.Vector3(0.82, 0.36, 1.49),
      steering: parts.steering ? parts.steering.position.clone() : new THREE.Vector3(-0.35, 0.8, -0.35),
      carbon: parts.carbon ? parts.carbon.position.clone() : new THREE.Vector3(),
      glass: parts.glass ? parts.glass.position.clone() : new THREE.Vector3(),
      lights: parts.lights ? parts.lights.position.clone() : new THREE.Vector3(),
      lightsRed: parts.lightsRed ? parts.lightsRed.position.clone() : new THREE.Vector3(),
    };
  }, [parts]);

  // Realistic materials tuning
  useEffect(() => {
    clonedScene.traverse((child) => {
      if (!child.isMesh) return;
      child.castShadow = true;
      child.receiveShadow = true;

      const mat = child.material;
      if (!mat) return;

      const matName = (mat.name || '').toLowerCase();
      const nodeName = (child.name || '').toLowerCase();

      // Exterior Car Body Paint with clearcoat
      if (nodeName === 'body' || matName.includes('body_color') || matName.includes('paint')) {
        const isWhite = carColor.toLowerCase().includes('f1') || carColor.toLowerCase().includes('fff') || carColor.toLowerCase().includes('ece');
        const isYellow = carColor.toLowerCase().includes('eab') || carColor.toLowerCase().includes('f59');
        
        child.material = new THREE.MeshPhysicalMaterial({
          color: new THREE.Color(carColor),
          metalness: isWhite ? 0.35 : (isYellow ? 0.65 : 0.85),
          roughness: isWhite ? 0.18 : 0.12,
          clearcoat: 1.0,
          clearcoatRoughness: 0.03,
          reflectivity: 1.0,
          envMapIntensity: 2.2,
        });
      }
      // Exposed Carbon Fiber Splitter & Aero Trims
      else if (nodeName.includes('carbon') || matName.includes('carbon')) {
        child.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color('#101115'),
          metalness: 0.65,
          roughness: 0.28,
          envMapIntensity: 1.8,
        });
      }
      // Interior Leather / Cockpit
      else if (nodeName.includes('leather') || matName.includes('leather') || nodeName.includes('interior') || matName.includes('interior') || nodeName.includes('carpet')) {
        child.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color(leatherColor || '#14151a'),
          metalness: 0.15,
          roughness: 0.75,
        });
      }
      // Crystal tinted automotive glass
      else if (nodeName.includes('glass') || matName.includes('glass')) {
        child.material = new THREE.MeshPhysicalMaterial({
          color: new THREE.Color('#06080d'),
          transparent: true,
          opacity: 0.38,
          roughness: 0.03,
          metalness: 0.2,
          transmission: 0.6,
          ior: 1.52,
          depthWrite: false,
          envMapIntensity: 2.0,
        });
      }
      // Tire rubber (matte dark charcoal)
      else if (nodeName.includes('tire') || matName.includes('tire')) {
        child.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color('#141518'),
          metalness: 0.05,
          roughness: 0.88,
        });
      }
      // Brake Calipers & Discs
      else if (nodeName.includes('brake') || matName.includes('brake')) {
        child.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color(caliperColor),
          metalness: 0.85,
          roughness: 0.2,
          emissive: new THREE.Color(caliperColor),
          emissiveIntensity: 0.15,
          envMapIntensity: 1.6,
        });
      }
      // Rims / Directional Alloys
      else if (nodeName.includes('rim') || nodeName.includes('wheel') || nodeName.includes('centre')) {
        child.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color(rimColor || '#222630'),
          metalness: 0.94,
          roughness: 0.16,
          envMapIntensity: 2.4,
        });
      }
      // Signature LED Headlights
      else if (nodeName.includes('led') || nodeName.includes('lights') || matName.includes('light')) {
        if (nodeName.includes('red') || matName.includes('red') || matName.includes('taillight')) {
          child.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color('#ff0a1a'),
            emissive: new THREE.Color('#ff0015'),
            emissiveIntensity: 2.5,
            roughness: 0.1,
          });
        } else {
          child.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color('#e0f4ff'),
            emissive: new THREE.Color('#bde5ff'),
            emissiveIntensity: 2.0,
            roughness: 0.1,
          });
        }
      }
      // Grille mesh & black trim
      else if (nodeName.includes('grill') || nodeName.includes('trim') || nodeName.includes('plastic')) {
        child.material = new THREE.MeshStandardMaterial({
          color: new THREE.Color('#0c0d11'),
          metalness: 0.8,
          roughness: 0.4,
        });
      }
    });
  }, [clonedScene, carColor, caliperColor, rimColor, leatherColor]);

  // Smooth frame loop driving physical exploded kinematics & interactive mouse rotation
  useFrame((state, delta) => {
    const p = explodeProgress; // 0 to 1

    // Apply interactive user mouse rotation with smooth damping
    if (groupRef.current) {
      const baseRotationY = Math.PI - 0.45;
      const targetRotY = baseRotationY + userRotationY;
      const targetRotX = userRotationX;

      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.12);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.12);

      // Subtle breathing motion when idle at hero pose and not dragging
      if (p < 0.05 && !isSpinning && Math.abs(userRotationY) < 0.01) {
        groupRef.current.position.y = -0.15 + Math.sin(state.clock.elapsedTime * 1.2) * 0.012;
      }
    }

    // 1. Four wheels float outward along their axles
    if (parts.wheelFL) {
      parts.wheelFL.position.x = initialPos.wheelFL.x - p * 0.92;
      parts.wheelFL.position.z = initialPos.wheelFL.z - p * 0.25;
      parts.wheelFL.position.y = initialPos.wheelFL.y + p * 0.04;
      if (isSpinning) parts.wheelFL.rotation.x += delta * 4;
    }
    if (parts.wheelFR) {
      parts.wheelFR.position.x = initialPos.wheelFR.x + p * 0.92;
      parts.wheelFR.position.z = initialPos.wheelFR.z - p * 0.25;
      parts.wheelFR.position.y = initialPos.wheelFR.y + p * 0.04;
      if (isSpinning) parts.wheelFR.rotation.x += delta * 4;
    }
    if (parts.wheelRL) {
      parts.wheelRL.position.x = initialPos.wheelRL.x - p * 0.98;
      parts.wheelRL.position.z = initialPos.wheelRL.z + p * 0.35;
      parts.wheelRL.position.y = initialPos.wheelRL.y + p * 0.04;
      if (isSpinning) parts.wheelRL.rotation.x += delta * 4;
    }
    if (parts.wheelRR) {
      parts.wheelRR.position.x = initialPos.wheelRR.x + p * 0.98;
      parts.wheelRR.position.z = initialPos.wheelRR.z + p * 0.35;
      parts.wheelRR.position.y = initialPos.wheelRR.y + p * 0.04;
      if (isSpinning) parts.wheelRR.rotation.x += delta * 4;
    }

    // 2. Body shell lifts and separates upward
    if (parts.body) {
      parts.body.position.y = initialPos.body.y + p * 0.52;
      parts.body.position.z = initialPos.body.z - p * 0.06;
    }

    // 3. Glass canopy lifts higher for cutaway view
    if (parts.glass) {
      parts.glass.position.y = initialPos.glass.y + p * 0.82;
      parts.glass.position.z = initialPos.glass.z - p * 0.04;
    }

    // 4. Steering wheel & cockpit controls float towards viewer
    if (parts.steering) {
      parts.steering.position.y = initialPos.steering.y + p * 0.38;
      parts.steering.position.z = initialPos.steering.z - p * 0.28;
    }

    // 5. Carbon fiber ground-effects lower down
    if (parts.carbon) {
      parts.carbon.position.y = initialPos.carbon.y - p * 0.22;
    }

    // 6. Headlights float forward
    if (parts.lights) {
      parts.lights.position.z = initialPos.lights.z - p * 0.32;
    }

    // 7. Taillights float backward
    if (parts.lightsRed) {
      parts.lightsRed.position.z = initialPos.lightsRed.z + p * 0.32;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.15, 0]} dispose={null}>
      {/* Base Photorealistic 3D Car Model */}
      <primitive object={clonedScene} />

      {/* ========================================================= */}
      {/* ADITYA DAHUJA TECH STACK 3D DECONSTRUCTION BADGES         */}
      {/* ========================================================= */}

      {/* 1. FRONT LEFT WHEEL: FRONTEND & UI/UX */}
      {explodeProgress > 0.22 && (
        <Html position={[-1.75, 0.42, -1.0]} center distanceFactor={7} zIndexRange={[100, 0]}>
          <div
            className="callout-badge-compact cursor-pointer"
            onClick={() => onSelectHotspot('frontend')}
            style={{
              background: 'rgba(6, 7, 10, 0.88)',
              border: `1px solid ${caliperColor || '#00f0ff'}`,
              backdropFilter: 'blur(12px)',
              padding: '6px 12px',
              borderRadius: '8px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7)',
              whiteSpace: 'nowrap',
              maxWidth: '190px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: caliperColor || '#00f0ff' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: caliperColor || '#00f0ff', letterSpacing: '0.12em', fontWeight: 700 }}>
                FRONTEND & UI/UX
              </span>
            </div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '11px', fontWeight: 800, color: '#ffffff' }}>
              React.js & Three.js 3D
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: '#94a3b8' }}>
              GSAP • Modern JavaScript
            </div>
          </div>
        </Html>
      )}

      {/* 2. AERODYNAMIC SPLITTER: CORE ALGORITHMS & SYSTEMS */}
      {explodeProgress > 0.35 && (
        <Html position={[1.3, 0.35, -1.5]} center distanceFactor={7} zIndexRange={[100, 0]}>
          <div
            className="callout-badge-compact cursor-pointer"
            onClick={() => onSelectHotspot('systems')}
            style={{
              background: 'rgba(6, 7, 10, 0.88)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(12px)',
              padding: '6px 12px',
              borderRadius: '8px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7)',
              whiteSpace: 'nowrap',
              maxWidth: '190px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#00f0ff' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: '#00f0ff', letterSpacing: '0.12em', fontWeight: 700 }}>
                SYSTEMS & LOGIC
              </span>
            </div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '11px', fontWeight: 800, color: '#ffffff' }}>
              C++ & Python Engines
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: '#94a3b8' }}>
              DSA • OOP • Clean Code
            </div>
          </div>
        </Html>
      )}

      {/* 3. COCKPIT: DATA ARCHITECTURE & DATABASE */}
      {explodeProgress > 0.48 && (
        <Html position={[-1.1, 1.25, 0.2]} center distanceFactor={7} zIndexRange={[100, 0]}>
          <div
            className="callout-badge-compact cursor-pointer"
            onClick={() => onSelectHotspot('database')}
            style={{
              background: 'rgba(6, 7, 10, 0.88)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(12px)',
              padding: '6px 12px',
              borderRadius: '8px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7)',
              whiteSpace: 'nowrap',
              maxWidth: '190px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#00f0ff' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: '#00f0ff', letterSpacing: '0.12em', fontWeight: 700 }}>
                DATA ARCHITECTURE
              </span>
            </div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '11px', fontWeight: 800, color: '#ffffff' }}>
              MySQL & Relational Models
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: '#94a3b8' }}>
              Query Optimization & Schema
            </div>
          </div>
        </Html>
      )}

      {/* 4. MID-REAR ENGINE: BACKEND POWERPLANT */}
      {explodeProgress > 0.62 && (
        <Html position={[1.35, 1.15, 0.9]} center distanceFactor={7} zIndexRange={[100, 0]}>
          <div
            className="callout-badge-compact cursor-pointer"
            onClick={() => onSelectHotspot('backend')}
            style={{
              background: 'rgba(6, 7, 10, 0.88)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(12px)',
              padding: '6px 12px',
              borderRadius: '8px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7)',
              whiteSpace: 'nowrap',
              maxWidth: '190px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#00f0ff' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: '#00f0ff', letterSpacing: '0.12em', fontWeight: 700 }}>
                BACKEND POWERPLANT
              </span>
            </div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '11px', fontWeight: 800, color: '#ffffff' }}>
              Node.js & Express.js
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: '#94a3b8' }}>
              REST APIs • Microservices
            </div>
          </div>
        </Html>
      )}

      {/* 5. REAR EXHAUST / AERO: LEADERSHIP & ECOSYSTEM */}
      {explodeProgress > 0.72 && (
        <Html position={[-0.8, 0.3, 2.2]} center distanceFactor={7} zIndexRange={[100, 0]}>
          <div
            className="callout-badge-compact cursor-pointer"
            onClick={() => onSelectHotspot('leadership')}
            style={{
              background: 'rgba(6, 7, 10, 0.88)',
              border: '1px solid rgba(255, 255, 0.2)',
              backdropFilter: 'blur(12px)',
              padding: '6px 12px',
              borderRadius: '8px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7)',
              whiteSpace: 'nowrap',
              maxWidth: '190px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#00f0ff' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: '#00f0ff', letterSpacing: '0.12em', fontWeight: 700 }}>
                LEADERSHIP & EVENTS
              </span>
            </div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '11px', fontWeight: 800, color: '#ffffff' }}>
              Organizer @HackAryaVerse
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: '#94a3b8' }}>
              Team Lead • Community Drive
            </div>
          </div>
        </Html>
      )}
    </group>
  );
}
