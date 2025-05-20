import { useState } from 'react';

export default function ImageGallery({ images, title }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);

  return (
    <div className="w-full mb-12 overflow-hidden">
      <h3 className="text-4xl font-extrabold text-[#89A8B2] mb-8 text-center tracking-tight animate-fade-in">{title}</h3>
      <div className="relative w-full">
        <div className="flex gap-8 animate-scroll-x items-center" style={{ animation: 'scrollX 30s linear infinite' }}>
          {images.map((img) => (
            <button
              key={img.alt}
              className="overflow-hidden min-w-[320px] max-w-xs transition-transform hover:scale-110 focus:outline-none bg-transparent border-none shadow-none p-0 m-0"
              style={{ background: 'none' }}
              onClick={() => { setLightboxImg(img); setLightboxOpen(true); }}
              aria-label={`View ${img.alt} larger`}
            >
              <img src={img.src} alt={img.alt} className="object-cover w-full h-56 rounded-2xl border-none shadow-xl" style={{ background: 'none' }} />
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
                className="rounded-2xl shadow-2xl max-h-[80vh] w-auto object-contain border-4 border-[#B3C8CF] bg-white animate-lightbox-in"
                style={{ transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s cubic-bezier(0.4,0,0.2,1)' }}
              />
              <button
                className="absolute top-2 right-2 text-white text-3xl font-bold bg-black/60 rounded-full w-12 h-12 flex items-center justify-center hover:bg-black/80 focus:outline-none z-10 shadow-lg border-2 border-white"
                onClick={() => setLightboxOpen(false)}
                aria-label="Close image preview"
                style={{ transition: 'background 0.2s, box-shadow 0.2s' }}
              >
                &times;
              </button>
            </div>
            <div className="mt-4 text-white text-lg text-center drop-shadow-lg animate-fade-in">{lightboxImg.alt}</div>
          </div>
        </div>
      )}
    </div>
  );
} 