import React, { useState, useEffect, useCallback, memo } from 'react';
import { useInView } from '../hooks';
import { COLORS } from '../utils/constants';

/* ═══════════════════════════════════════════════════════════════
   WASTE TO WONDERS — HACKATHON PAGE
   Adapted to InnoMission design system
   ═══════════════════════════════════════════════════════════════ */

/* ── Helpers ── */
function pad(n) { return String(n).padStart(2, '0'); }
function getCD() {
  const t = new Date('2026-05-16T09:00:00+05:30').getTime();
  const d = Math.max(0, t - Date.now());
  return {
    D: Math.floor(d / 86400000),
    H: Math.floor((d % 86400000) / 3600000),
    M: Math.floor((d % 3600000) / 60000),
    S: Math.floor((d % 60000) / 1000),
  };
}

/* ── Scroll-reveal wrapper ── */
const Reveal = ({ children, delay = 0, className = '' }) => {
  const [ref, isInView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'none' : 'translateY(32px)',
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

/* ── Section Wrapper ── */
const Section = ({ id, bg = 'var(--color-white)', children, style = {} }) => (
  <section
    id={id}
    style={{
      padding: 'clamp(64px, 8vw, 100px) var(--page-padding)',
      background: bg,
      ...style,
    }}
  >
    <div className="container">{children}</div>
  </section>
);

/* ── Eyebrow Label ── */
const Eyebrow = ({ children, color = COLORS.electric }) => (
  <p className="section-label" style={{ color }}>{children}</p>
);

/* ═══════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════ */

const BENEFITS = [
  { icon: '🏆', text: '₹1L+ Prizes' },
  { icon: '🌱', text: 'Seed Grants' },
  { icon: '📜', text: 'Certificates' },
  { icon: '🤝', text: 'Industry Mentors' },
  { icon: '🚀', text: 'Incubation Path' },
  { icon: '🌍', text: 'Global Edge' },
];

const ABOUT_CARDS = [
  { icon: '🏭', title: 'Industry Connect', body: 'Direct interaction with professionals through structured mentoring, jury interactions, and post-event network access.' },
  { icon: '🌱', title: 'Seed Grant Pathway', body: 'Top 2 Proof-of-Concept teams receive ₹25,000 each — a direct bridge from hackathon idea to real product.' },
  { icon: '📜', title: 'Certified for All', body: 'Every participant receives a verifiable digital certificate useful for portfolios, academic records and job applications.' },
  { icon: '🔬', title: 'Research Culture', body: "Develop a patent-first mindset. Your submission contributes to JNAFAU's R&D output and NAAC/NIRF benchmarking." },
  { icon: '🌍', title: 'Global Competitive Edge', body: 'Top submissions are recommended to R|Elan CDC, What Design Can Do, and other global circular design competitions.' },
  { icon: '💼', title: 'Internship Access', body: 'Shortlisted teams gain direct access to partner internships with sustainable design firms and innovation startups.' },
];

const TRACKS = [
  { code: 'T1', name: 'Smart Home, Small Budget', tagline: 'The Affordable Aesthetic', color: COLORS.amber, bg: '#FFF8E8',
    brief: "Design modular, low-cost domestic utility products using Hyderabad's agricultural and construction waste. Think: furniture from rice husk boards, shelving from C&D debris, lighting from upcycled glass.",
    materials: ['Rice Husk Boards', 'C&D Waste Bricks', 'Crop Residue Panels', 'Waste Plastic'],
    deliverable: 'A functional prototype or detailed design of one domestic object — sketched, modelled, or physically made. Include a cost-of-goods estimate.' },
  { code: 'T2', name: 'Street Art from Scraps', tagline: 'Upcycled Craft Fusion', color: COLORS.mint, bg: '#E8FFF5',
    brief: "Transform Hyderabad's textile scraps, pottery shards, temple flower waste, and construction rubble into public art installations or community objects.",
    materials: ['Textile Cutting Waste', 'Pottery Shards', 'Temple Flowers', 'Metal Scrap'],
    deliverable: "A site-specific public art proposal or physical prototype — a wall piece, installation, community bench, or sculptural object." },
  { code: 'T3', name: 'Modern Village Crafts', tagline: 'Artisan-Sustainable Scaling', color: '#9B7FD4', bg: '#F4EEFF',
    brief: "Modernise a Telangana craft tradition (Bidriware, Kalamkari, Pochampally, Nirmal) for eco-conscious global markets — by applying it to a new, sustainable material.",
    materials: ['Bidriware Offcuts + E-Waste Metal', 'Kalamkari on Crop Residue Paper', 'Pochampally Loom Waste', 'Cork + Traditional Inlay'],
    deliverable: 'A product range concept with named artisan community collaboration, a material provenance story, and a target market channel.' },
  { code: 'T4', name: 'High-Tech Heritage', tagline: 'The New Vernacular', color: COLORS.electric, bg: '#EEF2FF',
    brief: "Reimagine Telangana's vernacular building materials — lime, bamboo, local stone, cob mud, clay tiles — as contemporary design objects using circular thinking.",
    materials: ['Lime Plaster (Deccan)', 'Bamboo Waste (Khammam)', 'Mycelium on Rice Husk', 'Reclaimed Clay Tiles'],
    deliverable: 'A prototype with a material audit, carbon footprint comparison vs. cement, and a documented end-of-life plan.' },
  { code: 'T5', name: 'Green Tools for Schools', tagline: 'Art & Design Education', color: COLORS.coral, bg: '#FFF0F0',
    brief: "Design a waste-material education tool, kit, or programme that teaches material literacy, sustainability, or Indian craft heritage to school students.",
    materials: ['Paper Waste', 'Fabric Scraps', 'Wood Offcuts / Kondapalli Waste', 'Pottery Shards'],
    deliverable: 'A complete kit design: the physical product, a one-page session guide, packaging design, and a cost-per-kit estimate.' },
];

const PODIUM = [
  { icon: '🥇', rank: '1st Prize', amount: '₹25,000', label: 'Best Solution', color: '#F0C040' },
  { icon: '🥈', rank: '2nd Prize', amount: '₹15,000', label: 'Runner Up', color: '#B0B8C0' },
  { icon: '🥉', rank: '3rd Prize', amount: '₹5,000 ×2', label: 'Two Teams', color: '#D4805A' },
];

const HONORARIUM = [
  { icon: '👨‍🏫', label: '5 Industry Mentors', amount: '₹5,000 each' },
  { icon: '⚖️', label: '5 Jury Experts', amount: '₹4,000 each' },
  { icon: '📢', label: 'Marketing & Promotion', amount: '₹10,000' },
  { icon: '📜', label: 'Certificates & Admin', amount: '₹5,000' },
];

const PERKS = [
  '🌱 Seed grants ₹25K each for top 2 PoC teams',
  '📜 Digital certificates for every participant',
  '🔬 Patent-first guidance for shortlisted teams',
  '🌍 Global competition recommendations',
  '💼 Internship access with partner organisations',
  '🏛️ JNAFAU incubation cell pathway',
];

const TIMELINE_DAY1 = [
  { time: 'Now', title: 'Registrations Open', color: COLORS.mint },
  { time: '11:59 PM', title: 'Registration Closes (May 15)', color: COLORS.coral },
  { time: '9:00 AM', title: 'Opening Ceremony + Guest Lecture 1', color: COLORS.amber },
  { time: '9:55 AM', title: 'Rules & Mentor Assignment', color: '#9B7FD4' },
  { time: '11:15 AM', title: '🚀 Hackathon Sprint Begins', color: COLORS.electric },
  { time: '1:00 PM', title: 'Checkpoint 1 — Idea Statement', color: COLORS.amber },
  { time: '3:00 PM', title: 'Guest Lecture 2 — Material Audit', color: COLORS.electric },
  { time: '6:00 PM', title: 'Mentor Office Hours Round 1', color: '#9B7FD4' },
];

const TIMELINE_DAY2 = [
  { time: '9:00 AM', title: 'Midpoint Status Check', color: COLORS.amber },
  { time: '10:00 AM', title: 'Mentor Office Hours Round 2', color: '#9B7FD4' },
  { time: '3:00 PM', title: '🏁 Sprint Ends — Submissions Close', color: COLORS.coral },
  { time: '3:45 PM', title: 'Team Presentations (5+3 min)', color: COLORS.electric },
  { time: 'After', title: 'Jury Deliberation (Closed)', color: '#9B7FD4' },
  { time: 'Evening', title: '🏆 Awards & Closing Ceremony', color: COLORS.amber },
];

const FAQS = [
  ['Who can participate?', 'Open to all students currently enrolled in Fine Arts, Architecture, Product Design, or any allied creative discipline across India. UG and PG both welcome.'],
  ['What is the registration fee?', '₹100 per team. This covers digital certificates and platform administration.'],
  ['What is the team size?', '1 to 5 members. Interdisciplinary teams (Fine Arts + Architecture) are strongly encouraged.'],
  ['Is it fully online?', 'Yes, 100% online. All sessions — opening, guest lectures, mentor calls, presentations, awards — are virtual.'],
  ['What do we submit?', 'A PPT presentation (max 15 slides) and a 3-minute video walkthrough. Physical prototypes are not required but strengthen T4 submissions.'],
  ['How are submissions judged?', 'Feasibility 25%, Innovation 25%, Social Impact 25%, Presentation 15%, Sustainability 10%.'],
  ['When are winners announced?', 'During the Closing Ceremony on the evening of May 17, 2026. Prize money within 30 days.'],
  ['What is the Seed Grant?', 'The top 2 shortlisted Proof-of-Concept teams each receive ₹25,000 for prototype development — selected by the Jury based on real-world buildability.'],
  ['Can I participate solo?', 'Yes. Solo participation is allowed, though interdisciplinary teams tend to produce stronger submissions.'],
  ['Who should I contact for questions?', 'Email us at contact@innomission.in — we respond within 24 hours.'],
];

const TICKER_ITEMS = [
  'Waste to Wonders 2026', 'May 16–17', '₹50K Prize Pool', '₹50K Seed Grants',
  'JNAFAU × InnoMission', '48 Hours Online', 'Fine Arts', 'Architecture',
  'Circular Economy', 'Hyderabad', 'Registration ₹100', 'Design Hackathon',
];


/* ═══════════════════════════════════════════════════════════════
   SUB-COMPONENTS
   ═══════════════════════════════════════════════════════════════ */

/* ── Ticker / Marquee ── */
const Ticker = memo(() => {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div
      aria-hidden="true"
      style={{
        background: COLORS.electric,
        overflow: 'hidden',
        padding: '12px 0',
        borderTop: `2px solid ${COLORS.ink}`,
        borderBottom: `2px solid ${COLORS.ink}`,
      }}
    >
      <div
        style={{
          display: 'flex',
          whiteSpace: 'nowrap',
          animation: 'marquee 30s linear infinite',
          willChange: 'transform',
        }}
      >
        {items.map((item, i) => (
          <React.Fragment key={i}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff', padding: '0 1.5rem' }}>
              {item}
            </span>
            <span style={{ color: COLORS.amber, fontSize: 8, alignSelf: 'center' }}>◆</span>
          </React.Fragment>
        ))}
      </div>
      <style>{`@keyframes marquee{to{transform:translateX(-50%)}}`}</style>
    </div>
  );
});
Ticker.displayName = 'Ticker';

/* ── Timeline Column ── */
const TimelineColumn = ({ label, date, events }) => (
  <div>
    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: COLORS.slate, marginBottom: 16, paddingBottom: 12, borderBottom: `2px solid var(--color-light-gray)` }}>
      {label} <span style={{ color: COLORS.electric, fontSize: 14, fontWeight: 700, marginLeft: 8 }}>{date}</span>
    </p>
    {events.map((ev, i) => (
      <div key={i} style={{ display: 'grid', gridTemplateColumns: '72px 20px 1fr', gap: '0 12px', alignItems: 'start', marginBottom: 4 }}>
        <div style={{ paddingTop: 3, textAlign: 'right' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: ev.color, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{ev.time}</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: ev.color, border: '2px solid var(--color-cream)', boxShadow: `0 0 0 2px ${ev.color}`, flexShrink: 0, marginTop: 3 }} />
          {i < events.length - 1 && <div style={{ width: 1.5, flex: 1, minHeight: 24, background: `linear-gradient(to bottom, ${ev.color}, transparent)`, margin: '3px 0' }} />}
        </div>
        <div style={{ paddingBottom: 20 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: COLORS.ink, lineHeight: 1.35 }}>{ev.title}</div>
        </div>
      </div>
    ))}
  </div>
);

