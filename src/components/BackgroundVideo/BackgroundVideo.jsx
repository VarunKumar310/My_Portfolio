import React, { useEffect, useRef } from 'react';
import './BackgroundVideo.css';
import videoSrc from '../../assets/background.mp4'; // adjust path if needed

const BackgroundVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1; // ✅ 1.5x speed
    }
  }, []);

  return (
    <div className="background-video-container">
      <video 
        ref={videoRef}
        className="background-video"
        src={videoSrc}
        autoPlay
        muted
        playsInline
        loop
      />
      <div className="overlay"></div>
    </div>
  );
};

export default BackgroundVideo;
