import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components';
import { ABOUT_VALUES, PROCESS_STEPS, COLORS } from '../utils/constants';

const AboutPage = memo(() => (
  <main id="main-content" role="main">
    {/* ── Header ── */}
    <section
      style={{
        paddingTop: 140,
        paddingBottom: 80,
        background: 'linear-gradient(180deg, var(--color-cream) 0%, var(--color-white) 100%)',
      }}
    >
      <div className="container">
        <AnimatedSection>
          <span className="section-label">About InnoMission</span>
          <h1 className="heading-xl" style={{ marginBottom: 24, maxWidth: 700 }}>
            We exist to make innovation{' '}
            <span style={{ color: COLORS.electric }}>accessible</span>
          </h1>
          <p className="body-lg" style={{ maxWidth: 620 }}>
            Founded in Hyderabad, InnoMission is a team of practitioners, educators, and ecosystem builders who believe innovation isn't magic — it's a skill anyone can learn when given the right tools and partnerships.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* ── Mission / Vision / Values ── */}
    <section className="section-padding" style={{ background: 'var(--color-white)' }}>
      <div className="container">
        <div className="grid-3">
          {ABOUT_VALUES.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.12}>
              <article
                className="card"
                style={{
                  padding: 40,
                  background: 'var(--color-cream)',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Decorative accent */}
                <div
                  style={{
                    position: 'absolute',
                    top: -30,
                    right: -30,
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    background: `${item.color}12`,
                  }}
                  aria-hidden="true"
                />
                <div style={{ fontSize: 40, marginBottom: 20 }} aria-hidden="true">
                  {item.icon}
                </div>
                <h2 className="heading-sm" style={{ marginBottom: 16, color: item.color }}>
                  {item.title}
                </h2>
                <p className="body-sm">{item.text}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ── Our Process ── */}
    <section
      className="section-padding"
      aria-labelledby="process-heading"
      style={{ background: 'var(--color-cream)' }}
    >
      <div className="container">
        <AnimatedSection>
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <span className="section-label">How We Work</span>
            <h2 id="process-heading" className="heading-lg" style={{ maxWidth: 500, margin: '0 auto' }}>
              From first conversation to lasting impact
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid-4">
          {PROCESS_STEPS.map((step, i) => (
            <AnimatedSection key={step.step} delay={i * 0.12}>
              <div style={{ textAlign: 'center' }}>
                <div className="step-circle" style={{ background: step.color }}>
                  {step.step}
                </div>
                <h3 className="heading-sm" style={{ marginBottom: 12 }}>{step.title}</h3>
                <p className="body-sm">{step.desc}</p>

                {/* Connector arrow (not on last) */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div
                    className="step-connector"
                    style={{
                      display: 'none', /* shown via CSS on desktop */
                      position: 'absolute',
                      right: -20,
                      top: 32,
                    }}
                    aria-hidden="true"
                  >
                    →
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ── Why InnoMission ── */}
    <section className="section-padding" style={{ background: 'var(--color-white)' }}>
      <div className="container">
        <div className="grid-2">
          <AnimatedSection>
            <span className="section-label">Why InnoMission</span>
            <h2 className="heading-lg" style={{ marginBottom: 24 }}>
              We're not another consulting firm
            </h2>
            <p className="body-md" style={{ marginBottom: 24 }}>
              Most consultants deliver a report and disappear. We stay until the innovation muscle is built. Our work is measured by what happens <em>after</em> we leave — not by the size of the deck we deliver.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'Practitioner-led, not theory-heavy',
                'Deep roots in academia and government',
                'Hyderabad-based, nationally connected',
                'Track record of 500+ mentored startups',
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '8px 0',
                    fontFamily: 'var(--font-body)',
                    fontSize: 15,
                    color: COLORS.ink,
                    fontWeight: 500,
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: COLORS.electric,
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            {/* Geometric illustration */}
            <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg"
              role="img" aria-label="Abstract illustration representing collaboration and growth"
              style={{ width: '100%', maxWidth: 400 }}>
              <rect x="40" y="40" width="320" height="240" rx="24" fill={COLORS.cream} />
              {/* Three pillars */}
              <rect x="80" y="140" width="60" height="100" rx="8" fill={COLORS.electric} />
              <rect x="170" y="100" width="60" height="140" rx="8" fill={COLORS.coral} />
              <rect x="260" y="120" width="60" height="120" rx="8" fill={COLORS.mint} />
              {/* Labels */}
              <text x="95" y="200" fill={COLORS.white} fontSize="9" fontWeight="700" fontFamily="sans-serif">Acad</text>
              <text x="182" y="180" fill={COLORS.white} fontSize="9" fontWeight="700" fontFamily="sans-serif">Industry</text>
              <text x="278" y="190" fill={COLORS.white} fontSize="9" fontWeight="700" fontFamily="sans-serif">Gov</text>
              {/* Connecting arc */}
              <path d="M110 130 Q200 50 290 110" stroke={COLORS.amber} strokeWidth="3" fill="none" strokeDasharray="6 4" />
              {/* Star accent */}
              <circle cx="200" cy="65" r="10" fill={COLORS.amber} />
              <circle cx="340" cy="60" r="6" fill={COLORS.lavender} />
              <circle cx="60" cy="260" r="8" fill={COLORS.blush} />
            </svg>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <section style={{ padding: '80px var(--page-padding) 120px' }}>
      <div className="container">
        <AnimatedSection>
          <div className="cta-banner">
            <div>
              <h2 className="heading-md" style={{ color: COLORS.white, marginBottom: 16 }}>
                Let's build something together
              </h2>
              <p className="body-md" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 440 }}>
                Whether you're an institution looking to innovate or a startup seeking guidance — we'd love to hear from you.
              </p>
            </div>
            <Link to="/contact" className="btn btn-white">
              Start a Conversation →
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </main>
));

AboutPage.displayName = 'AboutPage';

export default AboutPage;
