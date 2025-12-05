import React from 'react';

const LogoIcon = () => {
  return (
    <div className="logo-icon-container">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo-icon-svg"
      >
        {/* Outer dark border */}
        <circle
          cx="16"
          cy="16"
          r="15.5"
          fill="#1a1a1a"
          stroke="#0a0a0a"
          strokeWidth="1"
        />
        {/* White inner border */}
        <circle
          cx="16"
          cy="16"
          r="14"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
        />
        {/* Glossy gradient background */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2a2a2a" />
            <stop offset="50%" stopColor="#4a4a4a" />
            <stop offset="100%" stopColor="#1a1a1a" />
          </linearGradient>
          <linearGradient id="glossGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.2" />
          </linearGradient>
          <radialGradient id="highlightGradient" cx="30%" cy="30%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          {/* Star gradients for black/white */}
          <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#d0d0d0" />
            <stop offset="100%" stopColor="#808080" />
          </linearGradient>
          <linearGradient id="starShadow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        
        {/* Background circle with gradient */}
        <circle
          cx="16"
          cy="16"
          r="13.5"
          fill="url(#bgGradient)"
        />
        
        {/* Gloss overlay for 3D effect */}
        <circle
          cx="16"
          cy="16"
          r="13.5"
          fill="url(#glossGradient)"
        />
        
        {/* Highlight for glossy effect */}
        <circle
          cx="16"
          cy="16"
          r="13.5"
          fill="url(#highlightGradient)"
        />
        
        {/* Large star - center right */}
        <g transform="translate(18, 14)">
          <path
            d="M0 -4L1.5 -1.5L4 0L1.5 1.5L0 4L-1.5 1.5L-4 0L-1.5 -1.5Z"
            fill="url(#starShadow)"
            transform="translate(1, 1)"
            opacity="0.5"
          />
          <path
            d="M0 -4L1.5 -1.5L4 0L1.5 1.5L0 4L-1.5 1.5L-4 0L-1.5 -1.5Z"
            fill="url(#starGradient)"
            filter="url(#starGlow)"
          />
        </g>
        
        {/* Small star - top left */}
        <g transform="translate(10, 10)">
          <path
            d="M0 -2.5L0.9 -0.9L2.5 0L0.9 0.9L0 2.5L-0.9 0.9L-2.5 0L-0.9 -0.9Z"
            fill="url(#starShadow)"
            transform="translate(0.5, 0.5)"
            opacity="0.5"
          />
          <path
            d="M0 -2.5L0.9 -0.9L2.5 0L0.9 0.9L0 2.5L-0.9 0.9L-2.5 0L-0.9 -0.9Z"
            fill="url(#starGradient)"
            filter="url(#starGlow)"
          />
        </g>
        
        {/* Small star - bottom left */}
        <g transform="translate(10, 20)">
          <path
            d="M0 -2.5L0.9 -0.9L2.5 0L0.9 0.9L0 2.5L-0.9 0.9L-2.5 0L-0.9 -0.9Z"
            fill="url(#starShadow)"
            transform="translate(0.5, 0.5)"
            opacity="0.5"
          />
          <path
            d="M0 -2.5L0.9 -0.9L2.5 0L0.9 0.9L0 2.5L-0.9 0.9L-2.5 0L-0.9 -0.9Z"
            fill="url(#starGradient)"
            filter="url(#starGlow)"
          />
        </g>
        
        {/* Glow filter for stars */}
        <defs>
          <filter id="starGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default LogoIcon;
