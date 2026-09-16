const User = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className={className}>
      <title>User</title>

      <circle cx="24" cy="15" r="7" stroke="var(--brand)" strokeWidth="4.6" />
      <path
        d="M8 41C8 32.7 13.7 27 21 27H27C34.3 27 40 32.7 40 41V42H8V41Z"
        fill="var(--brand)"
      />
    </svg>
  );
};

export default User;
