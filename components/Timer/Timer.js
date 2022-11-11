import styles from "@/styles/Timer.module.scss";

const Timer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src="/circle.svg" alt="circle" className={styles.circle} />
        <img src="/smallHead.svg" alt="head" className={styles.head} />
        {/* <p>Stay alert. 12 days : 16hours : 24minutes : left</p> */}
        <div className={styles.rotor}>
          <svg viewBox="0 0 500 500">
            <defs>
              <path
                d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
                id="textcircle"
              ></path>
            </defs>
            <text
              dy="0"
              textLength="1200"
              fontSize="3em"
              fill="#fff"
              fontWeight={600}
            >
              <textPath href="#textcircle">
                Stay alert. 12 days : 16hours : 24minutes : left
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Timer;
