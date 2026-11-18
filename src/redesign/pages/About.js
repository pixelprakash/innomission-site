import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ABOUT_VALUES, PROCESS_STEPS, TRUST_PARTNERS, TEAM, initialsOf } from '../../utils/constants';
import { Accent, Button, Media, PageHero, Reveal, SectionHead } from '../ui';

export default function About() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
  }, [hash]);

  return (
    <main id="main-content">
      <PageHero
        title={<>We exist to make innovation <Accent>accessible</Accent></>}
        intro="Founded in Hyderabad, InnoMission is a team of practitioners, educators and ecosystem builders who believe innovation isn’t magic — it’s a skill anyone can learn when given the right tools and partnerships."
      />

      <section className="rd-section rd-section--flush">
        <div className="rd-wrap">
          <Reveal><Media slot="about" alt="The Charminar in Hyderabad at golden hour" ratio="16 / 7" tone="mint" /></Reveal>
        </div>
      </section>

      <section id="mission" className="rd-section">
        <div className="rd-wrap rd-values">
          {ABOUT_VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <article>
                <h2 className="rd-h3">{v.title}</h2>
                <p className="rd-body">{v.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="process" className="rd-section rd-section--cream2">
        <div className="rd-wrap">
          <Reveal><SectionHead title={<>From first conversation to <Accent tone="teal">lasting impact</Accent></>} /></Reveal>
          <ol className="rd-steps">
            {PROCESS_STEPS.map((p, i) => (
              <Reveal as="li" key={p.step} delay={i * 0.06}>
                <span className="rd-steps__num">{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="team" className="rd-section">
        <div className="rd-wrap">
          <Reveal>
            <SectionHead align="center" title={<>Meet our <Accent tone="teal">team</Accent></>} />
          </Reveal>
          <h3 className="rd-team__group">Advisory Board</h3>
          <ul className="rd-team">
            {TEAM.advisory.map((m, i) => (
              <Reveal as="li" key={m.name} delay={(i % 3) * 0.06}>
                <article className="rd-person">
                  <div className="rd-avatar" aria-hidden={m.photo ? undefined : 'true'}>
                    {m.photo ? <img src={m.photo} alt={m.name} loading="lazy" /> : initialsOf(m.name)}
                  </div>
                  <h4>{m.name}</h4>
                  {m.url && (
                    <a className="rd-btn rd-btn--outline" href={m.url} target="_blank" rel="noopener noreferrer" aria-label={`Connect with ${m.name} (opens in a new tab)`}>
                      Connect
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M9 2h5v5M14 2L7 9M12 10v3a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </a>
                  )}
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section id="partners" className="rd-section rd-section--cream2">
        <div className="rd-wrap">
          <Reveal>
            <SectionHead title={<>Institutions we work <Accent>alongside</Accent></>} />
            <ul className="rd-partners rd-partners--left">
              {TRUST_PARTNERS.map((t) => <li key={t}>{t}</li>)}
            </ul>
            <div className="rd-actions"><Button to="/contact">Partner with us</Button></div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
