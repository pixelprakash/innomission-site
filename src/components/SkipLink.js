import React from 'react';

const skipLinkStyle = {
  position: 'absolute',
  top: -100,
  left: 16,
  background: 'var(--color-electric)',
  color: 'var(--color-white)',
  padding: '12px 24px',
  borderRadius: 8,
  fontWeight: 600,
  zIndex: 9999,
  fontFamily: 'var(--font-body)',
  textDecoration: 'none',
  transition: 'top 0.2s ease',
};

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      style={skipLinkStyle}
      onFocus={(e) => { e.target.style.top = '16px'; }}
      onBlur={(e) => { e.target.style.top = '-100px'; }}
    >
      Skip to main content
    </a>
  );
}
