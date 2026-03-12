import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BOOT_LINES = [
  { prefix: '→', text: ' Initializing portfolio...', color: '#89A8B2' },
  { prefix: '✓', text: ' christian-serrano loaded successfully', color: '#3a7d5e' },
  { prefix: '→', text: ' Skills: React · Godot · Flutter · Firebase', color: '#89A8B2' },
  { prefix: '✓', text: ' Projects built: 3', color: '#3a7d5e' },
  { prefix: '→', text: ' Location: Caloocan City, Philippines', color: '#89A8B2' },
  { prefix: '✓', text: ' Status: Open to new opportunities', color: '#3a7d5e' },
  { prefix: '$', text: ' Ready. Press enter to explore.', color: '#4f7fa8' },
];

function Intro() {
  const [completedLines, setCompletedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentLine >= BOOT_LINES.length) {
      setTimeout(() => setShowButton(true), 300);
      return;
    }
    const line = BOOT_LINES[currentLine];
    const fullText = line.prefix + line.text;
    if (currentChar < fullText.length) {
      const t = setTimeout(() => setCurrentChar(c => c + 1), 22);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setCompletedLines(prev => [...prev, { ...line, full: fullText }]);
        setCurrentLine(l => l + 1);
        setCurrentChar(0);
      }, 120);
      return () => clearTimeout(t);
    }
  }, [currentLine, currentChar]);

  const handleEnter = () => {
    setFadeOut(true);
    setTimeout(() => navigate('/portfolio'), 550);
  };

  const typingText =
    currentLine < BOOT_LINES.length
      ? (BOOT_LINES[currentLine].prefix + BOOT_LINES[currentLine].text).slice(0, currentChar)
      : '';

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#E5E1DA] via-[#F1F0E8] to-white transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="w-full max-w-xl mx-4">
        {/* Terminal window */}
        <div
          className="rounded-xl overflow-hidden shadow-xl"
          style={{ border: '1px solid #D1CAC0' }}
        >
          {/* Title bar */}
          <div
            className="flex items-center gap-2 px-4 py-2.5 bg-[#E5E1DA]"
            style={{ borderBottom: '1px solid #D1CAC0' }}
          >
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-2 text-[#89A8B2] text-xs font-mono font-semibold">~ portfolio.sh</span>
          </div>

          {/* Terminal body */}
          <div className="p-5 bg-white/70 font-mono text-sm min-h-[240px]">
            <p className="text-[#aaa] text-xs mb-3">
              Last login: {new Date().toDateString()} on ttys000
            </p>

            {completedLines.map((line, i) => (
              <div key={i} className="mb-1.5 leading-relaxed" style={{ color: line.color }}>
                {line.full}
              </div>
            ))}

            {currentLine < BOOT_LINES.length && (
              <div
                className="mb-1.5 leading-relaxed"
                style={{ color: BOOT_LINES[currentLine].color }}
              >
                {typingText}
                <span
                  className="inline-block w-[7px] h-[14px] align-middle ml-0.5"
                  style={{
                    background: BOOT_LINES[currentLine].color,
                    animation: 'termCursor 0.8s step-end infinite',
                  }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Enter button */}
        {showButton && (
          <div className="mt-6 flex justify-center" style={{ animation: 'introFadeUp 0.4s ease both' }}>
            <button
              onClick={handleEnter}
              className="px-8 py-3 font-mono font-semibold rounded-full transition-all duration-200 hover:scale-105 active:scale-95 text-white"
              style={{
                background: 'linear-gradient(135deg, #89A8B2, #B3C8CF)',
                border: '1px solid #B3C8CF',
                boxShadow: '0 4px 20px rgba(137,168,178,0.35)',
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 6px 28px rgba(137,168,178,0.55)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 4px 20px rgba(137,168,178,0.35)')}
            >
              ./enter_portfolio.sh
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes termCursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes introFadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default Intro;