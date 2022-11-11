import { useEffect, useState } from "react";

export const useProgress = () => {
  const [progress, setProgress] = useState(0);
  const scrollProgress = () => {
    const scrollpx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollLen = Math.ceil((scrollpx / winHeightPx) * 1000);

    setProgress(scrollLen);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollProgress);
    return () => window.removeEventListener("scroll", scrollProgress);
  }, []);

  return { progress };
};
