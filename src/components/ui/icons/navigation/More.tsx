const More = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      role="img"
      aria-labelledby="more-title"
      className={className}>
      <title id="more-title">More — ellipsis</title>
      <g fill="#51658F">
        <circle cx="10" cy="24" r="3.4" />
        <circle cx="24" cy="24" r="3.4" />
        <circle cx="38" cy="24" r="3.4" />
      </g>
    </svg>
  );
};

export default More;
