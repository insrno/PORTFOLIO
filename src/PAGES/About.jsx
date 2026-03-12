import Reveal from '../components/Reveal';

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
    dot: '#89A8B2',
  },
  {
    period: '2020 – 2022',
    school: 'Senior High School',
    course: 'STEM Strand',
    dot: '#B3C8CF',
  },
];

function About() {
  return (
    <section
      id="about"
      className="py-12 md:py-20 min-h-screen bg-gradient-to-b from-[#E5E1DA] via-[#F1F0E8] to-white flex justify-center items-center"
    >
      <div className="container mx-auto max-w-3xl px-4 py-6 md:py-10 flex flex-col items-center">
        <Reveal>
          <h3 className="text-3xl md:text-4xl font-bold mb-2 text-[#89A8B2]">About Me</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-[#B3C8CF] to-[#89A8B2] rounded-full mb-6 opacity-60 mx-auto"></div>
        </Reveal>

        {/* Stats row */}
        <Reveal delay={100} className="w-full">
          <div className="flex flex-wrap gap-8 justify-center mb-8">
            {STATS.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center">
                <span className="text-4xl font-extrabold text-[#89A8B2]">{value}</span>
                <span className="text-xs text-[#181e29]/60 font-semibold tracking-widest uppercase mt-1">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="text-[#181e29] text-base md:text-lg leading-relaxed mb-8 md:mb-10 text-center font-medium">
            Hi! I'm Christian Serrano, 23 years old and a 4th year student taking Bachelor of Science in Computer Science at the University of Caloocan City. I may not be the best coder or designer, but I'm always willing to learn and improve. My passion is more on the functional side of thing building, tinkering, and making sure things work.<br /><br />
            I enjoy exploring the world of front-end development, but I'm not afraid to get my hands dirty with computer hardware, troubleshooting, and experimenting with new software. For me, it's all about figuring things out, solving problems, and making technology work for people.
          </p>
        </Reveal>

        <div className="flex flex-col items-center w-full">
          <Reveal delay={200}>
            <h4 className="text-xl md:text-2xl font-semibold text-[#89A8B2] mb-4">Fun Facts & Technical Skills</h4>
          </Reveal>
          <div className="mt-6 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-10 gap-y-6 md:gap-y-10 w-full max-w-3xl">
            {[
              { icon: '🖥️', text: 'Loves tinkering with computer parts and hardware' },
              { icon: '💾', text: 'Enjoys downloading and testing new software' },
              { icon: '🧑‍💻', text: 'Focused on front-end development (but always learning)' },
              { icon: '🔧', text: 'More interested in function and usability than fancy design' },
              { icon: '📚', text: 'Willing to learn and grow as a developer' },
              { icon: '🏫', text: 'Proud student at University of Caloocan City' },
            ].map(({ icon, text }, i) => (
              <Reveal key={i} delay={250 + i * 60} direction="scale">
                <div className="flex flex-col items-center text-center group transition-transform duration-300 hover:scale-105">
                  <span className="text-3xl md:text-4xl mb-2 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">{icon}</span>
                  <span className="text-[#181e29] font-medium text-base md:text-lg leading-relaxed">{text}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <Reveal delay={300} className="w-full mt-12 max-w-2xl mx-auto">
          <h4 className="text-xl md:text-2xl font-semibold text-[#89A8B2] mb-6 flex items-center justify-center gap-2">
            <span>🎓</span> Education
          </h4>
          <div className="relative pl-6 border-l-2 border-[#B3C8CF]/40 space-y-6 max-w-md mx-auto">
            {EDUCATION.map(({ period, school, course, dot }, i) => (
              <div key={i} className="relative group">
                <div
                  className="absolute -left-[25px] w-3 h-3 rounded-full mt-1.5 transition-transform duration-300 group-hover:scale-125"
                  style={{ background: dot }}
                />
                <p className="text-xs font-semibold mb-0.5" style={{ color: dot }}>{period}</p>
                <p className="text-[#181e29] font-semibold">{school}</p>
                <p className="text-[#181e29]/70 text-sm">{course}</p>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}

export default About;