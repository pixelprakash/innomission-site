import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components';
import { PROGRAMS, COLORS } from '../utils/constants';

const ProgramCard = memo(({ program, index }) => (
  <AnimatedSection delay={index * 0.08}>
    <article className="program-card" role="article">
      {/* Color accent bar */}
      <div style={{ height: 5, background: `linear-gradient(90deg, ${program.color}, ${program.accent})` }} aria-hidden="true" />

      <div className="program-card-header">
        <span
          className="program-tag"
          style={{
            background: `${program.color}14`,
            color: program.color,
            display: 'inline-block',
            marginBottom: 16,
          }}
        >
          {program.tag}
        </span>
        <h3 className="heading-sm" style={{ marginBottom: 8 }}>{program.title}</h3>
        <p className="label" style={{ color: COLORS.slate, fontSize: 12, marginBottom: 16 }}>
          {program.duration}
        </p>
        <p className="body-sm" style={{ marginBottom: 24 }}>{program.desc}</p>
      </div>

      <div className="program-card-body">
        <p className="label" style={{ color: COLORS.ink, fontSize: 11, marginBottom: 12 }}>
          What you'll achieve
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {program.outcomes.map((outcome) => (
            <li
              key={outcome}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                color: COLORS.ink,
                padding: '6px 0',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 10,
                lineHeight: 1.5,
              }}
            >
              <span
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  background: `${program.color}18`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: 1,
                }}
                aria-hidden="true"
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5L4.5 7.5L8 3" stroke={program.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {outcome}
            </li>
          ))}
        </ul>
      </div>
    </article>
  </AnimatedSection>
));

ProgramCard.displayName = 'ProgramCard';

const ProgramsPage = memo(() => (
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
          <span className="section-label">Programs</span>
          <h1 className="heading-xl" style={{ marginBottom: 24, maxWidth: 700 }}>
            Programs that build real capability
          </h1>
          <p className="body-lg" style={{ maxWidth: 600 }}>
            Not just workshops — structured journeys that turn your team into confident innovators. Choose what fits your stage, goals, and timeline.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* ── Programs Grid ── */}
    <section className="section-padding" style={{ background: 'var(--color-white)' }}>
      <div className="container">
        <div className="grid-programs">
          {PROGRAMS.map((program, i) => (
            <ProgramCard key={program.title} program={program} index={i} />
          ))}
        </div>
      </div>
    </section>

    {/* ── Custom Program CTA ── */}
    <section style={{ padding: '80px var(--page-padding) 120px' }}>
      <div className="container">
        <AnimatedSection>
          <div className="cta-banner">
            <div>
              <h2 className="heading-md" style={{ color: COLORS.white, marginBottom: 16 }}>
                Need something custom?
              </h2>
              <p className="body-md" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 440 }}>
                We design bespoke programs for organizations with specific innovation challenges. Let's build something that fits your world.
              </p>
            </div>
            <Link to="/contact" className="btn btn-white">
              Design My Program →
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </main>
));

ProgramsPage.displayName = 'ProgramsPage';

export default ProgramsPage;
