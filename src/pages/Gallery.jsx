import React, { useState, useEffect, useRef } from 'react';
import './Gallery.css';
import { FaArrowRight, FaArrowLeft, FaPlay, FaTimes, FaExpand } from 'react-icons/fa';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

import video1 from '../assets/images/video.mp4';
import video2 from '../assets/images/video2.mp4';
import slide1 from '../assets/images/slide1.jpg';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';
import slide4 from '../assets/images/slide4.jpg';
import slide5 from '../assets/images/slide5.jpg';
import slide6 from '../assets/images/slide6.jpg';
import slide7 from '../assets/images/slide7.jpg';
import slide8 from '../assets/images/slide8.jpg';
import slide9 from '../assets/images/slide9.jpg';
import slide10 from '../assets/images/slide10.jpg';
import slide11 from '../assets/images/slide11.jpg';
import slide12 from '../assets/images/slide12.jpg';
import slide13 from '../assets/images/slide13.png';
import slide14 from '../assets/images/slide14.png';
import slide15 from '../assets/images/slide15.png';
import slide16 from '../assets/images/slide16.png';
import slide17 from '../assets/images/slide17.png';
import slide18 from '../assets/images/slide18.png';
import slide19 from '../assets/images/slide19.png';
import slide20 from '../assets/images/slide20.jpg';
import slide21 from '../assets/images/slide21.jpg';
import slide22 from '../assets/images/slide22.jpg';
import slide23 from '../assets/images/slide23.jpg';
import slide24 from '../assets/images/slide24.jpg';
import slide25 from '../assets/images/slide25.png';
import slide26 from '../assets/images/slide26.jpg';
import slide27 from '../assets/images/slide27.png';
import slide28 from '../assets/images/slide28.png';
import slide29 from '../assets/images/slide29.jpg';
import slide30 from '../assets/images/slide30.png';
import slide31 from '../assets/images/slide31.png';
import slide32 from '../assets/images/slide32.png';
import slide33 from '../assets/images/slide33.png';
import slide40 from '../assets/images/slide40.jpg';
import slide41 from '../assets/images/slide41.jpg';
import slide42 from '../assets/images/slide42.png';
import slide43 from '../assets/images/slide43.png';
import slide44 from '../assets/images/slide44.png';
import slide45 from '../assets/images/slide45.png';
import slide46 from '../assets/images/slide46.png';
import slide47 from '../assets/images/slide47.png';
import slide48 from '../assets/images/slide48.png';
import slide49 from '../assets/images/slide49.png';

