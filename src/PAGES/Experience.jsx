import { useState, useEffect, useRef } from 'react';
import Reveal from '../components/Reveal';

const EXPERIENCES = [
  {
    company: 'URBANWATCH',
    role: 'Full Stack Developer',
    period: '2025 — Present',
    accent: '#89A8B2',
    bullets: [
      'Leading frontend architecture for a real-time AI-powered monitoring system using TypeScript.',
      'Directing cross-platform integration and environment consistency through Docker containerization.',
      'Coordinating with AI/backend teams to integrate YOLOv8 detection results into responsive dashboards.',
    ],
  },
  {
    company: 'MINES AND GEOSCIENCES BUREAU (MGB)',
    role: 'Software Developer Intern',
    period: 'May 2025 — Nov 2025',
    accent: '#B3C8CF',
    bullets: [
      'Built a role-based Document and Information Management System using PHP and JavaScript for secure file storage.',
      'Developed an automated Attendance/DTR system with QR code scanning and camera-based identity verification.',
      'Created an Automated Certification Issuance and Verification System utilizing unique identifiers to deter fraud.',
      'Managed ICT Corrective Maintenance (ICM) and server monitoring to ensure reliability and minimize disruptions.',
    ],
  },
  {
    company: 'CHIX MO UNLI',
    role: 'Full Stack Developer',
    period: 'Sep 2024 — Dec 2024',
    accent: '#A3B8C4',
    bullets: [
      'Engineered a comprehensive restaurant management system using Dart and Flutter.',
      'Architected a secure role-based access control system and financial modules integrated with Firebase.',
    ],
  },
];

function ExperienceCard({ exp, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Reveal delay={index * 120}>
      <div
        className="group relative border-b border-[var(--border-color)] py-10 md:py-14"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
          {/* Left column — period + role */}
          <div className="md:w-[280px] flex-shrink-0">
            <span
              className="text-xs font-bold tracking-[0.2em] uppercase block mb-2"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: exp.accent }}
            >
              {exp.period}
            </span>
            <p className="text-[var(--color-muted)] text-sm font-medium italic">
              {exp.role}
            </p>
          </div>

          {/* Right column — company + bullets */}
          <div className="flex-1">
            <h4
              className="text-xl md:text-2xl font-bold mb-4 tracking-tight transition-colors duration-300"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                color: isHovered ? exp.accent : 'var(--color-text)',
              }}
            >
              {exp.company}
            </h4>
            <ul className="space-y-3">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base text-[var(--color-muted)] leading-relaxed">
                  <span
                    className="mt-2 w-1 h-1 rounded-full flex-shrink-0 transition-transform duration-300"
                    style={{
                      background: exp.accent,
                      transform: isHovered ? 'scale(2)' : 'scale(1)',
                    }}
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 md:py-32 px-8 md:px-16 lg:px-24"
      style={{ background: 'var(--color-bg-light)' }}
    >
      <Reveal>
        <div className="mb-12 md:mb-20">
          <span className="section-number block mb-4">02 — Experience</span>
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-text)]"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Where I've Worked
          </h2>
        </div>
      </Reveal>

      <div>
        {EXPERIENCES.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} index={index} />
        ))}
      </div>
    </section>
  );
}
