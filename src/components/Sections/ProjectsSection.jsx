import React from 'react';
import { Camera, ExternalLink, Code2, Award, Terminal } from 'lucide-react';

export default function ProjectsSection({ onSetCameraMode, currentCameraMode }) {
  const projects = [
    {
      title: 'HACKARYAVERSE HACKATHON PORTAL',
      category: 'LEADERSHIP & FULL STACK',
      desc: 'Architected and spearheaded the official platform for HackAryaVerse — a national 24-hour hackathon. Managed team deliverables, participant portals, and real-time announcements for 1,000+ attendees.',
      tags: ['React.js', 'Node.js', 'Express', 'MySQL', 'Team Lead', 'UI/UX'],
      image: '/assets/01_LVN_34-Front.jpeg',
      cameraMode: 'default',
      linkText: 'HackAryaVerse Organizer',
      link: 'https://www.linkedin.com/in/aditya-dahuja/',
    },
    {
      title: '3D HYPERCAR ENGINEERING SHOWCASE',
      category: 'CREATIVE 3D & MOTION WEB',
      desc: 'A cinematic 3D automotive experience featuring a scroll-driven exploded CAD view, real-time shaders, custom Web Audio engine synthesizer, 4 dynamic themes, and 60fps Lenis physics motion.',
      tags: ['Three.js', 'React Three Fiber', 'GSAP ScrollTrigger', 'Web Audio API', 'Lenis'],
      image: '/assets/images-3.jpeg',
      cameraMode: 'top',
      linkText: 'Live Interactive 3D',
      link: '#hero',
    },
    {
      title: 'SCALABLE RELATIONAL DATA HUB',
      category: 'BACKEND & DATABASE DESIGN',
      desc: 'High-concurrency RESTful API suite backed by optimized MySQL relational models. Features normalized relational schema design, connection pooling, indexing, and sub-200ms latency guarantees.',
      tags: ['Node.js', 'Express.js', 'MySQL', 'REST APIs', 'Query Tuning'],
      image: '/assets/images.jpeg',
      cameraMode: 'engine',
      linkText: 'Architecture Specs',
      link: 'https://www.linkedin.com/in/aditya-dahuja/',
    },
    {
      title: 'ALGORITHMIC COMPUTING ENGINES',
      category: 'SYSTEMS & CORE CS',
      desc: 'Modular computational systems implemented in C++ and Python. Includes advanced graph algorithms, dynamic programming solvers, and memory-safe Object-Oriented design patterns.',
      tags: ['C++', 'Python', 'OOP', 'Data Structures & Algorithms'],
      image: '/assets/images-2.jpeg',
      cameraMode: 'wheel',
      linkText: 'Systems Code',
      link: 'https://www.linkedin.com/in/aditya-dahuja/',
    },
  ];

  return (
    <section
      id="projects"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        padding: '7rem 2rem 5rem 2rem',
        background: '#070709',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 20,
      }}
    >
      <div style={{ maxWidth: '1200px', width: '100%' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '999px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.2em',
              color: 'var(--accent-cyan)',
              marginBottom: '1rem',
            }}
          >
            <span>FLAGSHIP PORTFOLIO</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: '#ffffff',
              margin: '0 0 1rem 0',
            }}
          >
            ENGINEERED CREATIONS & IMPACT
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.1rem',
              color: '#94a3b8',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Selected software projects, platforms, and hackathon initiatives architected with precision, 
            scalability, and user-centric design.
          </p>
        </div>

        {/* 4 Feature Project Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3rem',
          }}
        >
          {projects.map((proj, i) => (
            <div
              key={i}
              className="glass-panel"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.4s ease',
              }}
            >
              {/* Image Preview Container */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '240px',
                  overflow: 'hidden',
                  background: '#0a0b10',
                }}
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    background: 'rgba(6, 6, 8, 0.85)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid var(--accent-cyan)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    color: 'var(--accent-cyan)',
                    letterSpacing: '0.15em',
                  }}
                >
                  {proj.category}
                </div>
              </div>

              {/* Text, Tech Pills & Action Buttons */}
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
                    {proj.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.6, margin: '0 0 1.25rem 0' }}>
                    {proj.desc}
                  </p>

                  {/* Tech stack tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.75rem' }}>
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '10px',
                          color: '#cbd5e1',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          padding: '3px 8px',
                          borderRadius: '4px',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.25rem' }}>
                  <button
                    onClick={() => onSetCameraMode(proj.cameraMode)}
                    className="btn-luxury"
                    style={{
                      padding: '0.65rem 1.2rem',
                      fontSize: '0.75rem',
                      borderColor: currentCameraMode === proj.cameraMode ? 'var(--accent-cyan)' : undefined,
                      color: currentCameraMode === proj.cameraMode ? 'var(--accent-cyan)' : '#ffffff',
                    }}
                  >
                    <Camera size={13} />
                    <span>ALIGN 3D CAR</span>
                  </button>

                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: 'var(--accent-cyan)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      textDecoration: 'none',
                    }}
                  >
                    <span>{proj.linkText}</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
