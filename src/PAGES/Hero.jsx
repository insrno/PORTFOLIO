import { useState, useEffect } from 'react';
import resumePDF from '/assets/Christian_Serrano_Resume.pdf';

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
      className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-b from-[#E5E1DA] via-[#F1F0E8] to-white py-16 px-4 md:px-8 overflow-hidden"
    >
      {/* Portrait as background element */}
      <div className="absolute left-0 bottom-0 h-[130%] w-auto z-0 pointer-events-none select-none ml-[5vw] md:ml-[15vw] group">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#E5E1DA]/20 via-transparent to-transparent z-10"></div>
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#B3C8CF]/10 to-transparent blur-3xl z-0 animate-pulse"></div>
        {/* Main image with modern effects */}
        <img
          src="/assets/DSC_0051-removebg-preview.png"
          alt="Your portrait"
          className="relative h-full w-auto object-contain opacity-100 transition-all duration-500 group-hover:scale-[1.02] group-hover:brightness-110 group-hover:contrast-105"
          style={{ 
            maxWidth: '90vw', 
            minWidth: '200px',
            filter: 'drop-shadow(0 0 20px rgba(139, 168, 178, 0.2))',
            transform: 'perspective(1000px) rotateY(-5deg)',
            transformStyle: 'preserve-3d'
          }}
        />
        {/* Decorative elements */}
        <div className="absolute -bottom-4 -right-4 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br from-[#B3C8CF]/20 to-[#89A8B2]/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -top-4 -left-4 w-16 md:w-24 h-16 md:h-24 bg-gradient-to-tr from-[#E5E1DA]/30 to-[#F1F0E8]/30 rounded-full blur-xl animate-pulse"></div>
      </div>
      {/* Info Card */}
      <div className="w-full md:w-1/2 relative z-10 max-w-xl flex flex-col items-center md:items-start text-center md:text-left ml-auto mt-32 md:mt-0">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#181e29]">Christian Serrano</h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#89A8B2]">
          Not a coding ninja yet, but I've got coffee, curiosity, and Ctrl+Z.
        </h2>
        <div className="w-full flex justify-center md:justify-start">
          <button
            onClick={handleResumeClick}
            className="bg-gradient-to-r from-[#B3C8CF] via-[#E5E1DA] to-[#F1F0E8] text-[#181e29] px-6 md:px-10 py-2 md:py-3 rounded-full border-2 border-[#89A8B2] shadow-lg font-bold text-base md:text-lg tracking-wide transition-all duration-200 hover:from-[#E5E1DA] hover:to-[#B3C8CF] hover:text-[#89A8B2] hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#B3C8CF] mt-8"
          >
            <span className="inline-flex items-center gap-2">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-[#89A8B2]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M1.5 12s3.5-7 10.5-7 10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12z" /><circle cx="12" cy="12" r="3" /></svg>
              See Resume
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-5 flex flex-col items-center z-20">
        <span className={`block mb-2 text-lg md:text-xl font-semibold text-[#89A8B2] tracking-wide animate-fade-in transition-opacity duration-500 ${showScrollDown ? 'opacity-100' : 'opacity-0'}`}>
          Scroll Down
        </span>
        <svg
          className={`w-6 h-6 md:w-8 md:h-8 text-[#89A8B2] animate-bounce transition-opacity duration-500 ${showScrollDown ? 'opacity-100' : 'opacity-0'}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
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