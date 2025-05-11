import { useNavigate } from 'react-router-dom';
import codestacleImg from '/assets/codestaclestart.png';
import chixmounliLogo from '/assets/chixmounli/chixmounlilogo.png';

const projectList = [
  {
    id: 'codestacle',
    title: 'Codestacle',
    image: codestacleImg,
    description: 'A 2D platformer game that makes learning programming fun through interactive gameplay and coding challenges.',
    tags: ['Game Development', 'Education', 'Godot']
  },
  {
    id: 'chixmounli',
    title: 'CHICKS-MO-UNLI RESTAURANT MANAGEMENT SYSTEM',
    image: chixmounliLogo,
    description: 'A restaurant management system for Chicks-Mo-Unli, specializing in order tracking, stock management, and financial reporting.',
    tags: ['Restaurant Management System', 'Flutter', 'Mobile Development']
  },
  {
    id: 'comingsoon',
    title: '',
    description: 'Stay tuned for more projects and updates!',
    tags: ['TBA']
  }
];

function Projects() {
  const navigate = useNavigate();
  return (
    <section id="projects" className="py-20 min-h-screen bg-gradient-to-b from-[#E5E1DA] via-[#F1F0E8] to-white flex flex-col items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 bg-gradient-to-r from-[#B3C8CF]/20 via-[#89A8B2]/20 to-[#E5E1DA]/20 rounded-full blur-3xl animate-pulse"></div>
          </div>
          <h3 className="text-5xl font-extrabold text-[#89A8B2] mb-4 tracking-tight relative">
            My Projects
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-[#89A8B2] to-transparent rounded-full opacity-75"></span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer border border-[#E5E1DA]/50"
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Content Container */}
              <div className="p-6">
                <h4 className="text-2xl font-bold mb-3 text-[#89A8B2] group-hover:text-[#B3C8CF] transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-[#181e29] text-base leading-relaxed mb-4">
                  {project.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-sm bg-[#F1F0E8] text-[#89A8B2] rounded-full border border-[#E5E1DA] group-hover:border-[#B3C8CF] transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 border-2 border-[#B3C8CF] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;