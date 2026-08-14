import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Repeat, Music, X } from 'lucide-react';
import { audioEngine } from '../utils/audio';

interface AudioPlayerBarProps {
  currentMantraTitle: string;
  currentVerseInfo?: string;
  onClosePlayer?: () => void;
}

export const AudioPlayerBar: React.FC<AudioPlayerBarProps> = ({
  currentMantraTitle,
  currentVerseInfo,
  onClosePlayer
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(15);
  const [volumeMuted, setVolumeMuted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [isRepeat, setIsRepeat] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            if (isRepeat) return 0;
            setIsPlaying(false);
            audioEngine.stop();
            return 0;
          }
          return prev + 0.5 * playbackSpeed;
        });
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed, isRepeat]);

  const handleTogglePlay = () => {
    const active = audioEngine.togglePlay();
    setIsPlaying(active);
  };

  const handleSpeedCycle = () => {
    const speeds = [0.75, 1, 1.25, 1.5];
    const idx = speeds.indexOf(playbackSpeed);
    setPlaybackSpeed(speeds[(idx + 1) % speeds.length]);
  };

  return (
    <div className="fixed bottom-16 md:bottom-0 left-0 right-0 z-40 bg-[#FFFFFF] dark:bg-[#1A1A1A] border-t border-[#E5E1DA] dark:border-[#2A2A2A] shadow-xl p-3 px-4 transition-colors">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        {/* Play/Pause Main Circular Saffron Button */}
        <button
          onClick={handleTogglePlay}
          className="size-10 rounded-full bg-[#FF9933] text-white flex items-center justify-center shrink-0 hover:bg-[#E08520] active:scale-95 transition-all shadow-sm"
          title={isPlaying ? 'Pause Chant' : 'Play Chant Audio'}
        >
          {isPlaying ? <Pause className="size-4 fill-current" /> : <Play className="size-4 fill-current ml-0.5" />}
        </button>

        {/* Info & Progress */}
        <div className="flex-1 min-w-0 space-y-1">
          <div className="flex justify-between items-center text-xs">
            <div className="flex items-center gap-2 truncate">
              <Music className="size-3.5 text-[#FF9933] shrink-0" />
              <span className="font-bold text-[#1A1A1A] dark:text-[#F5F2EF] truncate">
                {currentMantraTitle}
              </span>
              {currentVerseInfo && (
                <span className="text-[10px] text-[#8B4513] dark:text-[#FF9933] font-medium hidden sm:inline">
                  • {currentVerseInfo}
                </span>
              )}
            </div>
            <span className="text-[10px] font-mono text-[#6B7280] dark:text-[#9A8F85] shrink-0">
              {Math.floor((progress * 5.7) / 60).toString().padStart(2, '0')}:
              {Math.floor((progress * 5.7) % 60).toString().padStart(2, '0')} / 09:30
            </span>
          </div>

          {/* Scrubber Bar */}
          <div 
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const newPct = Math.min(100, Math.max(0, (clickX / rect.width) * 100));
              setProgress(newPct);
            }}
            className="h-1.5 w-full bg-[#F5F2EF] dark:bg-[#222222] rounded-full overflow-hidden cursor-pointer relative"
          >
            <div 
              className="h-full bg-[#FF9933] rounded-full transition-all duration-300" 
              style={{ width: `${progress}%` }} 
            />
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={handleSpeedCycle}
            className="px-2 py-1 rounded bg-[#F5F2EF] dark:bg-[#222222] text-[10px] font-bold text-[#1A1A1A] dark:text-[#F5F2EF] border border-[#E5E1DA] dark:border-[#333333] hover:border-[#FF9933] transition-colors"
            title="Playback Speed"
          >
            {playbackSpeed}x
          </button>

          <button
            onClick={() => setIsRepeat(!isRepeat)}
            className={`p-1.5 rounded-lg border transition-colors ${
              isRepeat ? 'bg-[#FF9933]/10 border-[#FF9933] text-[#FF9933]' : 'border-transparent text-[#6B7280] hover:text-[#1A1A1A] dark:hover:text-white'
            }`}
            title="Toggle Repeat Loop"
          >
            <Repeat className="size-4" />
          </button>

          <button
            onClick={() => setVolumeMuted(!volumeMuted)}
            className="p-1.5 text-[#6B7280] hover:text-[#1A1A1A] dark:hover:text-white transition-colors hidden sm:block"
            title="Toggle Mute"
          >
            {volumeMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
          </button>

          {onClosePlayer && (
            <button
              onClick={() => {
                audioEngine.stop();
                setIsPlaying(false);
                onClosePlayer();
              }}
              className="p-1.5 text-[#6B7280] hover:text-[#1A1A1A] dark:hover:text-white transition-colors"
            >
              <X className="size-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

