const HTML = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      role="img"
      aria-labelledby="html5-title"
      width="48"
      height="48"
      className={className}>
      <title id="html5-title">HTML5</title>
      <path d="m7 5 3.1 34L24 43l13.9-4L41 5z" fill="#E7441E" />
      <path d="M24 8v31.7l11.2-3.2L37.8 8z" fill="#FF6330" />
      <path
        d="M13.2 12h21.6l-.5 4.8H18.5l.4 4.5h15l-1.2 13L24 36.9l-8.7-2.6-.6-6.7h4.8l.3 3 4.2 1.2 4.2-1.2.4-4.5H14.5z"
        fill="#FFFFFF"
      />
      <path
        d="M13.2 12H24v4.8h-5.5l.4 4.5H24v4.8h-9.5zM14.7 27.6h4.8l.3 3 4.2 1.2v5.1l-8.7-2.6z"
        fill="#EBEFF6"
      />
    </svg>
  );
};

export default HTML;
