import React, { useState, useCallback, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrolled } from '../hooks';
import { NAV_ITEMS } from '../utils/constants';
import Logo from './Logo';

const Nav = memo(() => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(40);
  const location = useLocation();

  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      role="banner"
      className={`nav-header ${scrolled ? 'scrolled' : ''}`}
    >
      <nav aria-label="Main navigation" className="nav-inner">
        <Logo />

        {/* Desktop Navigation */}
        <ul className="nav-links" role="menubar">
          {NAV_ITEMS.map((item) => (
            <li key={item.id} role="none">
              <Link
                to={item.path}
                role="menuitem"
                className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li role="none">
            <Link to="/contact" className="btn btn-electric" style={{ padding: '10px 24px', fontSize: 14 }}>
              Get Started
            </Link>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`mobile-menu-link ${isActive(item.path) ? 'active' : ''}`}
                onClick={closeMenu}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
});

Nav.displayName = 'Nav';

export default Nav;
