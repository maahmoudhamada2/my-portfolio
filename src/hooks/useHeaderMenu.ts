import { useState, useRef, useEffect } from "react";

const useHeaderMenu = () => {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const headerRef = useRef(null);

  const toggleMenu = () => {
    setAnimate(true);
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const observer = new ResizeObserver(() => setAnimate(false));

    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  return { open, toggleMenu, animate, headerRef };
};

export default useHeaderMenu;
