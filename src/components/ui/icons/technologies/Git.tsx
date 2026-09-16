const Git = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      role="img"
      aria-labelledby="git-title"
      width="48"
      height="48"
      className={className}>
      <title id="git-title">Git</title>
      <rect
        x="9.2"
        y="9.2"
        width="29.6"
        height="29.6"
        rx="2.5"
        transform="rotate(45 24 24)"
        fill="#FF4B2B"
      />
      <g
        fill="none"
        stroke="#142030"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="m15.5 7.7 16.4 16.4M22 14.2v17.6" />
      </g>
      <g fill="#142030">
        <circle cx="22" cy="15" r="3.3" />
        <circle cx="22" cy="32" r="3.3" />
        <circle cx="32" cy="24" r="3.3" />
      </g>
    </svg>
  );
};

export default Git;
