// Web Audio API engine sound synthesizer for W16 Quad-Turbo Engine
let audioCtx = null;
let masterGain = null;
let engineOsc1 = null;
let engineOsc2 = null;
let engineGain = null;
let turboNoise = null;
let isAudioRunning = false;

function initAudio() {
  if (audioCtx) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  audioCtx = new AudioContext();

  masterGain = audioCtx.createGain();
  masterGain.gain.setValueAtTime(0.3, audioCtx.currentTime);
  masterGain.connect(audioCtx.destination);
}

export function startEngineSound() {
  try {
    initAudio();
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    if (isAudioRunning) return;

    // Sub rumble oscillator (W16 low frequency pulse)
    engineOsc1 = audioCtx.createOscillator();
    engineOsc1.type = 'sawtooth';
    engineOsc1.frequency.setValueAtTime(38, audioCtx.currentTime); // ~800 RPM idle rumble

    // Upper harmonic oscillator
    engineOsc2 = audioCtx.createOscillator();
    engineOsc2.type = 'triangle';
    engineOsc2.frequency.setValueAtTime(76, audioCtx.currentTime);

    // Distortion / waveshaper for throaty growl
    const distortion = audioCtx.createWaveShaper();
    const curve = new Float32Array(256);
    for (let i = 0; i < 256; ++i) {
      const x = (i * 2) / 256 - 1;
      curve[i] = ((3 + 10) * x * 20 * (Math.PI / 180)) / (Math.PI + 10 * Math.abs(x));
    }
    distortion.curve = curve;
    distortion.oversample = '2x';

    // Low pass filter
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(220, audioCtx.currentTime);

    engineGain = audioCtx.createGain();
    engineGain.gain.setValueAtTime(0.01, audioCtx.currentTime);
    engineGain.gain.exponentialRampToValueAtTime(0.25, audioCtx.currentTime + 0.8);

    engineOsc1.connect(distortion);
    engineOsc2.connect(distortion);
    distortion.connect(filter);
    filter.connect(engineGain);
    engineGain.connect(masterGain);

    engineOsc1.start();
    engineOsc2.start();

    isAudioRunning = true;
  } catch (err) {
    console.warn('Audio start error:', err);
  }
}

export function stopEngineSound() {
  if (!isAudioRunning || !engineGain) return;
  try {
    engineGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
    setTimeout(() => {
      if (engineOsc1) { engineOsc1.stop(); engineOsc1.disconnect(); engineOsc1 = null; }
      if (engineOsc2) { engineOsc2.stop(); engineOsc2.disconnect(); engineOsc2 = null; }
      isAudioRunning = false;
    }, 550);
  } catch (err) {
    console.warn('Audio stop error:', err);
  }
}

export function revEngine() {
  if (!isAudioRunning) {
    startEngineSound();
  }
  if (!audioCtx || !engineOsc1) return;

  const now = audioCtx.currentTime;
  // Rev pitch up to 180Hz (~4,500 RPM)
  engineOsc1.frequency.cancelScheduledValues(now);
  engineOsc1.frequency.setValueAtTime(engineOsc1.frequency.value, now);
  engineOsc1.frequency.exponentialRampToValueAtTime(140, now + 0.35);
  engineOsc1.frequency.exponentialRampToValueAtTime(45, now + 1.2);

  if (engineOsc2) {
    engineOsc2.frequency.cancelScheduledValues(now);
    engineOsc2.frequency.setValueAtTime(engineOsc2.frequency.value, now);
    engineOsc2.frequency.exponentialRampToValueAtTime(280, now + 0.35);
    engineOsc2.frequency.exponentialRampToValueAtTime(90, now + 1.2);
  }

  // Turbo whistle burst
  playTurboWhistle();
}

function playTurboWhistle() {
  if (!audioCtx) return;
  try {
    const whistleOsc = audioCtx.createOscillator();
    const whistleGain = audioCtx.createGain();
    const now = audioCtx.currentTime;

    whistleOsc.type = 'sine';
    whistleOsc.frequency.setValueAtTime(1800, now);
    whistleOsc.frequency.exponentialRampToValueAtTime(3200, now + 0.4);
    whistleOsc.frequency.exponentialRampToValueAtTime(800, now + 0.9);

    whistleGain.gain.setValueAtTime(0.001, now);
    whistleGain.gain.exponentialRampToValueAtTime(0.06, now + 0.25);
    whistleGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);

    whistleOsc.connect(whistleGain);
    whistleGain.connect(masterGain);
    whistleOsc.start(now);
    whistleOsc.stop(now + 0.95);
  } catch (e) {
    // ignore
  }
}
