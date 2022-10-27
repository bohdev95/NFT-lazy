import styles from "@/styles/FAQ.module.scss";
import { useState } from "react";

const FAQ = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      active: true,
    },
    {
      id: 2,
      active: false,
    },
  ]);
  const toggleQuestion = (id) => {
    const newArr = questions;
    newArr[id - 1].active = !newArr[id - 1].active;
    setQuestions([...newArr]);
  };
  return (
    <div className={`full dfc aic jcc ${styles.faq_container}`}>
      <div className={styles.faq_top}>
        <h1 className={styles.decorative}>FAQ</h1>
      </div>
      <div className={styles.faq_bot}>
        <div className={styles.questions_container}>
          <div className={styles.question_wrapper}>
            <div className={styles.title_wrapper}>
              <h1>What&apos;s your mint informations?</h1>
              <div
                className={
                  questions[0].active
                    ? `${[
                        styles.faq_button_wrapper,
                        styles.faq_button_wrapper_active,
                      ].join(" ")}`
                    : `${styles.faq_button_wrapper}`
                }
              >
                <button
                  onClick={() => toggleQuestion(questions[0].id)}
                  className={
                    !questions[0].active
                      ? `${styles.faq_button}`
                      : `${styles.faq_button_active}`
                  }
                ></button>
              </div>
            </div>
            <div
              key={questions[0].id}
              className={
                questions[0].active
                  ? `${styles.faq_answer}`
                  : `${styles.faq_answer_hidden}`
              }
            >
              <div className={styles.text_wrapper}>
                <p>Date: October 11th</p>
                <p>Supply: 777</p>
                <p>Price: Freemint</p>
              </div>
              <div
                className={[styles.text_wrapper, styles.c_padding].join(" ")}
              >
                <p>
                  Roles: Anyone with WL, OG, Freemint, and Airdrop roles will
                  keep the same roles for both collections.
                </p>
              </div>
              <div className={styles.text_wrapper}>
                <p>
                  Key points: Holder from The Original Collection will be
                  Freemint for The Lucky Bones Collection and could have access
                  to Lucky Cockpit (our next web3 tool).
                </p>
              </div>
            </div>
          </div>
          <div className={styles.question_wrapper}>
            <div className={styles.title_wrapper}>
              <h1>What&apos;s your mint informations?</h1>
              <div
                className={
                  questions[1].active
                    ? `${[
                        styles.faq_button_wrapper,
                        styles.faq_button_wrapper_active,
                      ].join(" ")}`
                    : `${styles.faq_button_wrapper}`
                }
              >
                <button
                  onClick={() => toggleQuestion(questions[1].id)}
                  className={
                    !questions[1].active
                      ? `${styles.faq_button}`
                      : `${styles.faq_button_active}`
                  }
                ></button>
              </div>
            </div>
            <div
              key={questions[1].id}
              className={
                questions[1].active
                  ? `${styles.faq_answer}`
                  : `${styles.faq_answer_hidden}`
              }
            >
              <div className={styles.text_wrapper}>
                <p>Date: October 11th</p>
                <p>Supply: 777</p>
                <p>Price: Freemint</p>
              </div>
              <div
                className={[styles.text_wrapper, styles.c_padding].join(" ")}
              >
                <p>
                  Roles: Anyone with WL, OG, Freemint, and Airdrop roles will
                  keep the same roles for both collections.
                </p>
              </div>
              <div className={styles.text_wrapper}>
                <p>
                  Key points: Holder from The Original Collection will be
                  Freemint for The Lucky Bones Collection and could have access
                  to Lucky Cockpit (our next web3 tool).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
