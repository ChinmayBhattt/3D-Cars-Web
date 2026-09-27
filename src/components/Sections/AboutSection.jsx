import React, { useState } from 'react';
import { Compass, Sparkles, Shield, User, Award, CheckCircle2, ExternalLink } from 'lucide-react';
import { LinkedinIcon } from '../UI/Icons';

export default function AboutSection({ onSetCameraMode }) {
  const [activeTab, setActiveTab] = useState('skills');

  const skills = [
    { cat: 'FRONTEND & UI/UX', items: ['React.js', 'JavaScript (ES6+)', 'Three.js / WebGL', 'GSAP Animation', 'HTML5 & CSS3', 'Figma to Code'] },
    { cat: 'BACKEND & APIS', items: ['Node.js', 'Express.js', 'RESTful API Architecture', 'JWT Authentication', 'Middleware Engineering', 'Microservices'] },
    { cat: 'DATA & STORAGE', items: ['MySQL', 'Relational Schema Design', 'Query Optimization', 'Database Indexing', 'ACID Principles'] },
    { cat: 'SYSTEMS & CORE', items: ['C++', 'Python', 'Object-Oriented Programming (OOP)', 'Data Structures & Algorithms (DSA)', 'Clean Architecture'] },
    { cat: 'LEADERSHIP & AGILITY', items: ['Organizer @HackAryaVerse', 'Team Lead Experience', 'Agile / Scrum', 'Mentorship & Community Building', 'Cross-Functional Coordination'] },
  ];

  return (
    <section
      id="about"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        padding: '7rem 2rem 5rem 2rem',
        background: 'linear-gradient(180deg, #070709 0%, #0d0f16 50%, #070709 100%)',
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
            <span>ENGINEER PROFILE & PHILOSOPHY</span>
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
            ABOUT ADITYA DAHUJA
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
            Aspiring Software Development Engineer (SDE), Team Lead, and Organizer @HackAryaVerse. 
            Blending technical depth with collaborative leadership.
          </p>
        </div>

        {/* Bio Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem',
            alignItems: 'stretch',
            marginBottom: '3rem',
          }}
        >
          {/* Portrait & Profile Card */}
          <div
            className="glass-panel"
            style={{
              padding: '2.5rem',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              borderTop: '3px solid var(--accent-cyan)',
            }}
          >
            <div style={{ position: 'relative', marginBottom: '1.75rem' }}>
              <img
                src="/assets/aditya.jpeg"
                alt="Aditya Dahuja"
                style={{
                  width: '160px',
                  height: '160px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '3px solid var(--accent-cyan)',
                  boxShadow: '0 0 35px rgba(0, 240, 255, 0.35)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '8px',
                  right: '8px',
                  background: '#0a0b10',
                  border: '2px solid var(--accent-cyan)',
                  borderRadius: '50%',
                  padding: '6px',
                  boxShadow: '0 0 10px rgba(0, 240, 255, 0.5)',
                }}
              >
                <Award size={16} className="text-cyan-400" />
              </div>
            </div>

            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', margin: '0 0 6px 0' }}>
              ADITYA DAHUJA
            </h3>

            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-cyan)', letterSpacing: '0.14em', marginBottom: '1.25rem' }}>
              ASPIRING SDE • TEAM LEAD • FULL STACK
            </div>

            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.65, marginBottom: '2rem' }}>
              Passionate about building scalable digital platforms, high-throughput architectures, 
              and leading technical communities. As an Organizer for <strong>HackAryaVerse</strong>, 
              I mentor developers, coordinate technical hackathon infrastructure, and drive innovation.
            </p>

            <a
              href="https://www.linkedin.com/in/aditya-dahuja/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury"
              style={{ width: '100%', borderColor: 'var(--accent-cyan)' }}
            >
              <LinkedinIcon size={16} />
              <span>VIEW FULL LINKEDIN DOSSIER</span>
              <ExternalLink size={13} />
            </a>
          </div>

          {/* Technical Competency Matrix */}
          <div
            className="glass-panel"
            style={{
              padding: '2.5rem',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
                <Sparkles size={18} className="text-cyan-400" />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                  CORE TECHNICAL CAPABILITIES
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {skills.map((s, idx) => (
                  <div key={idx} style={{ padding: '12px 16px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent-cyan)', letterSpacing: '0.12em', marginBottom: '6px' }}>
                      {s.cat}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {s.items.map((item, iIdx) => (
                        <span
                          key={iIdx}
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '11px',
                            color: '#e2e8f0',
                            background: 'rgba(255, 255, 255, 0.04)',
                            padding: '3px 8px',
                            borderRadius: '4px',
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', borderRadius: '10px', background: 'rgba(0, 240, 255, 0.05)', border: '1px solid rgba(0, 240, 255, 0.2)' }}>
              <CheckCircle2 size={18} className="text-cyan-400 flex-shrink-0" />
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: '#cbd5e1' }}>
                Open to Full-Time SDE Roles, Software Engineering Internships, and Technical Collaboration.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
