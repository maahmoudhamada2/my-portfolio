const Book = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className={className}>
      <title>Continuous learning</title>
      <path
        d="M24 12C18.5 7.9 12 7.7 5 10.2V39C12 36.5 18.5 36.7 24 40.8M24 12C29.5 7.9 36 7.7 43 10.2V39C36 36.5 29.5 36.7 24 40.8M24 12V40.8"
        stroke="#00ED8B"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Book;
