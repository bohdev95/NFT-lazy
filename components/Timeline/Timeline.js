import styles from "@/styles/Timeline.module.scss";
import { useEffect, useState } from "react";

const Timeline = ({ progress, reference }) => {
  const refArray = [
    { finished: false, progress: 0 },
    { finished: false, progress: 0 },
    { finished: false, progress: 0 },
    { finished: false, progress: 0 },
  ];

  const [timeline, setTimeline] = useState(refArray);
  console.log("progress::: ", progress);
  const lastFrame = 750;

  const story1 = timeline[0];
  const story2 = timeline[1];
  const story3 = timeline[2];
  const story4 = timeline[3];

  // In our case, could we make it as 4 dots? No need to name anything. The welcome will be the starting point and then each story will be a point. ie., as soon as the first story is over we will reach the second dot and so on. After we reach the underground ( last story) the dot will end.

  useEffect(() => {
    const step = 2.5;
    const section = 250;
    if (progress < 8) {
      if (timeline[0].progress) {
        // const arr = timeline;
        // arr[0].finished = false;
        // arr[0].progress = 0;
        setTimeline([...refArray]);
      }
    } else if (progress > 8 && progress < 165) {
      const result = progress / 1.6;

      const arr = timeline;
      const fixd = Math.ceil(result);
      if (result < 5) {
        arr[0].progress = 0;
        arr[0].finished = false;
      } else {
        if (!arr[0].finished) arr[0].finished = true;
        arr[0].progress = fixd;
      }
      if (arr[0].progress > 100) {
        arr[1].finished = true;
      } else if (arr[0].progress < 100 && arr[1].finished) {
        arr[1].finished = false;
      }
      setTimeline([...arr]);
    } else if (progress > 165 && progress < 315) {
      const result = (progress - 165) / 1.4;

      const arr = timeline;
      const fixd = Math.ceil(result);

      if (result < 5) {
        arr[1].progress = 0;
      } else arr[1].progress = fixd;

      if (arr[1].progress > 100) {
        arr[2].finished = true;
      } else if (arr[1].progress < 100 && arr[2].finished) {
        arr[2].finished = false;
      }
      setTimeline([...arr]);
    }

    if (progress > 315) {
      const result = (progress - 315) / 2;

      const arr = timeline;
      const fixd = Math.ceil(result);

      if (result < 5) {
        arr[2].progress = 0;
      } else arr[2].progress = fixd;

      if (arr[2].progress > 100) {
        arr[3].finished = true;
      } else if (arr[2].progress < 100 && arr[3].finished) {
        arr[3].finished = false;
      }
      setTimeline([...arr]);
    }
  }, [progress]);

  return (
    <div className={styles.timelineContainer} ref={reference}>
      <div className={styles.timelineWrapper}>
        {timeline.map((rf, id) => {
          return (
            <div key={id} className={styles.tlCircleWrapper}>
              <div
                className={styles.circle}
                style={
                  rf.finished
                    ? {
                        width: 12,
                        height: 12,
                        backgroundColor: "#fff",
                      }
                    : {}
                }
              ></div>
              <div className={styles.progress}>
                <div
                  className={styles.filler}
                  style={{ height: `${rf.progress}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
