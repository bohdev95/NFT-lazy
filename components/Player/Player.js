import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/SequencePlayer.module.scss";
import { useWindowSize } from "@/hooks/useWindowSize";
import { gsap } from "gsap";
import { CustomEase } from "gsap/dist/CustomEase";
import Timeline from "../Timeline/Timeline";

gsap.registerPlugin(CustomEase);

const Player = () => {
  const [images, setImages] = useState([]);
  const [frame, setFrame] = useState(1);

  const canvasRef = useRef(null);
  const undegroundRef = useRef(null);
  const sequenceWrapperRef = useRef(null);

  const story1Ref = useRef(null);
  const story2Ref = useRef(null);
  const story3Ref = useRef(null);
  const story4Ref = useRef(null);

  const timelineRef = useRef(null);

  const { width, height } = useWindowSize();

  const scrollProgress = () => {
    const scrollpx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollLen = Math.ceil((scrollpx / winHeightPx) * 1850);

    setFrame(scrollLen);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollProgress);
    return () => window.removeEventListener("scroll", scrollProgress);
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      if (frame <= 725) {
        if (frame <= 25) {
          const can1 = canvasRef.current;
          const ctx1 = can1.getContext("2d");
          can1.width = width;
          can1.height = height;
          ctx1.drawImage(
            images[0],
            (can1.width - images[0].width) / 2,
            0,
            images[0].width,
            can1.height
          );
        } else if (frame > 25) {
          const can1 = canvasRef.current;
          const ctx1 = can1.getContext("2d");
          can1.width = width;
          can1.height = height;
          const reducedFramesCounterBy = 25;
          ctx1.drawImage(
            images[frame - reducedFramesCounterBy],
            (can1.width - images[frame - reducedFramesCounterBy].width) / 2,
            0,
            images[frame - reducedFramesCounterBy].width,
            can1.height
          );
        }
      }
    }
  }, [width, height, images, frame]);

  useEffect(() => {
    const preloadImages = (framesCount, from) => {
      const imagess = [];
      for (let i = 0; i <= framesCount; i++) {
        let image = new Image();
        if (i < 1000) {
          image.src = `/story/0${from + i}.webp`;
          imagess.push(image);
        } else if (i > 1000) {
          image.src = `/story/${from + i}.webp`;
          imagess.push(image);
        }
      }
      setImages((prev) => [...prev, ...imagess]);
    };
    if (images.length === 0) {
      preloadImages(20, 251);
      preloadImages(107, 275);
      preloadImages(315, 384);
      preloadImages(255, 731);
    }
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sequenceWrapperRef.current,
        markers: false,
        start: "top+=600%",
        end: "top+=700%",
        scrub: true,
      },
    });
    tl.add("sametime");
    tl.fromTo(
      canvasRef.current,
      {
        y: 0,
      },
      {
        y: "-200%",
      },
      "sametime"
    );
    tl.fromTo(
      undegroundRef.current,
      {
        y: 0,
      },
      {
        y: "-200%",
      },
      "sametime"
    );
    const story1Tl = gsap.timeline({
      scrollTrigger: {
        trigger: sequenceWrapperRef.current,
        markers: false,
        start: "top+=20%",
        end: "top+=100%",
        scrub: true,
      },
    });
    story1Tl.fromTo(
      story1Ref.current,
      {
        opacity: 0,
        x: "200%",
        y: () => {
          const fs = gsap.getProperty(story1Ref.current, "fontSize");
          if (fs === 22) return 150;
          else if (fs === 28) return 200;
        },
      },
      {
        opacity: 1,
        x: () => {
          const fs = gsap.getProperty(story1Ref.current, "fontSize");
          console.log("fontSize::: ", fs);
          if (fs === 22) return "60%";
          else {
            return 0;
          }
        },
      }
    );
    story1Tl.to(
      story1Ref.current,

      { opacity: 0, delay: 1, x: "200%" }
    );
    const story2Tl = gsap.timeline({
      scrollTrigger: {
        trigger: sequenceWrapperRef.current,
        markers: false,
        start: "top+=120%",
        end: "top+=250%",
        scrub: true,
      },
    });
    story2Tl.fromTo(
      story2Ref.current,
      {
        opacity: 0,
        y: "-500%",
        x: () => {
          const fs = gsap.getProperty(story1Ref.current, "fontSize");
          if (fs === 22) return "40%";
          else {
            return "-20%";
          }
        },
      },
      { opacity: 1, y: "-200%" }
    );
    story2Tl.to(
      story2Ref.current,

      { opacity: 0, delay: 1, y: "-500%" }
    );
    //3
    const story3Tl = gsap.timeline({
      scrollTrigger: {
        trigger: sequenceWrapperRef.current,
        markers: false,
        start: "top+=240%",
        end: "top+=400%",
        scrub: true,
      },
    });
    story3Tl.fromTo(
      story3Ref.current,
      {
        opacity: 0,
        y: "-500%",
        x: () => {
          const fs = gsap.getProperty(story1Ref.current, "fontSize");
          if (fs === 22) return "40%";
          else {
            return null;
          }
        },
      },
      {
        opacity: 1,
        // y: 0,
        y: () => {
          const fs = gsap.getProperty(story1Ref.current, "fontSize");
          if (fs === 22) return "-140%";
          else return 0;
        },
      }
    );
    story3Tl.to(
      story3Ref.current,

      { opacity: 0, delay: 1 }
    );
    const story4Tl = gsap.timeline({
      scrollTrigger: {
        trigger: sequenceWrapperRef.current,
        markers: false,
        start: "top+=430%",
        end: "top+=610%",

        scrub: true,
      },
    });
    story4Tl.fromTo(
      story4Ref.current,
      {
        opacity: 0,
        x: "100%",
        y: () => {
          const fs = gsap.getProperty(story1Ref.current, "fontSize");
          if (fs === 22) return "-170%";
        },
      },
      {
        opacity: 1,
        // x: 0,
        x: () => {
          const fs = gsap.getProperty(story1Ref.current, "fontSize");
          if (fs === 22) return "20%";
          else return 0;
        },
      }
    );
    story4Tl.to(
      story4Ref.current,

      { opacity: 0, delay: 1 }
    );

    const progressTl = gsap.timeline({
      scrollTrigger: {
        trigger: sequenceWrapperRef.current,
        markers: false,
        start: "top+=610%",
        end: "top+=615%",

        scrub: true,
      },
    });
    progressTl.fromTo(timelineRef.current, { opacity: 1 }, { opacity: 0 });
  }, []);

  return (
    <>
      <Timeline progress={frame} reference={timelineRef} />

      <div className={styles.SequencePlayer} ref={sequenceWrapperRef}>
        <canvas ref={canvasRef}></canvas>
      </div>
      <div className={styles.underground} ref={undegroundRef}>
        <img src="/LAND-SECTION.webp" alt="underground" />
      </div>
      <div className={styles.lazyrIntroContainer}>
        <div className={styles.lazyrIntroText}>
          <h1 ref={story1Ref}>
            LAZY REVENGERS was <br /> sleeping in the Amazon <br /> forest.
          </h1>

          <h1 ref={story2Ref}>
            One day, the forest was <br /> destroyed by loggers, <br /> leaving
            no place for <br />
            LAZY REVENGERS to live.
          </h1>
          <h1 ref={story3Ref}>
            LAZY REVENGERS was <br /> too slow to take refuge <br /> while
            forests were <br /> being destroyed and <br /> cities were being
            created.
          </h1>
          <h1 ref={story4Ref}>
            LAZY REVENGERS is angry. <br /> Slow and lazy, but set out
            <br /> to take revenge on <br /> the ecological destroying <br />{" "}
            humans.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Player;
