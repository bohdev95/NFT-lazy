import React from "react";
import styles from "@/styles/App.module.scss";
import { text } from "@/consts/text";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect } from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const AppBlock = () => {
  const images = [
    "/apppreview/Lzr-App-11.png",
    "/apppreview/Lzr-App-22.png",
    "/apppreview/Lzr-App-33.png",
    "/apppreview/Lzr-App-44.png",
    "/apppreview/Lzr-App-55.png",
  ];
  const containerRef = useRef(null);
  const infoH3Ref = useRef(null);
  const infoPRef = useRef(null);
  const rewardH3Ref = useRef(null);
  const rewardPRef = useRef(null);
  const settings = {
    autoPlay: true,
    infiniteLoop: true,
    showArrows: false,
    stopOnHover: false,
    showThumbs: false,
    labels: false,
    showStatus: false,
    showIndicators: false,
  };
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        // markers: true,
        // start: "top top",
      },
    });
    tl.add("sametime");
    tl.from(infoH3Ref.current, {
      opacity: 0,
      duration: 4,
    });
    tl.to(
      infoH3Ref.current,
      {
        delay: 2,
        opacity: 1,
        duration: 2,
      },
      "sametime"
    );
    tl.from(
      infoPRef.current,
      {
        x: -5000,
        opacity: 0,
        duration: 2,
      },
      "sametime"
    );
    tl.to(infoPRef.current, {
      x: 0,
      delay: 2,
      opacity: 1,
      duration: 2,
    });
    tl.from(
      rewardH3Ref.current,
      {
        opacity: 0,
        duration: 4,
      },
      "sametime"
    );
    tl.to(rewardH3Ref.current, {
      delay: 2,
      opacity: 1,
      duration: 2,
    });
    tl.from(
      rewardPRef.current,
      {
        y: 5000,
        opacity: 0,
        duration: 2,
      },
      "sametime"
    );
    tl.to(rewardPRef.current, {
      y: 0,
      delay: 2,
      opacity: 1,
      duration: 2,
    });
  });
  return (
    <div className={styles.appContainer} ref={containerRef}>
      <div className={styles.appWrapper}>
        <div className={styles.titleWrapper}>
          <h2>{text.en.app.heading.h2}</h2>
          <h1>{text.en.app.heading.h1}</h1>
        </div>
        <div className={styles.infoWrapper}>
          <div className={styles.activityWrapper}>
            <h3 ref={infoH3Ref}>{text.en.app.activity.title}</h3>
            <p ref={infoPRef}>{text.en.app.activity.info}</p>
          </div>
          <div className={styles.carousel}>
            <div className={styles.phoneWrapper}>
              <div className={styles.phoneDisplay}>
                <Carousel {...settings}>
                  {images.map((path, id) => (
                    <div key={id}>
                      <img src={path} />
                    </div>
                  ))}
                </Carousel>
              </div>
              <div className={styles.phone}></div>
            </div>
          </div>
          <div className={styles.rewardsWrapper}>
            <h3 ref={rewardH3Ref}>{text.en.app.rewards.title}</h3>
            <p ref={rewardPRef}>{text.en.app.rewards.info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBlock;
