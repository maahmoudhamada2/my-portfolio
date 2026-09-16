const TailwindCSS = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      role="img"
      aria-labelledby="tailwind-title"
      width="48"
      height="48"
      className={className}>
      <title id="tailwind-title">Tailwind CSS</title>
      <path
        d="M24 11c-5.3 0-8.6 2.6-10 7.9 2-2.6 4.4-3.6 7-3 1.5.4 2.6 1.5 3.9 2.8 2.1 2.2 4.6 4.6 10.1 4.6 5.3 0 8.6-2.6 10-7.9-2 2.6-4.4 3.6-7 3-1.5-.4-2.6-1.5-3.9-2.8C32 13.4 29.5 11 24 11zM13 24.7c-5.3 0-8.6 2.6-10 7.9 2-2.6 4.4-3.6 7-3 1.5.4 2.6 1.5 3.9 2.8C16 34.6 18.5 37 24 37c5.3 0 8.6-2.6 10-7.9-2 2.6-4.4 3.6-7 3-1.5-.4-2.6-1.5-3.9-2.8-2.1-2.2-4.6-4.6-10.1-4.6z"
        fill="#00C8F6"
      />
    </svg>
  );
};

export default TailwindCSS;
