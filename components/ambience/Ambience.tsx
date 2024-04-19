import React, { useRef, useEffect } from 'react';

const Ambience = ({ audioSrc }: { audioSrc: string }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayerShow = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0;
    }
  };

  const handlePlayerHide = () => {
    if (audioRef.current) {
      audioRef.current.volume = 1;
    }
  };

  useEffect(() => {
    // Add event listeners only if window is defined
    if (typeof window !== 'undefined') {
      window.addEventListener('player_show', handlePlayerShow);
      window.addEventListener('player_hide', handlePlayerHide);

      // Ensure cleanup of event listeners
      return () => {
        window.removeEventListener('player_show', handlePlayerShow);
        window.removeEventListener('player_hide', handlePlayerHide);
      };
    }
  }, []);

  return (
    <audio
      ref={audioRef}
      src={audioSrc}
      autoPlay
      loop
      /* commenting out volume command
      volume={1}
      */
      {...({} as React.AudioHTMLAttributes<HTMLAudioElement>)}
    />
  );
};

export default Ambience;
