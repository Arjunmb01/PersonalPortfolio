interface LogoProps {
  size?: number
  className?: string
  showText?: boolean
  textClassName?: string
}

export default function Logo({
  size = 36,
  className = '',
  showText = true,
  textClassName = '',
}: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* ── LUXURY MONOGRAM EMBLEM ── */}
      <div
        className="relative flex items-center justify-center rounded-xl overflow-hidden transition-transform duration-500 group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        {/* Subtle glowing backlight */}
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-accent/5 to-sky-500/10 opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Border frame with metallic rim */}
        <div className="absolute inset-0 rounded-xl border border-accent/30 group-hover:border-accent/60 transition-colors duration-500 shadow-lg shadow-accent/5" />

        {/* Vector Glyph */}
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 w-[78%] h-[78%] drop-shadow-[0_2px_8px_rgba(200,169,110,0.35)]"
        >
          <defs>
            {/* Metallic Champagne Gold Gradient */}
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f5e5c9" />
              <stop offset="35%" stopColor="#dfc08a" />
              <stop offset="70%" stopColor="#c8a96e" />
              <stop offset="100%" stopColor="#9a7a3e" />
            </linearGradient>

            {/* Accent Shadow Gradient */}
            <linearGradient id="goldDark" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#c8a96e" />
              <stop offset="100%" stopColor="#684e20" />
            </linearGradient>

            {/* Core Spark Radial */}
            <radialGradient id="sparkGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#dfc08a" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#c8a96e" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background subtle faceted diamond mesh */}
          <path
            d="M22 4 L38 22 L22 40 L6 22 Z"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="0.8"
            strokeOpacity="0.25"
            strokeDasharray="2 2"
          />

          {/* Outer 'A' Apex & 'M' Facets */}
          <path
            d="M22 7 L32 24 L29 24 L22 12 L15 24 L12 24 Z"
            fill="url(#goldGradient)"
          />

          {/* 'M' Wing Bridges */}
          <path
            d="M12 22 L17 33 L20 33 L15 22 Z"
            fill="url(#goldDark)"
          />
          <path
            d="M32 22 L27 33 L24 33 L29 22 Z"
            fill="url(#goldGradient)"
          />

          {/* Interlocking 'B' Horizontal Struts & Loops (Right Flank) */}
          <path
            d="M22 23 C26.5 23 29.5 24.8 29.5 27.5 C29.5 29.5 27.8 31 25.5 31.5 C28.5 32 30.5 33.8 30.5 36.5 C30.5 39.8 26.5 41 21 41 L14 41 L14 38.5 L21 38.5 C25 38.5 27.8 37.8 27.8 36.3 C27.8 34.8 25 34 21.5 34 L18 34 L18 31.5 L21.5 31.5 C25 31.5 26.8 30.8 26.8 29.5 C26.8 28.2 24.5 25.5 21 25.5 L17 25.5 L17 23 Z"
            fill="url(#goldGradient)"
          />

          {/* Core Central Vertex Spark */}
          <circle cx="22" cy="18" r="1.5" fill="#ffffff" />
          <circle cx="22" cy="18" r="4" fill="url(#sparkGlow)" />
        </svg>
      </div>

      {/* ── BRAND TYPOGRAPHY ── */}
      {showText && (
        <div className={`flex flex-col ${textClassName}`}>
          <div className="flex items-center gap-1.5">
            <span className="font-serif-italic text-2xl text-paper tracking-tight group-hover:text-accent transition-colors duration-300 leading-none">
              AMB
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent/60 group-hover:bg-accent group-hover:scale-125 transition-all duration-300" />
          </div>
          <span className="text-[10px] font-mono text-mist tracking-[0.25em] uppercase group-hover:text-mist-light transition-colors duration-300 mt-0.5">
            Arjun M B
          </span>
        </div>
      )}
    </div>
  )
}
