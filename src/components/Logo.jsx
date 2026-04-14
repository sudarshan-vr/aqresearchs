export default function Logo({ className = '' }) {
  return (
    <svg
      className={`aq-logo ${className}`}
      viewBox="0 0 188 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AQ Research"
    >
      {/* Badge background */}
      <rect width="42" height="42" rx="8" fill="var(--accent)" />

      {/* "A" shape */}
      <path
        d="M11 31L17.4 13H20.6L27 31H23.8L22.4 27H15.6L14.2 31H11ZM16.5 24.5H21.5L19 17L16.5 24.5Z"
        fill="white"
      />

      {/* "Q" shape - circle with tail */}
      <circle cx="30" cy="24" r="5.5" stroke="white" strokeWidth="2" fill="none" />
      <line x1="33.5" y1="28" x2="36.5" y2="31.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" />

      {/* Company name */}
      <text
        x="55"
        y="19"
        fill="var(--text)"
        fontSize="15"
        fontWeight="600"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        letterSpacing="0.3"
      >
        AQ Research
      </text>

      {/* Tagline */}
      <text
        x="56"
        y="33"
        fill="var(--accent)"
        fontSize="7.5"
        fontWeight="500"
        fontFamily="'DM Sans', Arial, sans-serif"
        letterSpacing="2.8"
      >
        Private Limited
      </text>
    </svg>
  );
}
