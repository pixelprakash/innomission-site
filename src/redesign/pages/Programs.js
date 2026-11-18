import React, { useMemo, useState } from 'react';
import { PROGRAMS } from '../../utils/constants';
import { Accent, Button, PageHero, Reveal } from '../ui';

export default function Programs() {
  const tags = useMemo(() => ['All', ...Array.from(new Set(PROGRAMS.map((p) => p.tag)))], []);
  const [tag, setTag] = useState('All');
  const list = tag === 'All' ? PROGRAMS : PROGRAMS.filter((p) => p.tag === tag);

  return (
    <main id="main-content">
      <PageHero
        title={<>Programs for <Accent>bold</Accent> leaders</>}
        intro="From one-day intensives to twelve-week accelerators — practical, rigorous programs designed with practitioners and academics."
      />

      <section className="rd-section rd-section--flush">
        <div className="rd-wrap">
          <div className="rd-filters" role="group" aria-label="Filter programs">
            {tags.map((t) => (
              <button key={t} type="button" className={`rd-chip ${tag === t ? 'is-on' : ''}`} aria-pressed={tag === t} onClick={() => setTag(t)}>
                {t}
              </button>
            ))}
          </div>

          <div className="rd-cards rd-cards--3">
            {list.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.06}>
                <article className="rd-card rd-card--full">
                  <p className="rd-card__tag">{p.tag}</p>
                  <h2 className="rd-card__title">{p.title}</h2>
                  <p className="rd-card__text">{p.desc}</p>
                  <dl className="rd-card__meta">
                    <div><dt>Duration</dt><dd>{p.duration}</dd></div>
                  </dl>
                  <ul className="rd-card__outcomes">
                    {p.outcomes.map((o) => <li key={o}>{o}</li>)}
                  </ul>
                  <Button to="/contact" variant="outline">Enquire</Button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="rd-section rd-section--tight">
        <div className="rd-wrap">
          <Reveal>
            <div className="rd-banner">
              <div>
                <h2 className="rd-h2 rd-h2--light">Need something <Accent tone="mint">bespoke?</Accent></h2>
                <p className="rd-banner__text">We design and deliver custom programs for your team, institution or ecosystem.</p>
              </div>
              <Button to="/contact" variant="coral">Talk to our team</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
