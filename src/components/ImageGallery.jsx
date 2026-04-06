import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function ImageGallery({ images, title }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const dragMoved = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [isPaused, setIsPaused] = useState(false);

  // Drag-to-scroll handlers
  const handleMouseDown = (e) => {
    isDragging.current = true;
    dragMoved.current = false;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = 'grabbing';
    scrollRef.current.style.userSelect = 'none';
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    if (Math.abs(walk) > 5) dragMoved.current = true;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
      scrollRef.current.style.userSelect = '';
    }
  };

  // Touch drag support
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Auto-scroll animation
  useEffect(() => {
    const container = scrollRef.current;
    if (!container || isPaused) return;

    let animationId;
    const speed = 0.5;

    const autoScroll = () => {
      if (!isDragging.current && !isPaused) {
        container.scrollLeft += speed;
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Cleanup mouse events on window
  useEffect(() => {
    const cleanup = () => { isDragging.current = false; };
    window.addEventListener('mouseup', cleanup);
    return () => window.removeEventListener('mouseup', cleanup);
  }, []);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('lightbox-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('lightbox-open');
    }
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('lightbox-open');
    };
  }, [lightboxOpen]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxOpen]);

  const handleImageClick = (img) => {
    // Only open lightbox if user didn't drag
    if (!dragMoved.current) {
      setLightboxImg(img);
      setLightboxOpen(true);
    }
  };

  // Lightbox rendered via Portal so it escapes parent CSS transforms
  const lightbox = lightboxOpen && lightboxImg ? createPortal(
    <div
      className="lightbox-overlay"
      onClick={() => setLightboxOpen(false)}
      role="dialog"
      aria-modal="true"
    >
      <button
        className="lightbox-close"
        onClick={() => setLightboxOpen(false)}
        aria-label="Close image preview"
      >
        Close
      </button>
      <div className="lightbox-content" onClick={e => e.stopPropagation()}>
        <img
          src={lightboxImg.src}
          alt={lightboxImg.alt}
          className="lightbox-image"
        />
        <div className="lightbox-caption">{lightboxImg.alt}</div>
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <div className="w-full mb-12">
      {title && <h3 className="text-4xl font-extrabold text-[var(--color-primary)] mb-8 text-center tracking-tight animate-fade-in">{title}</h3>}
      
      {/* Scrollable / Draggable carousel */}
      <div
        ref={scrollRef}
        className="gallery-carousel"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => { handleMouseUp(); setIsPaused(false); }}
        onMouseEnter={() => setIsPaused(true)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {images.map((img) => (
          <button
            key={img.alt}
            className="gallery-item"
            onClick={() => handleImageClick(img)}
            aria-label={`View ${img.alt} larger`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="gallery-thumb"
              draggable={false}
            />
          </button>
        ))}
      </div>

      {/* Scroll hint */}
      <p className="text-center text-[var(--color-muted)] text-xs mt-2 opacity-60">
        ← Drag or scroll to browse →
      </p>

      {lightbox}

      <style>{`
        .gallery-carousel {
          display: flex;
          gap: 1.5rem;
          overflow-x: auto;
          padding-bottom: 1rem;
          cursor: grab;
          scrollbar-width: thin;
          scrollbar-color: var(--color-primary) transparent;
        }
        .gallery-carousel::-webkit-scrollbar { height: 6px; }
        .gallery-carousel::-webkit-scrollbar-track { background: transparent; }
        .gallery-carousel::-webkit-scrollbar-thumb { background: var(--color-primary); border-radius: 3px; }
        .gallery-carousel::-webkit-scrollbar-thumb:hover { background: var(--color-secondary); }

        .gallery-item {
          flex-shrink: 0;
          overflow: hidden;
          transition: transform 0.3s ease;
          background: none;
          border: none;
          padding: 0;
          margin: 0;
          cursor: pointer;
        }
        .gallery-item:hover { transform: scale(1.05); }

        .gallery-thumb {
          object-fit: cover;
          width: 320px;
          height: 14rem;
          border-radius: 1rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          pointer-events: none;
        }

        /* Lightbox - rendered on document.body via Portal */
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(12px);
          animation: lightbox-fade-in 0.25s ease;
        }

        body.has-custom-cursor.lightbox-open,
        body.has-custom-cursor.lightbox-open * {
          cursor: auto !important;
        }

        body.lightbox-open .custom-cursor-dot,
        body.lightbox-open .custom-cursor-ring {
          opacity: 0;
        }

        .lightbox-content {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem;
          max-width: 95vw;
          max-height: 95vh;
        }
        .lightbox-image {
          max-height: 85vh;
          max-width: 90vw;
          width: auto;
          object-fit: contain;
          border-radius: 1rem;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          border: 3px solid var(--color-secondary);
          background: var(--color-bg);
          animation: lightbox-scale-in 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .lightbox-close {
          position: absolute;
          top: max(1rem, env(safe-area-inset-top));
          right: max(1rem, env(safe-area-inset-right));
          color: white;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-family: 'Space Grotesk', sans-serif;
          background: rgba(15, 20, 25, 0.7);
          border: 1px solid rgba(179, 200, 207, 0.6);
          border-radius: 999px;
          min-width: 5.5rem;
          height: 2.25rem;
          padding: 0 0.85rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          backdrop-filter: blur(8px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.28);
          z-index: 11;
        }
        .lightbox-close:hover {
          background: rgba(137, 168, 178, 0.22);
          border-color: var(--color-primary);
          transform: translateY(-1px);
        }
        .lightbox-close:focus-visible {
          outline: 2px solid var(--color-primary);
          outline-offset: 2px;
        }
        .lightbox-caption {
          margin-top: 1rem;
          color: white;
          font-size: 1rem;
          text-align: center;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        }
        @keyframes lightbox-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes lightbox-scale-in {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}