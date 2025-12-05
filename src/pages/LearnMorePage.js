import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoIcon from '../components/LogoIcon';
import './LearnMorePage.css';

const LearnMorePage = () => {
  const navigate = useNavigate();

  return (
    <div className="learn-more-page">
      <div className="learn-more-header">
        <div className="learn-more-logo" onClick={() => navigate('/')}>
          <LogoIcon />
          <span className="learn-more-logo-text">Brightwords</span>
        </div>
        <button className="learn-more-back-button" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
      </div>

      <div className="learn-more-content">
        <div className="learn-more-section">
          <h1 className="learn-more-title">BrightWords — Overview</h1>
          
          <div className="learn-more-subsection">
            <h2>What is BrightWords?</h2>
            <p>
              BrightWords is an AI-powered learning platform for children with special needs. 
              It provides personalized, accessible learning through interactive games, multisensory 
              activities, and adaptive feedback.
            </p>
          </div>

          <div className="learn-more-subsection">
            <h2>Core Features</h2>
            
            <div className="feature-item">
              <h3>1. Learning Modules (6 Interactive Games)</h3>
              <ul>
                <li><strong>Phonics Fun</strong> — Letter sounds and phonics</li>
                <li><strong>Spelling Wizard</strong> — Visual spelling with hints</li>
                <li><strong>Writing Artist</strong> — Guided tracing and letter formation</li>
                <li><strong>Story Explorer</strong> — Reading comprehension</li>
                <li><strong>Memory Master</strong> — Memory and pattern games</li>
                <li><strong>Story Creator</strong> — AI-assisted story creation</li>
              </ul>
            </div>

            <div className="feature-item">
              <h3>2. Accessibility Support Profiles</h3>
              <ul>
                <li><strong>General Learner</strong> — Standard learning mode</li>
                <li><strong>Blind / Low Vision</strong> — Enhanced speech feedback, audio cues, high-contrast, tactile-friendly keyboards</li>
                <li><strong>Deaf / Hard of Hearing</strong> — Visual cues, captions, sound effects muted</li>
                <li><strong>Neurodiverse</strong> — Games mode with predictable patterns, reduced overwhelm</li>
              </ul>
            </div>

            <div className="feature-item">
              <h3>3. Sign Language Learning (Premium)</h3>
              <ul>
                <li>3D avatar animations</li>
                <li>Text-to-sign conversion</li>
                <li>Alphabet and word learning</li>
                <li>Video creation</li>
                <li>Subscription-based access</li>
              </ul>
            </div>

            <div className="feature-item">
              <h3>4. SuperPower (AWS AugmentAbility Integration)</h3>
              <ul>
                <li>Live transcription and text-to-speech (20+ languages)</li>
                <li>Real-time conversation translation (75+ languages)</li>
                <li>Object detection via camera</li>
                <li>Text recognition from labels/signs</li>
                <li>Document text extraction with reading</li>
                <li>AWS Cognito authentication</li>
              </ul>
            </div>

            <div className="feature-item">
              <h3>5. Progress Tracking and Gamification</h3>
              <ul>
                <li>Total points</li>
                <li>Lessons completed</li>
                <li>Achievements</li>
                <li>Daily time tracking</li>
                <li>Streak counter</li>
                <li>Module-specific progress</li>
              </ul>
            </div>

            <div className="feature-item">
              <h3>6. Subscription Management</h3>
              <ul>
                <li><strong>Individual plans:</strong> Monthly (₹99/month) and Yearly (₹1,188/year)</li>
                <li><strong>Team plans:</strong> Monthly (₹1,500/month) and Yearly (₹18,000/year)</li>
                <li>Razorpay integration (UPI, cards, wallets)</li>
                <li>SQLite-based subscription tracking</li>
              </ul>
            </div>

            <div className="feature-item">
              <h3>7. Accessibility Features</h3>
              <ul>
                <li>High-contrast mode</li>
                <li>Text-to-speech</li>
                <li>Keyboard navigation</li>
                <li>Screen reader support</li>
                <li>ARIA labels</li>
                <li>Skip links</li>
                <li>Focus management</li>
                <li>Dyslexia-friendly fonts (OpenDyslexic)</li>
              </ul>
            </div>
          </div>

          <div className="learn-more-subsection">
            <h2>Target Audience</h2>
            
            <div className="feature-item">
              <h3>Primary</h3>
              <ul>
                <li>Children with special needs (ages 5–14)</li>
                <li>Parents and caregivers</li>
                <li>Special education teachers</li>
                <li>Schools and institutions</li>
              </ul>
            </div>

            <div className="feature-item">
              <h3>Secondary</h3>
              <ul>
                <li>Adults with accessibility needs</li>
                <li>Language learners</li>
                <li>Anyone needing sign language support</li>
              </ul>
            </div>
          </div>

          <div className="learn-more-subsection">
            <h2>Founding Team</h2>
            <div className="feature-item">
              <ul>
                <li>
                  <strong>Shashank</strong> — <a href="https://www.linkedin.com/in/shashankva05/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                </li>
                <li>
                  <strong>Karthik</strong> — <a href="https://www.linkedin.com/in/karthikdevs/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="learn-more-subsection highlight-box">
            <h2>Mission Statement</h2>
            <p className="mission-statement">
              "Reimagining learning for specially-abled children through AI-powered personalization."
            </p>
          </div>

          <div className="learn-more-subsection">
            <h2>Summary</h2>
            <p>
              BrightWords combines AI, accessibility, and gamification to create an inclusive learning platform. 
              It supports multiple accessibility needs, offers advanced AI features via AWS, and provides a 
              comprehensive sign language learning experience, making it a strong option for accessible education technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMorePage;

