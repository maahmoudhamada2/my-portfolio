const LogoSmall = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="123"
      height="82"
      viewBox="0 -5 123 82"
      fill="none"
      className={className}>
      {/* <defs>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs> */}
      <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--logo-gradient-start)" />
        <stop offset="32%" stopColor="var(--logo-gradient-neutral)" />
        <stop offset="52%" stopColor="var(--logo-gradient-mid)" />
        <stop offset="72%" stopColor="var(--logo-gradient-bright)" />
        <stop offset="100%" stopColor="var(--logo-gradient-end)" />
      </linearGradient>
      <g>
        <path
          d="M8 10L8 64L19 56V28L37 43L55 28V64L66 72V10L37 34L8 10Z"
          fill="url(#logo-gradient)"
        />
        <path
          d="M71 18L82 10V34H104V18L115 10V72L104 64V45H82V64L71 72V18Z"
          fill="url(#logo-gradient)"
        />
      </g>
    </svg>
  );
};
export default LogoSmall;
