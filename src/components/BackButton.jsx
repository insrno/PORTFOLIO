import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();
  
  return (
    <button
      onClick={() => navigate('/portfolio')}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-7 py-3 rounded-full bg-white/30 backdrop-blur-md border-2 border-gradient-to-r from-[#B3C8CF] via-[#89A8B2] to-[#E5E1DA] shadow-2xl text-[#181e29] font-bold text-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#B3C8CF]/40 ring-2 ring-[#B3C8CF]/30 hover:bg-[#E5E1DA]/80 group animate-glow"
      style={{ boxShadow: '0 4px 24px 0 rgba(31, 38, 135, 0.18)' }}
    >
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-[#B3C8CF] via-[#89A8B2] to-[#E5E1DA] shadow-md mr-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="#181e29" className="w-5 h-5">
          <circle cx="12" cy="12" r="10" strokeOpacity=".5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 8.5L10 12l3.5 3.5" />
        </svg>
      </span>
      <span className="tracking-wide">Back to Projects</span>
    </button>
  );
} 