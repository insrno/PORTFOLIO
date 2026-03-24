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

  if (!project) return <div className="text-center py-20 text-[var(--color-muted)]">Project not found.</div>;

  return (
    <section
      className="relative py-20 md:py-32 px-8 md:px-16 lg:px-24 min-h-screen"
      style={{ background: 'var(--color-bg)' }}
    >
      <BackButton />

      {/* Section header */}
      <div className="mb-12 md:mb-16 animate-fadeUp">
        <span className="section-number block mb-4">Project Detail</span>
        <h2
          className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-text)]"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          {project.title}
        </h2>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs font-semibold tracking-wider uppercase text-[var(--color-primary)]"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {tag}{i < project.tags.length - 1 && <span className="ml-2 text-[var(--color-muted)]">·</span>}
            </span>
          ))}
        </div>
      </div>

      {/* Main showcase image */}
      <div
        className="w-full overflow-hidden mb-16 border border-[var(--border-color)] animate-fadeUp"
        style={{ animationDelay: '0.1s' }}
      >
        <img
          src={project.image}
          alt={`${project.title} Main Showcase`}
          className="w-full h-[300px] md:h-[450px] lg:h-[500px] object-cover transition-transform duration-600 hover:scale-[1.03]"
        />
      </div>

      {/* Project description */}
      <div className="animate-fadeUp mb-16" style={{ animationDelay: '0.15s' }}>
        <p className="text-[var(--color-muted)] text-lg md:text-xl leading-relaxed max-w-3xl">
          {project.description}
        </p>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[var(--border-color)] mb-16" />

      {/* Gallery */}
      {project.gallery && (
        <div className="mb-16 animate-fadeUp" style={{ animationDelay: '0.2s' }}>
          <ImageGallery images={project.gallery} title={`${project.title.toUpperCase()} GALLERY`} />
        </div>
      )}

      {/* Characters (if any) */}
      {project.characters && (
        <div className="flex gap-12 md:gap-16 mb-16 items-center justify-center animate-fadeUp" style={{ animationDelay: '0.25s' }}>
          {project.characters.map((char, i) => (
            <img
              key={i}
              src={char.src}
              alt={char.alt}
              className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-xl transition-transform duration-300 hover:scale-110 hover:-translate-y-2"
            />
          ))}
        </div>
      )}

      {/* Project Details */}
      <div className="w-full max-w-4xl mb-16 animate-fadeUp" style={{ animationDelay: '0.3s' }}>
        <span className="section-number block mb-4">Overview</span>
        <h3
          className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Project Overview
        </h3>
        <p className="text-[var(--color-muted)] mb-10 text-lg leading-relaxed">{project.details.overview}</p>

        {/* Highlights */}
        {project.details.highlights && (
          <>
            <h4
              className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-5"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Highlights
            </h4>
            <ul className="space-y-4 mb-10">
              {project.details.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3 text-[var(--color-muted)] text-base md:text-lg group">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-[var(--color-primary)] group-hover:scale-150 transition-transform duration-300"></span>
                  <span className="group-hover:text-[var(--color-text)] transition-colors duration-300">{highlight}</span>
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Features */}
        {project.details.features && (
          <>
            <h4
              className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-5"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Features
            </h4>
            <ul className="space-y-4 mb-10">
              {project.details.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-[var(--color-muted)] text-base md:text-lg group">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-[var(--color-primary)] group-hover:scale-150 transition-transform duration-300"></span>
                  <span className="group-hover:text-[var(--color-text)] transition-colors duration-300">{feature}</span>
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Challenges/Limitations */}
        {(project.details.challenges || project.details.limitations) && (
          <>
            <h4
              className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-5"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {project.details.challenges ? 'Challenges' : 'Limitations'}
            </h4>
            <ul className="space-y-4">
              {(project.details.challenges || project.details.limitations).map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[var(--color-muted)] text-base md:text-lg group">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-[var(--color-primary)] group-hover:scale-150 transition-transform duration-300"></span>
                  <span className="group-hover:text-[var(--color-text)] transition-colors duration-300">{item}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[var(--border-color)] mb-16" />

      {/* Tech Stack */}
      {project.techStack && (
        <div className="animate-fadeUp" style={{ animationDelay: '0.35s' }}>
          <TechStack techStack={project.techStack} title={`${project.title.toUpperCase()} TECHSTACK`} />
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes scrollX {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-fadeUp {
          animation: fadeUp 0.8s ease both;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-lightbox-in {
          animation: lightboxIn 0.5s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes lightboxIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}