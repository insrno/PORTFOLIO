import { useState } from 'react';
import { FaUser, FaTools, FaProjectDiagram, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (section) => {
    setActiveSection(section);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] z-50 text-[var(--color-text)] transition-all duration-300 border-b border-white/20">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Avatar and Name */}
        <div className="flex items-center gap-4 group">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#B3C8CF] to-[#89A8B2] blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <img
              src="/assets/IMG_1678.JPG"
              alt="Christian"
              className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/30 shadow-lg hover:border-[#89A8B2] transition-all duration-300"
            />
          </div>
          <span className="text-xl md:text-2xl font-extrabold tracking-wide bg-gradient-to-r from-[#89A8B2] to-[#B3C8CF] bg-clip-text text-transparent group-hover:from-[#B3C8CF] group-hover:to-[#89A8B2] transition-all duration-300">
            Christian Serrano
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[#3B6C8A] hover:text-[#4F8CA5] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation with Icons */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full md:top-auto left-0 w-full md:w-auto bg-white/10 backdrop-blur-xl md:bg-transparent md:backdrop-blur-none border-b md:border-b-0 border-white/20 md:border-none`}>
          <ul className="flex flex-col md:flex-row gap-3 text-lg p-4 md:p-0">
            {[
              { id: 'about', icon: FaUser, label: 'About' },
              { id: 'skills', icon: FaTools, label: 'Skills' },
              { id: 'projects', icon: FaProjectDiagram, label: 'Projects' },
              { id: 'contact', icon: FaEnvelope, label: 'Contact' }
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleScroll(item.id)}
                  className={`header-nav-btn group relative flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#B3C8CF]/60 w-full md:w-auto`}
                  title={item.label}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <item.icon className={`transition-all duration-300 ${
                      activeSection === item.id 
                        ? 'text-white scale-125 drop-shadow-[0_2px_8px_rgba(139,200,207,0.35)]' 
                        : 'text-[#3B6C8A] opacity-90 group-hover:scale-110 group-hover:text-[#4F8CA5]'
                    }`} />
                    <span className="transition-all duration-300 text-[#3B6C8A]">{item.label}</span>
                  </span>
                  <div className={`absolute inset-0 rounded-full pointer-events-none transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-[#B3C8CF]/30 to-[#89A8B2]/30 opacity-60 blur-sm'
                      : 'group-hover:bg-gradient-to-r group-hover:from-[#B3C8CF]/20 group-hover:to-[#89A8B2]/20 group-hover:opacity-40 group-hover:blur-[2px] opacity-0'
                  }`}></div>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;