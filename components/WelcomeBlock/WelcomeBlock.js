import { useWindowSize } from "@/hooks/useWindowSize";
import styles from "./wb.module.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useEffect, useRef } from "react";

const WelcomeBlock = () => {
  const sectionOneRef = useRef(null);
  const introRef = useRef(null);
  const welcomeRef = useRef(null);
  const writerRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionOneRef.current,
        start: "top top-=100px",
        end: "+=100px",
        scrub: true,
        markers: false,
      },
    });
    tl.fromTo(
      introRef.current,
      {
        opacity: 1,
      },
      { opacity: 0 }
    );
    const welcomeTL = gsap.timeline({
      scrollTrigger: {
        trigger: sectionOneRef.current,
        start: "top top+=200",
      },
    });
    welcomeTL.fromTo(
      welcomeRef.current,
      {
        opacity: 0,
      },
      { delay: 0.5, opacity: 1, duration: 1 }
    );
    welcomeTL.to(writerRef.current, {
      width: 0,
    });
    welcomeTL.fromTo(
      paragraphRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
      }
    );
  }, []);

  return (
    <>
      <section>
        <div className={styles.sectionOne} ref={sectionOneRef}>
          <div className={styles.introWrapper} ref={introRef}>
            <div className={styles.logoWrapper}>
              <img src="/logo/green.svg" alt="logo" />
            </div>
            <div className={styles.intro}>
              <div className={styles.introText}>
                <div className={styles.textWrapper}>
                  <div className={styles.welcomeContainer} ref={welcomeRef}>
                    <h1>WELCOME</h1>
                    <span className={styles.textWriter} ref={writerRef}></span>
                  </div>
                  <p ref={paragraphRef}>
                    LAZYR (LAZY REVENGERS) is the world&apos;s first
                    blockchain-based on Green To Earn project.
                  </p>
                </div>
              </div>
              <div className={styles.lazyrWrapper}>
                <div className={styles.circle_gradient}>
                  <img src="/lazyr1.png" alt="lazyr" className={styles.lazyr} />
                </div>
                <div className={styles.cloudsWrapper}>
                  <img
                    src="/clouds/cloud_big.svg"
                    alt="cloud"
                    className={styles.cloud_lg}
                  />
                  <img
                    src="/clouds/cloud_md.svg"
                    alt="cloud"
                    className={styles.cloud_md}
                  />
                  <img
                    src="/clouds/cloud_transparent.svg"
                    alt="cloud"
                    className={styles.cloud_sm}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionThree}>
          <h1>NFT</h1>
        </div>
        <div className={styles.sectionTwo}></div>
      </section>
    </>
  );
};

export default WelcomeBlock;
