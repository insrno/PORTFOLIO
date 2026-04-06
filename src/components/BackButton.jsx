import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();
  
  return (
    <button
      onClick={() => navigate('/portfolio')}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-7 py-3 rounded-full bg-[var(--color-bg-light)]/85 backdrop-blur-md border border-[var(--border-color)] shadow-2xl text-[var(--color-text)] font-bold text-lg transition-all duration-200 focus:outline-none hover:bg-[var(--color-bg-light)] group"
      style={{ boxShadow: '0 4px 24px 0 rgba(0, 0, 0, 0.35)' }}
    >
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-[var(--color-secondary)] via-[var(--color-primary)] to-[var(--color-accent)] shadow-md mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="var(--color-bg)" className="w-5 h-5">
          <circle cx="12" cy="12" r="10" strokeOpacity=".5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 8.5L10 12l3.5 3.5" />
        </svg>
      </span>
      <span className="tracking-wide">Back to Portfolio</span>
    </button>
  );
} 