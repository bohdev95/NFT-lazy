import { useEffect, useRef, useState } from "react";
import styles from "@/styles/Footer.module.scss";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useProgress } from "@/hooks/useProgress";
import TimelineArrow from "../TimelineArrow/TimelineArrow";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPageEnd, setIsPageEnd] = useState(false);

  const linksRef = useRef(null);

  const closeFooter = () => setIsOpen(false);
  const openFooter = (condition) => {
    if (condition) {
      setIsOpen(true);
    } else return;
  };

  useClickOutside(linksRef, () => closeFooter());

  const { progress } = useProgress();

  const [buttons, setButtons] = useState([
    {
      title: "English",
      isActive: true,
    },
    {
      title: "한국어",
      isActive: false,
    },
    {
      title: "日本語",
      isActive: false,
    },
  ]);

  useEffect(() => {
    const TL = +progress.toFixed();
    // if (!isPageEnd && progress > 980) {
    //   setIsPageEnd(true);
    // } else if (isPageEnd && progress < 980) {
    //   setIsPageEnd(false);
    // } else if (isPageEnd && progress > 999) {
    //   openFooter(isPageEnd);
    // } else if (isPageEnd && progress < 1000 && isOpen) {
    //   closeFooter();
    // }
    if (!isPageEnd && TL > 980) {
      setIsPageEnd(true);
    } else if (isPageEnd && TL < 980) {
      setIsPageEnd(false);
    } else if (isPageEnd && TL > 999) {
      openFooter(isPageEnd);
    } else if (isPageEnd && TL < 1000 && isOpen) {
      closeFooter();
    }
  }, [progress]);

  return (
    <>
      <div
        className={
          isOpen ? styles.fade : [styles.fade, styles.fade_invisible].join(" ")
        }
      ></div>
      <div
        className={styles.hiddenButton}
        onClick={() => openFooter(isPageEnd)}
      >
        <TimelineArrow />
      </div>
      <div
        className={
          isOpen
            ? styles.container
            : [styles.container, styles.hidden].join(" ")
        }
      >
        <div className={styles.headContainer}>
          <img src="/Footer.svg" alt="" />
          <div ref={linksRef} className={styles.links}>
            <div className={styles.languages}>
              {buttons.map(({ title, isActive }) => (
                <button
                  key={title}
                  className={isActive ? styles.btnActive : null}
                >
                  {title}
                </button>
              ))}
            </div>
            <div className={styles.icons}>
              <img src="/icons/twitter.svg" alt="twitter" />
              <img src="/icons/discord.svg" alt="discord" />
              <img src="/icons/instagram.svg" alt="instagram" />
              <img src="/icons/opensea.svg" alt="opensea" />
              <img src="/icons/etherscan.svg" alt="etherscan" />
            </div>
            <div className={styles.policy}>
              <li>Terms & Conditions</li>
              <li>Policy & Ethos</li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
