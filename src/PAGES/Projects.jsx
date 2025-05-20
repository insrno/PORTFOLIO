import { useNavigate } from 'react-router-dom';
import { projectList } from '../data/projects';

function Projects() {
  const navigate = useNavigate();
  
  return (
    <section id="projects" className="py-12 md:py-20 min-h-screen bg-gradient-to-b from-[#E5E1DA] via-[#F1F0E8] to-white flex flex-col items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 md:w-64 h-48 md:h-64 bg-gradient-to-r from-[#B3C8CF]/20 via-[#89A8B2]/20 to-[#E5E1DA]/20 rounded-full blur-3xl animate-pulse"></div>
          </div>
          <h3 className="text-3xl md:text-5xl font-extrabold text-[#89A8B2] mb-4 tracking-tight relative">
            My Projects
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 md:w-16 h-0.5 bg-gradient-to-r from-transparent via-[#89A8B2] to-transparent rounded-full opacity-75"></span>
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {projectList.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                project.id === 'comingsoon' ? '' : 'cursor-pointer'
              } border border-[#E5E1DA]/50`}
              onClick={() => project.id !== 'comingsoon' && navigate(`/projects/${project.id}`)}
            >
              {/* Image Container */}
              <div className="relative h-48 md:h-56 w-full overflow-hidden">
                {project.id === 'comingsoon' ? (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#B3C8CF]/10 to-[#89A8B2]/10">
                  </div>
                ) : (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </>
                )}
              </div>
              
              {/* Content Container */}
              <div className="p-4 md:p-6">
                <h4 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-[#89A8B2] group-hover:text-[#B3C8CF] transition-colors duration-300">
                  {project.title || 'Coming Soon'}
                </h4>
                <p className="text-[#181e29] text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                  {project.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-2 md:px-3 py-1 text-xs md:text-sm bg-[#F1F0E8] text-[#89A8B2] rounded-full border border-[#E5E1DA] group-hover:border-[#B3C8CF] transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Hover Effect Overlay - Only show for actual projects */}
              {project.id !== 'comingsoon' && (
                <div className="absolute inset-0 border-2 border-[#B3C8CF] rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;