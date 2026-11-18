import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { YOUTUBE_SERIES, SOCIAL_LINKS, INSTAGRAM_REELS } from '../../utils/constants';
import { slug } from '../data';
import { Accent, ArrowLink, PageHero, ReelEmbed, Reveal, SectionHead } from '../ui';

export default function Insights() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
  }, [hash]);

  return (
    <main id="main-content">
      <PageHero
        title={<>Learn from experts, innovators and <Accent tone="teal">entrepreneurs</Accent></>}
        intro="Conversations, case studies and conference talks that bridge theory and practice."
      />

      {YOUTUBE_SERIES.map((s, i) => (
        <section key={s.title} id={slug(s.title)} className={`rd-section ${i % 2 ? 'rd-section--cream2' : ''}`}>
          <div className={`rd-wrap rd-split ${i % 2 ? 'rd-split--reverse' : ''}`}>
            <Reveal className="rd-split__text">
              <h2 className="rd-h2">{s.title}</h2>
              <p className="rd-body">{s.desc}</p>
              <ul className="rd-tags">
                {s.topics.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </Reveal>
            <Reveal delay={0.1} className="rd-split__media">
              <div className="rd-video">
                <iframe
                  src={s.embedUrl}
                  title={s.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section id="reels" className="rd-section rd-section--cream2">
        <div className="rd-wrap">
          <Reveal>
            <div className="rd-rowhead">
              <SectionHead title={<>Latest <Accent>reels</Accent></>} />
              <ArrowLink href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">Follow @inno_mission</ArrowLink>
            </div>
          </Reveal>
          <div className="rd-reels">
            {INSTAGRAM_REELS.map((code, i) => (
              <Reveal key={code} delay={(i % 3) * 0.06}><ReelEmbed code={code} index={i + 1} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="rd-section">
        <div className="rd-wrap rd-follow">
          <Reveal>
            <h2 className="rd-h2">Follow the <Accent>conversation</Accent></h2>
            <p className="rd-lede">New episodes and stories are published on our channels.</p>
            <div className="rd-actions rd-actions--center">
              <ArrowLink href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer">YouTube</ArrowLink>
              <ArrowLink href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</ArrowLink>
              <ArrowLink href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">Instagram</ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
