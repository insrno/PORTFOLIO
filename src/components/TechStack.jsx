export default function TechStack({ techStack, title }) {
  return (
    <div className="w-full flex flex-col mt-12">
      <span className="section-number block mb-4">Tech Stack</span>
      <h3
        className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-10 tracking-tight"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-10 items-end text-center w-full">
        {techStack.map((tech, i) => (
          <div key={i} className="flex flex-col items-center justify-end group">
            <span className="text-5xl md:text-6xl mb-3 drop-shadow-lg group-hover:scale-110 transition-transform duration-300">{tech.icon}</span>
            <span
              className="text-[var(--color-muted)] text-sm tracking-wider uppercase group-hover:text-[var(--color-primary)] transition-colors duration-300"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}