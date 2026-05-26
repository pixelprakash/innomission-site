import React, { memo } from 'react';
import { COLORS } from '../utils/constants';

/* ═══════════════════════════════════════════════
   EDITORIAL-STYLE SVG ILLUSTRATIONS
   Bold, geometric, colorful — matching reference mood board
   ═══════════════════════════════════════════════ */

export const IllustrationHero = memo(() => (
  <svg viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg"
    role="img" aria-label="Abstract illustration of interconnected innovation elements"
    style={{ width: '100%', height: 'auto' }}>
    <circle cx="300" cy="250" r="200" fill={COLORS.blush} opacity="0.5" />
    <rect x="80" y="100" width="160" height="200" rx="20" fill={COLORS.electric} transform="rotate(-8 160 200)" />
    <rect x="360" y="80" width="140" height="180" rx="16" fill={COLORS.coral} transform="rotate(5 430 170)" />
    {/* Person — innovator */}
    <g transform="translate(120, 130)">
      <circle cx="60" cy="30" r="28" fill={COLORS.amber} />
      <rect x="35" y="58" width="50" height="80" rx="12" fill={COLORS.ink} />
      <rect x="20" y="70" width="30" height="10" rx="5" fill={COLORS.mint} transform="rotate(-30 35 75)" />
      <rect x="70" y="65" width="35" height="10" rx="5" fill={COLORS.mint} transform="rotate(20 87 70)" />
    </g>
    {/* Puzzle blocks */}
    <g transform="translate(280, 150)">
      <rect x="0" y="0" width="40" height="40" fill={COLORS.coral} rx="4" />
      <rect x="44" y="0" width="40" height="40" fill={COLORS.electric} rx="4" />
      <rect x="0" y="44" width="40" height="40" fill={COLORS.mint} rx="4" />
      <rect x="44" y="44" width="40" height="40" fill={COLORS.amber} rx="4" />
      <rect x="22" y="22" width="40" height="40" fill={COLORS.lavender} rx="4" opacity="0.8" />
    </g>
    {/* Connection lines */}
    <path d="M200 200 Q300 100 400 180" stroke={COLORS.ink} strokeWidth="3" strokeDasharray="8 6" fill="none" />
    <path d="M150 300 Q300 350 450 280" stroke={COLORS.coral} strokeWidth="2.5" fill="none" />
    {/* Magnifying glass */}
    <g transform="translate(380, 260)">
      <circle cx="30" cy="30" r="25" stroke={COLORS.ink} strokeWidth="4" fill="none" />
      <line x1="50" y1="50" x2="70" y2="70" stroke={COLORS.ink} strokeWidth="5" strokeLinecap="round" />
      <circle cx="30" cy="30" r="10" fill={COLORS.mint} opacity="0.4" />
    </g>
    {/* Floating accents */}
    <circle cx="500" cy="120" r="12" fill={COLORS.amber} />
    <circle cx="100" cy="380" r="18" fill={COLORS.lavender} />
    <rect x="450" y="350" width="20" height="20" rx="4" fill={COLORS.coral} transform="rotate(45 460 360)" />
    {/* Lightbulb */}
    <g transform="translate(220, 300)">
      <path d="M30 0 C15 0 0 15 0 35 C0 50 15 55 15 65 L45 65 C45 55 60 50 60 35 C60 15 45 0 30 0Z" fill={COLORS.amber} opacity="0.9" />
      <rect x="18" y="65" width="24" height="8" rx="3" fill={COLORS.ink} />
      <rect x="20" y="75" width="20" height="6" rx="3" fill={COLORS.ink} />
      <line x1="30" y1="20" x2="30" y2="40" stroke={COLORS.white} strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="30" x2="40" y2="30" stroke={COLORS.white} strokeWidth="2" strokeLinecap="round" />
    </g>
    {/* Growth plant */}
    <g transform="translate(460, 360)">
      <rect x="15" y="60" width="20" height="30" rx="4" fill={COLORS.ink} />
      <path d="M25 60 Q25 30 10 10" stroke={COLORS.mint} strokeWidth="3" fill="none" />
      <circle cx="10" cy="10" r="12" fill={COLORS.mint} opacity="0.7" />
      <path d="M25 45 Q35 25 50 15" stroke={COLORS.mint} strokeWidth="3" fill="none" />
      <circle cx="50" cy="15" r="10" fill={COLORS.mint} opacity="0.5" />
    </g>
  </svg>
));
IllustrationHero.displayName = 'IllustrationHero';

