import React from 'react';
import { Link } from 'react-router-dom';
import { RD_FOOTER } from './data';
import { SOCIAL_LINKS, CONTACT_INFO } from '../utils/constants';
import { Button } from './ui';

const Social = ({ href, label, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="rd-social">
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="rd-footer">
      <div className="rd-wrap">
        <div className="rd-footer__cta">
          <div>
            <h2 className="rd-h2 rd-h2--light">
              Explore, learn and <em className="rd-accent rd-accent--mint">lead</em> with InnoMission
            </h2>
            <p className="rd-footer__ctatext">
              InnoMission exists for people, for purpose and for lasting impact. Discover our programs, dive into our insights, and join a community building the future of innovation.
            </p>
          </div>
          <Button to="/contact" variant="coral">Contact us</Button>
        </div>

        <div className="rd-footer__grid">
          <div className="rd-footer__brand">
            <img src="/logo.png" alt="InnoMission" className="rd-footer__logo" />
            <p>Open innovation solutions bridging academia, industry and government.</p>
            <div className="rd-footer__social">
              <Social href={SOCIAL_LINKS.linkedin} label="InnoMission on LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" /></svg>
              </Social>
              <Social href={SOCIAL_LINKS.youtube} label="InnoMission on YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </Social>
              <Social href={SOCIAL_LINKS.instagram} label="InnoMission on Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
              </Social>
            </div>
          </div>

          {RD_FOOTER.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="rd-footer__title">{col.title}</h3>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}><Link to={l.path}>{l.label}</Link></li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="rd-footer__title">Reach us</h3>
            <ul>
              {CONTACT_INFO.filter((c) => c.label !== 'Social').map((c) => (
                <li key={c.label}>
                  {c.label === 'Email'
                    ? <a href={`mailto:${c.value}`}>{c.value}</a>
                    : <span>{c.value}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rd-footer__bottom">
          <p>© {new Date().getFullYear()} InnoMission. All rights reserved.</p>
          <p>Hyderabad, India</p>
        </div>
      </div>
    </footer>
  );
}
