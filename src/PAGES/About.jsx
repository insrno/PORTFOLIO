import Reveal from '../components/Reveal';
import resumePDF from '/assets/Christian_Serrano_Resume_V6.pdf';

const STATS = [
  { value: '3', label: 'Projects Built' },
  { value: '6+', label: 'Technologies' },
  { value: '2+', label: 'Years of Learning' },
];

const EDUCATION = [
  {
    period: '2022 – Present',
    school: 'University of Caloocan City',
    course: 'BS Computer Science',
  },
  {
    period: '2020 – 2022',
    school: 'Senior High School',
    course: 'STEM Strand',
  },
];

const INTERESTS = [
  { icon: '🖥️', label: 'Hardware Tinkering' },
  { icon: '💾', label: 'Software Testing' },
  { icon: '🧑‍💻', label: 'Frontend Dev' },
  { icon: '🔧', label: 'Problem Solving' },
  { icon: '📚', label: 'Continuous Learning' },
  { icon: '🏫', label: 'UCC Student' },
];

function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 px-8 md:px-16 lg:px-24"
      style={{ background: 'var(--color-bg)' }}
    >
      <Reveal>
        <div className="mb-12 md:mb-20">
          <span className="section-number block mb-4">03 — About Me</span>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-text)]"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            About Me
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left — bio + resume */}
        <div>
          <Reveal delay={100}>
            <p className="text-[var(--color-muted)] text-base md:text-lg leading-relaxed mb-6">
              Hi! I'm Christian Serrano, 23 years old and a 4th year student taking Bachelor of Science in Computer Science at the University of Caloocan City. I may not be the best coder or designer, but I'm always willing to learn and improve.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-[var(--color-muted)] text-base md:text-lg leading-relaxed mb-10">
              My passion is more on the functional side — building, tinkering, and making sure things work. I enjoy exploring front-end development, but I'm not afraid to get my hands dirty with computer hardware, troubleshooting, and experimenting with new software.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <a
              href={resumePDF}
              download="Christian_Serrano_Resume_V6.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm tracking-wider uppercase transition-all duration-200 hover:translate-y-[-2px] no-underline"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                background: 'var(--color-primary)',
                color: 'var(--color-bg)',
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4" />
              </svg>
              Download My Resume
            </a>
          </Reveal>

          {/* Stats */}
          <Reveal delay={250}>
            <div className="flex gap-10 mt-12 pt-10 border-t border-[var(--border-color)]">
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <span
                    className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] block"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {value}
                  </span>
                  <span className="text-xs text-[var(--color-muted)] font-semibold tracking-wider uppercase mt-1 block">{label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right — interests + education */}
        <div>
          {/* Interests grid */}
          <Reveal delay={200}>
            <h4
              className="text-lg font-semibold text-[var(--color-text)] mb-6 tracking-wider uppercase"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '12px' }}
            >
              Interests & Skills
            </h4>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
            {INTERESTS.map(({ icon, label }, i) => (
              <Reveal key={i} delay={250 + i * 50} direction="scale">
                <div className="flex items-center gap-3 p-4 border border-[var(--border-color)] group hover:border-[var(--color-primary)] transition-colors duration-300">
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{icon}</span>
                  <span className="text-sm text-[var(--color-muted)] font-medium group-hover:text-[var(--color-text)] transition-colors duration-300">{label}</span>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Education */}
          <Reveal delay={400}>
            <h4
              className="text-lg font-semibold text-[var(--color-text)] mb-6 tracking-wider uppercase"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '12px' }}
            >
              Education
            </h4>
          </Reveal>
          <div className="space-y-6">
            {EDUCATION.map(({ period, school, course }, i) => (
              <Reveal key={i} delay={450 + i * 80}>
                <div className="border-l-2 border-[var(--color-primary)] pl-5 py-1">
                  <span className="text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-primary)] block mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {period}
                  </span>
                  <p className="text-[var(--color-text)] font-semibold text-base">{school}</p>
                  <p className="text-[var(--color-muted)] text-sm">{course}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;