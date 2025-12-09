import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export function Logo({ variant = 'light', size = 'md', showText = true }: LogoProps) {
  const sizes = {
    sm: { icon: 32, text: 'text-lg' },
    md: { icon: 48, text: 'text-2xl' },
    lg: { icon: 64, text: 'text-3xl' },
    xl: { icon: 96, text: 'text-5xl' },
  };

  const colors = {
    light: {
      primary: '#2d8a5e',
      secondary: '#3498db',
      accent: '#27ae60',
      text: '#1a5a3a',
    },
    dark: {
      primary: '#4ade80',
      secondary: '#60a5fa',
      accent: '#34d399',
      text: '#ffffff',
    },
  };

  const { icon: iconSize, text: textSize } = sizes[size];
  const colorScheme = colors[variant];

  return (
    <div className="flex items-center gap-3">
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Water drop shape */}
        <defs>
          <linearGradient id={`dropGradient-${variant}`} x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor={colorScheme.secondary} />
            <stop offset="100%" stopColor={colorScheme.primary} />
          </linearGradient>
          <linearGradient id={`leafGradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colorScheme.accent} />
            <stop offset="100%" stopColor={colorScheme.primary} />
          </linearGradient>
        </defs>
        
        {/* Main water drop */}
        <path
          d="M50 10 C50 10 20 45 20 65 C20 82 33 95 50 95 C67 95 80 82 80 65 C80 45 50 10 50 10Z"
          fill={`url(#dropGradient-${variant})`}
        />
        
        {/* Clear/clean water inside */}
        <path
          d="M50 25 C50 25 30 50 30 65 C30 77 39 87 50 87 C61 87 70 77 70 65 C70 50 50 25 50 25Z"
          fill="white"
          fillOpacity="0.3"
        />
        
        {/* Highlight reflection */}
        <ellipse
          cx="38"
          cy="50"
          rx="6"
          ry="10"
          fill="white"
          fillOpacity="0.5"
        />
        
        {/* Small leaf accent */}
        <path
          d="M72 30 C72 30 85 25 88 35 C91 45 80 50 72 45 C72 45 78 40 76 36 C74 32 72 30 72 30Z"
          fill={`url(#leafGradient-${variant})`}
        />
        
        {/* Filter lines inside drop */}
        <g opacity="0.4">
          <line x1="35" y1="60" x2="65" y2="60" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="38" y1="68" x2="62" y2="68" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="42" y1="76" x2="58" y2="76" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
      
      {showText && (
        <div className="flex flex-col">
          <span 
            className={`font-bold ${textSize} tracking-tight`}
            style={{ color: colorScheme.text }}
          >
            ClearDrop
          </span>
          <span 
            className="text-xs font-medium opacity-70"
            style={{ color: colorScheme.text }}
          >
            קלירדרופ
          </span>
        </div>
      )}
    </div>
  );
}

export function LogoSVG({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const colors = {
    light: {
      primary: '#2d8a5e',
      secondary: '#3498db',
      accent: '#27ae60',
    },
    dark: {
      primary: '#4ade80',
      secondary: '#60a5fa',
      accent: '#34d399',
    },
  };

  const colorScheme = colors[variant];

  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`logoDropGradient-${variant}`} x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor={colorScheme.secondary} />
          <stop offset="100%" stopColor={colorScheme.primary} />
        </linearGradient>
        <linearGradient id={`logoLeafGradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colorScheme.accent} />
          <stop offset="100%" stopColor={colorScheme.primary} />
        </linearGradient>
      </defs>
      
      {/* Main water drop */}
      <path
        d="M100 20 C100 20 40 90 40 130 C40 164 66 190 100 190 C134 190 160 164 160 130 C160 90 100 20 100 20Z"
        fill={`url(#logoDropGradient-${variant})`}
      />
      
      {/* Inner clear water */}
      <path
        d="M100 50 C100 50 60 100 60 130 C60 154 78 174 100 174 C122 174 140 154 140 130 C140 100 100 50 100 50Z"
        fill="white"
        fillOpacity="0.3"
      />
      
      {/* Highlight */}
      <ellipse
        cx="76"
        cy="100"
        rx="12"
        ry="20"
        fill="white"
        fillOpacity="0.5"
      />
      
      {/* Leaf accent */}
      <path
        d="M144 60 C144 60 170 50 176 70 C182 90 160 100 144 90 C144 90 156 80 152 72 C148 64 144 60 144 60Z"
        fill={`url(#logoLeafGradient-${variant})`}
      />
      
      {/* Filter lines */}
      <g opacity="0.4">
        <line x1="70" y1="120" x2="130" y2="120" stroke="white" strokeWidth="4" strokeLinecap="round" />
        <line x1="76" y1="136" x2="124" y2="136" stroke="white" strokeWidth="4" strokeLinecap="round" />
        <line x1="84" y1="152" x2="116" y2="152" stroke="white" strokeWidth="4" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export default Logo;
