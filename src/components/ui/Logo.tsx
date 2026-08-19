const Logo = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="400"
      height="118"
      viewBox="30 -10 360 118"
      fill="none"
      className={className}>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--logo-gradient-start)" />
        <stop offset="32%" stopColor="var(--logo-gradient-neutral)" />
        <stop offset="52%" stopColor="var(--logo-gradient-mid)" />
        <stop offset="72%" stopColor="var(--logo-gradient-bright)" />
        <stop offset="100%" stopColor="var(--logo-gradient-end)" />
      </linearGradient>

      <rect width="360" height="118" rx="12" fill="transparent" />
      <g transform="translate(17 19) scale(.82)">
        <path
          d="M8 10L8 64L19 56V28L37 43L55 28V64L66 72V10L37 34L8 10Z"
          fill="url(#gradient)"
        />
        <path
          d="M71 18L82 10V34H104V18L115 10V72L104 64V45H82V64L71 72V18Z"
          fill="url(#gradient)"
        />
      </g>
      <text
        x="128"
        y="51"
        fontFamily="Inter, Arial, sans-serif"
        fontSize="20"
        letterSpacing="4"
        fill="currentColor">
        MAHMOUD HAMADA
      </text>
      <text
        x="128"
        y="79"
        fontFamily="Inter, Arial, sans-serif"
        fontSize="12"
        letterSpacing="3.4"
        fill="#7C3AED">
        FRONTEND DEVELOPER
      </text>
    </svg>
  );
};

export default Logo;
