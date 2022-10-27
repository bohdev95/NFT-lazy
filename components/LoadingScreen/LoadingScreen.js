import styles from "@/styles/loadingScreen.module.scss";
import { useEffect, useState } from "react";
const LoadingScreen = () => {
  const [loadingPercent, setLoadingPercent] = useState(0);

  useEffect(() => {
    const nextNum = loadingPercent + 1;

    if (nextNum <= 100) {
      setTimeout(() => {
        setLoadingPercent(nextNum);
      }, 50);
    }
  }, [loadingPercent]);

  // if (!loading) return null;
  // if (loadingPercent === 100) return null;
  return (
    <div className={styles.loading_screen_wrapper}>
      <div className={styles.loading_screen_content}>
        <div className={styles.loading_gradient}></div>
        <img src="/Logo_green.svg" alt="logo" />
        <div className={styles.percent}>{loadingPercent}%</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