/* ── Service Icon Illustrations ── */
const serviceIcons = {
  training: (color1, color2) => (
    <g transform="translate(20, 15)">
      <rect x="5" y="25" width="50" height="35" rx="4" fill={color1} />
      <rect x="15" y="10" width="30" height="20" rx="10" fill={color2} />
      <circle cx="30" cy="18" r="6" fill={COLORS.white} />
      <path d="M10 65 L30 50 L50 65" stroke={COLORS.ink} strokeWidth="2" fill="none" />
      <rect x="55" y="30" width="15" height="3" rx="1.5" fill={COLORS.ink} />
      <rect x="55" y="37" width="12" height="3" rx="1.5" fill={COLORS.ink} />
      <rect x="55" y="44" width="10" height="3" rx="1.5" fill={COLORS.ink} />
    </g>
  ),
  mentorship: (color1, color2) => (
    <g transform="translate(15, 15)">
      <circle cx="25" cy="20" r="15" fill={color1} />
      <circle cx="55" cy="25" r="12" fill={color2} />
      <path d="M25 35 Q40 50 55 37" stroke={COLORS.ink} strokeWidth="2.5" strokeDasharray="4 3" fill="none" />
      <path d="M15 55 L25 45 L35 55" stroke={color1} strokeWidth="3" fill="none" />
      <circle cx="25" cy="17" r="4" fill={COLORS.white} />
      <circle cx="55" cy="22" r="3" fill={COLORS.white} />
    </g>
  ),
  partnership: (color1, color2) => (
    <g transform="translate(15, 15)">
      <rect x="0" y="20" width="30" height="40" rx="6" fill={color1} />
      <rect x="35" y="15" width="30" height="45" rx="6" fill={color2} />
      <path d="M30 35 L35 35" stroke={COLORS.ink} strokeWidth="3" />
      <circle cx="15" cy="12" r="8" fill={color1} opacity="0.6" />
      <circle cx="50" cy="8" r="8" fill={color2} opacity="0.6" />
      <path d="M15 60 Q32 70 50 60" stroke={COLORS.mint} strokeWidth="2.5" fill="none" />
    </g>
  ),
  consulting: (color1, color2) => (
    <g transform="translate(15, 15)">
      <rect x="5" y="10" width="55" height="45" rx="8" fill={color1} opacity="0.2" />
      <circle cx="20" cy="30" r="10" fill={color1} />
      <circle cx="45" cy="25" r="8" fill={color2} />
      <path d="M5 55 Q32 40 60 55" stroke={COLORS.ink} strokeWidth="2" fill="none" />
      <rect x="15" y="45" width="35" height="3" rx="1.5" fill={COLORS.ink} />
      <rect x="20" y="51" width="25" height="3" rx="1.5" fill={COLORS.ink} opacity="0.5" />
    </g>
  ),
};

export const ServiceIcon = memo(({ icon, color1, color2 }) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"
    role="img" aria-label={`${icon} service`}
    style={{ width: 80, height: 80 }}>
    {serviceIcons[icon]?.(color1, color2)}
  </svg>
));
ServiceIcon.displayName = 'ServiceIcon';

/* ── Full-size Service Detail Illustrations ── */
export const TrainingIllustration = memo(() => (
  <svg viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg"
    role="img" aria-label="Training workshop illustration"
    style={{ width: '100%', maxWidth: 300 }}>
    <rect x="30" y="40" width="240" height="160" rx="16" fill={COLORS.electric} opacity="0.1" />
    <rect x="60" y="70" width="80" height="60" rx="8" fill={COLORS.electric} />
    <rect x="160" y="70" width="80" height="60" rx="8" fill={COLORS.coral} />
    <rect x="110" y="140" width="80" height="50" rx="8" fill={COLORS.amber} />
    <circle cx="100" cy="55" r="12" fill={COLORS.electric} />
    <circle cx="200" cy="55" r="12" fill={COLORS.coral} />
    <circle cx="150" cy="55" r="12" fill={COLORS.mint} />
    <path d="M100 100 L150 80 L200 100" stroke={COLORS.white} strokeWidth="3" fill="none" strokeLinecap="round" />
  </svg>
));

