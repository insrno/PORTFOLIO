import Reveal from '../components/Reveal';

function Footer() {
  return (
    <footer
      id="contact"
      className="py-20 md:py-32 px-8 md:px-16 lg:px-24"
      style={{ background: 'var(--color-bg-light)' }}
    >
      <Reveal>
        <div className="mb-12 md:mb-20">
          <span className="section-number block mb-4">05 — Get in Touch</span>
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--color-text)] max-w-3xl leading-tight"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Got a cool project in mind?{' '}
            <span className="text-[var(--color-primary)]">Let's work together.</span>
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* Contact info */}
        <Reveal delay={100}>
          <div className="space-y-6">
            <h4
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Reach me at
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:serrano.christian0602@gmail.com"
                className="block text-[var(--color-text)] text-lg md:text-xl font-medium hover:text-[var(--color-primary)] transition-colors duration-200 no-underline"
              >
                serrano.christian0602@gmail.com
              </a>
              <a
                href="tel:09152335083"
                className="block text-[var(--color-muted)] text-base hover:text-[var(--color-primary)] transition-colors duration-200 no-underline"
              >
                09152335083
              </a>
            </div>
          </div>
        </Reveal>

        {/* Social links */}
        <Reveal delay={200}>
          <div>
            <h4
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Follow me
            </h4>
            <div className="flex flex-wrap gap-4">
              {[
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/insrno/' },
                { name: 'GitHub', url: 'https://github.com/insrno' },
                { name: 'Facebook', url: 'https://www.facebook.com/chriscrocc' },
                { name: 'Twitter', url: 'https://twitter.com/inzsrn' },
              ].map(({ name, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-sm font-semibold tracking-wider uppercase border border-[var(--border-color)] text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all duration-300 no-underline"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Copyright */}
      <Reveal delay={300}>
        <div className="mt-20 pt-8 border-t border-[var(--border-color)]">
          <p className="text-xs text-[var(--color-muted)] tracking-wider">
            &copy; {new Date().getFullYear()} Christian Serrano. Built with React.
          </p>
        </div>
      </Reveal>
    </footer>
  );
}

export default Footer;