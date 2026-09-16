const Code = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className={className}>
      <title>Clean and scalable code</title>
      <g
        stroke="#9238FF"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M13.5 14L4 24L13.5 34" />
        <path d="M34.5 14L44 24L34.5 34" />
        <path d="M29 8L19 40" />
      </g>
    </svg>
  );
};

export default Code;
