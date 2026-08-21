import React, { useRef, useState, useEffect } from 'react';
import { FaPlay, FaPause, FaBackward, FaForward, FaCompress, FaExpand, FaVolumeMute, FaVolumeUp, FaTachometerAlt } from 'react-icons/fa';

const VideoPlayer = ({ 
  src, 
  width = '100%', 
  height = 'auto', 
  poster,
  autoPlay = false,
  muted = false,
  loop = false
}) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(muted ? 0 : 0.7);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showSpeedOptions, setShowSpeedOptions] = useState(false);

  // Format time in minutes:seconds
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Toggle play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Handle time updates
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const duration = videoRef.current.duration || 0;
      setCurrentTime(currentTime);
      setProgress(duration ? (currentTime / duration) * 100 : 0);
    }
  };

  // Handle loaded metadata
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      if (autoPlay) {
        videoRef.current.play();
      }
    }
  };

  // Handle progress bar click
  const handleProgressClick = (e) => {
    if (videoRef.current) {
      const progressBar = e.currentTarget;
      const rect = progressBar.getBoundingClientRect();
      const clickPosition = (e.clientX - rect.left) / progressBar.offsetWidth;
      videoRef.current.currentTime = clickPosition * videoRef.current.duration;
      setProgress(clickPosition * 100);
    }
  };

  // Handle volume change
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      videoRef.current.muted = (newVolume === 0);
    }
  };

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      } else if (containerRef.current.webkitRequestFullscreen) {
        containerRef.current.webkitRequestFullscreen();
      } else if (containerRef.current.msRequestFullscreen) {
        containerRef.current.msRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  // Change playback rate
  const changePlaybackRate = (rate) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = rate;
      setPlaybackRate(rate);
      setShowSpeedOptions(false);
    }
  };

  // Skip time
  const skipTime = (seconds) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds;
    }
  };

  // Handle fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Auto-hide controls after 3 seconds of inactivity
  useEffect(() => {
    let timeoutId;
    
    const resetTimeout = () => {
      clearTimeout(timeoutId);
      setShowControls(true);
      timeoutId = setTimeout(() => {
        if (isPlaying) {
          setShowControls(false);
        }
      }, 3000);
    };

    if (isPlaying) {
      resetTimeout();
      
      containerRef.current?.addEventListener('mousemove', resetTimeout);
      return () => {
        clearTimeout(timeoutId);
        // containerRef.current?.removeEventListener('mousemove', resetTimeout);
      };
    }
  }, [isPlaying]);

  // Set initial volume
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
      videoRef.current.muted = muted;
    }
  }, [volume, muted]);

  return (
    <div 
      ref={containerRef}
      className="video-player-container"
      style={{ width, height }}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => {
        if (isPlaying) {
          setTimeout(() => setShowControls(false), 2000);
        }
      }}
    >
      <div className="video-wrapper">
        <video
          ref={videoRef}
          className="video-element"
          src={src}
          poster={poster}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onClick={togglePlay}
          loop={loop}
        />
        
        <div className={`controls-overlay ${showControls ? 'visible' : 'hidden'}`}>
          <div className="progress-bar" onClick={handleProgressClick}>
            <div 
              className="progress-filled" 
              style={{ width: `${progress}%` }}
            ></div>
            <div 
              className="progress-thumb" 
              style={{ left: `${progress}%` }}
            ></div>
          </div>

          <div className="controls-container">
            <div className="left-controls">
              <button className="control-btn" onClick={togglePlay} title={isPlaying ? 'Pause' : 'Play'}>
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              
              <button className="control-btn" onClick={() => skipTime(-10)} title="Rewind 10s">
                <FaBackward />
              </button>
              
              <button className="control-btn" onClick={() => skipTime(10)} title="Forward 10s">
                <FaForward />
              </button>
              
              <div className="volume-control">
                <button className="control-btn" onClick={() => {
                  const newVolume = volume > 0 ? 0 : 0.7;
                  setVolume(newVolume);
                  if (videoRef.current) {
                    videoRef.current.volume = newVolume;
                  }
                }} title={volume > 0 ? 'Mute' : 'Unmute'}>
                  {volume > 0 ? <FaVolumeUp /> : <FaVolumeMute />}
                </button>
                <input
                  type="range"
                  className="volume-slider"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                />
              </div>
              
              <div className="time-display">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
            </div>
            
            <div className="right-controls">
              <div className="speed-options">
                <button 
                  className="control-btn" 
                  onClick={() => setShowSpeedOptions(!showSpeedOptions)}
                  title="Playback Speed"
                >
                  <FaTachometerAlt />
                  <span>{playbackRate}x</span>
                </button>
                
                {showSpeedOptions && (
                  <div className="speed-menu">
                    {[0.5, 0.75, 1, 1.25, 1.5, 2].map((rate) => (
                      <button
                        key={rate}
                        className={`speed-option ${playbackRate === rate ? 'active' : ''}`}
                        onClick={() => changePlaybackRate(rate)}
                      >
                        {rate}x
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <button className="control-btn" onClick={toggleFullscreen} title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}>
                {isFullscreen ? <FaCompress /> : <FaExpand />}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .video-player-container {
          position: relative;
          background: #000;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          margin: 0 auto;
          max-width: 100%;
        }
        
        .video-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }
        
        .video-element {
          width: 100%;
          height: 100%;
          display: block;
          outline: none;
        }
        
        .controls-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
          padding: 15px 20px;
          transition: opacity 0.3s ease;
          z-index: 10;
        }
        
        .controls-overlay.visible {
          opacity: 1;
        }
        
        .controls-overlay.hidden {
          opacity: 0;
          pointer-events: none;
        }
        
        .progress-bar {
          height: 6px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
          margin-bottom: 15px;
          cursor: pointer;
          position: relative;
        }
        
        .progress-filled {
          height: 100%;
          background: #3498db;
          border-radius: 3px;
          width: 0;
          transition: width 0.2s ease;
        }
        
        .progress-thumb {
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #3498db;
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        
        .progress-bar:hover .progress-thumb {
          opacity: 1;
        }
        
        .controls-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .left-controls {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        
        .right-controls {
          display: flex;
          align-items: center;
          gap: 15px;
          position: relative;
        }
        
        .control-btn {
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: white;
          font-size: 16px;
          cursor: pointer;
          padding: 8px;
          border-radius: 4px;
          transition: background 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .control-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        
        .volume-control {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .volume-slider {
          width: 80px;
          height: 5px;
          -webkit-appearance: none;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 5px;
          outline: none;
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        
        .volume-control:hover .volume-slider {
          opacity: 1;
        }
        
        .volume-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #3498db;
          cursor: pointer;
        }
        
        .volume-slider::-moz-range-thumb {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #3498db;
          cursor: pointer;
          border: none;
        }
        
        .time-display {
          color: white;
          font-size: 14px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .speed-options {
          position: relative;
        }
        
        .speed-menu {
          position: absolute;
          bottom: 100%;
          right: 0;
          background: rgba(0, 0, 0, 0.8);
          border-radius: 4px;
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 5px;
          min-width: 100px;
          margin-bottom: 5px;
          z-index: 20;
        }
        
        .speed-option {
          background: none;
          border: none;
          color: white;
          padding: 8px 12px;
          text-align: left;
          cursor: pointer;
          border-radius: 4px;
          font-size: 14px;
        }
        
        .speed-option:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        
        .speed-option.active {
          color: #3498db;
          font-weight: bold;
        }
        
        @media (max-width: 768px) {
          .controls-container {
            flex-wrap: wrap;
          }
          
          .left-controls {
            order: 2;
            width: 100%;
            justify-content: center;
            margin-top: 10px;
          }
          
          .right-controls {
            order: 1;
            width: 100%;
            justify-content: center;
          }
          
          .volume-slider {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default VideoPlayer;