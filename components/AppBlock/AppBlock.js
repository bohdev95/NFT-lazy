import React, { useState } from "react";
import styles from "@/styles/App.module.scss";
import { text } from "@/consts/text";
import Carousel from "../Carousel/Carousel";
const AppBlock = () => {
  const caroselImages = [
    "Lzr-App-1",
    "Lzr-App-2",
    "Lzr-App-3",
    "Lzr-App-4",
    "Lzr-App-5",
  ];
  const speed = 0;
  const [nextImage, setNextImage] = useState(null);
  const caroulselSequentor = (s) => {};
  const getImagePathByName = (name) => `/apppreview/${name}.png`;

  return (
    <div className={styles.appContainer}>
      <div className={styles.appWrapper}>
        <div className="title">
          <h2>{text.en.app.heading.h2}</h2>
          <h1>{text.en.app.heading.h1}</h1>
        </div>
        <div className={styles.infoWrapper}>
          <div className="activity">
            <h3>{text.en.app.activity.title}</h3>
            <p>{text.en.app.activity.info}</p>
          </div>
          <div className="carosel">
            <div className={styles.phoneWrapper}>
              <div className={styles.phoneDisplay}>
                {caroselImages.map((name, id) => (
                  <img src={getImagePathByName(name)} alt="app" key={id} />
                ))}
              </div>
              <div className={styles.phone}></div>
            </div>
          </div>
          <div className="rewards">
            <h3>{text.en.app.rewards.title}</h3>
            <p>{text.en.app.rewards.info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBlock;
