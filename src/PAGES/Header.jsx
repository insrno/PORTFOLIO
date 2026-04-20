import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const [activeSection, setActiveSection] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const isPortfolioPage = location.pathname === '/portfolio';

  // IntersectionObserver: auto-highlight nav item for visible section
  useEffect(() => {
    if (!isPortfolioPage) return;
    const sections = ['hero', 'projects', 'experience', 'about', 'contact'];
    const observers = sections.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.25 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(obs => obs?.disconnect());
  }, [isPortfolioPage]);

  // Handle scroll-on-arrival after navigating from another page
  useEffect(() => {
    if (isPortfolioPage && location.state?.scrollTo) {
      const section = location.state.scrollTo;
      // Small delay to let the page render before scrolling
      const timer = setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isPortfolioPage, location.state]);

  const handleScroll = (section) => {
    if (isPortfolioPage) {
      // Already on portfolio page, just scroll
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to portfolio page with scroll target
      navigate('/portfolio', { state: { scrollTo: section } });
    }
  };

  const navItems = [
    { id: 'projects', label: 'Selected Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'about', label: 'About Me' },
    { id: 'contact', label: 'Get in Touch' },
  ];

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="portfolio-sidebar">
        {/* Logo */}
        <button
          onClick={() => handleScroll('hero')}
          className="text-[var(--color-primary)] font-bold text-lg tracking-wider border-none p-0 bg-transparent"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          CS
        </button>

        {/* Nav links (rotated) */}
        <nav className="flex flex-col items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className={`sidebar-nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Bottom spacer */}
        <div className="w-3 h-3 rounded-full border border-[var(--color-primary)] opacity-30" />
      </aside>

      {/* Mobile top header */}
      <MobileHeader
        navItems={navItems}
        activeSection={activeSection}
        handleScroll={handleScroll}
      />
    </>
  );
}

function MobileHeader({ navItems, activeSection, handleScroll }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="md:hidden fixed top-0 left-0 w-full bg-[var(--color-bg)]/95 backdrop-blur-md z-50 border-b border-[var(--border-color)]">
      <div className="flex items-center justify-between px-5 py-4">
        <button
          onClick={() => handleScroll('hero')}
          className="text-[var(--color-primary)] font-bold text-lg tracking-wider border-none p-0 bg-transparent"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          CS<span className="text-[var(--color-secondary)]">.</span>dev
        </button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[var(--color-muted)] p-1 border-none bg-transparent"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>
      {isOpen && (
        <nav className="px-5 pb-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { handleScroll(item.id); setIsOpen(false); }}
              className={`block w-full text-left px-3 py-2 text-sm font-semibold tracking-wider uppercase border-none bg-transparent transition-colors duration-200 ${
                activeSection === item.id ? 'text-[var(--color-primary)]' : 'text-[var(--color-muted)] hover:text-[var(--color-primary)]'
              }`}
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;