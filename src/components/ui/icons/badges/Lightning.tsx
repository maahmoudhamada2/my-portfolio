const Lightning = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      role="img"
      aria-labelledby="lightning-title"
      className={className}>
      <title id="lightning-title">Performance — lightning bolt</title>
      <path
        d="m27.5 4-17 22h12L18.5 44l19-23.5H25.3Z"
        stroke="#FFDF22"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Lightning;
