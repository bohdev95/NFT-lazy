import { text } from "@/consts/text";
import styles from "@/styles/Team.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import { team } from "./team";

const TeamBlock = () => {
  const hashtagsGenerator = (num) => {
    const res = [];
    for (let i = 0; i < num; i++) {
      res = [...res, ...text.en.team.hashtags];
    }
    return res;
  };

  const hashtags = hashtagsGenerator(5);

  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h1>{text.en.team.heading.h1}</h1>
      </div>
      <div className={styles.cardsWrapper}>
        {/*  */}
        <div className={styles.cardsContainer1}>
          {team.map(({ id, role, img, title, twitter_link }) => (
            <div className={styles.card} key={id}>
              <img src={`/team/${img}.png`} alt="sloth" />
              <div className={styles.cardInfo}>
                <h3>{title}</h3>
                <div className={styles.cardSocial}>
                  <div className={styles.humanPost}>
                    <p>{role}</p>
                  </div>
                  <div className={styles.humanSocials}>
                    <a
                      href={`https:/twitter.com/${twitter_link}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="/icons/twitter_dark.svg" alt="twitter" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.cardsContainer2}>
          {team.map(({ id, role, img, title, twitter_link }) => (
            <div className={styles.card} key={id}>
              <img src={`/team/${img}.png`} alt="sloth" />
              <div className={styles.cardInfo}>
                <h3>{title}</h3>
                <div className={styles.cardSocial}>
                  <div className={styles.humanPost}>
                    <p>{role}</p>
                  </div>
                  <div className={styles.humanSocials}>
                    <a
                      href={`https:/twitter.com/${twitter_link}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src="/icons/twitter_dark.svg" alt="twitter" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/*  */}
      </div>
      <div className={styles.hashtagsWrapper}>
        <span className={styles.hashtagsP1}>
          {hashtags.map((tag, id) => (
            <p key={id}>{tag}</p>
          ))}
        </span>
        <span className={styles.hashtagsP2}>
          {hashtags.map((tag, id) => (
            <p key={id}>{tag}</p>
          ))}
        </span>
      </div>
    </div>
  );
};

export default TeamBlock;
