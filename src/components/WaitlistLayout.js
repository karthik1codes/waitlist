import React, { memo } from 'react';
import './WaitlistLayout.css';
import WaitlistForm from './WaitlistForm';

const WaitlistLayout = memo(() => {
  return (
    <div className="waitlist-layout">
      <div className="waitlist-content">
        {/* Left Section - Branding and Content */}
        <div className="waitlist-left">
          <div className="waitlist-logo">
            <div className="logo-icon"></div>
            <span className="logo-text">Brightwords</span>
          </div>
          <a href="#learn-more" className="learn-more-link">Learn more →</a>
          
          <h1 className="waitlist-headline">
            Let's see if we're a good fit.{' '}
            <span className="highlight-text">Schedule a call with our team today.</span>
          </h1>
          
          <p className="waitlist-description">
            We're excited to work with you. We'll be back in touch as soon as possible!
          </p>
          
          <div className="waitlist-footer">
            <a href="#terms" className="footer-link">Terms</a>
            <a href="#content-policy" className="footer-link">Content policy</a>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="waitlist-right">
          <WaitlistForm />
        </div>
      </div>
    </div>
  );
});

WaitlistLayout.displayName = 'WaitlistLayout';

export default WaitlistLayout;

