import { useState, useEffect } from 'react';
import resumePDF from '/assets/Christian_Serrano_Resume_V6.pdf';

const ROLES = ['Full Stack Developer', 'Game Developer', 'CS Student @ UCC', 'Problem Solver'];

function TypewriterRole() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    if (!deleting && text.length < current.length) {
      const t = setTimeout(() => setText(current.slice(0, text.length + 1)), 75);
      return () => clearTimeout(t);
    }
    if (!deleting && text.length === current.length) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }
    if (deleting && text.length > 0) {
      const t = setTimeout(() => setText(text.slice(0, -1)), 38);
      return () => clearTimeout(t);
    }
    if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIdx(i => (i + 1) % ROLES.length);
    }
  }, [text, deleting, roleIdx]);

  return (
    <span className="font-mono text-base md:text-lg text-[var(--color-primary)] tracking-wide">
      &lt;&nbsp;<span className="font-semibold">{text}</span>
      <span
        className="inline-block w-[2px] h-[1em] bg-[var(--color-primary)] align-middle ml-0.5"
        style={{ animation: 'termCursor 0.8s step-end infinite' }}
      />
      &nbsp;/&gt;
    </span>
  );
}

function Hero() {
  const [showResume, setShowResume] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => setShowScrollDown(window.scrollY < 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20"
      style={{ background: 'var(--color-bg)' }}
    >
      {/* Two-column hero layout */}
      <div className="hero-grid">
        {/* Left: Text content */}
        <div className="hero-text">
          <div className="mb-6">
            <TypewriterRole />
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--color-text)' }}
          >
            Building things that{' '}
            <span className="text-[var(--color-primary)]">work</span>,{' '}
            one line of code at a time.
          </h1>

          <p className="text-lg md:text-xl text-[var(--color-muted)] leading-relaxed max-w-2xl mb-10">
            Hi, I'm <span className="text-[var(--color-text)] font-semibold">Christian Serrano</span> — a Full-Stack Developer with a fresh CS degree.
            Armed with coffee and a drive to build reliable, impactful software.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:translate-y-[-2px]"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                background: 'var(--color-primary)',
                color: 'var(--color-bg)',
                border: 'none',
              }}
            >
              View My Works
            </button>
            <button
              onClick={() => setShowResume(true)}
              className="px-8 py-3 font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:translate-y-[-2px]"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                background: 'transparent',
                color: 'var(--color-primary)',
                border: '1px solid var(--color-primary)',
              }}
            >
              See Resume
            </button>
          </div>
        </div>

        {/* Right: Portrait photo */}
        <div className="hero-portrait">
          <div className="hero-portrait-wrapper">
            {/* Animated glow ring behind the image */}
            <div className="hero-portrait-glow" />
            {/* The actual photo */}
            <div className="hero-portrait-image-container">
              <img
                src="/assets/SERRANO CHRISTIAN (2).JPG"
                alt="Christian Serrano — Full-Stack Developer"
                className="hero-portrait-img"
              />
              {/* Subtle gradient overlay for blend effect */}
              <div className="hero-portrait-overlay" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute left-1/2 -translate-x-1/2 bottom-8 flex flex-col items-center transition-opacity duration-500 ${showScrollDown ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-5 h-8 rounded-full border border-[var(--color-primary)]/40 flex justify-center pt-1.5">
          <div className="w-1 h-1 rounded-full bg-[var(--color-primary)]" style={{ animation: 'scrollDot 2s ease-in-out infinite' }} />
        </div>
      </div>

      {/* Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[200] p-4" onClick={() => setShowResume(false)}>
          <div
            className="bg-[var(--color-bg-light)] p-6 md:p-8 rounded-none shadow-2xl w-full max-w-2xl flex flex-col items-center relative border border-[var(--border-color)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowResume(false)}
              aria-label="Close"
              className="absolute top-4 right-4 p-2 text-[var(--color-muted)] bg-transparent border-none hover:text-[var(--color-primary)] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-xl font-bold mb-4 text-[var(--color-text)] uppercase tracking-wider" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Resume</h3>
            <iframe src={resumePDF} title="Christian Serrano Resume" className="w-full h-[55vh] md:h-[65vh] mb-4 border border-[var(--border-color)]" />
            <a
              href={resumePDF}
              download="Christian_Serrano_Resume_V6.pdf"
              className="px-6 py-2.5 font-semibold text-sm tracking-wider uppercase transition-all duration-200 hover:translate-y-[-2px] inline-flex items-center gap-2 no-underline"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                background: 'var(--color-primary)',
                color: 'var(--color-bg)',
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4" />
              </svg>
              Download
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;