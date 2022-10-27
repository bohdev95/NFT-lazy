import styles from "@/styles/welcomeBlock.module.scss";

const WelcomeBlock = () => {
  return (
    <div className={`full dfr ${styles.welcome}`}>
      <div className={`w-half dfc jcc ${styles.welcome_text}`}>
        <h1>Welcome</h1>
        <p>
          LAZYR (LAZY REVENGERS) is the world&apos;s first blockchain-based on
          Green To Earn project.
        </p>
      </div>
      <div className={`w-half dfc jcc ${styles.welcome_images}`}>
        <img src="/lazyr1.png" alt="lazyr" className={styles.lazyr} />
        <div>
          <img src="/clouds/cloud_big.svg" alt="cloud" />
          <img src="" alt="cloud" />
          <img src="" alt="cloud" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeBlock;
