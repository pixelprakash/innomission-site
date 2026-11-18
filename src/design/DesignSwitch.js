import React from 'react';
import { DESIGNS, useDesign } from './DesignContext';
import './design-switch.css';

/**
 * Floating A/B switch. Lives outside both designs so it looks identical in each.
 * Remove <DesignSwitch /> from App.js when the experiment ends.
 */
export default function DesignSwitch() {
  const { design, setDesign, isRedesign } = useDesign();

  return (
    <div className="ds-switch" data-design={design}>
      <span className={`ds-label ${!isRedesign ? 'is-on' : ''}`}>Current</span>
      <button
        type="button"
        role="switch"
        aria-checked={isRedesign}
        aria-label="Switch between the current site and the redesign"
        className="ds-track"
        onClick={() => setDesign(isRedesign ? DESIGNS.CURRENT : DESIGNS.REDESIGN)}
      >
        <span className="ds-thumb" />
      </button>
      <span className={`ds-label ${isRedesign ? 'is-on' : ''}`}>Redesign</span>
    </div>
  );
}
