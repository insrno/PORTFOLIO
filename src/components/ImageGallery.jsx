import { useState } from 'react';

export default function ImageGallery({ images, title }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);

  return (
    <div className="w-full mb-12 overflow-hidden">
      <span className="section-number block mb-4">Gallery</span>
      <h3
        className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-8 tracking-tight"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        {title}
      </h3>
      <div className="relative w-full">
        <div className="flex gap-6 items-center" style={{ animation: 'scrollX 30s linear infinite' }}>
          {images.map((img) => (
            <button
              key={img.alt}
              className="overflow-hidden min-w-[280px] max-w-xs transition-transform duration-300 hover:scale-105 focus:outline-none bg-transparent border border-[var(--border-color)] p-0 m-0 group"
              onClick={() => { setLightboxImg(img); setLightboxOpen(true); }}
              aria-label={`View ${img.alt} larger`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="object-cover w-full h-56 transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && lightboxImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-all"
          onClick={() => setLightboxOpen(false)}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative flex flex-col items-center justify-center"
            onClick={e => e.stopPropagation()}
            style={{ minHeight: '100vh' }}
          >
            <div className="relative">
              <img
                src={lightboxImg.src}
                alt={lightboxImg.alt}
                className="shadow-2xl max-h-[80vh] w-auto object-contain border border-[var(--border-color)] animate-lightbox-in"
                style={{ transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s cubic-bezier(0.4,0,0.2,1)' }}
              />
              <button
                className="absolute top-3 right-3 text-[var(--color-muted)] hover:text-[var(--color-text)] text-2xl font-bold bg-[var(--color-bg)]/80 backdrop-blur-sm w-10 h-10 flex items-center justify-center border border-[var(--border-color)] transition-colors duration-200 focus:outline-none z-10"
                onClick={() => setLightboxOpen(false)}
                aria-label="Close image preview"
              >
                &times;
              </button>
            </div>
            <div
              className="mt-4 text-[var(--color-muted)] text-sm tracking-wider uppercase"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {lightboxImg.alt}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}