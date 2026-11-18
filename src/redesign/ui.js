import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks';
import { MEDIA, STOCK } from './media';

/* Two-tone headline accent (serif, coloured) */
export const Accent = ({ children, tone = 'coral' }) => (
  <em className={`rd-accent rd-accent--${tone}`}>{children}</em>
);

export const Chevron = ({ dir = 'right', size = 12 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
    style={{ transform: { right: 'none', down: 'rotate(90deg)', up: 'rotate(-90deg)', left: 'rotate(180deg)' }[dir] }}
  >
    <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* Text link with chevron — the reference's signature CTA */
export const ArrowLink = ({ to, href, children, className = '', ...rest }) => {
  const cls = `rd-arrowlink ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      <Chevron />
    </>
  );
  if (href) return <a href={href} className={cls} {...rest}>{inner}</a>;
  return <Link to={to} className={cls} {...rest}>{inner}</Link>;
};

/* Pill button */
export const Button = ({ to, href, variant = 'primary', children, className = '', ...rest }) => {
  const cls = `rd-btn rd-btn--${variant} ${className}`;
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>;
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>;
  return <button type="button" className={cls} {...rest}>{children}</button>;
};

/* Fade-up on scroll (CSS-driven; respects reduced motion) */
export const Reveal = ({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) => {
  const [ref, inView] = useInView({ threshold: 0.08 });
  return (
    <Tag
      ref={ref}
      className={`rd-reveal ${inView ? 'is-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

/* Decorative flowing line-art — echoes the reference's curved ribbons */
export const Swirl = ({ variant = 'a', className = '' }) => {
  const paths = {
    a: ['M-40 420C120 380 180 120 420 150S640 420 900 260', 'M-40 470C140 430 220 170 440 200S660 470 920 310'],
    b: ['M0 60C200 20 260 300 520 260S780 40 1000 160', 'M0 110C210 70 280 350 540 310S800 90 1000 210'],
    c: ['M20 500C20 260 200 60 420 60S760 200 760 420', 'M70 500C70 290 230 110 420 110S710 230 710 420', 'M120 500C120 320 260 160 420 160S660 260 660 420'],
  }[variant];
  return (
    <svg className={`rd-swirl ${className}`} viewBox="0 0 960 520" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {paths.map((d, i) => (
        <path key={i} d={d} stroke="currentColor" strokeWidth={i === 0 ? 3 : 1.6} strokeLinecap="round" opacity={1 - i * 0.28} />
      ))}
    </svg>
  );
};

/**
 * Media — shows your photo from /public/media when present,
 * otherwise a designed placeholder (never a broken image).
 */
export const Media = ({ slot, alt = '', ratio = '4 / 3', tone = 'coral', className = '', rounded = true, children }) => {
  // sources tried in order: your own file → stock photo → placeholder
  const sources = [MEDIA[slot] && { src: MEDIA[slot] }, STOCK[slot]].filter(Boolean);
  const [idx, setIdx] = useState(0);
  const current = sources[idx];
  return (
    <div
      className={`rd-media rd-media--${tone} ${rounded ? 'is-rounded' : ''} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {current ? (
        <img
          key={current.src}
          src={current.src}
          alt={alt}
          loading="lazy"
          style={current.pos ? { objectPosition: current.pos } : undefined}
          onError={() => setIdx((i) => i + 1)}
        />
      ) : (
        <>
          <Swirl variant="c" className="rd-media__art" />
          {process.env.NODE_ENV !== 'production' && (
            <span className="rd-media__hint">media/{slot}.jpg</span>
          )}
        </>
      )}
      {children}
    </div>
  );
};

/* Section heading block */
export const SectionHead = ({ title, intro, align = 'left', id }) => (
  <div className={`rd-sechead rd-sechead--${align}`}>
    <h2 id={id} className="rd-h2">{title}</h2>
    {intro && <p className="rd-lede">{intro}</p>}
  </div>
);

/* Page hero used on inner pages */
export const PageHero = ({ title, intro, children }) => (
  <section className="rd-pagehero">
    <div className="rd-wrap">
      <Reveal>
            <h1 className="rd-h1 rd-h1--page">{title}</h1>
        {intro && <p className="rd-lede rd-lede--lg">{intro}</p>}
        {children}
      </Reveal>
    </div>
  </section>
);

/* Instagram reel (public embed — no login needed for viewers) */
export const ReelEmbed = ({ code, index = 1 }) => (
  <div className="rd-reel">
    <iframe
      src={`https://www.instagram.com/reel/${code}/embed`}
      title={`InnoMission Instagram reel ${index}`}
      loading="lazy"
      scrolling="no"
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin"
    />
  </div>
);
