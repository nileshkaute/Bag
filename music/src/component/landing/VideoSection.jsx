import React, { useState, useEffect } from "react";

const VideoSection = ({ videoRef, isPlaying }) => {
  // Multiple vibe colors
  const borderColors = [
    "border-yellow-400 shadow-yellow-400/70",
    "border-red-400 shadow-red-400/70",
    "border-green-400 shadow-green-400/70",
    "border-pink-400 shadow-pink-400/70",
    "border-purple-400 shadow-purple-400/70",
  ];

  const [currentColor, setCurrentColor] = useState("border-yellow-300 shadow-yellow-300/50");

  useEffect(() => {
    if (!isPlaying) {
      // When paused, reset to soft yellow
      setCurrentColor("border-yellow-300 shadow-yellow-300/50");
      return;
    }

    // When playing, cycle colors every 400ms
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * borderColors.length);
      setCurrentColor(borderColors[randomIndex]);
    }, 400);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div
      className={`w-[530px] h-[400px] rounded-full overflow-hidden border-8 
                  ${currentColor} 
                  transition-colors duration-300 ease-in-out bg-black`}
    >
      <video
        ref={videoRef}
        src="/video/media.mp4"
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default VideoSection;
