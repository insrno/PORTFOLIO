export default function TechStack({ techStack, title }) {
  return (
    <div className="w-full flex flex-col items-center mt-12 animate-fade-in">
      <div className="bg-transparent rounded-3xl px-8 py-8 flex flex-col items-center max-w-3xl w-full">
        <h3 className="text-3xl md:text-4xl font-extrabold text-[#89A8B2] mb-6 text-center tracking-widest pixel-font drop-shadow">{title}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-8 items-end justify-center text-center">
          {techStack.map((tech, i) => (
            <div key={i} className="flex flex-col items-center justify-end">
              <span className="text-5xl mb-2">{tech.icon}</span>
              <span className="text-[#B3C8CF] font-mono text-lg tracking-widest pixel-font">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 