export const MentorshipIllustration = memo(() => (
  <svg viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg"
    role="img" aria-label="Mentorship illustration"
    style={{ width: '100%', maxWidth: 300 }}>
    <circle cx="100" cy="100" r="60" fill={COLORS.coral} opacity="0.15" />
    <circle cx="200" cy="120" r="50" fill={COLORS.amber} opacity="0.15" />
    <circle cx="100" cy="90" r="25" fill={COLORS.coral} />
    <circle cx="100" cy="72" r="14" fill={COLORS.amber} />
    <circle cx="200" cy="110" r="20" fill={COLORS.amber} />
    <circle cx="200" cy="95" r="11" fill={COLORS.coral} />
    <path d="M125 90 Q150 70 180 110" stroke={COLORS.ink} strokeWidth="2.5" strokeDasharray="6 4" fill="none" />
    <path d="M80 160 L120 140 L180 155 L220 140" stroke={COLORS.mint} strokeWidth="3" fill="none" strokeLinecap="round" />
  </svg>
));

export const PartnershipIllustration = memo(() => (
  <svg viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg"
    role="img" aria-label="Partnership ecosystem illustration"
    style={{ width: '100%', maxWidth: 300 }}>
    <circle cx="150" cy="120" r="80" stroke={COLORS.mint} strokeWidth="2" strokeDasharray="6 4" fill="none" />
    <circle cx="150" cy="60" r="24" fill={COLORS.electric} />
    <circle cx="90" cy="160" r="24" fill={COLORS.coral} />
    <circle cx="210" cy="160" r="24" fill={COLORS.amber} />
    <line x1="150" y1="84" x2="105" y2="142" stroke={COLORS.ink} strokeWidth="2" />
    <line x1="150" y1="84" x2="195" y2="142" stroke={COLORS.ink} strokeWidth="2" />
    <line x1="114" y1="160" x2="186" y2="160" stroke={COLORS.ink} strokeWidth="2" />
    <circle cx="150" cy="120" r="12" fill={COLORS.mint} />
    <text x="140" y="52" fill={COLORS.white} fontSize="10" fontWeight="700" fontFamily="sans-serif">Uni</text>
    <text x="77" y="163" fill={COLORS.white} fontSize="9" fontWeight="700" fontFamily="sans-serif">Gov</text>
    <text x="198" y="163" fill={COLORS.white} fontSize="9" fontWeight="700" fontFamily="sans-serif">Biz</text>
  </svg>
));

export const ConsultingIllustration = memo(() => (
  <svg viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg"
    role="img" aria-label="Consulting strategy illustration"
    style={{ width: '100%', maxWidth: 300 }}>
    <rect x="40" y="50" width="220" height="140" rx="12" fill={COLORS.amber} opacity="0.1" />
    <rect x="60" y="80" width="60" height="80" rx="6" fill={COLORS.amber} />
    <rect x="130" y="100" width="60" height="60" rx="6" fill={COLORS.coral} />
    <rect x="200" y="70" width="40" height="90" rx="6" fill={COLORS.electric} />
    <path d="M70 170 L90 130 L120 150 L160 110 L200 90 L230 70" stroke={COLORS.ink} strokeWidth="2.5" fill="none" strokeLinecap="round" />
    <circle cx="90" cy="130" r="4" fill={COLORS.ink} />
    <circle cx="160" cy="110" r="4" fill={COLORS.ink} />
    <circle cx="230" cy="70" r="4" fill={COLORS.ink} />
  </svg>
));

/* ── Quotation Mark SVG ── */
export const QuoteMark = memo(() => (
  <svg viewBox="0 0 48 48" style={{ width: 48, height: 48, marginBottom: 32 }} aria-hidden="true">
    <path d="M14 28C14 22 18 16 24 14L26 18C22 20 20 22 20 26H26V36H14V28ZM30 28C30 22 34 16 40 14L42 18C38 20 36 22 36 26H42V36H30V28Z" fill={COLORS.electric} opacity="0.3" />
  </svg>
));

// Map service type to full illustration component
export const SERVICE_ILLUSTRATIONS = {
  training: TrainingIllustration,
  mentorship: MentorshipIllustration,
  partnership: PartnershipIllustration,
  consulting: ConsultingIllustration,
};
