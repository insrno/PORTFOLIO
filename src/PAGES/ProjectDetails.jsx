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
    <section className="relative py-20 min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[var(--color-bg)] via-[var(--color-bg-light)] to-[color-mix(in_srgb,var(--color-bg-light)_78%,var(--color-primary)_22%)] overflow-x-hidden animate-bg-pan">
      <BackButton />
      
      <div className="w-full max-w-6xl bg-white/5 backdrop-blur-lg rounded-3xl shadow-2xl px-6 md:px-16 py-12 flex flex-col items-center border border-[var(--border-color)]" style={{ boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.35)' }}>
        {/* Main showcase image */}
        <div className="w-full h-96 flex items-center justify-center mb-10 bg-[var(--color-bg-light)]/90 rounded-2xl border-2 border-[var(--border-color)] overflow-hidden shadow-2xl p-0 transition-transform duration-500 hover:scale-105">
          <img src={project.image} alt={`${project.title} Main Showcase`} className="object-cover w-full h-full drop-shadow-2xl" />
        </div>

        {/* Divider */}
        <div className="w-2/3 h-1 bg-gradient-to-r from-[var(--color-secondary)] via-[var(--color-primary)] to-[var(--color-accent)] rounded-full mb-12 animate-pulse" />

        {/* Categorized Galleries (e.g. UrbanWatch with Web, Citizen, Purok sections) */}
        {project.galleryCategories ? (
          <div className="w-full mb-12 space-y-16">
            {project.galleryCategories.map((category, catIdx) => (
              <div key={catIdx} className="w-full">
                {/* Category header */}
                <div className="text-center mb-2">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)] tracking-tight animate-fade-in">
                    {category.title}
                  </h3>
                  {category.subtitle && (
                    <p className="text-[var(--color-muted)] text-sm md:text-base mt-2 animate-fade-in">{category.subtitle}</p>
                  )}
                </div>
                <ImageGallery images={category.images} title="" />
              </div>
            ))}
          </div>
        ) : project.gallery && (
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
        <h2 className="text-5xl font-extrabold mb-8 text-[var(--color-primary)] drop-shadow-lg text-center tracking-tight animate-fade-in-slow">{project.title}</h2>
        <p className="text-[var(--color-text)] mb-10 text-center text-2xl font-medium max-w-3xl animate-fade-in-slow">{project.description}</p>

        {/* Project Details */}
        <div className="w-full text-left mb-8 max-w-4xl">
          <h3 className="text-3xl font-bold text-[var(--color-primary)] mb-4 animate-fade-in">Project Overview</h3>
          <p className="text-[var(--color-text)]/90 mb-6 text-lg animate-fade-in">{project.details.overview}</p>

          {/* Features/Highlights */}
          {project.details.highlights && (
            <>
              <h4 className="text-2xl font-semibold text-[var(--color-primary)] mb-4 animate-fade-in">Highlights</h4>
              <ul className="space-y-3 mb-8">
                {project.details.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-[var(--color-text)]/90 text-lg animate-fade-in group">
                    <span className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] group-hover:scale-150 transition-transform duration-300"></span>
                    <span className="group-hover:text-[var(--color-secondary)] transition-colors duration-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Features */}
          {project.details.features && (
            <>
              <h4 className="text-2xl font-semibold text-[var(--color-primary)] mb-4 animate-fade-in">Features</h4>
              <ul className="space-y-3 mb-8">
                {project.details.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-[var(--color-text)]/90 text-lg animate-fade-in group">
                    <span className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] group-hover:scale-150 transition-transform duration-300"></span>
                    <span className="group-hover:text-[var(--color-secondary)] transition-colors duration-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Challenges/Limitations */}
          {(project.details.challenges || project.details.limitations) && (
            <>
              <h4 className="text-2xl font-semibold text-[var(--color-primary)] mb-4 animate-fade-in">
                {project.details.challenges ? 'Challenges' : 'Limitations'}
              </h4>
              <ul className="space-y-3">
                {(project.details.challenges || project.details.limitations).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[var(--color-text)]/90 text-lg animate-fade-in group">
                    <span className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] group-hover:scale-150 transition-transform duration-300"></span>
                    <span className="group-hover:text-[var(--color-secondary)] transition-colors duration-300">{item}</span>
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

        {/* Research Poster Highlight */}
        {project.poster && (
          <div className="w-full mt-16 mb-4 flex flex-col items-center">
            {/* Section label */}
            <div className="w-2/3 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent mb-10" />
            <h3 className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)] mb-3 text-center tracking-tight animate-fade-in">
              📄 RESEARCH POSTER
            </h3>
            <p className="text-[var(--color-muted)] text-sm md:text-base mb-8 text-center animate-fade-in max-w-2xl">
              Thesis documentation presented at the University of Caloocan City — Computer Studies Department
            </p>

            {/* Poster container with glow effect */}
            <div
              className="relative w-full max-w-5xl rounded-2xl overflow-hidden border-2 border-[var(--color-primary)]/30 shadow-2xl transition-all duration-500 hover:border-[var(--color-primary)] group cursor-pointer"
              style={{
                boxShadow: '0 0 40px -10px color-mix(in srgb, var(--color-primary) 25%, transparent), 0 20px 60px -15px rgba(0,0,0,0.5)'
              }}
              onClick={() => window.open(project.poster, '_blank')}
            >
              {/* Glow overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/10 via-transparent to-[var(--color-primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
              
              <img
                src={project.poster}
                alt={`${project.title} Research Poster`}
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Click hint */}
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center gap-2">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
                Click to view full size
              </div>
            </div>
          </div>
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
          box-shadow: 0 0 0 0 var(--color-secondary), 0 0 0 0 var(--color-primary);
          animation: glowPulse 2.2s infinite cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes glowPulse {
          0% {
            box-shadow: 0 0 0 0 var(--color-secondary), 0 0 0 0 var(--color-primary);
          }
          50% {
            box-shadow: 0 0 16px 6px color-mix(in srgb, var(--color-secondary) 35%, transparent), 0 0 32px 12px color-mix(in srgb, var(--color-primary) 35%, transparent);
          }
          100% {
            box-shadow: 0 0 0 0 var(--color-secondary), 0 0 0 0 var(--color-primary);
          }
        }
      `}</style>
    </section>
  );
}