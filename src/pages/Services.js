import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection, SERVICE_ILLUSTRATIONS } from '../components';
import { SERVICES } from '../utils/constants';

const ServicesPage = memo(() => (
  <main id="main-content" role="main">
    <section
      className="section-padding"
      style={{
        paddingTop: 140,
        background: 'linear-gradient(180deg, var(--color-cream) 0%, var(--color-white) 100%)',
      }}
    >
      <div className="container">

        {/* ── Header ── */}
        <AnimatedSection>
          <span className="section-label">Our Services</span>
          <h1 className="heading-xl" style={{ marginBottom: 24, maxWidth: 700 }}>
            Comprehensive innovation solutions, from spark to scale
          </h1>
          <p className="body-lg" style={{ maxWidth: 600, marginBottom: 80 }}>
            We don't just consult — we co-create. Every service is designed to build lasting capability, not dependency.
          </p>
        </AnimatedSection>

        {/* ── Service Detail Blocks ── */}
        {SERVICES.map((service, i) => {
          const Illustration = SERVICE_ILLUSTRATIONS[service.icon];
          return (
            <AnimatedSection key={service.fullTitle} delay={0.1} style={{ marginBottom: 80 }}>
              <div className="service-detail" style={{ background: service.bg }}>
                <div className="service-text" style={{ order: i % 2 === 0 ? 1 : 2 }}>
                  <div
                    style={{ width: 48, height: 4, borderRadius: 2, background: service.color1, marginBottom: 24 }}
                    aria-hidden="true"
                  />
                  <h2 className="heading-md" style={{ marginBottom: 16 }}>
                    {service.fullTitle}
                  </h2>
                  <p className="body-md" style={{ marginBottom: 24 }}>
                    {service.fullDesc}
                  </p>
                  <ul className="service-detail-features" role="list">
                    {service.features.map((f) => (
                      <li key={f}>
                        <span className="feature-dot" style={{ background: service.color1 }} aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="service-illust" style={{ order: i % 2 === 0 ? 2 : 1, display: 'flex', justifyContent: 'center' }}>
                  {Illustration && <Illustration />}
                </div>
              </div>
            </AnimatedSection>
          );
        })}

        {/* ── CTA ── */}
        <AnimatedSection style={{ textAlign: 'center', padding: '60px 0' }}>
          <h2 className="heading-md" style={{ marginBottom: 16 }}>Not sure where to start?</h2>
          <p className="body-md" style={{ marginBottom: 32 }}>
            Let's figure it out together. No pitch — just a conversation.
          </p>
          <Link to="/contact" className="btn btn-electric">
            Schedule a Free Consultation →
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </main>
));

ServicesPage.displayName = 'ServicesPage';

export default ServicesPage;
