const ChatBubble = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <path
        d="M20.5 11.5C20.5 15.366 16.694 18.5 12 18.5C10.917 18.5 9.882 18.333 8.929 18.029L4.5 20L5.607 16.448C4.291 15.184 3.5 13.463 3.5 11.5C3.5 7.634 7.306 4.5 12 4.5C16.694 4.5 20.5 7.634 20.5 11.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle cx="8.5" cy="11.5" r="1" fill="currentColor" />
      <circle cx="12" cy="11.5" r="1" fill="currentColor" />
      <circle cx="15.5" cy="11.5" r="1" fill="currentColor" />
    </svg>
  );
};

export default ChatBubble;
