const Cube = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      role="img"
      aria-labelledby="cube-title"
      className={className}>
      <title id="cube-title">Reusable code — cube</title>
      <g
        stroke="#00BEF4"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M24 4.5 41 14v20L24 43.5 7 34V14Z" />
        <path d="m7 14 17 10 17-10M24 24v19.5" />
      </g>
    </svg>
  );
};

export default Cube;
