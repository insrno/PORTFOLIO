function About() {
  return (
    <section
      id="about"
      className="py-12 md:py-20 min-h-screen bg-gradient-to-b from-[#E5E1DA] via-[#F1F0E8] to-white flex justify-center items-center"
    >
      <div className="container mx-auto max-w-3xl px-4 py-6 md:py-10 flex flex-col items-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-2 text-[#89A8B2]">About Me</h3>
        <div className="w-16 h-1 bg-gradient-to-r from-[#B3C8CF] to-[#89A8B2] rounded-full mb-6 opacity-60"></div>
        <p className="text-[#181e29] text-base md:text-lg leading-relaxed mb-8 md:mb-10 text-center font-medium">
          Hi! I'm Christian Serrano, 22 years old and currently studying Bachelor of Science in Computer Science at the University of Caloocan City. I may not be the best coder or designer, but I'm always willing to learn and improve. My passion is more on the functional side of thing building, tinkering, and making sure things work.<br /><br />
          I enjoy exploring the world of front-end development, but I'm not afraid to get my hands dirty with computer hardware, troubleshooting, and experimenting with new software. For me, it's all about figuring things out, solving problems, and making technology work for people.
        </p>
        <div className="flex flex-col items-center w-full">
          <h4 className="text-xl md:text-2xl font-semibold text-[#89A8B2] mb-4">Fun Facts & Technical Skills</h4>
          <div className="mt-6 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-10 gap-y-6 md:gap-y-10 w-full max-w-3xl">
            <div className="flex flex-col items-center text-center group transition-transform duration-300 hover:scale-105">
              <span className="text-3xl md:text-4xl mb-2 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">🖥️</span>
              <span className="text-[#181e29] font-medium text-base md:text-lg leading-relaxed">Loves tinkering with computer parts and hardware</span>
            </div>
            <div className="flex flex-col items-center text-center group transition-transform duration-300 hover:scale-105">
              <span className="text-3xl md:text-4xl mb-2 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">💾</span>
              <span className="text-[#181e29] font-medium text-base md:text-lg leading-relaxed">Enjoys downloading and testing new software</span>
            </div>
            <div className="flex flex-col items-center text-center group transition-transform duration-300 hover:scale-105">
              <span className="text-3xl md:text-4xl mb-2 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">🧑‍💻</span>
              <span className="text-[#181e29] font-medium text-base md:text-lg leading-relaxed">Focused on front-end development (but always learning)</span>
            </div>
            <div className="flex flex-col items-center text-center group transition-transform duration-300 hover:scale-105">
              <span className="text-3xl md:text-4xl mb-2 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">🔧</span>
              <span className="text-[#181e29] font-medium text-base md:text-lg leading-relaxed">More interested in function and usability than fancy design</span>
            </div>
            <div className="flex flex-col items-center text-center group transition-transform duration-300 hover:scale-105">
              <span className="text-3xl md:text-4xl mb-2 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">📚</span>
              <span className="text-[#181e29] font-medium text-base md:text-lg leading-relaxed">Willing to learn and grow as a developer</span>
            </div>
            <div className="flex flex-col items-center text-center group transition-transform duration-300 hover:scale-105">
              <span className="text-3xl md:text-4xl mb-2 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">🏫</span>
              <span className="text-[#181e29] font-medium text-base md:text-lg leading-relaxed">Proud student at University of Caloocan City</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;