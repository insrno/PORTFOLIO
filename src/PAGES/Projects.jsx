import { useNavigate } from 'react-router-dom';
import { projectList } from '../data/projects';
import Reveal from '../components/Reveal';

function Projects() {
  const navigate = useNavigate();

  // Filter out 'comingsoon' for main display
  const displayProjects = projectList.filter(p => p.id !== 'comingsoon');

  return (
    <section
      id="projects"
      className="py-20 md:py-32 px-8 md:px-16 lg:px-24"
      style={{ background: 'var(--color-bg)' }}
    >
      {/* Section header */}
      <Reveal>
        <div className="mb-16 md:mb-24">
          <span className="section-number block mb-4">01 — Selected Work</span>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-text)]"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Projects
          </h2>
        </div>
      </Reveal>

      {/* Project cards — vertically stacked, full-width */}
      <div className="space-y-20 md:space-y-32">
        {displayProjects.map((project, index) => (
          <Reveal key={project.id} delay={index * 100}>
            <article
              className="project-card group cursor-pointer"
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              {/* Project image — full width */}
              <div className="relative overflow-hidden mb-8 border border-[var(--border-color)]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card-image w-full h-[300px] md:h-[450px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Project info */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
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

                  <h3
                    className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-[var(--color-muted)] text-base md:text-lg leading-relaxed max-w-2xl">
                    {project.description}
                  </p>
                </div>

                {/* Arrow link */}
                <div className="flex items-center gap-2 text-[var(--color-primary)] text-sm font-semibold tracking-wider uppercase mt-2 md:mt-4 group-hover:translate-x-2 transition-transform duration-300"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  More about this project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Projects;