/* ── FAQ Accordion ── */
const FAQSection = () => {
  const [open, setOpen] = useState(null);
  return (
    <div style={{ maxWidth: 720 }}>
      {FAQS.map(([q, a], i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ borderBottom: '1px solid var(--color-light-gray)' }}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                gap: 16, padding: '18px 0', fontSize: 15, fontWeight: 500, color: isOpen ? COLORS.electric : COLORS.ink,
                textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'var(--font-body)', transition: 'color 0.2s',
              }}
            >
              <span>{q}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                style={{ flexShrink: 0, transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.28s cubic-bezier(0.16,1,0.3,1)', color: COLORS.slate }}>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div style={{
              overflow: 'hidden',
              maxHeight: isOpen ? 200 : 0,
              paddingBottom: isOpen ? 18 : 0,
              transition: 'max-height 0.35s cubic-bezier(0.16,1,0.3,1), padding-bottom 0.3s',
            }}>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: COLORS.slate }}>{a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};


/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════════ */

const HackathonPage = memo(() => {
  const [cd, setCD] = useState(getCD());
  const [activeTrack, setActiveTrack] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCD(getCD()), 1000);
    return () => clearInterval(id);
  }, []);

  const track = TRACKS[activeTrack];

  return (
    <main id="main-content" role="main">

      {/* ════════════ HERO ════════════ */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '120px var(--page-padding) 80px',
          background: 'linear-gradient(145deg, var(--color-cream) 0%, #fff 40%, #EEF2FF 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <div aria-hidden="true" style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, ${COLORS.electric}08 0%, transparent 70%)` }} />
        <div aria-hidden="true" style={{ position: 'absolute', bottom: -60, left: -60, width: 300, height: 300, borderRadius: '50%', background: `radial-gradient(circle, ${COLORS.coral}06 0%, transparent 70%)` }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <div className="grid-2" style={{ alignItems: 'center' }}>
            {/* Left */}
            <Reveal>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', background: `${COLORS.electric}12`, color: COLORS.electric, border: `1px solid ${COLORS.electric}30`, borderRadius: 20, padding: '6px 14px', marginBottom: 24 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: COLORS.electric, animation: 'pulse 2s ease-in-out infinite' }} />
                JNAFAU Research Cell × InnoMission
              </div>

              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 900, lineHeight: 0.92, letterSpacing: '-0.04em', color: COLORS.ink, marginBottom: 16 }}>
                <span style={{ display: 'block' }}>Waste</span>
                <span style={{ display: 'block', fontSize: 'clamp(28px, 4vw, 48px)', color: COLORS.amber, fontStyle: 'italic', fontWeight: 700, letterSpacing: '-0.02em', paddingLeft: '0.1em' }}>↳ to</span>
                <span style={{ display: 'block', color: COLORS.coral }}>Wonders</span>
              </h1>

              <p className="body-lg" style={{ marginBottom: 28, maxWidth: 480 }}>
                A 48-hour online design sprint where Fine Arts & Architecture students transform Hyderabad's urban, agricultural, and textile waste into high-value design solutions.
              </p>

              {/* Benefits pills */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 28 }}>
                {BENEFITS.map(b => (
                  <div key={b.text} style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#fff', border: '1px solid var(--color-light-gray)', borderRadius: 10, padding: '10px 12px', fontSize: 13, fontWeight: 500, color: COLORS.ink }}>
                    <span style={{ fontSize: 16 }}>{b.icon}</span>{b.text}
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 28 }}>
                <a href="#hack-register" className="btn btn-electric" style={{ textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                  Register Now — ₹100 →
                </a>
                <a href="#hack-tracks" className="btn btn-outline">
                  Explore Tracks ↓
                </a>
              </div>

              {/* Countdown */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: COLORS.slate, writingMode: 'vertical-rl', transform: 'rotate(180deg)', marginRight: 4 }}>Starts in</span>
                {[['D', 'Days'], ['H', 'Hrs'], ['M', 'Min'], ['S', 'Sec']].map(([k, u], i) => (
                  <React.Fragment key={k}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: COLORS.electric, color: '#fff', borderRadius: 10, padding: '10px 14px', minWidth: 56 }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>{pad(cd[k])}</span>
                      <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.7, marginTop: 3 }}>{u}</span>
                    </div>
                    {i < 3 && <span style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, color: COLORS.electric, marginBottom: 14 }}>:</span>}
                  </React.Fragment>
                ))}
              </div>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, background: `${COLORS.coral}12`, color: COLORS.coral, border: `1px solid ${COLORS.coral}25`, borderRadius: 8, padding: '6px 14px', marginTop: 16 }}>
                📅 May 16–17, 2026 · Online · ₹100
              </div>
            </Reveal>

            {/* Right — Key Stats */}
            <Reveal delay={0.2} className="hero-illustration">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {[
                  { num: '₹1.1L', label: 'Total Prizes & Grants', color: COLORS.amber },
                  { num: '48h', label: 'Online Sprint', color: COLORS.electric },
                  { num: '5', label: 'Innovation Tracks', color: COLORS.coral },
                  { num: '₹25K', label: 'Seed Grant (×2 Teams)', color: COLORS.mint },
                ].map(s => (
                  <div key={s.label} style={{ background: '#fff', border: '1px solid var(--color-light-gray)', borderRadius: 16, padding: 28, textAlign: 'center', transition: 'transform 0.3s, box-shadow 0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.08)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 800, color: s.color, letterSpacing: '-0.03em', marginBottom: 4 }}>{s.num}</div>
                    <div style={{ fontSize: 13, color: COLORS.slate, fontWeight: 500 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════ TICKER ════════════ */}
      <Ticker />

      {/* ════════════ ABOUT ════════════ */}
      <Section id="hack-about">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start' }} className="grid-2">
          <Reveal>
            <Eyebrow>About the Hackathon</Eyebrow>
            <h2 className="heading-lg" style={{ marginBottom: 20 }}>
              Where <em style={{ color: COLORS.coral, fontStyle: 'italic' }}>waste</em> becomes a design material.
            </h2>
            <p className="body-sm" style={{ marginBottom: 14, lineHeight: 1.75 }}>
              Waste to Wonders is a 48-hour online sprint where Fine Arts and Architecture students across India transform <strong style={{ color: COLORS.mint, fontWeight: 600 }}>Hyderabad's urban, agricultural, and textile waste</strong> into high-value design solutions that bridge aesthetic beauty and structural functionality.
            </p>
            <p className="body-sm" style={{ marginBottom: 20, lineHeight: 1.75 }}>
              Organised by the <strong style={{ color: COLORS.mint, fontWeight: 600 }}>JNAFAU Research Cell</strong> and <strong style={{ color: COLORS.mint, fontWeight: 600 }}>InnoMission</strong>, this hackathon believes the Circular Economy starts with the designer's eye.
            </p>
            <div style={{ borderLeft: `3px solid ${COLORS.amber}`, padding: '14px 20px', background: `${COLORS.amber}10`, borderRadius: '0 10px 10px 0', fontSize: 15, lineHeight: 1.65, color: COLORS.ink, fontStyle: 'italic' }}>
              <strong style={{ color: COLORS.amber, fontStyle: 'normal' }}>"Soul + Structure"</strong> — Fine Arts brings the aesthetic vision, Architecture brings the structural logic. Together they create solutions that are unforgettable.
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {ABOUT_CARDS.map(card => (
                <div key={card.title} style={{ background: 'var(--color-cream)', border: '1px solid var(--color-light-gray)', borderRadius: 14, padding: 20, transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.electric; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(59,92,255,0.08)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-light-gray)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
                  <span style={{ fontSize: 26, display: 'block', marginBottom: 8 }}>{card.icon}</span>
                  <h3 style={{ fontSize: 15, fontWeight: 600, color: COLORS.ink, marginBottom: 4 }}>{card.title}</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: COLORS.slate }}>{card.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ════════════ TRACKS ════════════ */}
      <Section id="hack-tracks" bg="var(--color-cream)">
        <Reveal>
          <Eyebrow>Innovation Tracks</Eyebrow>
          <h2 className="heading-lg" style={{ marginBottom: 32, maxWidth: 540 }}>
            Five ways to turn waste into something remarkable.
          </h2>
        </Reveal>

        {/* Tabs */}
        <Reveal delay={0.1}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }} role="tablist">
            {TRACKS.map((tr, i) => (
              <button
                key={tr.code}
                role="tab"
                aria-selected={i === activeTrack}
                onClick={() => setActiveTrack(i)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  padding: '10px 16px', borderRadius: 10,
                  border: `1.5px solid ${i === activeTrack ? tr.color : 'var(--color-light-gray)'}`,
                  background: i === activeTrack ? tr.bg : '#fff',
                  cursor: 'pointer', textAlign: 'left',
                  transition: 'all 0.2s', fontFamily: 'var(--font-body)',
                }}
              >
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: i === activeTrack ? tr.color : COLORS.slate }}>{tr.code}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: COLORS.ink, maxWidth: 130, lineHeight: 1.3 }}>{tr.name}</span>
              </button>
            ))}
          </div>

          {/* Panel */}
          <div
            key={activeTrack}
            style={{
              background: '#fff', border: `1.5px solid ${track.color}30`,
              borderRadius: 18, padding: 'clamp(24px, 3vw, 36px)',
              animation: 'fadeInUp 0.4s cubic-bezier(0.16,1,0.3,1) both',
            }}
          >
            <span style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: track.color, background: track.bg, padding: '4px 10px', borderRadius: 20, marginBottom: 12 }}>
              {track.tagline}
            </span>
            <h3 className="heading-md" style={{ marginBottom: 14 }}>{track.name}</h3>
            <p className="body-sm" style={{ marginBottom: 20, maxWidth: 600, lineHeight: 1.75 }}>{track.brief}</p>

            <div style={{ background: track.bg, borderLeft: `3px solid ${track.color}`, borderRadius: '0 10px 10px 0', padding: '14px 18px', marginBottom: 20 }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: track.color, marginBottom: 4 }}>48-Hour Deliverable</p>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: COLORS.ink }}>{track.deliverable}</p>
            </div>

            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: COLORS.slate, marginBottom: 10 }}>Suggested Waste Materials</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {track.materials.map(m => (
                <span key={m} style={{ fontSize: 12, fontWeight: 500, padding: '4px 12px', borderRadius: 20, background: track.bg, border: `1px solid ${track.color}25`, color: COLORS.ink }}>{m}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ════════════ PRIZES ════════════ */}
      <Section id="hack-prizes" bg={COLORS.ink} style={{ color: '#fff' }}>
        <Reveal>
          <Eyebrow color={COLORS.amber}>Prizes & Rewards</Eyebrow>
          <h2 className="heading-lg" style={{ color: '#fff', marginBottom: 40 }}>
            ₹1,10,000 in prizes, grants & opportunities.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          {/* Podium */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 24 }} className="grid-3">
            {PODIUM.map(p => (
              <div key={p.rank} style={{ background: 'rgba(255,255,255,0.06)', border: `1.5px solid ${p.color}30`, borderRadius: 16, padding: '28px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, textAlign: 'center', transition: 'transform 0.2s, background 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}>
                <span style={{ fontSize: 32 }}>{p.icon}</span>
                <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: p.color }}>{p.rank}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: '#fff', letterSpacing: '-0.03em' }}>{p.amount}</span>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>{p.label}</span>
              </div>
            ))}
          </div>

          {/* Seed Grant */}
          <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', background: `${COLORS.amber}18`, border: `1.5px solid ${COLORS.amber}35`, borderRadius: 14, padding: 22, marginBottom: 40 }}>
            <span style={{ fontSize: 32, flexShrink: 0 }}>🌿</span>
            <div>
              <p style={{ fontSize: 15, fontWeight: 600, color: COLORS.amber, marginBottom: 4 }}>Seed Development Grants</p>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: 'rgba(255,255,255,0.75)' }}>
                The top 2 shortlisted PoC teams each receive an additional <strong style={{ color: COLORS.amber }}>₹25,000 seed grant</strong> for prototype development — a direct pathway from hackathon idea to real product.
              </p>
            </div>
          </div>

          {/* Honorarium + Perks */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }} className="grid-2">
            <div>
              <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: `${COLORS.amber}CC`, marginBottom: 14 }}>Honorarium</p>
              {HONORARIUM.map(h => (
                <div key={h.label} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <span style={{ fontSize: 15 }}>{h.icon}</span>
                  <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', flex: 1 }}>{h.label}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>{h.amount}</span>
                </div>
              ))}
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 12, fontSize: 14, color: 'rgba(255,255,255,0.55)' }}>
                <span>Grand Total Budget</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, color: COLORS.amber, letterSpacing: '-0.02em' }}>₹1,10,000</span>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: `${COLORS.amber}CC`, marginBottom: 14 }}>Beyond Prize Money</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {PERKS.map(perk => (
                  <div key={perk} style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>
                    {perk}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ════════════ TIMELINE ════════════ */}
      <Section id="hack-timeline" bg="var(--color-cream)">
        <Reveal>
          <Eyebrow>48-Hour Schedule</Eyebrow>
          <h2 className="heading-lg" style={{ marginBottom: 48 }}>
            Every moment counts in 48 hours.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }} className="grid-2">
            <TimelineColumn label="Day 1" date="May 16, 2026" events={TIMELINE_DAY1} />
            <TimelineColumn label="Day 2" date="May 17, 2026" events={TIMELINE_DAY2} />
          </div>
        </Reveal>
      </Section>

      {/* ════════════ FAQ ════════════ */}
      <Section id="hack-faq">
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 80, alignItems: 'start' }} className="grid-2">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="heading-md" style={{ marginBottom: 14 }}>Everything you need to know.</h2>
            <p className="body-sm">
              Still have questions? Reach us at{' '}
              <a href="mailto:contact@innomission.in" style={{ color: COLORS.electric, fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 3 }}>
                contact@innomission.in
              </a>
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <FAQSection />
          </Reveal>
        </div>
      </Section>

      {/* ════════════ REGISTER CTA ════════════ */}
      <Section id="hack-register" bg={COLORS.coral} style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Pattern overlay */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(45deg,transparent,transparent 36px,rgba(255,255,255,0.04) 36px,rgba(255,255,255,0.04) 37px)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <Reveal>
            <div style={{ maxWidth: 600 }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <span style={{ width: 18, height: 2, background: 'rgba(255,255,255,0.6)', borderRadius: 1, display: 'block' }} />
                Join the Movement
              </p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 14 }}>
                Ready to turn waste into wonder?
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.8)', marginBottom: 32 }}>
                Register your team for just ₹100. 48 hours. 5 tracks. ₹1,10,000 in prizes and grants. Open to all Fine Arts & Architecture students across India.
              </p>

              {/* Quick details */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 32 }}>
                {[['Event Dates', 'May 16–17, 2026'], ['Duration', '48 Hours Online'], ['Entry Fee', '₹100 per team'], ['Team Size', '1–5 Members']].map(([l, v]) => (
                  <div key={l} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 10, padding: '12px 14px' }}>
                    <span style={{ display: 'block', fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 3 }}>{l}</span>
                    <span style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#fff' }}>{v}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 20 }}>
                <a
                  href="mailto:contact@innomission.in?subject=Waste to Wonders 2026 Registration"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: '#fff', color: COLORS.coral,
                    fontSize: 15, fontWeight: 700, letterSpacing: '0.02em',
                    padding: '14px 32px', borderRadius: 10, textTransform: 'uppercase',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                    transition: 'transform 0.15s, box-shadow 0.2s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)'; }}
                >
                  Register Now — ₹100 →
                </a>
                <a
                  href="mailto:contact@innomission.in"
                  style={{
                    display: 'inline-flex', alignItems: 'center',
                    fontSize: 15, fontWeight: 600, color: '#fff',
                    padding: '14px 24px', borderRadius: 10,
                    border: '1.5px solid rgba(255,255,255,0.4)',
                    textDecoration: 'none',
                    transition: 'background 0.18s, border-color 0.18s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}
                >
                  Ask a Question
                </a>
              </div>

              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>
                📧 contact@innomission.in · JNAFAU Research Cell · InnoMission
              </p>
            </div>
          </Reveal>
        </div>
      </Section>
    </main>
  );
});

HackathonPage.displayName = 'HackathonPage';

export default HackathonPage;
