import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

/* ═══════════════════════════════════════════════
   DESIGN VARIANT (A/B)
   'current'  → the existing site
   'redesign' → the new institutional design

   Resolution order on load:
   1. ?design=redesign | ?design=current   (shareable link, also persisted)
   2. localStorage
   3. DEFAULT_DESIGN  (the redesign is live for everyone)

   The on-screen Current/Redesign switch is hidden from the public.
   It appears for the rest of the browser session once someone opens a
   link containing ?design=…  — e.g. yoursite.com/?design=current
   ═══════════════════════════════════════════════ */

export const DESIGNS = { CURRENT: 'current', REDESIGN: 'redesign' };
export const DEFAULT_DESIGN = DESIGNS.REDESIGN;
const STORAGE_KEY = 'innomission:design';

const isValid = (v) => v === DESIGNS.CURRENT || v === DESIGNS.REDESIGN;

function readInitialDesign() {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('design');
    if (isValid(fromUrl)) return fromUrl;
  } catch (e) { /* ignore */ }
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isValid(stored)) return stored;
  } catch (e) { /* storage unavailable */ }
  return DEFAULT_DESIGN;
}

const AB_KEY = 'innomission:ab';

function readSwitchVisible() {
  try {
    if (new URLSearchParams(window.location.search).has('design')) {
      window.sessionStorage.setItem(AB_KEY, '1');
      return true;
    }
    return window.sessionStorage.getItem(AB_KEY) === '1';
  } catch (e) { return false; }
}

const DesignContext = createContext({
  design: DEFAULT_DESIGN,
  setDesign: () => {},
  isRedesign: true,
  showSwitch: false,
});

export function DesignProvider({ children }) {
  const [design, setDesignState] = useState(readInitialDesign);
  const [showSwitch] = useState(readSwitchVisible);

  const setDesign = useCallback((next) => {
    if (!isValid(next)) return;
    setDesignState(next);
    try { window.localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* ignore */ }
  }, []);

  // Reflect the active design on <html> so CSS can scope itself,
  // and keep ?design= in the address bar in sync so the URL is shareable.
  useEffect(() => {
    document.documentElement.setAttribute('data-design', design);
    document.documentElement.setAttribute('data-ab', showSwitch ? 'on' : 'off');
    try {
      const url = new URL(window.location.href);
      if (url.searchParams.has('design')) {
        // a shared ?design= link is remembered for the rest of the visit
        try { window.localStorage.setItem(STORAGE_KEY, design); } catch (e) { /* ignore */ }
        url.searchParams.set('design', design);
        window.history.replaceState(window.history.state, '', url);
      }
    } catch (e) { /* ignore */ }
  }, [design, showSwitch]);

  const value = useMemo(
    () => ({ design, setDesign, isRedesign: design === DESIGNS.REDESIGN, showSwitch }),
    [design, setDesign, showSwitch]
  );

  return <DesignContext.Provider value={value}>{children}</DesignContext.Provider>;
}

export const useDesign = () => useContext(DesignContext);
