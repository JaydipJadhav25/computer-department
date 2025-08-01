// contexts/AudioContext.tsx
import { createContext, useContext, useState, useRef, useEffect } from 'react';

type AudioContextType = {
  isPlaying: boolean;
  toggleAudio: () => void;
};

const AudioContext = createContext<AudioContextType>({
  isPlaying: false,
  toggleAudio: () => {},
});

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);


  // Initialize audio element once
  useEffect(() => {
    audioRef.current = new Audio('/sounds/click.mp3');
    
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else {
      audioRef?.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <AudioContext.Provider value={{ isPlaying, toggleAudio }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);