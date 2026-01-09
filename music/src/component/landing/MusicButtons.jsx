import React from "react";
import { Link } from "react-router-dom";
import { Pause, Play,Share2 ,CircleArrowRight} from "lucide-react";

const MusicButtons = ({ isPlaying, togglePlayPause }) => {
  return (
    <div className="flex  gap-4">
      
      <button
        onClick={togglePlayPause}
        className="px-6 py-2 bg-black text-white rounded-lg flex items-center gap-2"
      >
        {isPlaying ? (
          <>
            <Pause size={18} />
            Pause
          </>
        ) : (
          <>
            <Play size={18} />
            Play
          </>
        )}
      </button>

      <button className="px-6 py-2 bg-black text-white rounded-lg flex items-center gap-2">
  <Share2 size={18} />
  Share
</button>

 <Link to="/home">
      <button className="px-6 py-2 bg-black text-white rounded-lg flex items-center gap-2">
        <CircleArrowRight size={18} />
        Main
      </button>
    </Link>

    </div>
  );
};

export default MusicButtons;
