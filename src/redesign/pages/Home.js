import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, PROGRAMS, TRUST_PARTNERS, YOUTUBE_SERIES, INSTAGRAM_REELS, SOCIAL_LINKS } from '../../utils/constants';
import { slug } from '../data';
import { Accent, ArrowLink, Button, Media, ReelEmbed, Reveal, SectionHead, Swirl } from '../ui';

const PILLARS = [
  { id: 'learning', eyebrow: 'Learning', text: 'Explore practical, rigorous programs that turn bold thinking into repeatable results.', cta: 'View our programs', to: '/programs', tone: 'coral' },
  { id: 'insight', eyebrow: 'Insight', text: 'Access conversations and case studies that shape your practice and challenge assumptions.', cta: 'Visit the library', to: '/insights', tone: 'mint' },
  { id: 'connection', eyebrow: 'Connection', text: 'Join a community bridging academia, industry and government — to learn, share and lead together.', cta: 'Work with us', to: '/contact', tone: 'plum' },
];

export default function Home() {
  const featured = PROGRAMS[0];
  const featuredCards = PROGRAMS.slice(1, 5);

  return (
    <main id="main-content">
      {/* ── Hero ── */}
      <section className="rd-hero">
        <div className="rd-wrap">
          <div className="rd-hero__top">
            <Reveal>
              <h1 className="rd-h1">
                Shaping the future
                <br />
                <Accent>of open innovation</Accent>
              </h1>
            </Reveal>
            <Reveal delay={0.1} className="rd-hero__aside">
              <p>
                Where academia, industry and government meet. InnoMission equips the people at the heart of institutions to innovate with confidence, clarity and purpose.
              </p>
              <ArrowLink to="/programs">View our programs and courses</ArrowLink>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <Media slot="hero" alt="Colleagues discussing ideas around a project board" ratio="16 / 8" tone="coral" className="rd-hero__media" />
          </Reveal>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="rd-section rd-intro">
        <div className="rd-wrap rd-split">
          <Reveal className="rd-split__text">
            <SectionHead
              title={<>We are unique: a <Accent tone="teal">practice</Accent> and a school of thought.</>}
            />
            <p className="rd-body">
              Founded in Hyderabad, InnoMission is a team of practitioners, educators and ecosystem builders who believe innovation isn’t magic — it’s a skill anyone can learn when given the right tools and partnerships.
            </p>
            <p className="rd-body">
              We work with universities, corporates, government bodies and startups to build capability, share knowledge and strengthen the systems around them.
            </p>
            <div className="rd-actions">
              <Button to="/programs">View our programs and courses</Button>
              <Button to="/about" variant="ghost">About us</Button>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="rd-split__media">
            <Media slot="intro" alt="An innovator reviewing ideas on a tablet" ratio="5 / 6" tone="mint" />
          </Reveal>
        </div>
      </section>

      {/* ── Featured program (dark panel) ── */}
      <section className="rd-section rd-section--tight">
        <div className="rd-wrap">
          <Reveal>
            <div className="rd-feature">
              <Swirl variant="b" className="rd-feature__swirl" />
              <Swirl variant="c" className="rd-feature__swirl rd-feature__swirl--2" />
              <div className="rd-feature__media">
                <Media slot="featured" alt="Glass towers in Hyderabad at night" ratio="4 / 5" tone="dark" />
              </div>
              <div className="rd-feature__body">
                <p className="rd-feature__tags">
                  <span className="rd-pill">Featured program</span>
                  <span>{featured.title}</span>
                </p>
                <h2 className="rd-h2 rd-h2--light">
                  Preparing today’s leaders <Accent tone="mint">for tomorrow’s challenges.</Accent>
                </h2>
                <p className="rd-feature__text">{featured.desc}</p>
                <ul className="rd-feature__list">
                  {featured.outcomes.map((o) => <li key={o}>{o}</li>)}
                </ul>
                <div className="rd-actions">
                  <Button to="/programs" variant="coral">Explore this course</Button>
                  <span className="rd-feature__meta">{featured.duration}</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Three pillars ── */}
      <section className="rd-section">
        <div className="rd-wrap">
          <Reveal>
            <h2 className="rd-h2 rd-h2--center">
              Smart ideas. <Accent tone="teal">Enduring impact.</Accent>
            </h2>
          </Reveal>
          <div className="rd-pillars">
            {PILLARS.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.08}>
                <Link to={p.to} className="rd-pillar">
                  <Media slot={p.id} alt="" ratio="4 / 3" tone={p.tone} />
                  <h3 className="rd-pillar__title">{p.eyebrow}</h3>
                  <p>{p.text}</p>
                  <span className="rd-arrowlink"><span>{p.cta}</span><svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured programs ── */}
      <section className="rd-section rd-section--cream2">
        <div className="rd-wrap">
          <Reveal>
            <div className="rd-rowhead">
              <h2 className="rd-h2">Featured <Accent tone="teal">programs</Accent></h2>
              <ArrowLink to="/programs">Browse all programs</ArrowLink>
            </div>
          </Reveal>
          <div className="rd-cards">
            {featuredCards.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <article className="rd-card">
                  <p className="rd-card__tag">{p.tag}</p>
                  <h3 className="rd-card__title">{p.title}</h3>
                  <p className="rd-card__text">{p.desc}</p>
                  <dl className="rd-card__meta">
                    <div><dt>Duration</dt><dd>{p.duration}</dd></div>
                  </dl>
                  <ArrowLink to="/programs">Read more</ArrowLink>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services banner ── */}
      <section className="rd-section rd-section--tight">
        <div className="rd-wrap">
          <Reveal>
            <div className="rd-banner">
              <Swirl variant="a" className="rd-banner__swirl" />
              <div>
                <h2 className="rd-h2 rd-h2--light">Co-created with <Accent tone="mint">your organisation</Accent></h2>
                <p className="rd-banner__text">Four ways we help institutions build lasting innovation capability — each designed around your context.</p>
              </div>
              <Button to="/services" variant="coral">Explore our services</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Impact ── */}
      <section className="rd-section">
        <div className="rd-wrap">
          <Reveal>
            <h2 className="rd-h2 rd-h2--center rd-h2--narrow">
              Our programs show you and other bold leaders how to build a <Accent>stronger</Accent> innovation culture.
            </h2>
          </Reveal>
          <ul className="rd-partners" aria-label="Institutions we work with">
            {TRUST_PARTNERS.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="rd-section rd-section--cream2">
        <div className="rd-wrap rd-quote">
          <Reveal>
            <span className="rd-quote__mark" aria-hidden="true">“</span>
            <blockquote>
              <p>InnoMission transformed how we think about innovation. They didn’t give us a template — they built a system that works for our unique challenges and culture.</p>
              <footer>
                <strong>Dr. Rajesh Kumar</strong>
                <span>Director of Innovation, Leading University</span>
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ── Pathways ── */}
      <section className="rd-section">
        <div className="rd-wrap rd-split rd-split--top">
          <Reveal>
            <SectionHead title={<>Find the pathway that matches your <Accent tone="teal">ambition</Accent></>} />
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="rd-pathways">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <Link to={`/services#${slug(s.title)}`}>
                    <span>{s.title}</span>
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Featured insight ── */}
      <section className="rd-section rd-section--tight">
        <div className="rd-wrap">
          <Reveal>
            <div className="rd-insight">
              <div className="rd-insight__body">
                <h2 className="rd-h2">Turning conversations into <Accent>action</Accent></h2>
                <p className="rd-body">{YOUTUBE_SERIES[0].desc}</p>
                <ArrowLink to="/insights">Read more about our insights</ArrowLink>
              </div>
              <Media slot="insight" alt="" ratio="4 / 3" tone="coral" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Instagram reels ── */}
      <section className="rd-section rd-section--cream2">
        <div className="rd-wrap">
          <Reveal>
            <div className="rd-rowhead">
              <SectionHead title={<>Stories from the <Accent tone="teal">community</Accent></>} />
              <ArrowLink href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">Follow @inno_mission</ArrowLink>
            </div>
          </Reveal>
          <div className="rd-reels">
            {INSTAGRAM_REELS.slice(0, 3).map((code, i) => (
              <Reveal key={code} delay={i * 0.06}><ReelEmbed code={code} index={i + 1} /></Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
