const TypeScript = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      role="img"
      aria-labelledby="typescript-title"
      width="48"
      height="48"
      className={className}>
      <title id="typescript-title">TypeScript</title>
      <defs>
        <linearGradient
          id="typescript-blue"
          x1="5"
          y1="5"
          x2="43"
          y2="43"
          gradientUnits="userSpaceOnUse">
          <stop stop-color="#04AAFF" />
          <stop offset="1" stop-color="#0089F5" />
        </linearGradient>
      </defs>
      <rect
        x="5"
        y="5"
        width="38"
        height="38"
        rx="1.5"
        fill="url(#typescript-blue)"
      />
      <path d="M11.5 21h14v3.7h-5V38h-4V24.7h-5z" fill="#FFFFFF" />
      <path
        d="M38 22.1v4a8.5 8.5 0 0 0-4.6-1.5c-1.5 0-2.3.5-2.3 1.4 0 .8.6 1.3 2.9 2.1 3.5 1.2 5 2.7 5 5.3 0 3.3-2.6 5.1-6.6 5.1a12.6 12.6 0 0 1-5.2-1.1v-4.2a9.5 9.5 0 0 0 5.1 1.9c1.7 0 2.6-.5 2.6-1.5 0-.9-.8-1.5-3.1-2.3-3.4-1.2-4.8-2.6-4.8-5.2 0-3.1 2.5-5 6.3-5a11.2 11.2 0 0 1 4.7 1z"
        fill="#FFFFFF"
      />
    </svg>
  );
};
export default TypeScript;
