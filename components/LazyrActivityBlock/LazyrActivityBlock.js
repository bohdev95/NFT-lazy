import styles from "@/styles/LazyrActivity.module.scss";
import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
// import { Carousel } from "react-responsive-carousel";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import { text } from "@/consts/text";

gsap.registerPlugin(ScrollTrigger);

const LazyrActivityBlock = () => {
  const images = [
    "/activity/Lazy-Rev-1.png",
    "/activity/Lazy-Rev-2.png",
    "/activity/Lazy-Rev-3.png",
    "/activity/Lazy-Rev-4.png",
    "/activity/Lazy-Rev-5.png",
  ];
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
  const containerRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
      },
    });
  });
  const weAre = [
    ...text.en.activity.heading.h2.split(" "),
    ...text.en.activity.heading.h1.split(" "),
  ];
  console.log(weAre);
  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.gradiend}></div>
      <div className={styles.title}>
        <div className={styles.rotationDiv}>
          {weAre.map((word, id) => (
            <div key={id}>{word}</div>
          ))}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.join}>
          <h2>{text.en.activity.join.title}</h2>
          <p>{text.en.activity.join.info}</p>
        </div>
        <div className={styles.wrapper}>
          <Swiper
            spaceBetween={1}
            centeredSlides={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            loop={true}
            autoHeight={true}
            modules={[Autoplay, Pagination]}
            className={styles.swiper}
          >
            <SwiperSlide>
              <img src={images[0]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images[1]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images[2]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images[3]} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images[4]} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.together}>
          <h2>{text.en.activity.together.title}</h2>
          <p>{text.en.activity.together.info}</p>
        </div>
      </div>
    </div>
  );
};

export default LazyrActivityBlock;
