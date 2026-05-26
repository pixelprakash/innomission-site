import React, { memo } from 'react';
import { useInView } from '../hooks';

/**
 * AnimatedSection — Scroll-triggered fade-in-up animation wrapper
 * Uses IntersectionObserver, respects prefers-reduced-motion via CSS
 */
const AnimatedSection = memo(({ children, delay = 0, className = '', style = {}, as: Tag = 'div' }) => {
  const [ref, isInView] = useInView();

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </Tag>
  );
});

AnimatedSection.displayName = 'AnimatedSection';

export default AnimatedSection;
