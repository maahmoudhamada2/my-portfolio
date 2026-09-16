const NextJs = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      role="img"
      aria-labelledby="nextjs-title"
      width="48"
      height="48"
      className={className}>
      <title id="nextjs-title">Next.js</title>
      <circle cx="24" cy="24" r="20" fill="#000000" />
      <path
        d="M15.3 34V14h2.7l16.3 23.2a19.9 19.9 0 0 1-2.3 1.2L18 18.5V34z"
        fill="#FFFFFF"
      />
      <path d="M30 14h2.7v17.5L30 27.7z" fill="#FFFFFF" />
    </svg>
  );
};

export default NextJs;
