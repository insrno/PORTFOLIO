import { useState, useEffect } from 'react';
import { FaUser, FaTools, FaProjectDiagram, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll progress for the top progress bar
  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const max = scrollHeight - clientHeight;
      setScrollProgress(max > 0 ? (scrollTop / max) * 100 : 0);
      if (scrollTop < 150) setActiveSection('');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // IntersectionObserver: auto-highlight nav item for visible section
  useEffect(() => {
    const sections = ['about', 'skills', 'projects', 'contact'];
    const observers = sections.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(obs => obs?.disconnect());
  }, []);

  const handleScroll = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] z-50 text-[var(--color-text)] transition-all duration-300 border-b border-white/20">
      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#89A8B2] via-[#B3C8CF] to-[#89A8B2] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
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
            CS<span className="text-[#B3C8CF]">.</span>dev
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

        {/* Navigation */}
        <nav className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row absolute md:relative top-full md:top-auto left-0 w-full md:w-auto bg-white/80 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none border-b md:border-b-0 border-[#E5E1DA] md:border-none py-2 md:py-0`}>
          <ul className="flex flex-col md:flex-row gap-0 md:gap-1 px-4 md:px-0">
            {[
              { id: 'about', icon: FaUser, label: 'About' },
              { id: 'skills', icon: FaTools, label: 'Skills' },
              { id: 'projects', icon: FaProjectDiagram, label: 'Projects' },
              { id: 'contact', icon: FaEnvelope, label: 'Contact' }
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleScroll(item.id)}
                  className={`group relative flex items-center gap-2 px-4 py-2.5 text-sm font-semibold tracking-wide transition-colors duration-200 bg-transparent border-none outline-none w-full md:w-auto ${
                    activeSection === item.id
                      ? 'text-[#89A8B2]'
                      : 'text-[#555f6e] hover:text-[#89A8B2]'
                  }`}
                >
                  <item.icon className="text-xs opacity-70" />
                  {item.label}
                  <span className={`absolute bottom-1 left-4 right-4 h-[2px] rounded-full bg-[#89A8B2] transition-all duration-200 ${
                    activeSection === item.id ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-40 group-hover:scale-x-100'
                  }`} />
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