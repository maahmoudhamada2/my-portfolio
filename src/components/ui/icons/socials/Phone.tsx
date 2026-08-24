const Phone = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}>
      <path d="M6.5 3.5 9 3a1.5 1.5 0 0 1 1.7.9l1.2 3a1.5 1.5 0 0 1-.4 1.7l-1.6 1.3a14 14 0 0 0 4.2 4.2l1.3-1.6a1.5 1.5 0 0 1 1.7-.4l3 1.2A1.5 1.5 0 0 1 21 15v2.5a3 3 0 0 1-3 3C10 20.5 3.5 14 3.5 6a3 3 0 0 1 3-2.5Z" />
    </svg>
  );
};

export default Phone;
