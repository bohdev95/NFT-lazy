import { useWindowSize } from "@/hooks/useWindowSize";
import styles from "@/styles/welcomeBlock.module.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useEffect, useRef, useState } from "react";
gsap.registerPlugin(ScrollTrigger);
const WelcomeBlock = () => {
  const [images, setImages] = useState([]);
  const [frame, setFrame] = useState(1);

  const canvas1Ref = useRef(null);
  const { width, height } = useWindowSize();

  const draw = (_ctx, _img, _can) => {
    return _ctx.drawImage(
      _img,
      (_can.width - _img.width) / 2,
      0,
      _img.width,
      _can.height
    );
  };

  const scrollProgress = () => {
    const scrollpx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollLen = Math.ceil((scrollpx / winHeightPx) * 1000);

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
          const can1 = canvas1Ref.current;
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
          const can1 = canvas1Ref.current;
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
    // let frame_count = 20
    // let offset_value = 100

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

    const canvas1 = `.${styles.canvas1}`;
    const canvas1TL = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.action2}`,
        start: "top top",
        end: "+=300",
        markers: true,
        scrub: true,
      },
    });
    canvas1TL.fromTo(
      canvas1,
      {
        delay: 2,
        opacity: 0,
        duration: 0.1,
        // border: "1px solid green",
      },
      {
        opacity: 1,
        duration: 0.1,
        // border: "1px solid yellow",
        // background: "white",
      },
      ""
    );

    // console.log(images);

    //

    // const canvas1 = document.getElementsByClassName(`.${styles.canvas1}`);
    // const context1 = canvas1.getContext("2d");
    // console.log(canvas1);
    // canvas1.width = 100;
    // canvas1.height = 400;
    // const t = gsap.to(`.${styles.action2}`, {
    //   scrollTrigger: {
    //     trigger: canvas1,
    //     start: "top top",
    //     end: "+=" + frameCount * offset_value,
    //     pin: true,
    //     scrub: true,
    //   },
    // });

    // //////////////////////////////////////////////////////////////////
    // const canvas1 = `.${styles.canvas1}`;

    gsap.fromTo(
      `.${styles.text_h1}`,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.5,
        duration: 2,
      }
    );
    gsap.fromTo(
      `.${styles.text_p}`,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        delay: 0.5,
        duration: 2,
      }
    );
    gsap.fromTo(
      `.${styles.welcome_right}`,
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        duration: 1,
        delay: 1,
        y: 0,
      }
    );

    const fadeTL = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.scene}`,
        toggleActions: "play none none none",
        start: "top top",
        end: "+=300",
        scrub: true,
      },
    });
    fadeTL
      .to(`.${styles.fader}`, {
        opacity: 1,
      })
      .to(`.${styles.fader}`, {
        opacity: 0,
        delay: 0.5,
        duration: 2,
      });

    const scene1TL = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.scene}`,
        toggleActions: "play none none none",
        start: "top top",
        end: "+=100",
        scrub: true,
      },
    });
    scene1TL
      .to(`.${styles.action1}`, {
        opacity: 1,
      })
      .to(`.${styles.action1}`, {
        opacity: 0,
        delay: 0.5,
        duration: 0.1,
      });
    const scene2TL = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.scene}`,
        toggleActions: "play none none none",
        start: "top top",
        end: "+=100",
        scrub: true,
        // markers: true,
        // pin: true,
      },
    });

    scene2TL
      .to(`.${styles.action2}`, {
        opacity: 0,
      })
      .to(`.${styles.action2}`, {
        opacity: 1,
        delay: 0.5,
        duration: 0.05,
      });
    const intoWrapperTL = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.scene}`,
        toggleActions: "play none none none",
        start: "top top",
        end: "+=1000",
        scrub: true,
      },
    });
    intoWrapperTL
      .from(`.${styles.introWrapper1}`, {
        opacity: 0,
        x: 100,
      })
      .to(`.${styles.introWrapper1}`, {
        delay: 1,
        opacity: 1,
        duration: 1.5,
        x: 0,
      })
      .to(`.${styles.introWrapper1}`, {
        delay: 2,
        opacity: 0,
        duration: 1.5,
        x: 0,
      });

    () => ScrollTrigger.getAll().forEach((e) => e.kill());
  }, []);
  const ref = useRef();
  return (
    <div className={styles.welcome}>
      <div className={styles.scene}>
        <div className={styles.fader}></div>
        <div className={styles.action1}>
          <div className={styles.welcome_left}>
            <div className={styles.text}>
              <h1 className={styles.text_h1}>Welcome</h1>
              <p className={styles.text_p}>
                LAZYR (LAZY REVENGERS) is the world&apos;s first
                blockchain-based on Green To Earn project.
              </p>
            </div>
          </div>
          <div className={styles.welcome_right}>
            <div className={styles.circle_gradient}>
              <img src="/lazyr1.png" alt="lazyr" className={styles.lazyr} />
            </div>

            <img
              src="/clouds/cloud_big.svg"
              alt="cloud"
              className={styles.cloud_big}
            />
            <img
              src="/clouds/cloud_md.svg"
              alt="cloud"
              className={styles.cloud_md}
            />
            <img
              src="/clouds/cloud_transparent.svg"
              alt="cloud"
              className={styles.cloud_transparent}
            />
          </div>
        </div>
        <div className={styles.action2}>
          <canvas ref={canvas1Ref} className={styles.canvas1}></canvas>
          <div className={styles.introWrapper1}>
            <h1>LAZY REVENGERS was sleeping in the Amazon forest.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBlock;
