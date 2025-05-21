export default function TechStack({ techStack, title }) {
  return (
    <div className="w-full flex flex-col items-center mt-12 animate-fade-in">
      <div className="bg-transparent rounded-3xl px-8 py-8 flex flex-col items-center max-w-4xl w-full">
        <h3 className="text-3xl md:text-4xl font-extrabold text-[#89A8B2] mb-8 text-center tracking-widest pixel-font drop-shadow">{title}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-10 gap-y-12 items-end justify-center text-center w-full">
          {techStack.map((tech, i) => (
            <div key={i} className="flex flex-col items-center justify-end">
              <span className="text-6xl md:text-7xl mb-3 drop-shadow-lg">{tech.icon}</span>
              <span className="text-[#B3C8CF] font-mono text-base md:text-lg tracking-widest pixel-font mt-1 md:mt-2 whitespace-nowrap">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 