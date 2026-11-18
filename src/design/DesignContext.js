import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

/* ═══════════════════════════════════════════════
   DESIGN VARIANT (A/B)
   'current'  → the existing site
   'redesign' → the new institutional design

   Resolution order on load:
   1. ?design=redesign | ?design=current   (shareable link, also persisted)
   2. localStorage
   3. DEFAULT_DESIGN
   ═══════════════════════════════════════════════ */

export const DESIGNS = { CURRENT: 'current', REDESIGN: 'redesign' };
export const DEFAULT_DESIGN = DESIGNS.CURRENT;
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

const DesignContext = createContext({
  design: DEFAULT_DESIGN,
  setDesign: () => {},
  isRedesign: false,
});

export function DesignProvider({ children }) {
  const [design, setDesignState] = useState(readInitialDesign);

  const setDesign = useCallback((next) => {
    if (!isValid(next)) return;
    setDesignState(next);
    try { window.localStorage.setItem(STORAGE_KEY, next); } catch (e) { /* ignore */ }
  }, []);

  // Reflect the active design on <html> so CSS can scope itself,
  // and keep ?design= in the address bar in sync so the URL is shareable.
  useEffect(() => {
    document.documentElement.setAttribute('data-design', design);
    try {
      const url = new URL(window.location.href);
      if (url.searchParams.has('design')) {
        // a shared ?design= link is remembered for the rest of the visit
        try { window.localStorage.setItem(STORAGE_KEY, design); } catch (e) { /* ignore */ }
        url.searchParams.set('design', design);
        window.history.replaceState(window.history.state, '', url);
      }
    } catch (e) { /* ignore */ }
  }, [design]);

  const value = useMemo(
    () => ({ design, setDesign, isRedesign: design === DESIGNS.REDESIGN }),
    [design, setDesign]
  );

  return <DesignContext.Provider value={value}>{children}</DesignContext.Provider>;
}

export const useDesign = () => useContext(DesignContext);
