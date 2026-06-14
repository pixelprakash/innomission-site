import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Nav, Footer, SkipLink } from './components';
import { COLORS } from './utils/constants';

/* ── Lazy-loaded pages (code splitting) ── */
const HomePage = lazy(() => import('./pages/Home'));
const ServicesPage = lazy(() => import('./pages/Services'));
const ProgramsPage = lazy(() => import('./pages/Programs'));
const AboutPage = lazy(() => import('./pages/About'));
const BlogsPage = lazy(() => import('./pages/Blogs'));
const ContactPage = lazy(() => import('./pages/Contact'));

/* ── ScrollToTop — reset scroll position on route change ── */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/* ── Loading fallback ── */
function PageLoader() {
  return (
    <div
      role="status"
      aria-label="Loading page"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: COLORS.cream,
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            width: 40,
            height: 40,
            border: `3px solid ${COLORS.lightGray}`,
            borderTopColor: COLORS.electric,
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
            margin: '0 auto 16px',
          }}
        />
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: COLORS.slate }}>
          Loading...
        </p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    </div>
  );
}

/* ── App Layout ── */
export default function App() {
  return (
    <BrowserRouter>
      <SkipLink />
      <ScrollToTop />
      <Nav />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}