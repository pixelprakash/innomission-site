import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useScrolled } from '../hooks';
import { RD_NAV, SEARCH_INDEX } from './data';
import { ArrowLink, Chevron } from './ui';

/* ── Search overlay ── */
function SearchOverlay({ open, onClose }) {
  const [q, setQ] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      setQ('');
      const t = setTimeout(() => inputRef.current && inputRef.current.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [open]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return SEARCH_INDEX.filter((r) => r.type === 'Page');
    return SEARCH_INDEX.filter((r) => (r.title + ' ' + (r.text || '')).toLowerCase().includes(term)).slice(0, 8);
  }, [q]);

  if (!open) return null;

  const go = (path) => { onClose(); navigate(path); };

  return (
    <div className="rd-search" role="dialog" aria-modal="true" aria-label="Search the site">
      <div className="rd-search__panel">
        <div className="rd-search__bar">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.6" />
            <path d="M14 14l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter' && results[0]) go(results[0].path); }}
            placeholder="Search services, programs and insights"
            aria-label="Search"
          />
          <button type="button" className="rd-search__close" onClick={onClose} aria-label="Close search">Close</button>
        </div>
        <ul className="rd-search__results">
          {results.length === 0 && <li className="rd-search__empty">No results for “{q}”.</li>}
          {results.map((r) => (
            <li key={r.type + r.title + r.path}>
              <button type="button" onClick={() => go(r.path)}>
                <span className="rd-search__type">{r.type}</span>
                <span className="rd-search__title">{r.title}</span>
                <Chevron />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button type="button" className="rd-search__scrim" aria-label="Close search" tabIndex={-1} onClick={onClose} />
    </div>
  );
}

export default function Header() {
  const scrolled = useScrolled(8);
  const location = useLocation();
  const [openId, setOpenId] = useState(null);       // desktop mega-menu
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef(null);
  const closeTimer = useRef(null);

  const closeAll = useCallback(() => { setOpenId(null); setMobileOpen(false); setSearchOpen(false); }, []);

  // close on route change
  useEffect(() => { closeAll(); }, [location.pathname, location.hash, closeAll]);

  // Esc + outside click
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeAll(); };
    const onDown = (e) => { if (navRef.current && !navRef.current.contains(e.target)) setOpenId(null); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onDown);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('mousedown', onDown); };
  }, [closeAll]);

  // lock body scroll when an overlay is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen || searchOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen, searchOpen]);

  const hoverOpen = (id) => { clearTimeout(closeTimer.current); setOpenId(id); };
  const hoverClose = () => { closeTimer.current = setTimeout(() => setOpenId(null), 140); };

  const active = RD_NAV.find((n) => n.id === openId);

  return (
    <header className={`rd-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="rd-header__bar">
        <Link to="/" className="rd-logo" aria-label="InnoMission — home">
          <img src="/logo.png" alt="InnoMission" />
        </Link>

        <nav className="rd-nav" aria-label="Main" ref={navRef} onMouseLeave={hoverClose}>
          <ul>
            {RD_NAV.map((item) => (
              <li key={item.id} onMouseEnter={() => (item.links ? hoverOpen(item.id) : setOpenId(null))}>
                {item.links ? (
                  <button
                    type="button"
                    className={`rd-nav__item ${openId === item.id ? 'is-open' : ''} ${location.pathname.startsWith(item.path) ? 'is-active' : ''}`}
                    aria-expanded={openId === item.id}
                    aria-controls={`rd-panel-${item.id}`}
                    onClick={() => setOpenId(item.id)}
                  >
                    {item.label}
                    <Chevron dir="down" size={9} />
                  </button>
                ) : (
                  <NavLink to={item.path} className={({ isActive }) => `rd-nav__item ${isActive ? 'is-active' : ''}`}>
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          {/* Mega-menu panel */}
          {active && (
            <div
              id={`rd-panel-${active.id}`}
              className="rd-mega"
              onMouseEnter={() => hoverOpen(active.id)}
            >
              <div className="rd-mega__intro">
                <p className="rd-mega__blurb">{active.blurb}</p>
                <ArrowLink to={active.cta.path}>{active.cta.label}</ArrowLink>
              </div>
              <ul className="rd-mega__links">
                {active.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.path} className="rd-mega__link">
                      <span className="rd-mega__label">{l.label}</span>
                      {l.desc && <span className="rd-mega__desc">{l.desc}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>

        <div className="rd-header__actions">
          <button type="button" className="rd-iconbtn" onClick={() => { setOpenId(null); setSearchOpen(true); }} aria-label="Search">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.8" />
              <path d="M14 14l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
          <button
            type="button"
            className="rd-menubtn"
            aria-expanded={mobileOpen}
            aria-controls="rd-mobile"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className={`rd-menubtn__dots ${mobileOpen ? 'is-open' : ''}`} aria-hidden="true" />
            {mobileOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="rd-mobile" className="rd-mobile" role="dialog" aria-modal="true" aria-label="Menu">
          <ul>
            {RD_NAV.map((item) => (
              <li key={item.id}>
                {item.links ? (
                  <>
                    <button
                      type="button"
                      className="rd-mobile__row"
                      aria-expanded={mobileSection === item.id}
                      onClick={() => setMobileSection(mobileSection === item.id ? null : item.id)}
                    >
                      {item.label}
                      <Chevron dir={mobileSection === item.id ? 'up' : 'down'} size={12} />
                    </button>
                    {mobileSection === item.id && (
                      <ul className="rd-mobile__sub">
                        <li><Link to={item.path}>{item.cta.label}</Link></li>
                        {item.links.map((l) => (
                          <li key={l.label}><Link to={l.path}>{l.label}</Link></li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link to={item.path} className="rd-mobile__row">{item.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
