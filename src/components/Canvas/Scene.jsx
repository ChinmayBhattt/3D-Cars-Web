import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import Supercar from './Supercar';

// Camera controller that smoothly handles hero pose, exploded orbit, and section closeups
function CameraRig({ explodeProgress = 0, cameraMode = 'default' }) {
  const { camera } = useThree();
  const currentPos = useRef(new THREE.Vector3(3.2, 1.4, 4.2));
  const currentLookAt = useRef(new THREE.Vector3(0, 0.35, 0));

  useFrame((state, delta) => {
    let targetPos = new THREE.Vector3(3.2, 1.4, 4.2);
    let targetLook = new THREE.Vector3(0, 0.35, 0);

    if (cameraMode === 'wheel') {
      targetPos.set(2.2, 0.55, 2.4);
      targetLook.set(0.8, 0.35, 0.9);
    } else if (cameraMode === 'engine') {
      targetPos.set(-0.2, 2.2, -2.2);
      targetLook.set(0, 0.7, -0.6);
    } else if (cameraMode === 'interior') {
      targetPos.set(0.8, 1.15, 0.6);
      targetLook.set(0.1, 0.68, 0.1);
    } else if (cameraMode === 'exhaust') {
      targetPos.set(-0.2, 0.65, -3.6);
      targetLook.set(0, 0.35, -1.8);
    } else if (cameraMode === 'top') {
      targetPos.set(0.1, 6.0, 0.1);
      targetLook.set(0, 0, 0);
    } else {
      // Default scroll-driven exploded orbit
      const p = explodeProgress;
      const heroPos = new THREE.Vector3(3.2, 1.4, 4.2);
      const explodedPos = new THREE.Vector3(4.5, 2.8, 4.6);
      targetPos.lerpVectors(heroPos, explodedPos, p);

      const heroLook = new THREE.Vector3(0, 0.35, 0);
      const explodedLook = new THREE.Vector3(0, 0.55, 0.1);
      targetLook.lerpVectors(heroLook, explodedLook, p);
    }

    // Heavy luxury damping (power2-like feel)
    const factor = Math.min(1, delta * 3.5);
    currentPos.current.lerp(targetPos, factor);
    currentLookAt.current.lerp(targetLook, factor);

    camera.position.copy(currentPos.current);
    camera.lookAt(currentLookAt.current);
  });

  return null;
}

export default function Scene({
  explodeProgress = 0,
  carColor = '#0a0b0e',
  caliperColor = '#00f0ff',
  rimColor = '#222630',
  leatherColor = '#121316',
  activeHotspot = null,
  onSelectHotspot = () => {},
  cameraMode = 'default',
  isSpinning = false,
  userRotationY = 0,
  userRotationX = 0,
}) {
  return (
    <div className="w-full h-full relative" style={{ width: '100%', height: '100%' }}>
      <Canvas
        camera={{ position: [3.2, 1.4, 4.2], fov: 40 }}
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.35,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <CameraRig explodeProgress={explodeProgress} cameraMode={cameraMode} />

          {/* ========================================================= */}
          {/* STUDIO PHOTOSHOOT LIGHTING SETUP                          */}
          {/* ========================================================= */}
          <ambientLight intensity={0.45} />

          {/* Main Key Overhead Softbox */}
          <directionalLight
            position={[3, 7, 4]}
            intensity={2.8}
            castShadow
            shadow-mapSize={[1024, 1024]}
            shadow-bias={-0.0001}
          />

          {/* Dramatic Rim Light grazing the front hood & shoulder */}
          <spotLight
            position={[5, 3.5, 3]}
            intensity={4.2}
            color="#ffffff"
            angle={0.65}
            penumbra={0.8}
          />

          {/* Secondary Rim from rear */}
          <spotLight
            position={[-4, 3, -4]}
            intensity={3.2}
            color="#ffffff"
            angle={0.7}
            penumbra={0.9}
          />

          {/* Front Bumper Fill Light */}
          <directionalLight position={[0, 1.5, 5]} intensity={1.6} color="#e2e8f0" />

          {/* Environment Studio Reflection Map */}
          <Environment preset="city" environmentIntensity={0.9} />

          {/* 3D Car Assembly with Interactive Mouse Rotation */}
          <Supercar
            explodeProgress={explodeProgress}
            carColor={carColor}
            caliperColor={caliperColor}
            rimColor={rimColor}
            leatherColor={leatherColor}
            activeHotspot={activeHotspot}
            onSelectHotspot={onSelectHotspot}
            isSpinning={isSpinning}
            userRotationY={userRotationY}
            userRotationX={userRotationX}
          />

          {/* Soft Ground Contact Shadow (seamless pure black background) */}
          <ContactShadows
            position={[0, -0.15, 0]}
            opacity={0.95}
            scale={10}
            blur={2.0}
            far={3.5}
            resolution={1024}
            color="#000000"
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
