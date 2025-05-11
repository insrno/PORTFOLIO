import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Intro() {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  const handleEnter = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate('/portfolio');
    }, 500); // Match fade-out duration
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#B3C8CF] via-[#E5E1DA] to-[#F1F0E8] transition-opacity duration-500 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
    >
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        {/* Add the image */}
        <div className="mb-6 flex justify-center">
          <img
            src="/assets/IMG_1678.JPG"
            alt="Your portrait"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-[#B3C8CF] shadow-lg bg-gray-700"
            style={{ background: '#222' }}
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#181e29] mb-4">
          Hi, I'm Christian Serrano
        </h1>
        <p className="text-2xl md:text-3xl text-[#181e29] mb-8">
          Welcome to my Portfolio
        </p>
        <button
          onClick={handleEnter}
          className="bg-[#F1F0E8] text-[#181e29] px-8 py-3 rounded-full shadow-lg hover:bg-[#E5E1DA] transition text-xl font-bold transform-gpu hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#B3C8CF]"
        >
          Enter Portfolio
        </button>
      </div>
    </div>
  );
}

export default Intro;