import React, { useEffect, useRef } from 'react';
import './BrightwordsHero.css';

const BrightwordsHero = ({ children }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    // The hero styling is applied via CSS classes
    // The form will be wrapped in the hero structure
  }, []);

  return (
    <section className="bw-hero" ref={heroRef}>
      <div className="bw-pill">
        <span className="bw-pill-dot"></span>
        Brightwords.in • Early Access
      </div>
      <h1>
        Join Waitlist for <span className="bw-highlight">Brightwords.in</span>
      </h1>
      <p className="bw-tagline">
        AI Assistive Learning Platform for Disabled Students
      </p>
      <p className="bw-sub">
        PERSONALIZED SUPPORT • MULTI-MODAL LEARNING • INCLUSIVE BY DESIGN
      </p>
      {children}
    </section>
  );
};

export default BrightwordsHero;

