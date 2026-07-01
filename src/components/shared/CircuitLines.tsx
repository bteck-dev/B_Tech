export function CircuitLines({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g
        stroke="url(#bteck-line)"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="animate-draw"
        style={{ animationDelay: '0.2s' }}
      >
        <path d="M10 200 L120 200 L140 180 L260 180 L280 200 L400 200" />
        <path d="M50 300 L180 300 L200 280 L360 280" />
        <path d="M300 60 L420 60 L440 80 L560 80" />
      </g>
      <g fill="#d4af37" className="animate-pulse-glow">
        <circle cx="10" cy="200" r="3" />
        <circle cx="400" cy="200" r="3" />
        <circle cx="360" cy="280" r="3" />
        <circle cx="560" cy="80" r="3" />
      </g>
      <g fill="#7ed957">
        <circle cx="140" cy="180" r="3" />
        <circle cx="200" cy="280" r="3" />
        <circle cx="440" cy="80" r="3" />
      </g>
      <defs>
        <linearGradient
          id="bteck-line"
          x1="0"
          y1="0"
          x2="600"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4caf50" />
          <stop offset="1" stopColor="#d4af37" />
        </linearGradient>
      </defs>
    </svg>
  )
}

/* ---------- sections ---------- */
