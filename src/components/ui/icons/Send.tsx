const Send = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      role="img"
      aria-label="Send"
      className={className}>
      <title>Send</title>
      <defs>
        <linearGradient
          id="send-purple"
          x1="7"
          y1="18"
          x2="39"
          y2="35"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#A76BFF" />
          <stop offset="1" stopColor="#7134F4" />
        </linearGradient>
      </defs>
      <path
        d="M42.8 5.1 6.45 20.22c-1.68.7-1.62 2.56.11 3.09l10.89 3.36 4.4 13.87c.45 1.4 1.65 1.61 2.48.22l5.61-9.41 7.08 5.1c1.17.84 2.17.49 2.48-.97l5.91-28.31c.33-1.58-1.06-2.7-2.61-2.06Z"
        fill="url(#send-purple)"
      />
      <path
        d="m17.45 26.67 21.91-16.01-17.07 20.22-.44 9.66-4.4-13.87Z"
        fill="#5522D0"
      />
    </svg>
  );
};

export default Send;
