import { useState, useEffect } from 'react';
import resumePDF from '/assets/Christian_Serrano_Resume.pdf';

const ROLES = ['Frontend Developer', 'Game Developer', 'CS Student @ UCC', 'Problem Solver'];

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
    <span className="font-mono text-base md:text-lg text-[#89A8B2] tracking-wide">
      &lt;&nbsp;<span className="font-semibold">{text}</span>
      <span
        className="inline-block w-[2px] h-[1em] bg-[#89A8B2] align-middle ml-0.5"
        style={{ animation: 'termCursor 0.8s step-end infinite' }}
      />
      &nbsp;/&gt;
    </span>
  );
}

function Hero() {
  const [showResume, setShowResume] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);

  const handleResumeClick = () => setShowResume(true);
  const closeResume = () => setShowResume(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollDown(window.scrollY < 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-[#E5E1DA] via-[#F1F0E8] to-white py-16 px-4 md:px-8 overflow-hidden"
    >
      {/* Subtle background blobs for depth */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <div
          className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #89A8B2 0%, transparent 70%)',
            top: '20%',
            left: '5%',
            filter: 'blur(80px)',
            animation: 'heroFloat1 8s ease-in-out infinite',
          }}
        />
        <div
          className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, #B3C8CF 0%, transparent 70%)',
            bottom: '15%',
            right: '10%',
            filter: 'blur(70px)',
            animation: 'heroFloat2 10s ease-in-out infinite',
          }}
        />
      </div>

      {/* Avatar with 3D floating effect */}
      <div className="relative z-10 flex items-center justify-center w-full md:w-1/2 mt-20 md:mt-0">
        {/* Glow ring behind avatar */}
        <div
          className="absolute w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full"
          style={{
            background: 'conic-gradient(from 0deg, #89A8B2, #B3C8CF, #E5E1DA, #B3C8CF, #89A8B2)',
            filter: 'blur(50px)',
            opacity: 0.2,
            animation: 'heroFloat2 10s ease-in-out infinite',
          }}
        />
        <img
          src="/assets/graphiccartoon-nobg.png"
          alt="Christian Serrano avatar"
          className="relative w-[380px] h-auto md:w-[500px] lg:w-[600px] object-contain"
          style={{
            animation: 'heroAvatar 6s ease-in-out infinite',
            filter: 'drop-shadow(0 25px 60px rgba(137, 168, 178, 0.4))',
            transformStyle: 'preserve-3d',
          }}
        />
      </div>

      {/* Info Card */}
      <div className="w-full md:w-1/2 relative z-10 max-w-xl flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-[#181e29]">Christian Serrano</h1>
        <div className="mb-4">
          <TypewriterRole />
        </div>
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#89A8B2]">
          Not a coding ninja yet, but I've got coffee, curiosity, and Ctrl+Z.
        </h2>
        <div className="w-full flex justify-center md:justify-start">
          <button
            onClick={handleResumeClick}
            className="bg-transparent text-[#89A8B2] px-6 md:px-10 py-2 md:py-3 rounded-full border-2 border-[#89A8B2] font-bold text-base md:text-lg tracking-wide transition-all duration-300 hover:bg-[#89A8B2]/10 hover:border-[#89A8B2] hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#B3C8CF]/40 mt-8"
          >
            <span className="inline-flex items-center gap-2">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M1.5 12s3.5-7 10.5-7 10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12z" /><circle cx="12" cy="12" r="3" /></svg>
              See Resume
            </span>
          </button>
        </div>
      </div>

      {/* Mouse scroll indicator */}
      <div className={`absolute left-1/2 transform -translate-x-1/2 bottom-8 flex flex-col items-center z-20 transition-opacity duration-500 ${showScrollDown ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-6 h-10 rounded-full border-2 border-[#89A8B2]/60 flex justify-center pt-2">
          <div
            className="w-1.5 h-1.5 rounded-full bg-[#89A8B2]"
            style={{ animation: 'scrollDot 2s ease-in-out infinite' }}
          />
        </div>
        <svg
          className="w-4 h-4 text-[#89A8B2]/50 mt-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#F1F0E8] p-4 md:p-8 rounded-lg shadow-lg w-full max-w-2xl flex flex-col items-center relative">
            {/* Close Button */}
            <button
              onClick={closeResume}
              aria-label="Close"
              className="absolute top-2 right-2 md:top-4 md:right-4 p-1 text-[#181e29] bg-transparent border-none shadow-none transition-all duration-200 hover:text-[#B3C8CF] hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#B3C8CF]/40"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#181e29]">RESUME</h3>
            <iframe
              src={resumePDF}
              title="Christian Serrano Resume"
              className="w-full h-[50vh] md:h-[60vh] rounded-md mb-4 border border-[#B3C8CF]"
            />
            <div className="flex gap-4 w-full justify-center mt-2">
              <a
                href={resumePDF}
                download="Christian_Serrano_Resume.pdf"
                className="backdrop-blur-md bg-white/30 border border-[#E5E1DA]/60 text-[#181e29] px-4 md:px-5 py-2 rounded-full shadow-lg font-semibold flex items-center gap-2 transition-all duration-200 hover:bg-gradient-to-r hover:from-[#B3C8CF]/60 hover:to-[#89A8B2]/60 hover:text-white hover:shadow-[0_4px_24px_0_rgba(139,200,207,0.25)] focus:outline-none focus:ring-4 focus:ring-[#B3C8CF]/40 hover:scale-105"
                title="Download Resume"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                <span className="font-semibold">Download</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;