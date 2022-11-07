import styles from "@/styles/Timeline.module.scss";

const Timeline = (props) => {
  let {
    size = 65,
    progress = 10,
    trackWidth = 4,
    indicatorWidth = 4,
    trackColor = `transparent`,
    indicatorColor = `white`,
    indicatorCap = `round`,
  } = props;

  const center = size / 2,
    radius =
      center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth),
    dashArray = 2 * Math.PI * radius,
    dashOffset = dashArray * ((100 - progress) / 100);

  const refArray = [
    { finished: true },
    { finished: false },
    { finished: false },
  ];
  return (
    <div className={styles.timelineContainer}>
      <div className={styles.timelineWrapper}>
        {refArray.map((rf, id) => {
          return (
            <div key={id} className={styles.tlCircleWrapper}>
              <button
                className={styles.tlCircle}
                style={
                  rf.finished
                    ? { background: "#45F345" }
                    : { background: "rgba(255,255,255,0.5)" }
                }
              ></button>
            </div>
          );
        })}
      </div>

      <div className={styles.timelineIndicator}>
        <img
          src="/icons/arrow_down_pink.svg"
          alt="arrow"
          className={styles.arrow}
        />
        <div className={styles.rotation}>
          <div className="svg-pi-wrapper" style={{ width: size, height: size }}>
            <svg className="svg-pi" style={{ width: size, height: size }}>
              <circle
                className="svg-pi-track"
                cx={center}
                cy={center}
                fill="transparent"
                r={radius}
                // r={30}
                stroke={trackColor}
                strokeWidth={trackWidth}
              />
              <circle
                // className={`svg-pi-indicator ${
                //   spinnerMode ? "svg-pi-indicator--spinner" : ""
                // }`}
                style={{ animationDuration: 1 * 1000 }}
                cx={center}
                cy={center}
                fill="transparent"
                r={radius}
                stroke={indicatorColor}
                strokeWidth={indicatorWidth}
                strokeDasharray={dashArray}
                strokeDashoffset={dashOffset}
                strokeLinecap={indicatorCap}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
