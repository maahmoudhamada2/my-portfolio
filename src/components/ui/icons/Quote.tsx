const Quote = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className={className}>
      <title>Opening quotation marks</title>
      <defs>
        <linearGradient
          id="quote-purple"
          x1="24"
          y1="8"
          x2="24"
          y2="39"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#9C50FF" />
          <stop offset="1" stopColor="#5934F7" />
        </linearGradient>
      </defs>
      <path
        d="M18.5 8C9.5 9.4 5 15.2 5 24.4V32.4C5 36.4 6.6 38 10.6 38H15.3C18.4 38 20 36.4 20 33.2V27.1C20 24.1 18.5 22.5 15.3 22.5H12.4C12.4 17.5 14.7 14.1 20 12.8L18.5 8ZM41.5 8C32.5 9.4 28 15.2 28 24.4V32.4C28 36.4 29.6 38 33.6 38H38.3C41.4 38 43 36.4 43 33.2V27.1C43 24.1 41.5 22.5 38.3 22.5H35.4C35.4 17.5 37.7 14.1 43 12.8L41.5 8Z"
        fill="url(#quote-purple)"
      />
    </svg>
  );
};

export default Quote;
