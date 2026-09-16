const CSS = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      role="img"
      aria-labelledby="css3-title"
      width="48"
      height="48"
      className={className}>
      <title id="css3-title">CSS3</title>
      <path d="m7 5 3.1 34L24 43l13.9-4L41 5z" fill="#0561E8" />
      <path d="M24 8v31.7l11.2-3.2L37.8 8z" fill="#0099FF" />
      <path
        d="M13.1 12h21.8l-.5 4.8-10.5 4.5h10.1l-1.2 13.1-8.8 2.5-8.7-2.5-.6-6.7h4.8l.3 3 4.2 1.2 4.3-1.2.4-4.5H14.2l-.4-4.9 11-4.5H13.5z"
        fill="#FFFFFF"
      />
      <path
        d="M13.1 12H24v4.8H13.5zM24 21.3v4.8h-9.8l-.4-4.9 10.2-4.1v4.1l-.1.1zM14.7 27.7h4.8l.3 3 4.2 1.2v5l-8.7-2.5z"
        fill="#E4EDFF"
      />
    </svg>
  );
};

export default CSS;
