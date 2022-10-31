import React, { useRef } from "react";
import styles from "@/styles/Roadmap.module.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { text } from "consts/text";

const Roadmap = () => {
  const roadmapContainerRef = useRef(null);
  function reset_animation() {
    const el1 = document.getElementsByClassName(`${styles.roadmar_gradient}`);
    const el2 = document.getElementsByClassName(`${styles.roadmar_title}`);
    const el3 = document.getElementsByClassName(
      `${styles.roadmar_first_bubble}`
    );
    const el4 = document.getElementsByClassName(
      `${styles.roadmar_second_bubble}`
    );
    const el5 = document.getElementsByClassName(
      `${styles.roadmar_third_bubble}`
    );
    const el6 = document.getElementsByClassName(
      `${styles.roadmar_fourth_bubble}`
    );
    const el7 = document.getElementsByClassName(
      `${styles.roadmar_fifth_bubble}`
    );
    const el8 = document.getElementsByClassName(
      `${styles.roadmap_replay_btn_wrapper}`
    );
    const el9 = document.getElementsByClassName(`${styles.roadmar_gradient2}`);

    const el10 = document.getElementsByClassName(
      `${styles.roadmar_bubble1_num}`
    );
    const el11 = document.getElementsByClassName(
      `${styles.roadmar_bubble1_title}`
    );
    const el12 = document.getElementsByClassName(
      `${styles.roadmar_bubble1_list}`
    );

    const el13 = document.getElementsByClassName(
      `${styles.roadmar_bubble2_num}`
    );
    const el14 = document.getElementsByClassName(
      `${styles.roadmar_bubble2_title}`
    );
    const el15 = document.getElementsByClassName(
      `${styles.roadmar_bubble2_list}`
    );

    const el16 = document.getElementsByClassName(
      `${styles.roadmar_bubble3_num}`
    );
    const el17 = document.getElementsByClassName(
      `${styles.roadmar_bubble3_title}`
    );
    const el18 = document.getElementsByClassName(
      `${styles.roadmar_bubble3_list}`
    );

    const el19 = document.getElementsByClassName(
      `${styles.roadmar_bubble4_num}`
    );
    const el20 = document.getElementsByClassName(
      `${styles.roadmar_bubble4_title}`
    );
    const el21 = document.getElementsByClassName(
      `${styles.roadmar_bubble4_list}`
    );

    const el22 = document.getElementsByClassName(
      `${styles.roadmar_bubble5_num}`
    );
    const el23 = document.getElementsByClassName(
      `${styles.roadmar_bubble5_title}`
    );
    const el24 = document.getElementsByClassName(
      `${styles.roadmar_bubble5_list}`
    );
    let arr = [
      el1,
      el2,
      el3,
      el4,
      el5,
      el6,
      el7,
      el8,
      el9,
      el10,
      el11,
      el12,
      el13,
      el14,
      el15,
      el16,
      el17,
      el18,
      el19,
      el20,
      el21,
      el22,
      el23,
      el24,
    ];
    for (let i = 0; i < arr.length; i++) {
      arr[i][0].style.animation = "none";
      arr[i][0].offsetHeight;
      arr[i][0].style.animation = null;
    }
  }

  return (
    <div className={styles.roadmar_container} ref={roadmapContainerRef}>
      <div className={styles.roadmar_gradient}></div>
      <h1 className={styles.roadmar_title}>{text.en.roadmap.title}</h1>
      <div className={styles.roadmar_first_bubble}>
        <div className={styles.roadmar_bubble_wrapper}>
          <div className={styles.roadmar_bubble1_num}>
            {text.en.roadmap.circles.one.num}
          </div>
          <div className={styles.roadmar_bubble1_title}>
            {text.en.roadmap.circles.one.title}
          </div>
          <div className={styles.roadmar_bubble1_list}>
            {text.en.roadmap.circles.one.list.map((item, _idx) => (
              <p key={_idx}>{item}</p>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.roadmar_second_bubble}>
        <div className={styles.roadmar_bubble_wrapper}>
          <div className={styles.roadmar_bubble2_num}>
            {text.en.roadmap.circles.two.num}
          </div>
          <div className={styles.roadmar_bubble2_title}>
            {text.en.roadmap.circles.two.title}
          </div>
          <div className={styles.roadmar_bubble2_list}>
            {text.en.roadmap.circles.two.list.map((item, _idx) => (
              <p key={_idx}>{item}</p>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.roadmar_third_bubble}>
        <div className={styles.roadmar_bubble_wrapper}>
          <div className={styles.roadmar_bubble3_num}>
            {text.en.roadmap.circles.three.num}
          </div>
          <div className={styles.roadmar_bubble3_title}>
            {text.en.roadmap.circles.three.title}
          </div>
          <div className={styles.roadmar_bubble3_list}>
            {text.en.roadmap.circles.three.list.map((item, _idx) => (
              <p key={_idx}>{item}</p>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.roadmar_fourth_bubble}>
        <div className={styles.roadmar_bubble_wrapper}>
          <div className={styles.roadmar_bubble4_num}>
            {text.en.roadmap.circles.four.num}
          </div>
          <div className={styles.roadmar_bubble4_title}>
            {text.en.roadmap.circles.four.title}
          </div>
          <div className={styles.roadmar_bubble4_list}>
            {text.en.roadmap.circles.four.list.map((item, _idx) => (
              <p key={_idx}>{item}</p>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.roadmar_fifth_bubble}>
        <div className={styles.roadmar_bubble_wrapper}>
          <div className={styles.roadmar_bubble5_num}>
            {text.en.roadmap.circles.five.num}
          </div>
          <div className={styles.roadmar_bubble5_title}>
            {text.en.roadmap.circles.five.title}
          </div>
          <div className={styles.roadmar_bubble5_list}>
            {text.en.roadmap.circles.five.list.map((item, _idx) => (
              <p key={_idx}>{item}</p>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.roadmap_replay_btn_wrapper}>
        <button onClick={reset_animation}>Replay</button>
      </div>
      <div className={styles.roadmar_gradient2}></div>
    </div>
  );
};

export default Roadmap;
