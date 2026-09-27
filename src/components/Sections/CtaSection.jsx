import React, { useState } from 'react';
import { Sparkles, CheckCircle2, X, FileText, ChevronRight } from 'lucide-react';

export default function CtaSection({ isOpenInquire, onCloseInquire, onOpenInquire }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: 'Molsheim Headquarters (France)',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [showSpecs, setShowSpecs] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onCloseInquire();
    }, 2800);
  };

  const specs = [
    { label: 'ENGINE ARCHITECTURE', val: '8.0L W16 Quad-Turbocharged, 64 Valves' },
    { label: 'POWER RATING', val: '1,500 PS (1,479 BHP / 1,103 kW) @ 6,700 RPM' },
    { label: 'PEAK TORQUE', val: '1,600 Nm (1,180 lb-ft) @ 2,000–6,000 RPM' },
    { label: 'TRANSMISSION', val: '7-Speed Dual-Clutch (DSG) with Permanent AWD' },
    { label: '0–100 KM/H (0–62 MPH)', val: '2.4 Seconds' },
    { label: '0–200 KM/H (0–124 MPH)', val: '6.1 Seconds' },
    { label: '0–300 KM/H (0–186 MPH)', val: '12.1 Seconds' },
    { label: 'TOP SPEED', val: '420 km/h (261 mph, electronically limited)' },
    { label: 'CHASSIS & BODY', val: 'Full Carbon Fiber Monocoque & Outer Shell' },
    { label: 'DRY WEIGHT', val: '1,990 kg (4,387 lbs)' },
    { label: 'BRAKING SYSTEM', val: 'Carbon Ceramic Discs (420mm F / 400mm R) with 8-Piston Calipers' },
    { label: 'EXHAUST SYSTEM', val: '6 Titanium Tailpipes with Heat-Treated Tips' },
    { label: 'PRODUCTION VOLUME', val: 'Strictly One of One (1/1 Worldwide)' },
    { label: 'ORIGINAL COMMISSION PRICE', val: '€16.7 Million ($18.7 Million USD incl. taxes)' },
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
        {/* Crest */}
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #d31620, #880910)',
            margin: '0 auto 2rem auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 35px rgba(211, 22, 32, 0.45)',
            border: '2px solid rgba(255, 255, 255, 0.3)',
          }}
        >
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 900, color: '#ffffff' }}>
            EB
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
          <span>ONE OF ONE • BESPOKE CREATION</span>
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
          OWN A MONUMENT OF AUTOMOTIVE HISTORY
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
          La Voiture Noire represents the summit of Bugatti's 110-year legacy. 
          Private viewings, archival documentation, and confidential commissions 
          are arranged via the Molsheim Atelier Concierge.
        </p>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.25rem', marginBottom: '4rem' }}>
          <button
            onClick={onOpenInquire}
            className="btn-luxury btn-primary-red"
            style={{ padding: '1.1rem 2.8rem', fontSize: '0.95rem' }}
          >
            <Sparkles size={16} />
            <span>REQUEST PRIVATE ATELIER VIEWING</span>
          </button>

          <button
            onClick={() => setShowSpecs(!showSpecs)}
            className="btn-luxury"
            style={{ padding: '1.1rem 2.2rem', fontSize: '0.95rem' }}
          >
            <FileText size={16} />
            <span>{showSpecs ? 'HIDE FULL TECHNICAL SHEET' : 'FULL TECHNICAL SHEET'}</span>
          </button>
        </div>

        {/* Technical Specification Table Drawer */}
        {showSpecs && (
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
              BUGATTI LA VOITURE NOIRE — COMPLETE TECHNICAL MATRIX
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
              {specs.map((item, idx) => (
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
            © {new Date().getFullYear()} BUGATTI AUTOMOBILES S.A.S. • CHÂTEAU SAINT JEAN, MOLSHEIM, FRANCE.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#94a3b8' }}>
            <span>PUR SANG HERITAGE</span>
            <span>PRIVACY PROTOCOL</span>
            <span>PRESS RELEASES</span>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* INQUIRY MODAL                                             */}
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
              border: '1px solid rgba(0, 240, 255, 0.35)',
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
                  DOSSIER TRANSMITTED
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: '#94a3b8' }}>
                  Your private inquiry has been encrypted and routed directly to the Molsheim Atelier VIP Director.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent-cyan)', letterSpacing: '0.15em' }}>
                    VIP CONCIERGE ACCESS
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', marginTop: '4px' }}>
                    ARRANGE PRIVATE CONSULTATION
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2rem' }}>
                  <div>
                    <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#94a3b8', marginBottom: '6px' }}>
                      FULL NAME / TITLE
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lord Alexander Vance"
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
                      CONFIDENTIAL EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="client@sanctuary.com"
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
                      PREFERRED ATELIER RENDEZVOUS
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
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
                      <option value="Molsheim Headquarters (France)">Château Saint Jean, Molsheim (France)</option>
                      <option value="Monaco Private Salon">Monte Carlo Atelier (Monaco)</option>
                      <option value="Dubai VIP Lounge">Dubai Financial Centre (UAE)</option>
                      <option value="Beverly Hills Atelier">Rodeo Drive Studio, Beverly Hills (USA)</option>
                      <option value="Tokyo Ginza Salon">Ginza Private Salon, Tokyo (Japan)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-luxury btn-primary-red"
                  style={{ width: '100%', padding: '1.1rem', fontSize: '0.9rem' }}
                >
                  <Sparkles size={16} />
                  <span>TRANSMIT CONFIDENTIAL ENQUIRY</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
