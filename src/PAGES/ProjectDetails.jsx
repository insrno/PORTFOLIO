import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { projectList } from '../data/projects';
import BackButton from '../components/BackButton';
import ImageGallery from '../components/ImageGallery';
import TechStack from '../components/TechStack';

export default function ProjectDetails() {
  const { projectId } = useParams();
  const project = projectList.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return <div className="text-center py-20">Project not found.</div>;

  return (
    <section className="relative py-20 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#B3C8CF] via-[#E5E1DA] to-[#F1F0E8] overflow-x-hidden animate-bg-pan">
      <BackButton />
      
      <div className="w-full max-w-6xl bg-white/30 backdrop-blur-lg rounded-3xl shadow-2xl px-6 md:px-16 py-12 flex flex-col items-center border border-[#B3C8CF]/40" style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)' }}>
        {/* Main showcase image */}
        <div className="w-full h-96 flex items-center justify-center mb-10 bg-[#E5E1DA]/70 rounded-2xl border-2 border-[#B3C8CF] overflow-hidden shadow-2xl p-0 transition-transform duration-500 hover:scale-105">
          <img src={project.image} alt={`${project.title} Main Showcase`} className="object-cover w-full h-full drop-shadow-2xl" />
        </div>

        {/* Divider */}
        <div className="w-2/3 h-1 bg-gradient-to-r from-[#B3C8CF] via-[#89A8B2] to-[#E5E1DA] rounded-full mb-12 animate-pulse" />

        {/* Gallery */}
        {project.gallery && (
          <ImageGallery images={project.gallery} title={`${project.title.toUpperCase()} GALLERY`} />
        )}

        {/* Characters (if any) */}
        {project.characters && (
          <div className="flex gap-16 mb-12 items-center justify-center">
            {project.characters.map((char, i) => (
              <img
                key={i}
                src={char.src}
                alt={char.alt}
                className="w-40 h-40 md:w-48 md:h-48 object-contain drop-shadow-xl transition-transform duration-300 hover:scale-110 hover:-translate-y-2"
              />
            ))}
          </div>
        )}

        {/* Project Title and Description */}
        <h2 className="text-5xl font-extrabold mb-8 text-[#89A8B2] drop-shadow-lg text-center tracking-tight animate-fade-in-slow">{project.title}</h2>
        <p className="text-[#181e29] mb-10 text-center text-2xl font-medium max-w-3xl animate-fade-in-slow">{project.description}</p>

        {/* Project Details */}
        <div className="w-full text-left mb-8 max-w-4xl">
          <h3 className="text-3xl font-bold text-[#89A8B2] mb-4 animate-fade-in">Project Overview</h3>
          <p className="text-[#181e29] mb-6 text-lg animate-fade-in">{project.details.overview}</p>

          {/* Features/Highlights */}
          {project.details.highlights && (
            <>
              <h4 className="text-2xl font-semibold text-[#89A8B2] mb-4 animate-fade-in">Highlights</h4>
              <ul className="space-y-3 mb-8">
                {project.details.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#181e29] text-lg animate-fade-in group">
                    <span className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-gradient-to-r from-[#B3C8CF] to-[#89A8B2] group-hover:scale-150 transition-transform duration-300"></span>
                    <span className="group-hover:text-[#89A8B2] transition-colors duration-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Features */}
          {project.details.features && (
            <>
              <h4 className="text-2xl font-semibold text-[#89A8B2] mb-4 animate-fade-in">Features</h4>
              <ul className="space-y-3 mb-8">
                {project.details.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#181e29] text-lg animate-fade-in group">
                    <span className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-gradient-to-r from-[#B3C8CF] to-[#89A8B2] group-hover:scale-150 transition-transform duration-300"></span>
                    <span className="group-hover:text-[#89A8B2] transition-colors duration-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Challenges/Limitations */}
          {(project.details.challenges || project.details.limitations) && (
            <>
              <h4 className="text-2xl font-semibold text-[#89A8B2] mb-4 animate-fade-in">
                {project.details.challenges ? 'Challenges' : 'Limitations'}
              </h4>
              <ul className="space-y-3">
                {(project.details.challenges || project.details.limitations).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#181e29] text-lg animate-fade-in group">
                    <span className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-gradient-to-r from-[#B3C8CF] to-[#89A8B2] group-hover:scale-150 transition-transform duration-300"></span>
                    <span className="group-hover:text-[#89A8B2] transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Tech Stack */}
        {project.techStack && (
          <TechStack techStack={project.techStack} title={`${project.title.toUpperCase()} TECHSTACK`} />
        )}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes scrollX {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-bg-pan {
          animation: bg-pan 20s linear infinite alternate;
        }
        @keyframes bg-pan {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-fade-in {
          animation: fadeIn 1.2s ease both;
        }
        .animate-fade-in-slow {
          animation: fadeIn 2s ease both;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: none; }
        }
        .animate-lightbox-in {
          animation: lightboxIn 0.5s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes lightboxIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-glow {
          box-shadow: 0 0 0 0 #B3C8CF, 0 0 0 0 #89A8B2;
          animation: glowPulse 2.2s infinite cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes glowPulse {
          0% {
            box-shadow: 0 0 0 0 #B3C8CF, 0 0 0 0 #89A8B2;
          }
          50% {
            box-shadow: 0 0 16px 6px #B3C8CF55, 0 0 32px 12px #89A8B255;
          }
          100% {
            box-shadow: 0 0 0 0 #B3C8CF, 0 0 0 0 #89A8B2;
          }
        }
      `}</style>
    </section>
  );
}