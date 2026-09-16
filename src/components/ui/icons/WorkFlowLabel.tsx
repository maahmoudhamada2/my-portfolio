const WorkFlowLabel = ({ className }: { className?: string }) => {
  return (
    <svg
      width="31"
      height="31"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}>
      <circle cx="5" cy="18" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="5" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="19" cy="18" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M7.3 16.2L10.5 8M13.5 8L16.7 16.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default WorkFlowLabel;
