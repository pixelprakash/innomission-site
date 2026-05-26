import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_COLUMNS } from '../utils/constants';
import Logo from './Logo';

const Footer = memo(() => (
  <footer role="contentinfo" className="footer">
    <div className="container">
      <div className="footer-grid">
        <div>
          <Logo color="#FFFFFF" />
          <p className="footer-description">
            Open innovation solutions for academia, industry, and government. Based in Hyderabad, India.
          </p>
        </div>

        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="footer-col-title">{col.title}</h3>
            <ul>
              {col.items.map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">© 2026 InnoMission. All rights reserved.</p>
        <div className="footer-legal">
          {['Privacy', 'Terms', 'Accessibility'].map((link) => (
            <button key={link} className="footer-legal-link">{link}</button>
          ))}
        </div>
      </div>
    </div>
  </footer>
));

Footer.displayName = 'Footer';

export default Footer;
