import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection, IllustrationHero, ServiceIcon, QuoteMark } from '../components';
import { SERVICES, STATS, TRUST_PARTNERS, COLORS } from '../utils/constants';

const HomePage = memo(() => (
  <main id="main-content" role="main">

    {/* ── Hero ── */}
    <section
      aria-labelledby="hero-heading"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px var(--page-padding) 80px',
        background: `linear-gradient(135deg, var(--color-cream) 0%, var(--color-white) 50%, var(--color-blush) 100%)`,
      }}
    >
      <div className="container grid-2" style={{ width: '100%' }}>
        <AnimatedSection>
          <span className="section-label">Open Innovation Platform</span>
          <h1 id="hero-heading" className="heading-xl" style={{ marginBottom: 24 }}>
            Where bold ideas<br />
            meet{' '}
            <span style={{ color: COLORS.coral, position: 'relative', display: 'inline-block' }}>
              real impact
              <svg viewBox="0 0 200 12" style={{ position: 'absolute', bottom: -6, left: 0, width: '100%' }} aria-hidden="true">
                <path d="M2 8 Q50 2 100 6 Q150 10 198 4" stroke={COLORS.coral} strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="body-lg" style={{ marginBottom: 40, maxWidth: 520 }}>
            We bridge the gap between academia, industry, and government to create a thriving ecosystem for innovation. From training to strategic partnerships — we make transformation practical.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/services" className="btn btn-primary" aria-label="Explore our innovation services">
              Explore Services →
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Talk to Us
            </Link>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.2} className="hero-illustration">
          <IllustrationHero />
        </AnimatedSection>
      </div>
    </section>

    {/* ── Trust Bar ── */}
    <section aria-label="Trusted by organizations" className="trust-bar">
      <div className="container" style={{ textAlign: 'center' }}>
        <p className="label" style={{ color: COLORS.slate, marginBottom: 32 }}>
          Trusted by forward-thinking institutions
        </p>
        <div className="trust-logos">
          {TRUST_PARTNERS.map((name) => (
            <span key={name} className="trust-name">{name}</span>
          ))}
        </div>
      </div>
    </section>

    {/* ── What We Do ── */}
    <section
      aria-labelledby="whatwedo-heading"
      className="section-padding"
      style={{ background: 'var(--color-white)' }}
    >
      <div className="container">
        <AnimatedSection>
          <span className="section-label">What We Do</span>
          <h2 id="whatwedo-heading" className="heading-lg" style={{ marginBottom: 20, maxWidth: 600 }}>
            Innovation made practical for every ecosystem
          </h2>
          <p className="body-md" style={{ maxWidth: 560, marginBottom: 64 }}>
            We don't just talk about innovation — we build the systems, skills, and partnerships that make it happen. Here's how.
          </p>
        </AnimatedSection>

        <div className="grid-auto">
          {SERVICES.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <div className="service-card card-hover" role="article">
                <ServiceIcon icon={service.icon} color1={service.color1} color2={service.color2} />
                <h3 className="heading-sm" style={{ margin: '20px 0 12px' }}>{service.title}</h3>
                <p className="body-sm">{service.shortDesc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ── Impact Numbers ── */}
    <section
      aria-labelledby="impact-heading"
      style={{ padding: '100px var(--page-padding)', background: 'var(--color-ink)', color: 'var(--color-white)' }}
    >
      <div className="container">
        <AnimatedSection>
          <span className="section-label" style={{ color: COLORS.mint }}>Our Impact</span>
          <h2 id="impact-heading" className="heading-lg" style={{ color: COLORS.white, marginBottom: 64 }}>
            Numbers that tell the story
          </h2>
        </AnimatedSection>
        <div className="grid-4">
          {STATS.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.12}>
              <div className="stat-item">
                <div className="stat-number" style={{ color: stat.color }}>{stat.num}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ── Testimonial ── */}
    <section
      aria-labelledby="testimonial-heading"
      style={{ padding: '120px var(--page-padding)', background: 'var(--color-cream)' }}
    >
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <AnimatedSection>
          <h2 id="testimonial-heading" className="sr-only">Testimonials</h2>
          <QuoteMark />
          <blockquote style={{ margin: 0 }}>
            <p className="testimonial-text">
              InnoMission transformed how we think about innovation. They didn't give us a template — they built a system that works for our unique challenges and culture.
            </p>
            <footer>
              <div className="testimonial-avatar">RK</div>
              <cite style={{ fontStyle: 'normal' }}>
                <strong style={{ fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 700, color: COLORS.ink, display: 'block' }}>
                  Dr. Rajesh Kumar
                </strong>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: COLORS.slate }}>
                  Director of Innovation, Leading University
                </span>
              </cite>
            </footer>
          </blockquote>
        </AnimatedSection>
      </div>
    </section>

    {/* ── CTA ── */}
    <section
      aria-labelledby="cta-heading"
      style={{ padding: '100px var(--page-padding)', background: 'var(--color-white)' }}
    >
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <AnimatedSection>
          <h2 id="cta-heading" className="heading-lg" style={{ marginBottom: 20 }}>
            Ready to build your innovation ecosystem?
          </h2>
          <p className="body-md" style={{ marginBottom: 40 }}>
            Whether you're a university, startup, or enterprise — let's design the path from idea to impact together.
          </p>
          <Link to="/contact" className="btn btn-electric" style={{ padding: '18px 40px', fontSize: 17 }}>
            Book a Strategy Call →
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </main>
));

HomePage.displayName = 'HomePage';

export default HomePage;
