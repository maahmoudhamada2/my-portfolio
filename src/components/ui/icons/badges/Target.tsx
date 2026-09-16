const Target = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className={className}>
      <title>My approach</title>
      <g
        stroke="#7840FF"
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M40.4 20.5A17 17 0 1 1 33.8 10.1" />
        <path d="M32.9 24.2A9 9 0 1 1 25.5 15.1" />
        <path d="M23.8 23.8L36.6 11M29.2 11H36.6V18.4" />
      </g>
    </svg>
  );
};

export default Target;
