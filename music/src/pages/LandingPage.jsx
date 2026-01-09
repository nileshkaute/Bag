import React, { useRef, useState } from "react";
import MusicButtons from "../component/landing/MusicButtons";
import VideoSection from "../component/landing/VideoSection";
import Logo from "../component/landing/Logo";

const LandingPage = () => {
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    if (!videoRef.current || !audioRef.current) return;

    if (isPlaying) {
      // PAUSE + RESET
      videoRef.current.pause();
      audioRef.current.pause();

      videoRef.current.currentTime = 0;
      audioRef.current.currentTime = 0;
    } else {
      // PLAY FROM START
      videoRef.current.play();
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full h-screen bg-yellow-200 relative flex flex-col items-center justify-center
    
    ">
      
      {/* Logo top-left */}
      <div className="absolute top-4 left-4">
        <Logo />
      </div>

      {/* Center Video */}
     <VideoSection videoRef={videoRef} isPlaying={isPlaying} />


      {/* Buttons below video */}
      <div className="mt-20">
        <MusicButtons
          isPlaying={isPlaying}
          togglePlayPause={togglePlayPause}
        />
      </div>

      {/* Background Music */}
    <audio
  ref={audioRef}
  src="/audio/auidio.mpeg"
  loop
/>

    </div>
  );
};

export default LandingPage;
