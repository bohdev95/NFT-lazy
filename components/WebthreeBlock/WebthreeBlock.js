import { useRef, useEffect } from "react";
import styles from "@/styles/Webthree.module.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { text } from "@/consts/text";

gsap.registerPlugin(ScrollTrigger);

const WebthreeBlock = () => {
  const containerRef = useRef(null);

  const titleH1Ref = useRef(null);
  const titleH2Ref = useRef(null);

  const selectionH3Ref = useRef(null);
  const selectionPRef = useRef(null);

  const rewardsH3Ref = useRef(null);
  const rewardsPRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top+=350",
        end: "+=200",
        scrub: true,
      },
    });
    tl.fromTo(
      titleH1Ref.current,
      {
        opacity: 0.1,
      },
      {
        opacity: 1,
      }
    );
    tl.fromTo(
      titleH2Ref.current,
      {
        opacity: 0.1,
        backgroundPosition: "50% 90%",
      },
      {
        opacity: 1,
        backgroundPosition: "5% 30%",
      }
    );
    tl.fromTo(
      rewardsH3Ref.current,
      {
        backgroundPosition: "50% 90%",
      },
      {
        backgroundPosition: "5% 30%",
      }
    );
    tl.fromTo(
      selectionPRef.current,
      {
        x: -2000,
      },
      {
        x: 0,
      }
    );
    tl.fromTo(
      rewardsPRef.current,
      {
        x: 5000,
      },
      {
        x: 0,
      }
    );
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1 ref={titleH1Ref}>{text.en.webthree.heading.h1}</h1>
          <h2 ref={titleH2Ref}>{text.en.webthree.heading.h2}</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.selection}>
            <h3>{text.en.webthree.selection.title}</h3>
            <p ref={selectionPRef}>{text.en.webthree.selection.info}</p>
          </div>
          <div className={styles.rewards}>
            <h3 ref={rewardsH3Ref}>{text.en.webthree.rewards.title}</h3>
            <p ref={rewardsPRef}>{text.en.webthree.rewards.info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebthreeBlock;
