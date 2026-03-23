import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BOOT_LINES = [
  { prefix: '→', text: ' Initializing portfolio...', color: '#89A8B2' },
  { prefix: '✓', text: ' christian-serrano loaded successfully', color: '#89A8B2' },
  { prefix: '→', text: ' Skills: React · Godot · Flutter · Firebase', color: '#8a9199' },
  { prefix: '✓', text: ' Projects built: 3', color: '#89A8B2' },
  { prefix: '→', text: ' Location: Caloocan City, Philippines', color: '#8a9199' },
  { prefix: '✓', text: ' Status: Open to new opportunities', color: '#89A8B2' },
  { prefix: '$', text: ' Ready. Press enter to explore.', color: '#B3C8CF' },
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
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ background: 'var(--color-bg, #0f1419)' }}
    >
      <div className="w-full max-w-xl mx-4">
        {/* Terminal window */}
        <div
          className="overflow-hidden"
          style={{ border: '1px solid rgba(137, 168, 178, 0.2)' }}
        >
          {/* Title bar */}
          <div
            className="flex items-center gap-2 px-4 py-2.5"
            style={{
              background: 'var(--color-bg-light, #161c22)',
              borderBottom: '1px solid rgba(137, 168, 178, 0.15)',
            }}
          >
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-2 text-[#89A8B2] text-xs font-mono font-semibold">~ portfolio.sh</span>
          </div>

          {/* Terminal body */}
          <div
            className="p-5 font-mono text-sm min-h-[240px]"
            style={{ background: 'var(--color-bg, #0f1419)' }}
          >
            <p className="text-[#555] text-xs mb-3">
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
          <div className="mt-6 flex justify-center" style={{ animation: 'fadeUp 0.4s ease both' }}>
            <button
              onClick={handleEnter}
              className="group px-8 py-3 font-mono font-semibold transition-all duration-300 hover:translate-y-[-2px]"
              style={{
                background: 'transparent',
                border: '1px solid rgba(137, 168, 178, 0.3)',
                color: '#8a9199',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#89A8B2';
                e.currentTarget.style.color = '#89A8B2';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(137, 168, 178, 0.3)';
                e.currentTarget.style.color = '#8a9199';
              }}
            >
              <span className="flex items-center gap-2">
                <span className="text-[#89A8B2]">$</span>
                <span>./enter_portfolio.sh</span>
                <span className="text-[#89A8B2] transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes termCursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default Intro;