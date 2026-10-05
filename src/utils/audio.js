// Web Audio Synthesizer for Micro-Haptics
let audioCtx = null;
let isSoundMuted = false;

export function getMuteState() {
  return isSoundMuted;
}

export function setMuteState(muted) {
  isSoundMuted = muted;
  return isSoundMuted;
}

export function initAudio() {
  if (!audioCtx && typeof window !== 'undefined') {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playTone(freq, type = 'sine', duration = 0.08, volume = 0.15) {
  if (isSoundMuted) return;
  initAudio();
  if (!audioCtx) return;

  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    gain.gain.setValueAtTime(volume, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (err) {
    console.debug('Audio playback note:', err);
  }
}

export function playSendSound() {
  if (isSoundMuted) return;
  initAudio();
  if (!audioCtx) return;

  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.frequency.setValueAtTime(450, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(850, audioCtx.currentTime + 0.06);
    gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.07);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.07);
  } catch (err) {
    console.debug('Audio playback note:', err);
  }
}

export function playReceiveSound() {
  if (isSoundMuted) return;
  initAudio();
  if (!audioCtx) return;

  playTone(587.33, 'sine', 0.09, 0.1);
  setTimeout(() => playTone(880, 'sine', 0.12, 0.08), 70);
}

export function playConfirmSound() {
  if (isSoundMuted) return;
  initAudio();
  if (!audioCtx) return;

  playTone(523.25, 'sine', 0.12, 0.12);
  setTimeout(() => playTone(659.25, 'sine', 0.12, 0.12), 90);
  setTimeout(() => playTone(783.99, 'sine', 0.25, 0.15), 180);
}
