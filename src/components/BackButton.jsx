import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();
  
  return (
    <button
      onClick={() => navigate('/portfolio')}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-3 border border-[var(--border-color)] text-[var(--color-text)] font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:translate-y-[-2px] hover:border-[var(--color-primary)] group"
      style={{
        fontFamily: 'Space Grotesk, sans-serif',
        background: 'var(--color-bg-light)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
      }}
    >
      <svg className="w-4 h-4 text-[var(--color-primary)] group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m0 0l7 7m-7-7l7-7" />
      </svg>
      <span>Back to Projects</span>
    </button>
  );
}