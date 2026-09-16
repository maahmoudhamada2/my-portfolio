const ArrowRight = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      role="img"
      aria-labelledby="arrow-right-title"
      className={className}>
      <title id="arrow-right-title">Right arrow — white</title>
      <path
        d="M7 24h33M29 13l11 11-11 11"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowRight;
