import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles, Music, Bell } from 'lucide-react';

interface AudioAmbiencePlayerProps {
  theme: string;
}

export const AudioAmbiencePlayer: React.FC<AudioAmbiencePlayerProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundMode, setSoundMode] = useState<'sistrum' | 'drone' | 'bells'>('sistrum');
  const [volume, setVolume] = useState(0.3);
  
  const audioCtxRef = useRef<AudioContext | null>(null);
  const isRunningRef = useRef(false);
  const intervalRef = useRef<number | null>(null);

  const togglePlay = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  const startAudio = () => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      setIsPlaying(true);
      isRunningRef.current = true;
      scheduleAmbience();
    } catch (err) {
      console.error('Audio initialization failed', err);
    }
  };

  const stopAudio = () => {
    setIsPlaying(false);
    isRunningRef.current = false;
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const scheduleAmbience = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);

    // Rhythmic loop simulating Ethiopian Senasel / Sistrum metallic rattle & chimes
    intervalRef.current = window.setInterval(() => {
      if (!isRunningRef.current || !audioCtxRef.current) return;

      const ctx = audioCtxRef.current;
      const now = ctx.currentTime;

      if (soundMode === 'sistrum') {
        // Metallic Senasel (Sistrum) shakers sound
        const bufferSize = ctx.sampleRate * 0.08;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.2));
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;

        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 4500 + Math.random() * 1000;
        filter.Q.value = 4;

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(volume * 0.15, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

        noise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        noise.start(now);
      } else if (soundMode === 'bells') {
        // Soft Orthodox Church Bell resonant strike
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();
        
        osc.type = 'sine';
        const freqs = [330, 440, 554.37, 659.25];
        const randomFreq = freqs[Math.floor(Math.random() * freqs.length)];
        osc.frequency.setValueAtTime(randomFreq, now);

        gainNode.gain.setValueAtTime(volume * 0.2, now);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

        osc.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 2.6);
      } else {
        // Deep Monastic Ambient Warm Drone
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(110, now);

        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(volume * 0.1, now + 0.5);
        gainNode.gain.linearRampToValueAtTime(0, now + 1.8);

        osc.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 1.9);
      }
    }, soundMode === 'sistrum' ? 450 : soundMode === 'bells' ? 2500 : 1500);
  };

  useEffect(() => {
    if (isPlaying) {
      scheduleAmbience();
    }
  }, [soundMode, volume]);

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  return (
    <div className="flex items-center gap-3 bg-parchment-200/50 dark:bg-ethiopian-obsidianCard/80 border border-ethiopian-gold/30 rounded-full px-3 py-1.5 backdrop-blur-sm">
      <button
        onClick={togglePlay}
        className={`p-2 rounded-full transition-all duration-300 ${
          isPlaying 
            ? 'bg-ethiopian-gold text-black shadow-md shadow-ethiopian-gold/30 scale-105' 
            : 'hover:bg-ethiopian-gold/20 text-ethiopian-gold'
        }`}
        title={isPlaying ? "Mute Church Ambience" : "Play Sacred Church Ambience (Senasel / Sistrum)"}
      >
        {isPlaying ? <Volume2 className="w-4 h-4 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
      </button>

      {isPlaying && (
        <div className="flex items-center gap-2 text-xs">
          <div className="flex bg-black/10 dark:bg-white/10 rounded-full p-0.5 border border-ethiopian-gold/20">
            <button
              onClick={() => setSoundMode('sistrum')}
              className={`px-2 py-0.5 rounded-full transition-all ${
                soundMode === 'sistrum' ? 'bg-ethiopian-gold text-black font-semibold' : 'text-ethiopian-gold/70 hover:text-ethiopian-gold'
              }`}
              title="Senasel (Sistrum Rattle)"
            >
              <Sparkles className="w-3 h-3 inline mr-1" />
              Senasel
            </button>
            <button
              onClick={() => setSoundMode('bells')}
              className={`px-2 py-0.5 rounded-full transition-all ${
                soundMode === 'bells' ? 'bg-ethiopian-gold text-black font-semibold' : 'text-ethiopian-gold/70 hover:text-ethiopian-gold'
              }`}
              title="Churches Bells Chime"
            >
              <Bell className="w-3 h-3 inline mr-1" />
              Bells
            </button>
            <button
              onClick={() => setSoundMode('drone')}
              className={`px-2 py-0.5 rounded-full transition-all ${
                soundMode === 'drone' ? 'bg-ethiopian-gold text-black font-semibold' : 'text-ethiopian-gold/70 hover:text-ethiopian-gold'
              }`}
              title="Monastic Chant Drone"
            >
              <Music className="w-3 h-3 inline mr-1" />
              Drone
            </button>
          </div>

          <input
            type="range"
            min="0.05"
            max="0.8"
            step="0.05"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-16 h-1 accent-ethiopian-gold bg-ethiopian-gold/30 rounded-lg cursor-pointer"
            title="Volume"
          />
        </div>
      )}
    </div>
  );
};
