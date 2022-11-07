import React, { useEffect } from "react";
import styles from "@/styles/Roadmap.module.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { text } from "consts/text";

const Roadmap = () => {
  let tempTL = null;

  const initCircle = {
    width: 600,
    height: 600,
  };

  const bgOrange = "#CDF856";
  useEffect(() => {
    console.log(window);
    const gradient1_TL = `.${styles.gradient1}`;
    const title_TL = `.${styles.title}`;

    const circle1_TL = `.${styles.circle1}`;
    const circle2_TL = `.${styles.circle2}`;
    const circle3_TL = `.${styles.circle3}`;
    const circle4_TL = `.${styles.circle4}`;
    const circle5_TL = `.${styles.circle5}`;

    const c_num1_TL = `.${styles.c_num1}`;
    const c_num2_TL = `.${styles.c_num2}`;
    const c_num3_TL = `.${styles.c_num3}`;
    const c_num4_TL = `.${styles.c_num4}`;
    const c_num5_TL = `.${styles.c_num5}`;

    const c_title1_TL = `.${styles.c_title1}`;
    const c_title2_TL = `.${styles.c_title2}`;
    const c_title3_TL = `.${styles.c_title3}`;
    const c_title4_TL = `.${styles.c_title4}`;
    const c_title5_TL = `.${styles.c_title5}`;

    const replay_TL = `.${styles.replay}`;
    const initCircleWidth = gsap.getProperty(circle1_TL, "width");
    const isDisplayCircleInner = (delay) => {
      return initCircleWidth < 100
        ? {
            delay: delay,
            opacity: 0,
          }
        : {};
    };
    const returnCircleTitle = (delay) => {
      return {
        delay: delay,
        paddingLeft: "2rem",
        paddingTop: "0",
        paddingBottom: "6rem",
        fontSize: 30,
      };
    };
    const delays = { c1: 5, c2: 10.5, c3: 15, c4: 19, c5: 25 };
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.animation_container}`,
        toggleActions: "play pause play none",
        start: "top 50%",
        end: "bottom 10%",
        // markers: true,
      },
    });
    tl.add("title_and_gradien");
    tl.add("small_c_num1");
    tl.to(
      title_TL,
      {
        y: () => {
          const w = gsap.getProperty(circle1_TL, "width");
          console.log("circle width::: ", w);
          if (w === 100) return -400;
          else if (w === 90) return -400;
          else if (w === 80) return -250;
          else if (w === 70) return -200;
          else return -400;
        },
        scale: 0.3,
        delay: 1,
        duration: 1,
        ease: "bounce",
      },
      "title_and_gradien"
    );

    tl.to(
      title_TL,
      { y: 0, scale: 1, delay: 26, duration: 1, ease: "bounce" },
      ""
    )
      .to(
        gradient1_TL,
        {
          delay: 1,
          duration: 0.3,
          width: () => {
            const w = gsap.getProperty(circle1_TL, "width");
            return w;
          },
          height: () => {
            const h = gsap.getProperty(circle1_TL, "height");
            return h;
          },
          borderRadius: "50%",
        },
        "title_and_gradien"
      )
      .to(
        gradient1_TL,
        {
          opacity: 1,
          delay: 25.5,
          duration: 0.3,
          width: "100%",
          height: "100%",
          borderRadius: "0",
        },
        "title_and_gradien"
      )
      .to(
        gradient1_TL,
        {
          opacity: 0,
          delay: 6,
          duration: 0.3,
        },
        ""
      )
      .to(
        circle1_TL,
        { opacity: 1, delay: 1.2, duration: 1 },
        "title_and_gradien"
      )
      .to(
        circle1_TL,
        { ...initCircle, delay: 1.5, duration: 0.4, ease: "bounce" },
        ""
      )
      .to(
        circle1_TL,
        {
          x: -420,
          width: 200,
          height: 200,
          duration: 0.4,
          delay: delays.c1,
          ease: "bounce",
          background: bgOrange,
        },
        ""
      );
    tl.to(
      c_num1_TL,
      {
        delay: delays.c1,
        paddingLeft: "2rem",
        paddingTop: "2rem",
        fontSize: 50,
      },
      ""
    );
    tl.to(c_title1_TL, isDisplayCircleInner(delays.c1), "");
    tl.to(c_title1_TL, returnCircleTitle(delays.c1), "");
    tl.to(circle1_TL, { delay: 10, x: -650, duration: 1 }, "");
    tl.to(circle1_TL, { delay: 10, opacity: 0.7 }, "");
    tl.to(circle1_TL, { delay: 14, opacity: 0 }, "");

    tl.to(
      circle2_TL,
      {
        opacity: 1,
        duration: 0.4,
        delay: 4.5,
      },
      ""
    )
      .to(
        circle2_TL,
        {
          ...initCircle,
          delay: 5.5,
          duration: 0.4,
          ease: "bounce",
        },
        ""
      )
      .to(
        circle2_TL,
        {
          x: -420,
          width: 200,
          height: 200,
          duration: 0.4,
          delay: delays.c2,
          ease: "bounce",
          background: bgOrange,
        },
        ""
      );
    tl.to(
      c_num2_TL,
      {
        delay: delays.c2,
        paddingLeft: "2rem",
        paddingTop: "2rem",
        fontSize: 50,
      },
      ""
    );
    tl.to(c_title2_TL, isDisplayCircleInner(delays.c2), "");
    tl.to(c_num2_TL, isDisplayCircleInner(delays.c2), "");
    tl.to(c_title2_TL, returnCircleTitle(delays.c2), "");
    tl.to(circle2_TL, { delay: 14, x: -650, duration: 1, opacity: 0.7 }, "");
    tl.to(circle2_TL, { delay: 18, opacity: 0 }, "")
      .to(circle3_TL, { opacity: 1, duration: 0.4, delay: 10 }, "")
      .to(
        circle3_TL,
        { ...initCircle, delay: 11, duration: 0.4, ease: "bounce" },
        ""
      );
    tl.to(
      circle3_TL,
      {
        x: -420,
        width: 200,
        height: 200,
        duration: 0.4,
        delay: delays.c3,
        ease: "bounce",
        background: bgOrange,
      },
      ""
    );
    tl.to(
      c_num3_TL,
      {
        delay: delays.c3,
        paddingLeft: "2rem",
        paddingTop: "2rem",
        fontSize: 50,
      },
      ""
    );
    tl.to(c_title3_TL, isDisplayCircleInner(delays.c3), "");
    tl.to(c_num3_TL, isDisplayCircleInner(delays.c3), "");
    tl.to(c_title3_TL, returnCircleTitle(delays.c3), "");
    tl.to(circle3_TL, { delay: 18, x: -650, duration: 1, opacity: 0.7 }, "");
    tl.to(circle3_TL, { delay: 22, opacity: 0 }, "")
      .to(
        circle4_TL,
        {
          opacity: 1,
          duration: 0.4,
          delay: 14.5,
        },
        ""
      )
      .to(
        circle4_TL,
        {
          ...initCircle,
          delay: 15.5,
          duration: 0.4,
          ease: "bounce",
        },
        ""
      )
      .to(
        circle4_TL,
        {
          x: -420,
          width: 200,
          height: 200,
          duration: 0.4,
          delay: delays.c4,
          ease: "bounce",
          background: bgOrange,
        },
        ""
      );
    tl.to(c_title4_TL, isDisplayCircleInner(delays.c4), "");
    tl.to(c_num4_TL, isDisplayCircleInner(delays.c4), "");
    tl.to(
      c_num4_TL,
      {
        delay: delays.c4,
        paddingLeft: "2rem",
        paddingTop: "2rem",
        fontSize: 50,
      },
      ""
    );
    tl.to(c_title4_TL, returnCircleTitle(delays.c4), "");
    tl.to(circle4_TL, { delay: 22, opacity: 0 }, "")
      .to(circle5_TL, { opacity: 1, duration: 0.4, delay: 18.5 }, "")
      .to(
        circle5_TL,
        { ...initCircle, delay: 19.5, duration: 0.4, ease: "bounce" },
        ""
      )
      .to(
        circle5_TL,
        {
          width: 100,
          height: 100,
          duration: 0.4,
          delay: delays.c5,
          opacity: 0,
        },
        ""
      );
    tl.to(
      c_num5_TL,
      {
        delay: delays.c5,
        paddingLeft: "2rem",
        paddingTop: "2rem",
        fontSize: 50,
      },
      ""
    );
    tl.to(c_title5_TL, returnCircleTitle(delays.c5), "").to(
      replay_TL,
      {
        zIndex: 27,
        delay: 28,
        opacity: 1,
        display: "flex",
      },
      ""
    );

    tempTL = tl;
    return () => tl.scrollTrigger.kill();
  }, []);
  const restartAnimation = () => tempTL.restart();
  const playAnimation = () => tempTL.play();
  const pauseAnimation = () => tempTL.pause();
  return (
    <section>
      <div className={styles.roadmap_container}>
        <button className={styles.playButton} onClick={playAnimation}>
          play
        </button>
        <button className={styles.pauseButton} onClick={pauseAnimation}>
          pause
        </button>
        <button className={styles.restartButton} onClick={restartAnimation}>
          restart
        </button>
        <div className={styles.gradient1}></div>
        <div className={styles.animation_container}>
          <div className={styles.title_container}>
            <h1 className={styles.title}>{text.en.roadmap.title}</h1>
          </div>
          <div className={styles.circle1}>
            <div className={styles.cus_row}>
              <div className={styles.c_num1}>
                {text.en.roadmap.circles.one.num}
              </div>
              <div className={styles.c_title1}>
                {text.en.roadmap.circles.one.title}
              </div>
            </div>
            <div className={styles.c_list1}>
              {text.en.roadmap.circles.one.list.map((item, _idx) => (
                <p key={_idx}>{item}</p>
              ))}
            </div>
          </div>
          <div className={styles.circle2}>
            <div className={styles.cus_row}>
              <div className={styles.c_num2}>
                {text.en.roadmap.circles.two.num}
              </div>
              <div className={styles.c_title2}>
                {text.en.roadmap.circles.two.title}
              </div>
            </div>
            <div className={styles.c_list2}>
              {text.en.roadmap.circles.two.list.map((item, _idx) => (
                <p key={_idx}>{item}</p>
              ))}
            </div>
          </div>
          <div className={styles.circle3}>
            <div className={styles.cus_row}>
              <div className={styles.c_num3}>
                {text.en.roadmap.circles.three.num}
              </div>
              <div className={styles.c_title3}>
                {text.en.roadmap.circles.three.title}
              </div>
            </div>
            <div className={styles.c_list3}>
              {text.en.roadmap.circles.three.list.map((item, _idx) => (
                <p key={_idx}>{item}</p>
              ))}
            </div>
          </div>
          <div className={styles.circle4}>
            <div className={styles.cus_row}>
              <div className={styles.c_num4}>
                {text.en.roadmap.circles.four.num}
              </div>
              <div className={styles.c_title4}>
                {text.en.roadmap.circles.four.title}
              </div>
            </div>
            <div className={styles.c_list4}>
              {text.en.roadmap.circles.four.list.map((item, _idx) => (
                <p key={_idx}>{item}</p>
              ))}
            </div>
          </div>
          <div className={styles.circle5}>
            <div className={styles.cus_row}>
              <div className={styles.c_num5}>
                {text.en.roadmap.circles.five.num}
              </div>
              <div className={styles.c_title5}>
                {text.en.roadmap.circles.five.title}
              </div>
            </div>
            <div className={styles.c_list5}>
              {text.en.roadmap.circles.five.list.map((item, _idx) => (
                <p key={_idx}>{item}</p>
              ))}
            </div>
          </div>
          <button onClick={restartAnimation} className={styles.replay}>
            Replay
          </button>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

// const Roadmap = () => {
//   const roadmapContainerRef = useRef(null);
//   function reset_animation() {
//     const el1 = document.getElementsByClassName(`${styles.roadmar_gradient}`);
//     const el2 = document.getElementsByClassName(`${styles.roadmar_title}`);
//     const el3 = document.getElementsByClassName(
//       `${styles.roadmar_first_bubble}`
//     );
//     const el4 = document.getElementsByClassName(
//       `${styles.roadmar_second_bubble}`
//     );
//     const el5 = document.getElementsByClassName(
//       `${styles.roadmar_third_bubble}`
//     );
//     const el6 = document.getElementsByClassName(
//       `${styles.roadmar_fourth_bubble}`
//     );
//     const el7 = document.getElementsByClassName(
//       `${styles.roadmar_fifth_bubble}`
//     );
//     const el8 = document.getElementsByClassName(
//       `${styles.roadmap_replay_btn_wrapper}`
//     );
//     const el9 = document.getElementsByClassName(`${styles.roadmar_gradient2}`);

//     const el10 = document.getElementsByClassName(
//       `${styles.roadmar_bubble1_num}`
//     );
//     const el11 = document.getElementsByClassName(
//       `${styles.roadmar_bubble1_title}`
//     );
//     const el12 = document.getElementsByClassName(
//       `${styles.roadmar_bubble1_list}`
//     );

//     const el13 = document.getElementsByClassName(
//       `${styles.roadmar_bubble2_num}`
//     );
//     const el14 = document.getElementsByClassName(
//       `${styles.roadmar_bubble2_title}`
//     );
//     const el15 = document.getElementsByClassName(
//       `${styles.roadmar_bubble2_list}`
//     );

//     const el16 = document.getElementsByClassName(
//       `${styles.roadmar_bubble3_num}`
//     );
//     const el17 = document.getElementsByClassName(
//       `${styles.roadmar_bubble3_title}`
//     );
//     const el18 = document.getElementsByClassName(
//       `${styles.roadmar_bubble3_list}`
//     );

//     const el19 = document.getElementsByClassName(
//       `${styles.roadmar_bubble4_num}`
//     );
//     const el20 = document.getElementsByClassName(
//       `${styles.roadmar_bubble4_title}`
//     );
//     const el21 = document.getElementsByClassName(
//       `${styles.roadmar_bubble4_list}`
//     );

//     const el22 = document.getElementsByClassName(
//       `${styles.roadmar_bubble5_num}`
//     );
//     const el23 = document.getElementsByClassName(
//       `${styles.roadmar_bubble5_title}`
//     );
//     const el24 = document.getElementsByClassName(
//       `${styles.roadmar_bubble5_list}`
//     );
//     let arr = [
//       el1,
//       el2,
//       el3,
//       el4,
//       el5,
//       el6,
//       el7,
//       el8,
//       el9,
//       el10,
//       el11,
//       el12,
//       el13,
//       el14,
//       el15,
//       el16,
//       el17,
//       el18,
//       el19,
//       el20,
//       el21,
//       el22,
//       el23,
//       el24,
//     ];
//     for (let i = 0; i < arr.length; i++) {
//       arr[i][0].style.animation = "none";
//       arr[i][0].offsetHeight;
//       arr[i][0].style.animation = null;
//     }
//   }

//   return (
//     <div className={styles.roadmap_container} ref={roadmapContainerRef}>
//       {/* <div className={styles.roadmar_gradient}></div>
//       <h1 className={styles.roadmar_title}>{text.en.roadmap.title}</h1>
//       <div className={styles.roadmar_first_bubble}>
//         <div className={styles.roadmar_bubble_wrapper}>
//           <div className={styles.roadmar_bubble1_num}>
//             {text.en.roadmap.circles.one.num}
//           </div>
//           <div className={styles.roadmar_bubble1_title}>
//             {text.en.roadmap.circles.one.title}
//           </div>
//           <div className={styles.roadmar_bubble1_list}>
//             {text.en.roadmap.circles.one.list.map((item, _idx) => (
//               <p key={_idx}>{item}</p>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className={styles.roadmar_second_bubble}>
//         <div className={styles.roadmar_bubble_wrapper}>
//           <div className={styles.roadmar_bubble2_num}>
//             {text.en.roadmap.circles.two.num}
//           </div>
//           <div className={styles.roadmar_bubble2_title}>
//             {text.en.roadmap.circles.two.title}
//           </div>
//           <div className={styles.roadmar_bubble2_list}>
//             {text.en.roadmap.circles.two.list.map((item, _idx) => (
//               <p key={_idx}>{item}</p>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className={styles.roadmar_third_bubble}>
//         <div className={styles.roadmar_bubble_wrapper}>
//           <div className={styles.roadmar_bubble3_num}>
//             {text.en.roadmap.circles.three.num}
//           </div>
//           <div className={styles.roadmar_bubble3_title}>
//             {text.en.roadmap.circles.three.title}
//           </div>
//           <div className={styles.roadmar_bubble3_list}>
//             {text.en.roadmap.circles.three.list.map((item, _idx) => (
//               <p key={_idx}>{item}</p>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className={styles.roadmar_fourth_bubble}>
//         <div className={styles.roadmar_bubble_wrapper}>
//           <div className={styles.roadmar_bubble4_num}>
//             {text.en.roadmap.circles.four.num}
//           </div>
//           <div className={styles.roadmar_bubble4_title}>
//             {text.en.roadmap.circles.four.title}
//           </div>
//           <div className={styles.roadmar_bubble4_list}>
//             {text.en.roadmap.circles.four.list.map((item, _idx) => (
//               <p key={_idx}>{item}</p>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className={styles.roadmar_fifth_bubble}>
//         <div className={styles.roadmar_bubble_wrapper}>
//           <div className={styles.roadmar_bubble5_num}>
//             {text.en.roadmap.circles.five.num}
//           </div>
//           <div className={styles.roadmar_bubble5_title}>
//             {text.en.roadmap.circles.five.title}
//           </div>
//           <div className={styles.roadmar_bubble5_list}>
//             {text.en.roadmap.circles.five.list.map((item, _idx) => (
//               <p key={_idx}>{item}</p>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className={styles.roadmap_replay_btn_wrapper}>
//         <button onClick={reset_animation}>Replay</button>
//       </div>
//       <div className={styles.roadmar_gradient2}></div> */}
//     </div>
//   );
// };

// export default Roadmap;
