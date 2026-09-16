const Monitor = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      role="img"
      aria-labelledby="monitor-title"
      className={className}>
      <title id="monitor-title">Clean UI — monitor</title>
      <g
        stroke="#8A32FF"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round">
        <rect x="5.5" y="7.5" width="37" height="25.5" rx="1.6" />
        <path d="M24 33v8M16 41h16" />
      </g>
    </svg>
  );
};

export default Monitor;
