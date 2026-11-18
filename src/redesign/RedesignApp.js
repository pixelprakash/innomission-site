import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Programs from './pages/Programs';
import About from './pages/About';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import './redesign.css';

const FONT_HREF =
  'https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;500;600&family=Platypi:wght@300;400;500&display=swap';

export default function RedesignApp() {
  // Load the redesign fonts only when this variant is active.
  useEffect(() => {
    if (document.getElementById('rd-fonts')) return;
    const link = document.createElement('link');
    link.id = 'rd-fonts';
    link.rel = 'stylesheet';
    link.href = FONT_HREF;
    document.head.appendChild(link);
  }, []);

  return (
    <div className="rd">
      <a href="#main-content" className="rd-skip">Skip to main content</a>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/about" element={<About />} />
        <Route path="/insights" element={<Insights />} />
        {/* old URL keeps working in the redesign */}
        <Route path="/blogs" element={<Navigate to="/insights" replace />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}
