import { useEffect, useState } from "react";

export function useScrollPosition( threshold ) {
  const [scrolled, setScrolled] = useState(null);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > threshold) {
        setScrolled(true);
      } else setScrolled(false);
    };
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return scrolled;
}
