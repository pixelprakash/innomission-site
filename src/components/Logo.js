import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Logo = memo(() => (
  <Link to="/" className="logo-link" aria-label="InnoMission — back to home">
    <img
      src="/logo.png"
      alt="InnoMission"
      style={{ height: 64, width: 'auto' }}
    />
  </Link>
));

Logo.displayName = 'Logo';

export default Logo;