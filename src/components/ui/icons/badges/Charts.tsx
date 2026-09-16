const Charts = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      role="img"
      aria-labelledby="charts"
      className={className}>
      <title id="technologies-title"> bar chart</title>
      <g
        stroke="#6250FF"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M7 40V26h6v14ZM21 40V7h6v33ZM35 40V16h6v24Z" />
      </g>
    </svg>
  );
};

export default Charts;
