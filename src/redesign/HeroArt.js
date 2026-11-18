import React from 'react';

/* ═══════════════════════════════════════════════════════════════
   HERO ART — deliberately minimal
   Drawn in the photo's own coordinate space (2000×853) and scaled
   with the same "cover + centre" rule as the <img>, so it stays
   aligned at every screen size.

   1. an even, soft brand-colour blend (coral → plum → teal)
   2. a faint depth gradient along the bottom edge
   3. a light dot-grid fading out of the top-left corner
   4. thin concentric arcs in two empty corners (drawn in on load)

   Nothing is placed over, or aimed at, any person.
   ═══════════════════════════════════════════════════════════════ */

const W = 2000;
const H = 853;

/* quarter-circle arc centred on a corner */
const arcTL = (r) => `M0 ${r} A${r} ${r} 0 0 0 ${r} 0`;
const arcBR = (r) => `M${W} ${H - r} A${r} ${r} 0 0 0 ${W - r} ${H}`;

export default function HeroArt() {
  return (
    <svg
      className="rd-heroart"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="rdWash" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={W} y2="0">
          <stop offset="0" stopColor="#ec6b56" />
          <stop offset="0.55" stopColor="#8a3f7a" />
          <stop offset="1" stopColor="#2aa58c" />
        </linearGradient>
        <linearGradient id="rdDepth" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2={H}>
          <stop offset="0.6" stopColor="#27102a" stopOpacity="0" />
          <stop offset="1" stopColor="#27102a" stopOpacity="0.28" />
        </linearGradient>
        <pattern id="rdDots" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="2" fill="#fff" />
        </pattern>
        <radialGradient id="rdFadeTL" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="620">
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" stopColor="#000" />
        </radialGradient>
        <mask id="rdMaskTL"><rect width={W} height={H} fill="url(#rdFadeTL)" /></mask>
      </defs>

      {/* 1 · even colour blend */}
      <rect width={W} height={H} fill="url(#rdWash)" opacity="0.3" style={{ mixBlendMode: 'soft-light' }} />

      {/* 2 · depth */}
      <rect width={W} height={H} fill="url(#rdDepth)" />

      {/* 3 · pattern */}
      <rect width={W} height={H} fill="url(#rdDots)" opacity="0.35" mask="url(#rdMaskTL)" />

      {/* 4 · corner arcs */}
      <g fill="none" strokeLinecap="round">
        <path className="rd-ribbon rd-ribbon--1" d={arcTL(300)} pathLength="1" stroke="#ec6b56" strokeWidth="5" />
        <path className="rd-ribbon rd-ribbon--2" d={arcTL(390)} pathLength="1" stroke="#fff" strokeWidth="2.5" opacity="0.6" />
        <path className="rd-ribbon rd-ribbon--3" d={arcTL(480)} pathLength="1" stroke="#ec6b56" strokeWidth="2" opacity="0.45" />
        <path className="rd-ribbon rd-ribbon--1" d={arcBR(300)} pathLength="1" stroke="#fff" strokeWidth="5" opacity="0.85" />
        <path className="rd-ribbon rd-ribbon--2" d={arcBR(390)} pathLength="1" stroke="#ec6b56" strokeWidth="2.5" opacity="0.7" />
        <path className="rd-ribbon rd-ribbon--3" d={arcBR(480)} pathLength="1" stroke="#fff" strokeWidth="2" opacity="0.4" />
      </g>
    </svg>
  );
}
