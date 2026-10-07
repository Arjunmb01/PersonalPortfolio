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
      {/* ── ARJUN CREST EMBLEM ── */}
      <div
        className="relative flex items-center justify-center rounded-xl overflow-hidden transition-transform duration-500 group-hover:scale-105 flex-shrink-0"
        style={{ width: size, height: size }}
      >
        {/* Glowing aura */}
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/25 via-accent/10 to-sky-500/10 opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Metallic rim */}
        <div className="absolute inset-0 rounded-xl border border-accent/40 group-hover:border-accent/80 transition-colors duration-500 shadow-md shadow-accent/10" />

        {/* Vector 'A' Crest Glyph */}
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 w-[78%] h-[78%] drop-shadow-[0_2px_8px_rgba(200,169,110,0.4)]"
        >
          <defs>
            {/* Metallic Gold Gradient */}
            <linearGradient id="arjunGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#faebd2" />
              <stop offset="35%" stopColor="#e2c592" />
              <stop offset="70%" stopColor="#c8a96e" />
              <stop offset="100%" stopColor="#917238" />
            </linearGradient>

            {/* Deep Shade */}
            <linearGradient id="arjunDarkGold" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#c8a96e" />
              <stop offset="100%" stopColor="#684e20" />
            </linearGradient>

            {/* Core Spark */}
            <radialGradient id="arjunSpark" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="40%" stopColor="#e2c592" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#c8a96e" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background Diamond Frame */}
          <path
            d="M22 4 L38 22 L22 40 L6 22 Z"
            fill="none"
            stroke="url(#arjunGold)"
            strokeWidth="0.8"
            strokeOpacity="0.3"
            strokeDasharray="2 2"
          />

          {/* 'A' Left Pillar */}
          <path
            d="M22 6 L9 36 L14.5 36 L22 17 L22 6 Z"
            fill="url(#arjunDarkGold)"
          />

          {/* 'A' Right Pillar */}
          <path
            d="M22 6 L35 36 L29.5 36 L22 17 L22 6 Z"
            fill="url(#arjunGold)"
          />

          {/* 'A' Geometric Crossbar Beam */}
          <path
            d="M15 27 L29 27 L27.5 30 L16.5 30 Z"
            fill="url(#arjunGold)"
          />

          {/* Apex Star Spark */}
          <circle cx="22" cy="11" r="1.5" fill="#ffffff" />
          <circle cx="22" cy="11" r="4.5" fill="url(#arjunSpark)" />
        </svg>
      </div>

      {/* ── ARJUN TYPOGRAPHY ── */}
      {showText && (
        <div className={`flex flex-col ${textClassName}`}>
          <div className="flex items-center gap-1.5">
            <span className="font-serif tracking-wider text-xl sm:text-2xl text-paper font-medium group-hover:text-accent transition-colors duration-300 leading-none">
              ARJUN
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          </div>
          <span className="text-[9.5px] font-mono text-mist tracking-[0.28em] uppercase group-hover:text-mist-light transition-colors duration-300 mt-0.5">
            Full-Stack Developer
          </span>
        </div>
      )}
    </div>
  )
}
