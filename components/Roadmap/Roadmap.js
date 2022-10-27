import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/Roadmap.module.scss";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { text } from "consts/text";

const Roadmap = () => {
  const [playAnimation, setPlayAnimation] = useState(false);

  const roadmapContainerRef = useRef(null);
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
      {/* <div className={styles.roadmar_test_bubble}>
      <div className={styles.roadmar_bubble_wrapper}>
          <div className={styles.roadmar_bubble_num}>
            {text.en.roadmap.circles.one.num}
          </div>
          <div className={styles.roadmar_bubble_title}>
            {text.en.roadmap.circles.one.title}
          </div>
          <div className={styles.roadmar_bubble_list}>
            {text.en.roadmap.circles.one.list.map((item, _idx) => (
              <p key={_idx}>{item}</p>
            ))}
          </div>
        </div>
      </div> */}

      {/* <button>REPLAY</button> */}
      <div className={styles.roadmap_replay_btn_wrapper}>
        <button>Replay</button>
      </div>
      <div className={styles.roadmar_gradient2}></div>
    </div>
  );
};

export default Roadmap;
