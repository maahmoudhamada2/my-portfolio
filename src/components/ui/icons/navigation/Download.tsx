const Download = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      role="img"
      aria-label="Download"
      className={className}>
      <title>Download</title>
      <g
        stroke="#8841FF"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M24 6v24m-9-9 9 9 9-9" />
        <path d="M9 31v9h30v-9" />
      </g>
    </svg>
  );
};

export default Download;
