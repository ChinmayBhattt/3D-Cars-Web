import React, { useState } from 'react';
import { Sparkles, CheckCircle2, X, FileText, Send, Mail, ExternalLink } from 'lucide-react';
import { LinkedinIcon } from '../UI/Icons';

export default function CtaSection({ isOpenInquire, onCloseInquire, onOpenInquire }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: 'Full-Time SDE Position',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [showResumeSpecs, setShowResumeSpecs] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onCloseInquire();
    }, 2800);
  };

  const resumeMatrix = [
    { label: 'PRIMARY ROLE', val: 'Software Development Engineer (SDE) / Full Stack' },
    { label: 'CORE LANGUAGES', val: 'JavaScript (ES6+), C++, Python, SQL' },
    { label: 'FRONTEND STACK', val: 'React.js, Three.js, GSAP, HTML5, CSS3, Tailwind' },
    { label: 'BACKEND ARCHITECTURE', val: 'Node.js, Express.js, RESTful Endpoints, Microservices' },
    { label: 'DATABASES & STORAGE', val: 'MySQL, Relational Schema Modeling, Query Tuning' },
    { label: 'LEADERSHIP & EVENTS', val: 'Team Lead • Organizer @HackAryaVerse (24-hr Hackathon)' },
    { label: 'DESIGN & UI/UX', val: 'Figma to Production Code, 3D Web Graphics, Fluid Motion' },
    { label: 'AVAILABILITY', val: 'Open for SDE Roles, Internships & High-Impact Projects' },
  ];

  return (
    <section
      id="inquire"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        padding: '7rem 2rem 5rem 2rem',
        background: 'linear-gradient(180deg, #060608 0%, #0b0c12 50%, #040405 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 20,
      }}
    >
      <div style={{ maxWidth: '1000px', width: '100%', textAlign: 'center' }}>
        {/* Monogram Crest */}
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #1e293b, #0f172a)',
            margin: '0 auto 2rem auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 35px rgba(0, 240, 255, 0.4)',
            border: '2px solid var(--accent-cyan)',
          }}
        >
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 900, color: 'var(--accent-cyan)' }}>
            AD
          </span>
        </div>

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
            marginBottom: '1.25rem',
          }}
        >
          <span>INITIATE COLLABORATION</span>
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 800,
            textTransform: 'uppercase',
            color: '#ffffff',
            margin: '0 0 1.25rem 0',
            lineHeight: 1.05,
          }}
        >
          LET'S ARCHITECT SOMETHING EXTRAORDINARY
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.15rem',
            color: '#94a3b8',
            maxWidth: '680px',
            margin: '0 auto 3rem auto',
            lineHeight: 1.7,
          }}
        >
          Seeking full-time Software Development Engineer (SDE) opportunities and ambitious 
          collaborations. Connect directly via LinkedIn or send a direct transmission below.
        </p>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.25rem', marginBottom: '4rem' }}>
          <button
            onClick={onOpenInquire}
            className="btn-luxury"
            style={{ padding: '1.1rem 2.8rem', fontSize: '0.95rem', borderColor: 'var(--accent-cyan)' }}
          >
            <Send size={16} />
            <span>CONNECT WITH ADITYA</span>
          </button>

          <a
            href="https://www.linkedin.com/in/aditya-dahuja/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury"
            style={{ padding: '1.1rem 2.4rem', fontSize: '0.95rem', textDecoration: 'none' }}
          >
            <LinkedinIcon size={16} />
            <span>LINKEDIN PROFILE</span>
            <ExternalLink size={13} />
          </a>

          <button
            onClick={() => setShowResumeSpecs(!showResumeSpecs)}
            className="btn-luxury"
            style={{ padding: '1.1rem 2.0rem', fontSize: '0.95rem' }}
          >
            <FileText size={16} />
            <span>{showResumeSpecs ? 'HIDE RESUME MATRIX' : 'VIEW RESUME MATRIX'}</span>
          </button>
        </div>

        {/* Technical Resume Matrix Drawer */}
        {showResumeSpecs && (
          <div
            className="glass-panel"
            style={{
              padding: '2.5rem',
              borderRadius: '20px',
              textAlign: 'left',
              marginBottom: '4rem',
              borderTop: '2px solid var(--accent-cyan)',
              animation: 'fadeIn 0.4s ease',
            }}
          >
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.5rem' }}>
              ADITYA DAHUJA — SDE CANDIDACY SPECIFICATION MATRIX
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
              {resumeMatrix.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '12px 16px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent-cyan)', letterSpacing: '0.12em' }}>
                    {item.label}
                  </div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '13px', fontWeight: 700, color: '#f8fafc', marginTop: '4px' }}>
                    {item.val}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer info */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '2.5rem', display: 'flex', flexDirection: 'column', mdDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#64748b' }}>
            © {new Date().getFullYear()} ADITYA DAHUJA • ARCHITECTED WITH REACT + THREE.JS + GSAP.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#94a3b8' }}>
            <a href="https://www.linkedin.com/in/aditya-dahuja/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}>
              LINKEDIN
            </a>
            <span>HACKARYAVERSE</span>
            <span>OPEN SOURCE</span>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* CONNECT MODAL                                             */}
      {/* ========================================================= */}
      {isOpenInquire && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
        >
          <div
            className="glass-panel"
            style={{
              width: '100%',
              maxWidth: '540px',
              borderRadius: '24px',
              padding: '2.5rem',
              position: 'relative',
              border: '1px solid var(--accent-cyan)',
              boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 30px rgba(0,240,255,0.15)',
              textAlign: 'left',
            }}
          >
            {/* Close Button */}
            <button
              onClick={onCloseInquire}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <CheckCircle2 size={56} className="text-cyan-400" style={{ margin: '0 auto 1.5rem auto' }} />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
                  TRANSMISSION RECEIVED
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: '#94a3b8' }}>
                  Thank you! Your message has been routed directly to Aditya Dahuja. I will respond promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent-cyan)', letterSpacing: '0.15em' }}>
                    DIRECT TRANSMISSION
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', marginTop: '4px' }}>
                    CONNECT WITH ADITYA DAHUJA
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2rem' }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#94a3b8', marginBottom: '6px' }}>
                      YOUR NAME / ORGANIZATION
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins (Tech Lead)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: '8px',
                        color: '#ffffff',
                        fontFamily: 'var(--font-body)',
                        fontSize: '14px',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#94a3b8', marginBottom: '6px' }}>
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="recruiter@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: '8px',
                        color: '#ffffff',
                        fontFamily: 'var(--font-body)',
                        fontSize: '14px',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#94a3b8', marginBottom: '6px' }}>
                      INQUIRY NATURE
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: '#0e1017',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        borderRadius: '8px',
                        color: '#ffffff',
                        fontFamily: 'var(--font-body)',
                        fontSize: '14px',
                        outline: 'none',
                      }}
                    >
                      <option value="Full-Time SDE Position">Full-Time SDE Role</option>
                      <option value="Software Engineering Internship">Software Engineering Internship</option>
                      <option value="HackAryaVerse Collaboration">HackAryaVerse / Community Collaboration</option>
                      <option value="Freelance / Contract Build">Technical Project Collaboration</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-luxury"
                  style={{ width: '100%', padding: '1.1rem', fontSize: '0.9rem', borderColor: 'var(--accent-cyan)' }}
                >
                  <Send size={15} />
                  <span>TRANSMIT MESSAGE</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
