"use client";

import { useEffect, useRef, useState } from "react";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.35;
    }
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef}>
        <source src="/music/graduacion.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        className="
        fixed
        right-5
        top-5
        z-[999]
        h-16
        w-16
        rounded-full
        bg-yellow-400
        border-4
        border-white
        shadow-xl
        transition
        hover:scale-110
      "
      >
        <span className="text-3xl">
          {playing ? "🎵" : "🔇"}
        </span>
      </button>
    </>
  );
}