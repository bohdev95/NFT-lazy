import { useProgress } from "@/hooks/useProgress";
import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./tl.module.scss";
const TimelineArrow = ({ onClicHandler }) => {
  const { progress } = useProgress();
  const [viewTimeline, setViewTimeline] = useState(0);

  useEffect(() => {
    const finish = +(progress / 10).toFixed();
    setViewTimeline(finish);
  }, [progress]);

  let size = 65,
    // LINEprogress = 100,
    trackWidth = 4,
    indicatorWidth = 4,
    trackColor = `transparent`,
    indicatorColor = `white`,
    indicatorCap = `round`;

  const center = size / 2,
    radius =
      center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth),
    dashArray = 2 * Math.PI * radius,
    dashOffset = dashArray * ((100 - viewTimeline) / 100);

  return (
    <div className={styles.timelineContainer}>
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

export default TimelineArrow;