/* ── Inline Video Player (click-to-play, no autoplay) ── */
const InlineVideoPlayer = ({ src, poster, title }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [muted, setMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const containerRef = useRef(null);
  const hideTimer = useRef(null);

  const fmt = (t) => {
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const startHideTimer = () => {
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      if (playing) setShowControls(false);
    }, 2500);
  };

  const handleMouseMove = () => {
    setShowControls(true);
    startHideTimer();
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const c = videoRef.current.currentTime;
    const d = videoRef.current.duration || 0;
    setCurrentTime(c);
    setProgress(d ? (c / d) * 100 : 0);
  };

  const handleSeek = (e) => {
    if (!videoRef.current) return;
    const bar = e.currentTarget;
    const ratio = (e.clientX - bar.getBoundingClientRect().left) / bar.offsetWidth;
    videoRef.current.currentTime = ratio * videoRef.current.duration;
  };

  const handleVolumeChange = (e) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    if (videoRef.current) videoRef.current.volume = v;
    setMuted(v === 0);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const next = !muted;
    setMuted(next);
    videoRef.current.muted = next;
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handler = () => setFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  useEffect(() => {
    if (playing) startHideTimer();
    else {
      clearTimeout(hideTimer.current);
      setShowControls(true);
    }
    return () => clearTimeout(hideTimer.current);
  }, [playing]);

  return (
    <div
      ref={containerRef}
      className="ivp-wrap"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setShowControls(true)}
    >
      {/* Big play overlay before first play */}
      {!playing && (
        <button className="ivp-big-play" onClick={togglePlay} aria-label="Play video">
          <span className="ivp-play-icon"><FaPlay /></span>
          {title && <span className="ivp-play-label">{title}</span>}
        </button>
      )}

      <video
        ref={videoRef}
        className="ivp-video"
        src={src}
        poster={poster}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() => setDuration(videoRef.current?.duration || 0)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onClick={togglePlay}
        playsInline
      />

      {/* Controls bar */}
      <div className={`ivp-controls ${showControls || !playing ? 'ivp-visible' : ''}`}>
        {/* Progress */}
        <div className="ivp-progress" onClick={handleSeek}>
          <div className="ivp-progress-fill" style={{ width: `${progress}%` }} />
          <div className="ivp-progress-thumb" style={{ left: `${progress}%` }} />
        </div>

        <div className="ivp-bar">
          <div className="ivp-left">
            <button className="ivp-btn" onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
              {playing
                ? <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                : <FaPlay size={13} />}
            </button>

            <button className="ivp-btn" onClick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'}>
              {muted
                ? <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/><line x1="19" y1="5" x2="5" y2="19" stroke="currentColor" strokeWidth="2"/></svg>
                : <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>}
            </button>

            <input
              className="ivp-volume"
              type="range" min="0" max="1" step="0.02"
              value={muted ? 0 : volume}
              onChange={handleVolumeChange}
              aria-label="Volume"
            />

            <span className="ivp-time">{fmt(currentTime)} / {fmt(duration)}</span>
          </div>

          <div className="ivp-right">
            <button className="ivp-btn" onClick={toggleFullscreen} aria-label="Fullscreen">
              <FaExpand size={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Main Gallery Component ── */
const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightbox, setIsLightbox] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [filter, setFilter] = useState('all');

  const mediaItems = [
    { type: 'image', src: slide1, alt: 'School Event 1', category: 'events' },
    { type: 'image', src: slide2, alt: 'School Event 2', category: 'campus' },
    { type: 'image', src: slide3, alt: 'School Event 3', category: 'campus' },
    { type: 'image', src: slide4, alt: 'School Event 4', category: 'events' },
    { type: 'image', src: slide5, alt: 'School Event 5', category: 'events' },
    { type: 'image', src: slide6, alt: 'School Event 6', category: 'students' },
    { type: 'image', src: slide7, alt: 'School Event 7', category: 'students' },
    { type: 'image', src: slide8, alt: 'School Event 8', category: 'events' },
    { type: 'image', src: slide9, alt: 'School Event 9', category: 'campus' },
    { type: 'image', src: slide10, alt: 'School Event 10', category: 'students' },
    { type: 'image', src: slide11, alt: 'School Event 11', category: 'events' },
    { type: 'image', src: slide12, alt: 'School Event 12', category: 'campus' },
    { type: 'image', src: slide13, alt: 'School Event 13', category: 'events' },
    { type: 'image', src: slide14, alt: 'School Event 14', category: 'students' },
    { type: 'image', src: slide15, alt: 'School Event 15', category: 'students' },
    { type: 'image', src: slide16, alt: 'School Event 16', category: 'events' },
    { type: 'image', src: slide17, alt: 'School Event 17', category: 'campus' },
    { type: 'image', src: slide18, alt: 'School Event 18', category: 'events' },
    { type: 'image', src: slide19, alt: 'School Event 19', category: 'students' },
    { type: 'image', src: slide20, alt: 'School Event 20', category: 'events' },
    { type: 'image', src: slide21, alt: 'School Event 21', category: 'campus' },
    { type: 'image', src: slide22, alt: 'School Event 22', category: 'events' },
    { type: 'image', src: slide23, alt: 'School Event 23', category: 'students' },
    { type: 'image', src: slide24, alt: 'School Event 24', category: 'events' },
    { type: 'image', src: slide25, alt: 'School Event 25', category: 'campus' },
    { type: 'image', src: slide26, alt: 'School Event 26', category: 'events' },
    { type: 'image', src: slide27, alt: 'School Event 27', category: 'students' },
    { type: 'image', src: slide28, alt: 'School Event 28', category: 'events' },
    { type: 'image', src: slide29, alt: 'School Event 29', category: 'campus' },
    { type: 'image', src: slide30, alt: 'School Event 30', category: 'events' },
    { type: 'image', src: slide31, alt: 'School Event 31', category: 'students' },
    { type: 'image', src: slide32, alt: 'School Event 32', category: 'events' },
    { type: 'image', src: slide33, alt: 'School Event 33', category: 'campus' },
    { type: 'image', src: slide40, alt: 'School Event 40', category: 'events' },
    { type: 'image', src: slide41, alt: 'School Event 41', category: 'campus' },
    { type: 'image', src: slide42, alt: 'School Event 42', category: 'students' },
    { type: 'image', src: slide43, alt: 'School Event 43', category: 'events' },
    { type: 'image', src: slide44, alt: 'School Event 44', category: 'campus' },
    { type: 'image', src: slide45, alt: 'School Event 45', category: 'events' },
    { type: 'image', src: slide46, alt: 'School Event 46', category: 'students' },
    { type: 'image', src: slide47, alt: 'School Event 47', category: 'events' },
    { type: 'image', src: slide48, alt: 'School Event 48', category: 'campus' },
    { type: 'image', src: slide49, alt: 'School Event 49', category: 'events' },
  ];

  const videos = [
    { src: video1, poster: slide3, title: 'School Tour — Campus & Facilities' },
    { src: video2, poster: slide2, title: 'Annual Day Highlights 2024' },
  ];

  const slides = [
    { image: slide3, eyebrow: 'Welcome to St. Stephen\'s', title: 'Our School Campus', sub: 'State-of-the-art facilities for every learner' },
    { image: slide2, eyebrow: 'Student Life', title: 'Learning Moments', sub: 'Memories made inside and outside the classroom' },
    { image: slide1, eyebrow: 'Cultural Celebrations', title: 'Kalotsav', sub: 'Celebrating creativity, talent & community' },
    { image: slide4, eyebrow: 'Inter-school Events', title: 'Sahodaya', sub: 'Connecting schools, building friendships' },
  ];

  const filters = [
    { key: 'all', label: 'All Photos' },
    { key: 'events', label: 'Events' },
    { key: 'campus', label: 'Campus' },
    { key: 'students', label: 'Students' },
  ];

  const filtered = filter === 'all' ? mediaItems : mediaItems.filter(m => m.category === filter);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!isLightbox) return;
    const handler = (e) => {
      if (e.key === 'Escape') setIsLightbox(false);
      if (e.key === 'ArrowRight') navigate('next');
      if (e.key === 'ArrowLeft') navigate('prev');
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isLightbox, currentIndex, filtered.length]);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsLightbox(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightbox(false);
    document.body.style.overflow = '';
  };

  const navigate = (dir) => {
    const len = filtered.length;
    setCurrentIndex(prev =>
      dir === 'prev' ? (prev - 1 + len) % len : (prev + 1) % len
    );
  };

  return (
    <div className="gallery-page">
      <Header />

      {/* ── Hero Slideshow ── */}
      <section className="g-hero">
        <div className="g-slides">
          {slides.map((s, i) => (
            <div
              key={i}
              className={`g-slide ${i === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${s.image})` }}
            >
              <div className="g-overlay" />
              <div className="g-slide-content">
                <span className="g-eyebrow">{s.eyebrow}</span>
                <h1 className="g-slide-title">{s.title}</h1>
                <p className="g-slide-sub">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="g-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`g-dot ${i === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <button className="g-nav g-nav--prev" onClick={() => setCurrentSlide(p => (p - 1 + slides.length) % slides.length)} aria-label="Previous">
          <FaArrowLeft />
        </button>
        <button className="g-nav g-nav--next" onClick={() => setCurrentSlide(p => (p + 1) % slides.length)} aria-label="Next">
          <FaArrowRight />
        </button>

        {/* Slide count */}
        <div className="g-slide-count">{currentSlide + 1} / {slides.length}</div>
      </section>

      {/* ── Videos Section ── */}
      <section className="g-videos-section">
        <div className="g-container">
          <div className="g-section-header">
            <span className="g-eyebrow-dark">Captured on film</span>
            <h2 className="g-section-title">School Videos</h2>
          </div>

          <div className="g-video-grid">
            {videos.map((v, i) => (
              <div key={i} className="g-video-card">
                <InlineVideoPlayer src={v.src} poster={v.poster} title={v.title} />
                <p className="g-video-label">{v.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo Gallery ── */}
      <section className="g-photos-section">
        <div className="g-container">
          <div className="g-section-header">
            <span className="g-eyebrow-dark">Through the lens</span>
            <h2 className="g-section-title">Photo Gallery</h2>
          </div>

          {/* Filter tabs */}
          <div className="g-filters">
            {filters.map(f => (
              <button
                key={f.key}
                className={`g-filter-btn ${filter === f.key ? 'active' : ''}`}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Masonry-style grid */}
          <div className="g-photo-grid">
            {filtered.map((item, i) => (
              <div
                key={i}
                className="g-photo-item"
                onClick={() => openLightbox(i)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && openLightbox(i)}
              >
                <img src={item.src} alt={item.alt} loading="lazy" />
                <div className="g-photo-overlay">
                  <FaExpand className="g-expand-icon" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {isLightbox && (
        <div className="g-lightbox" onClick={closeLightbox}>
          <button className="g-lb-close" onClick={closeLightbox} aria-label="Close">
            <FaTimes />
          </button>

          <button
            className="g-lb-nav g-lb-nav--prev"
            onClick={e => { e.stopPropagation(); navigate('prev'); }}
            aria-label="Previous image"
          >
            <FaArrowLeft />
          </button>

          <div className="g-lb-image-wrap" onClick={e => e.stopPropagation()}>
            <img
              src={filtered[currentIndex].src}
              alt={filtered[currentIndex].alt}
              className="g-lb-image"
            />
            <div className="g-lb-counter">{currentIndex + 1} / {filtered.length}</div>
          </div>

          <button
            className="g-lb-nav g-lb-nav--next"
            onClick={e => { e.stopPropagation(); navigate('next'); }}
            aria-label="Next image"
          >
            <FaArrowRight />
          </button>

          {/* Thumbnail strip */}
          <div className="g-lb-thumbs" onClick={e => e.stopPropagation()}>
            {filtered.map((item, i) => (
              <button
                key={i}
                className={`g-lb-thumb ${i === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(i)}
              >
                <img src={item.src} alt={item.alt} />
              </button>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;