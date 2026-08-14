// Web Audio API ambient drone synthesizer for authentic Vedic chant listening experience

class AmbientAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private oscillators: OscillatorNode[] = [];
  private filter: BiquadFilterNode | null = null;

  public init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public togglePlay(): boolean {
    this.init();
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    if (!this.ctx) return;
    this.stop(); // clear previous

    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.01, this.ctx.currentTime);
    this.masterGain.gain.exponentialRampToValueAtTime(0.18, this.ctx.currentTime + 1.5);

    this.filter = this.ctx.createBiquadFilter();
    this.filter.type = 'lowpass';
    this.filter.frequency.setValueAtTime(420, this.ctx.currentTime);

    // Tanpura / Om resonant frequencies (C# base: 136.1 Hz - traditional 432Hz Om tuning)
    const freqs = [136.1, 272.2, 204.15, 408.3];

    freqs.forEach((f, idx) => {
      if (!this.ctx || !this.filter) return;
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(f, this.ctx.currentTime);

      // Slight LFO pitch drift for organic tanpura feel
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.2 + idx * 0.1, this.ctx.currentTime);
      lfoGain.gain.setValueAtTime(0.8, this.ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);
      lfo.start();

      oscGain.gain.setValueAtTime(0.12 / (idx + 1), this.ctx.currentTime);

      osc.connect(oscGain);
      oscGain.connect(this.filter);
      osc.start();
      this.oscillators.push(osc);
    });

    this.filter.connect(this.masterGain);
    this.masterGain.connect(this.ctx.destination);
    this.isPlaying = true;
  }

  public stop() {
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.5);
      setTimeout(() => {
        this.oscillators.forEach(o => {
          try { o.stop(); o.disconnect(); } catch {}
        });
        this.oscillators = [];
        this.isPlaying = false;
      }, 500);
    } else {
      this.isPlaying = false;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const audioEngine = new AmbientAudioEngine();

export const createSyntheticAudio = () => {
  audioEngine.init();
  audioEngine.start();
};

export const stopSyntheticAudio = () => {
  audioEngine.stop();
};
