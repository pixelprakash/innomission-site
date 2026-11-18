import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SERVICES, PROCESS_STEPS } from '../../utils/constants';
import { slug } from '../data';
import { Accent, Button, Media, PageHero, Reveal, SectionHead } from '../ui';

const TONES = ['coral', 'mint', 'plum', 'coral'];

export default function Services() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
  }, [hash]);

  return (
    <main id="main-content">
      <PageHero
        title={<>Innovation capability, <Accent>built with you</Accent></>}
        intro="Four ways we help universities, corporates, government bodies and startups turn creativity into repeatable, measurable results."
      />

      {SERVICES.map((s, i) => (
        <section key={s.title} id={slug(s.title)} className={`rd-section rd-service ${i % 2 ? 'rd-section--cream2' : ''}`}>
          <div className={`rd-wrap rd-split ${i % 2 ? 'rd-split--reverse' : ''}`}>
            <Reveal className="rd-split__text">
              <h2 className="rd-h2">{s.fullTitle}</h2>
              <p className="rd-body">{s.fullDesc}</p>
              {!s.groups && (
                <ul className="rd-checklist">
                  {s.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
              )}
              <Button to="/contact">Enquire about this service<span className="sr-only">: {s.title}</span></Button>
            </Reveal>
            <Reveal delay={0.1} className="rd-split__media">
              <Media slot={`service-${['training', 'product', 'partnership', 'entrepreneurship'][i]}`} alt="" ratio="4 / 3" tone={TONES[i]} />
            </Reveal>
          </div>
          {s.groups && (
            <div className="rd-wrap">
              <div className="rd-groups">
                {s.groups.map((g, gi) => (
                  <Reveal key={g.title} delay={gi * 0.06}>
                    <section className="rd-group" aria-label={g.title}>
                      <h3>{g.title}</h3>
                      <ul>{g.items.map((it) => <li key={it}>{it}</li>)}</ul>
                    </section>
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </section>
      ))}

      <section className="rd-section">
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
    </main>
  );
}
