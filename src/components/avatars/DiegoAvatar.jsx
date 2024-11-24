export const DiegoAvatar = () => (
    <svg viewBox="0 0 200 300" className="w-48">
      {/* Traje */}
      <path d="M60 120 L140 120 L150 300 L50 300 Z" fill="#f0f0f0"/>
      <path d="M85 120 L115 120 L120 220 L80 220 Z" fill="#93C5FD"/>
      <path d="M95 120 L105 120 L107 200 L93 200 Z" fill="#1D4ED8"/>
      
      {/* Cuello */}
      <path d="M85 115 C85 130 115 130 115 115" fill="#FFE4B5"/>
      
      {/* Cara */}
      <circle cx="100" cy="90" r="40" fill="#FFE4B5"/>
      
      {/* Cabello moderno */}
      <path d="M60 90 C60 60 80 45 100 45 C120 45 140 60 140 90 C140 80 130 75 125 73 C115 70 85 70 75 73 C70 75 60 80 60 90" fill="#4B3619"/>
      
      {/* Lentes */}
      <rect x="80" y="80" width="20" height="15" rx="5" fill="#4B5563" fillOpacity="0.1" stroke="#4B5563"/>
      <rect x="100" y="80" width="20" height="15" rx="5" fill="#4B5563" fillOpacity="0.1" stroke="#4B5563"/>
      <line x1="100" y1="87" x2="100" y2="87" stroke="#4B5563" strokeWidth="2"/>
      
      {/* Sonrisa */}
      <path d="M90 100 C95 110 105 110 110 100" fill="none" stroke="#000000" strokeWidth="2"/>
    </svg>
  );