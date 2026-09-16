const ReactIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      role="img"
      aria-labelledby="react-title"
      width="48"
      height="48"
      className={className}>
      <title id="react-title">React</title>
      <g stroke="#00D8F3" stroke-width="1.8">
        <ellipse cx="24" cy="24" rx="19" ry="7.2" />
        <ellipse
          cx="24"
          cy="24"
          rx="19"
          ry="7.2"
          transform="rotate(60 24 24)"
        />
        <ellipse
          cx="24"
          cy="24"
          rx="19"
          ry="7.2"
          transform="rotate(120 24 24)"
        />
      </g>
      <circle cx="24" cy="24" r="3.5" fill="#00D8F3" />
    </svg>
  );
};

export default ReactIcon;
